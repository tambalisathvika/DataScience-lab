import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode } from 'lucide-react';

export default function CodeBlock({ code, language = 'python', filename = 'solution.py' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const lines = (code || '').split('\n');

  // Simple, elegant syntax highlight tokenizer for Python
  const highlightLine = (line) => {
    if (!line.trim()) return <span>&nbsp;</span>;

    // Comment
    if (line.trim().startsWith('#')) {
      return <span style={{ color: '#64748b', fontStyle: 'italic' }}>{line}</span>;
    }

    // Split keeping tokens
    const parts = line.split(/(\s+|[(),=:[\]{}"']|#[^'"]*$)/);
    const keywords = ['import', 'from', 'as', 'def', 'class', 'return', 'for', 'in', 'if', 'else', 'elif', 'while', 'try', 'except', 'with', 'True', 'False', 'None', 'print'];

    return parts.map((part, idx) => {
      if (part.startsWith('#')) {
        return <span key={idx} style={{ color: '#64748b', fontStyle: 'italic' }}>{part}</span>;
      }
      if (keywords.includes(part)) {
        return <span key={idx} style={{ color: '#38bdf8', fontWeight: 600 }}>{part}</span>;
      }
      if (/^["'].*["']$/.test(part)) {
        return <span key={idx} style={{ color: '#4ade80' }}>{part}</span>;
      }
      if (/^\d+(\.\d+)?$/.test(part)) {
        return <span key={idx} style={{ color: '#fb923c' }}>{part}</span>;
      }
      if (['pd', 'Series', 'DataFrame', 'DatetimeIndex', 'datetime'].includes(part)) {
        return <span key={idx} style={{ color: '#f43f5e', fontWeight: 600 }}>{part}</span>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="pro-code-card">
      <div className="pro-code-header">
        <div className="pro-code-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <div className="pro-code-tab">
            <FileCode size={14} style={{ color: '#38bdf8' }} />
            <span>{filename}</span>
          </div>
        </div>

        <button className="pro-code-copy-btn" onClick={handleCopy} title="Copy Code">
          {copied ? (
            <>
              <Check size={14} style={{ color: '#10b981' }} />
              <span style={{ color: '#10b981' }}>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy code</span>
            </>
          )}
        </button>
      </div>

      <div className="pro-code-body">
        <div className="pro-line-numbers">
          {lines.map((_, i) => (
            <div key={i} className="line-num">{i + 1}</div>
          ))}
        </div>
        <pre className="pro-code-content">
          <code>
            {lines.map((line, idx) => (
              <div key={idx} className="code-line">
                {highlightLine(line)}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
