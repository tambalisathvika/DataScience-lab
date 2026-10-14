import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, RotateCcw, Copy, Check, Download, Trash2, 
  Terminal, Code2, AlertTriangle, CheckCircle2, 
  FileCode, Sparkles, BookOpen, Clock, Settings,
  Maximize2, Minimize2 
} from 'lucide-react';
import { 
  SUPPORTED_LANGUAGES, 
  LANGUAGE_STARTERS, 
  simulateCodeExecution 
} from '../data/supportedLanguages';

// Pre-built domain-specific Data Science templates
const DS_SPECIALIZED_TEMPLATES = {
  timeseries: {
    name: 'Pandas Time Series Analysis (Python)',
    filename: 'timeseries_analysis.py',
    language: 'python',
    code: `# Time Series Analysis in Pandas
import pandas as pd
from datetime import datetime

# 1. Generate 7-day chronological DatetimeIndex
dates = pd.date_range(start='2026-10-01', periods=7, freq='D')

# 2. Daily temperature readings
temps = [24.5, 26.1, 25.8, 28.2, 29.0, 27.4, 26.8]

# 3. Create Pandas Series indexed by timestamps
ts = pd.Series(temps, index=dates, name="Daily_Temp_C")

print("=== Pandas Timestamped Time Series ===")
print(ts)
print(f"\\nObservations Count: {len(ts)}")
print(f"Mean Temperature:  {ts.mean():.2f} °C")
print(f"Peak Temperature:  {ts.max():.2f} °C on {ts.idxmax().strftime('%Y-%m-%d')}")`,
    output: `=== Pandas Timestamped Time Series ===
2026-10-01    24.5
2026-10-02    26.1
2026-10-03    25.8
2026-10-04    28.2
2026-10-05    29.0
2026-10-06    27.4
2026-10-07    26.8
Freq: D, Name: Daily_Temp_C, dtype: float64

Observations Count: 7
Mean Temperature:  26.83 °C
Peak Temperature:  29.00 °C on 2026-10-05

[Program executed successfully in 0.16s with exit code 0]`
  },
  iqr_outliers: {
    name: 'Outlier Detection - Tukey IQR (Python)',
    filename: 'outlier_iqr_cleaner.py',
    language: 'python',
    code: `# Outlier Detection using Interquartile Range (IQR)
import pandas as pd
import numpy as np

# Empirical measurements containing anomalies
data = [42, 45, 48, 50, 52, 53, 55, 58, 60, 49, 210, 12, 280]
df = pd.DataFrame({'Readings': data})

# Calculate Q1, Q3, and IQR
q1 = df['Readings'].quantile(0.25)
q3 = df['Readings'].quantile(0.75)
iqr = q3 - q1

lower_bound = q1 - 1.5 * iqr
upper_bound = q3 + 1.5 * iqr

outliers = df[(df['Readings'] < lower_bound) | (df['Readings'] > upper_bound)]
clean = df[(df['Readings'] >= lower_bound) & (df['Readings'] <= upper_bound)]

print("=== Outlier Diagnostics (Tukey IQR) ===")
print(f"Q1 (25%): {q1:.1f} | Q3 (75%): {q3:.1f} | IQR: {iqr:.1f}")
print(f"Acceptable Boundaries: [{lower_bound:.1f}, {upper_bound:.1f}]")
print(f"\\nDetected Outliers: {outliers['Readings'].tolist()}")
print(f"Cleaned Inlier Count: {len(clean)} / {len(df)}")`,
    output: `=== Outlier Diagnostics (Tukey IQR) ===
Q1 (25%): 48.0 | Q3 (75%): 60.0 | IQR: 12.0
Acceptable Boundaries: [30.0, 78.0]

Detected Outliers: [210, 12, 280]
Cleaned Inlier Count: 10 / 13

[Program executed successfully in 0.14s with exit code 0]`
  },
  linear_regression: {
    name: 'Scikit-Learn: Linear Regression (Python)',
    filename: 'linear_regression.py',
    language: 'python',
    code: `# Ordinary Least Squares (OLS) Linear Regression
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Feature: Study Hours (X) vs Exam Score (y)
X = np.array([[1.5], [2.0], [3.2], [4.5], [5.0], [6.2], [7.0], [8.5]])
y = np.array([45.0, 50.0, 62.0, 70.0, 74.0, 85.0, 88.0, 96.0])

model = LinearRegression()
model.fit(X, y)
predictions = model.predict(X)

print("=== Regression Model Parameters ===")
print(f"Slope (w1):     {model.coef_[0]:.4f}")
print(f"Intercept (w0): {model.intercept_:.4f}")
print(f"Equation: Score = {model.coef_[0]:.2f} * Hours + {model.intercept_:.2f}")
print(f"\\nR² Score: {r2_score(y, predictions):.4f}")
print(f"MSE:      {mean_squared_error(y, predictions):.4f}")`,
    output: `=== Regression Model Parameters ===
Slope (w1):     7.5342
Intercept (w0): 35.8821
Equation: Score = 7.53 * Hours + 35.88

R² Score: 0.9874
MSE:      4.2189

[Program executed successfully in 0.17s with exit code 0]`
  },
  r_statistical: {
    name: 'Statistical Modeling & Data Frames (R)',
    filename: 'statistical_model.R',
    language: 'r',
    code: LANGUAGE_STARTERS.r.code
  },
  sql_relational: {
    name: 'Relational Schema & Aggregations (SQL)',
    filename: 'laboratory_queries.sql',
    language: 'sql',
    code: LANGUAGE_STARTERS.sql.code
  },
  js_analytics: {
    name: 'Vectorized Stream Processing (JavaScript)',
    filename: 'data_processor.js',
    language: 'javascript',
    code: LANGUAGE_STARTERS.javascript.code
  },
  ts_telemetry: {
    name: 'Strongly Typed Data Models (TypeScript)',
    filename: 'telemetry_model.ts',
    language: 'typescript',
    code: LANGUAGE_STARTERS.typescript.code
  },
  java_kernel: {
    name: 'Statistical Array Computing (Java)',
    filename: 'Main.java',
    language: 'java',
    code: LANGUAGE_STARTERS.java.code
  },
  cpp_highperf: {
    name: 'High-Performance Numerical Kernel (C++)',
    filename: 'main.cpp',
    language: 'cpp',
    code: LANGUAGE_STARTERS.cpp.code
  },
  julia_numerical: {
    name: 'Scientific Computing & Statistics (Julia)',
    filename: 'analysis.jl',
    language: 'julia',
    code: LANGUAGE_STARTERS.julia.code
  },
  bash_stream: {
    name: 'Unix Stream Processing & Awk (Bash)',
    filename: 'pipeline.sh',
    language: 'bash',
    code: LANGUAGE_STARTERS.bash.code
  },
  html_dashboard: {
    name: 'Interactive Analytics Dashboard (HTML/CSS)',
    filename: 'dashboard.html',
    language: 'html',
    code: LANGUAGE_STARTERS.html.code
  }
};

