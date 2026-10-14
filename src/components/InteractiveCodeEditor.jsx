import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, RotateCcw, Copy, Check, Terminal, FileCode, 
  ExternalLink, CheckCircle2, AlertTriangle, Sparkles 
} from 'lucide-react';
import { 
  SUPPORTED_LANGUAGES, 
  LANGUAGE_STARTERS, 
  simulateCodeExecution 
} from '../data/supportedLanguages';

export default function InteractiveCodeEditor({ 
  initialCode, 
  defaultOutput = '', 
  language = 'python', 
  filename,
  onOpenInEditor
}) {
  const [selectedLang, setSelectedLang] = useState(language || 'python');
  const [code, setCode] = useState(initialCode || LANGUAGE_STARTERS.python.code);
  const [output, setOutput] = useState(defaultOutput || LANGUAGE_STARTERS.python.output);
  const [currentFilename, setCurrentFilename] = useState(filename || 'solution.py');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');
  const [activeTab, setActiveTab] = useState('stdout'); // stdout | stderr
  const [stderr, setStderr] = useState('');

  const lineNumbersRef = useRef(null);
  const textareaRef = useRef(null);

  // Sync initialCode & filename changes when props change
  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
    if (defaultOutput) {
      setOutput(defaultOutput);
    }
    if (filename) {
      setCurrentFilename(filename);
    }
  }, [initialCode, defaultOutput, filename]);

  // Handle language change
  const handleLanguageChange = (newLangId) => {
    setSelectedLang(newLangId);
    const starter = LANGUAGE_STARTERS[newLangId];
    if (starter) {
      // If user is switching away from the initial code, prompt or switch to the starter
      setCode(starter.code);
      setOutput(starter.output);
      setStderr('');
      setCurrentFilename(starter.filename);
      setStatusMsg(`Switched to ${starter.filename}`);
      setTimeout(() => setStatusMsg(''), 2000);
    }
  };

  const lines = code.split('\n');

  // Handle Tab key inside editor & Ctrl+Enter to run
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
    if (initialCode && selectedLang === (language || 'python')) {
      setCode(initialCode);
      setOutput(defaultOutput || '');
      setCurrentFilename(filename || 'solution.py');
    } else {
      const starter = LANGUAGE_STARTERS[selectedLang] || LANGUAGE_STARTERS.python;
      setCode(starter.code);
      setOutput(starter.output);
      setCurrentFilename(starter.filename);
    }
    setStderr('');
    setStatusMsg('Code reset to template');
    setTimeout(() => setStatusMsg(''), 2000);
  };

  // Execute / Simulate Code for any selected language
  const handleRunCode = () => {
    setIsRunning(true);
    setStatusMsg(`Compiling & Executing in ${selectedLang}...`);

    setTimeout(() => {
      setIsRunning(false);
      const res = simulateCodeExecution(selectedLang, code, defaultOutput);
      
      if (res.stderr) {
        setStderr(res.stderr);
        setActiveTab('stderr');
        setStatusMsg('Error detected');
      } else {
        setOutput(res.stdout);
        setStderr('');
        setActiveTab('stdout');
        setStatusMsg(`Success (${res.elapsed})`);
      }

      setTimeout(() => setStatusMsg(''), 2500);
    }, 350);
  };

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.id === selectedLang) || SUPPORTED_LANGUAGES[0];

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
            <span>{currentFilename}</span>
          </div>

          {/* All 12 Languages Dropdown */}
          <select
            className="ide-lang-select-compact"
            value={selectedLang}
            onChange={(e) => handleLanguageChange(e.target.value)}
            title="Choose Programming Language"
            aria-label="Language selector"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
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

          {onOpenInEditor && (
            <button
              type="button"
              className="editor-btn-secondary"
              onClick={() => onOpenInEditor(code, currentFilename)}
              title="Launch full-screen Online Compiler"
            >
              <ExternalLink size={13} />
              <span>Full IDE</span>
            </button>
          )}

          <button 
            type="button" 
            className="editor-btn-run" 
            onClick={handleRunCode}
            disabled={isRunning}
            title="Run Code (Ctrl + Enter)"
          >
            <Play size={13} fill="#ffffff" />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Editor Code Body with Line Numbers */}
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
            placeholder={`# Write or edit ${currentLangObj.name} code here...`}
          />
        </div>
      </div>

      {/* Live Output Terminal Bar */}
      <div className="editor-terminal-container">
        <div className="terminal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              type="button"
              className={`console-tab-mini ${activeTab === 'stdout' ? 'active' : ''}`}
              onClick={() => setActiveTab('stdout')}
            >
              <Terminal size={13} />
              <span>Terminal Output (stdout)</span>
            </button>

            {stderr && (
              <button
                type="button"
                className={`console-tab-mini error ${activeTab === 'stderr' ? 'active' : ''}`}
                onClick={() => setActiveTab('stderr')}
              >
                <AlertTriangle size={13} />
                <span>Errors (!)</span>
              </button>
            )}
          </div>
          <span className="term-shortcut-hint">Ctrl + Enter to Run</span>
        </div>

        <div className="terminal-screen">
          <div className="terminal-prompt-line">
            <span className="term-green-prompt">student@mbu-dslab:~$</span>
            <span className="term-command">{currentLangObj.runner} {currentFilename}</span>
          </div>

          {activeTab === 'stdout' ? (
            <pre className="terminal-output-text">
              {output || '[Process exited with 0 output. Click Run Code to execute.]'}
            </pre>
          ) : (
            <pre className="terminal-output-text error" style={{ color: '#f87171' }}>
              {stderr}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
