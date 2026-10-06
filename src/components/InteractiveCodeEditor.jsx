import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Copy, Check, Terminal, FileCode, Sparkles, CheckCircle2 } from 'lucide-react';

export default function InteractiveCodeEditor({ 
  initialCode, 
  defaultOutput = '', 
  language = 'python', 
  filename = 'solution.py' 
}) {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState(defaultOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const lineNumbersRef = useRef(null);
  const textareaRef = useRef(null);

  // Sync initialCode changes
  useEffect(() => {
    setCode(initialCode || '');
    setOutput(defaultOutput || '');
  }, [initialCode, defaultOutput]);

  const lines = code.split('\n');

  // Handle Tab key inside editor
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
    }
  };

  // Synchronize line scroll with textarea
  const handleScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  };

  // Copy code to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  // Reset to original code
  const handleReset = () => {
    setCode(initialCode || '');
    setOutput(defaultOutput || '');
    setStatusMsg('Code reset to default');
    setTimeout(() => setStatusMsg(''), 2000);
  };

  // Execute / Simulate Python code
  const handleRunCode = () => {
    setIsRunning(true);
    setStatusMsg('Executing Python script...');

    setTimeout(() => {
      setIsRunning(false);

      // Check if user has custom print statements or modifications
      const customOutputLines = [];
      const codeLines = code.split('\n');

      // Simple Python execution emulator for common statements
      let foundCustomPrints = false;
      const printRegex = /print\s*\((.*)\)/;

      // Variables dictionary
      const scope = {};

      for (const line of codeLines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('#') || !trimmed) continue;

        // Simple variable assignments (e.g. x = 10, name = "Data")
        const assignMatch = trimmed.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (assignMatch && !trimmed.startsWith('print') && !trimmed.startsWith('if') && !trimmed.startsWith('for')) {
          const varName = assignMatch[1];
          const valExpr = assignMatch[2];
          try {
            // Safe evaluation of simple mathematical expressions or numbers
            if (/^[\d.\s+\-*/()]+$/.test(valExpr)) {
              scope[varName] = Function('"use strict"; return (' + valExpr + ');')();
            } else if (/^['"].*['"]$/.test(valExpr)) {
              scope[varName] = valExpr.slice(1, -1);
            }
          } catch (e) {
            // ignore complex expressions
          }
        }

        // Print statements
        const match = trimmed.match(printRegex);
        if (match) {
          foundCustomPrints = true;
          const arg = match[1].trim();

          // Handle formatted strings f"..." or f'...'
          if (/^f['"](.*)['"]$/.test(arg)) {
            const inner = arg.slice(2, -1);
            const evaluated = inner.replace(/\{([^}]+)\}/g, (m, expr) => {
              if (scope[expr.trim()] !== undefined) return scope[expr.trim()];
              return expr;
            });
            customOutputLines.push(evaluated);
          } else if (/^['"].*['"]$/.test(arg)) {
            // Direct string literal
            customOutputLines.push(arg.slice(1, -1));
          } else if (scope[arg] !== undefined) {
            // Known variable
            customOutputLines.push(String(scope[arg]));
          } else {
            // Fallback for expression
            customOutputLines.push(arg.replace(/['"]/g, ''));
          }
        }
      }

      // If code was essentially unchanged, show full default output
      const cleanInput = code.replace(/\s+/g, '');
      const cleanOriginal = (initialCode || '').replace(/\s+/g, '');

      if (cleanInput === cleanOriginal || !foundCustomPrints) {
        setOutput(defaultOutput || 'Script executed successfully with 0 errors.');
      } else {
        // Output custom execution
        setOutput(
          `--- Custom Python Execution Output ---\n` +
          customOutputLines.join('\n') +
          `\n\n[Execution completed successfully in 0.22s with exit code 0]`
        );
      }

      setStatusMsg('Execution complete');
      setTimeout(() => setStatusMsg(''), 2500);
    }, 400);
  };

  return (
    <div className="pro-interactive-editor-card">
      {/* Editor Top Bar */}
      <div className="editor-top-bar">
        <div className="editor-left-group">
          <div className="editor-mac-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="editor-file-tab">
            <FileCode size={14} style={{ color: 'var(--primary-teal)' }} />
            <span>{filename}</span>
            <span className="file-lang-tag">Python 3.11</span>
          </div>
        </div>

        <div className="editor-actions-group">
          {statusMsg && (
            <span className="editor-status-text">
              <CheckCircle2 size={13} style={{ color: '#10b981' }} />
              {statusMsg}
            </span>
          )}

          <button 
            type="button" 
            className="editor-btn-secondary" 
            onClick={handleReset}
            title="Reset code to original laboratory template"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

          <button 
            type="button" 
            className="editor-btn-secondary" 
            onClick={handleCopy}
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check size={13} style={{ color: '#10b981' }} />
                <span style={{ color: '#10b981' }}>Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>

          <button 
            type="button" 
            className="editor-btn-run" 
            onClick={handleRunCode}
            disabled={isRunning}
            title="Run Python script (Ctrl + Enter)"
          >
            <Play size={13} fill="#ffffff" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Editor Code Area */}
      <div className="editor-code-body">
        <div className="editor-line-gutter" ref={lineNumbersRef}>
          {lines.map((_, i) => (
            <div key={i} className="gutter-num">{i + 1}</div>
          ))}
        </div>

        <div className="editor-textarea-wrap">
          <textarea
            ref={textareaRef}
            className="editor-textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder="# Write or edit Python code here..."
          />
        </div>
      </div>

      {/* Live Output Terminal Bar */}
      <div className="editor-terminal-container">
        <div className="terminal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Terminal size={14} style={{ color: 'var(--primary-teal)' }} />
            <span className="term-bar-title">Interactive Terminal Execution Output</span>
          </div>
          <span className="term-shortcut-hint">Ctrl + Enter to Run</span>
        </div>

        <div className="terminal-screen">
          <div className="terminal-prompt-line">
            <span className="term-green-prompt">student@dslab-box:~$</span>
            <span className="term-command">python3 {filename}</span>
          </div>
          <pre className="terminal-output-text">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}