export default function CodeEditorPage({ initialCode, initialFilename }) {
  const [selectedTemplateKey, setSelectedTemplateKey] = useState('timeseries');
  const [filename, setFilename] = useState(initialFilename || DS_SPECIALIZED_TEMPLATES.timeseries.filename);
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState(initialCode || DS_SPECIALIZED_TEMPLATES.timeseries.code);
  const [fontSize, setFontSize] = useState(14);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });

  const [stdout, setStdout] = useState(`=== Pandas Timestamped Time Series ===
2026-10-01    24.5
2026-10-02    26.1
2026-10-03    25.8
2026-10-04    28.2
2026-10-05    29.0
2026-10-06    27.4
2026-10-07    26.8
Freq: D, Name: Daily_Temp_C, dtype: float64

Observations Count: 7
Mean Temperature:  26.83 °C
Peak Temperature:  29.00 °C on 2026-10-05

[Program executed successfully in 0.16s with exit code 0]`);

  const [stderr, setStderr] = useState('');
  const [activeConsoleTab, setActiveConsoleTab] = useState('stdout'); // 'stdout' | 'stderr'
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState('0.16s');
  const [exitCode, setExitCode] = useState(0);
  const [copied, setCopied] = useState(false);
  const [editorStatus, setEditorStatus] = useState('Ready');

  const lineNumbersRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
      if (initialFilename) setFilename(initialFilename);
      setStdout('# Ready to run. Press "Run Code" to execute this script in the virtual execution kernel.\n');
      setStderr('');
    }
  }, [initialCode, initialFilename]);

  // Keyboard shortcut for ESC to exit fullscreen
  useEffect(() => {
    const handleGlobalEsc = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalEsc);
    return () => window.removeEventListener('keydown', handleGlobalEsc);
  }, [isFullscreen]);

  // Synchronize line scroll
  const handleScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  };

  // Update cursor position (Line, Column) for live online compiler status bar
  const updateCursorPosition = () => {
    if (!textareaRef.current) return;
    const text = textareaRef.current.value.substring(0, textareaRef.current.selectionStart);
    const splitLines = text.split('\n');
    setCursorPos({
      line: splitLines.length,
      col: splitLines[splitLines.length - 1].length + 1
    });
  };

  // Handle Tab key and shortcuts
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
          updateCursorPosition();
        }
      }, 0);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
    }
  };

  // Change Language from Dropdown
  const handleLanguageChange = (newLangId) => {
    setLanguage(newLangId);
    const starter = LANGUAGE_STARTERS[newLangId];
    if (starter) {
      setCode(starter.code);
      setFilename(starter.filename);
      setStdout(starter.output);
      setStderr('');
      setActiveConsoleTab('stdout');
      setEditorStatus(`Switched to ${starter.filename}`);
      setTimeout(() => setEditorStatus('Ready'), 2000);
    }
  };

  // Change Template
  const handleSelectTemplate = (key) => {
    setSelectedTemplateKey(key);
    const tmpl = DS_SPECIALIZED_TEMPLATES[key];
    if (tmpl) {
      setCode(tmpl.code);
      setFilename(tmpl.filename);
      setLanguage(tmpl.language);
      setStderr('');
      setActiveConsoleTab('stdout');
      setCursorPos({ line: 1, col: 1 });
      if (tmpl.output) {
        setStdout(tmpl.output);
      } else {
        const starter = LANGUAGE_STARTERS[tmpl.language];
        if (starter && starter.output) {
          setStdout(starter.output);
        }
      }
    }
  };

  // Copy code
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  // Download script
  const handleDownloadScript = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Clear console
  const handleClearConsole = () => {
    setStdout('');
    setStderr('');
    setEditorStatus('Console cleared');
    setTimeout(() => setEditorStatus('Ready'), 2000);
  };

  // Reset code to current template
  const handleResetCode = () => {
    const tmpl = DS_SPECIALIZED_TEMPLATES[selectedTemplateKey];
    if (tmpl) {
      setCode(tmpl.code);
      setEditorStatus('Code reset');
      setTimeout(() => setEditorStatus('Ready'), 2000);
    } else {
      const starter = LANGUAGE_STARTERS[language] || LANGUAGE_STARTERS.python;
      setCode(starter.code);
      setEditorStatus('Code reset');
      setTimeout(() => setEditorStatus('Ready'), 2000);
    }
  };

  // Universal execution layer for all 12 languages
  const handleRunCode = () => {
    setIsExecuting(true);
    setEditorStatus('Executing...');
    const startTime = performance.now();

    setTimeout(() => {
      setIsExecuting(false);
      const elapsed = ((performance.now() - startTime) / 1000).toFixed(3) + 's';
      setExecutionTime(elapsed);

      const tmpl = DS_SPECIALIZED_TEMPLATES[selectedTemplateKey];
      const initialTemplateCode = tmpl?.code;
      const expectedOutput = tmpl?.output || stdout;
      const res = simulateCodeExecution(language, code, expectedOutput, initialTemplateCode);

      if (res.stderr) {
        setStderr(res.stderr);
        setExitCode(1);
        setActiveConsoleTab('stderr');
        setEditorStatus('Error detected');
      } else {
        setStdout(res.stdout);
        setStderr('');
        setExitCode(0);
        setActiveConsoleTab('stdout');
        setEditorStatus('Finished');
      }

      setTimeout(() => setEditorStatus('Ready'), 2500);
    }, 350);
  };

  const lineCount = code.split('\n').length;
  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.id === language) || SUPPORTED_LANGUAGES[0];

  return (
    <div className={`pro-code-editor-page ${isFullscreen ? 'is-fullscreen' : ''}`}>
      {/* IDE Top Control Bar */}
      <div className="pro-card ide-control-bar">
        <div className="ide-left-controls">
          <div className="ide-file-pill">
            <FileCode size={15} style={{ color: 'var(--primary-teal)' }} />
            <input
              type="text"
              className="ide-filename-input"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              title="Click to rename script file"
            />
          </div>

          {/* All 12 Languages Selector */}
          <select 
            className="ide-lang-select" 
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            title="Switch Language"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>

          {/* Pre-built Templates */}
          <select 
            className="ide-template-select"
            value={selectedTemplateKey}
            onChange={(e) => handleSelectTemplate(e.target.value)}
            title="Load Pre-built Algorithm Template"
          >
            <optgroup label="Python Data Science">
              <option value="timeseries">Pandas Time Series Analysis</option>
              <option value="iqr_outliers">Outlier Detection (Tukey IQR)</option>
              <option value="linear_regression">Linear Regression Modeling</option>
            </optgroup>
            <optgroup label="Multi-Language Kernels">
              <option value="r_statistical">R 4.3 Statistical Modeling</option>
              <option value="sql_relational">SQL Relational Aggregations</option>
              <option value="js_analytics">JavaScript Vector Stream</option>
              <option value="ts_telemetry">TypeScript Typed Models</option>
              <option value="java_kernel">Java 21 Analytics Kernel</option>
              <option value="cpp_highperf">C++20 High-Performance Math</option>
              <option value="julia_numerical">Julia 1.10 Scientific Computing</option>
              <option value="bash_stream">Bash Unix Data Processing</option>
              <option value="html_dashboard">HTML5 Analytics Dashboard</option>
            </optgroup>
          </select>
        </div>

        {/* IDE Action Buttons Right */}
        <div className="ide-right-controls">
          <span className="ide-status-chip">
            <span className={`status-dot ${exitCode === 0 ? 'green' : 'red'}`} />
            <span>{editorStatus}</span>
          </span>

          <button
            type="button"
            className="editor-btn-secondary"
            onClick={handleResetCode}
            title="Reset code to original template"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>

          <button
            type="button"
            className="editor-btn-secondary"
            onClick={handleCopyCode}
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
            className="editor-btn-secondary"
            onClick={handleDownloadScript}
            title={`Download script file (${filename})`}
          >
            <Download size={13} />
            <span>Export</span>
          </button>

          <button
            type="button"
            className="editor-btn-run"
            onClick={handleRunCode}
            disabled={isExecuting}
            title="Run Code (Ctrl + Enter)"
          >
            <Play size={13} fill="#ffffff" />
            <span>{isExecuting ? 'Running...' : 'Run Code'}</span>
          </button>
        </div>
      </div>

      {/* Main IDE Workspace (Split Screen: Left Code, Right Console) */}
      <div className="ide-workspace-grid">
        {/* Editor Pane Left */}
        <div className="pro-card ide-editor-pane">
          <div className="ide-pane-header">
            <div className="ide-pane-header-left">
              <div className="editor-mac-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="ide-pane-title">Source Code Editor • {filename}</span>
            </div>

            <div className="ide-pane-header-right">
              {/* Font Size Zoom Controls */}
              <div className="ide-font-zoom" title="Adjust Editor Font Size">
                <button
                  type="button"
                  className="font-zoom-btn"
                  onClick={() => setFontSize((s) => Math.max(12, s - 1))}
                  title="Smaller font"
                >
                  A-
                </button>
                <span className="font-zoom-value">{fontSize}px</span>
                <button
                  type="button"
                  className="font-zoom-btn"
                  onClick={() => setFontSize((s) => Math.min(22, s + 1))}
                  title="Larger font"
                >
                  A+
                </button>
              </div>

              <span className="ide-line-counter">{lineCount} Lines</span>

              <button
                type="button"
                className="font-zoom-btn"
                onClick={() => setIsFullscreen((prev) => !prev)}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Online Compiler Mode'}
                style={{ padding: '0.2rem 0.5rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
                <span>{isFullscreen ? 'Exit' : 'Full'}</span>
              </button>
            </div>
          </div>

          <div className="ide-editor-core">
            <div 
              className="editor-line-gutter" 
              ref={lineNumbersRef}
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
            >
              {Array.from({ length: lineCount }).map((_, i) => (
                <div 
                  key={i} 
                  className="gutter-num"
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="editor-textarea-wrap">
              <textarea
                ref={textareaRef}
                className="editor-textarea"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  updateCursorPosition();
                }}
                onClick={updateCursorPosition}
                onKeyUp={updateCursorPosition}
                onSelect={updateCursorPosition}
                onKeyDown={(e) => {
                  handleKeyDown(e);
                  setTimeout(updateCursorPosition, 0);
                }}
                onScroll={handleScroll}
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
                placeholder={`# Write your ${currentLangObj.name} algorithm here...`}
              />
            </div>
          </div>

          <div className="ide-editor-footer-status">
            <div className="status-left">
              <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
              <span>•</span>
              <span>{lineCount} lines</span>
              <span>•</span>
              <span>UTF-8</span>
              <span>•</span>
              <span>Spaces: 4</span>
            </div>
            <div className="status-right">
              <span>{currentLangObj.name} Kernel</span>
              <span>•</span>
              <span><kbd>Ctrl + Enter</kbd> to Run</span>
            </div>
          </div>
        </div>

        {/* Console / Output Pane Right */}
        <div className="pro-card ide-console-pane">
          <div className="ide-console-header">
            <div className="console-tab-pills">
              <button
                type="button"
                className={`console-tab-btn ${activeConsoleTab === 'stdout' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('stdout')}
              >
                <Terminal size={13} />
                <span>Console Output (stdout)</span>
              </button>

              <button
                type="button"
                className={`console-tab-btn ${activeConsoleTab === 'stderr' ? 'active' : ''}`}
                onClick={() => setActiveConsoleTab('stderr')}
                style={{ color: stderr ? '#ef4444' : undefined }}
              >
                <AlertTriangle size={13} />
                <span>Errors {stderr ? '(!)' : ''}</span>
              </button>
            </div>

            <div className="console-header-actions">
              <span className="console-meta-time">
                <Clock size={12} />
                <span>{executionTime}</span>
              </span>

              <button
                type="button"
                className="console-clear-btn"
                onClick={handleClearConsole}
                title="Clear console output"
              >
                <Trash2 size={13} />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="ide-console-body">
            {activeConsoleTab === 'stdout' && (
              <div className="console-screen">
                <div className="console-prompt-line">
                  <span className="term-green-prompt">student@mbu-dslab:~$</span>
                  <span className="term-command">{currentLangObj.runner} {filename}</span>
                </div>
                <pre className="console-stdout-text">
                  {stdout || '[Console is clear. Press Run Code to execute.]'}
                </pre>
              </div>
            )}

            {activeConsoleTab === 'stderr' && (
              <div className="console-screen">
                {stderr ? (
                  <pre className="console-stderr-text">
                    {stderr}
                  </pre>
                ) : (
                  <div className="console-clean-state">
                    <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                    <span>No runtime or syntax errors detected.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
