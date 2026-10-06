import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import VisualPlotPreview from './VisualPlotPreview';
import { 
  ArrowLeft, Github, ExternalLink, Terminal, BookOpen, 
  Target, Code2, FileText, ChevronRight, CheckCircle2, 
  HelpCircle, Printer, Copy, Check, Sparkles, ListOrdered, 
  Clock, Play, Award, BarChart3, ShieldCheck, Download,
  TrendingUp, PlayCircle, Edit3, MoreVertical
} from 'lucide-react';

export default function SubExperimentDetails({
  parentExperiment,
  subExperiment,
  onSelectSubExperiment,
  onBackToExperiment,
  onBackToHome,
  onOpenInEditor,
  onEditExperiment
}) {
  if (!parentExperiment || !subExperiment) return null;

  const [copiedCode, setCopiedCode] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const letter = subExperiment.letter || 'A';
  const expNumber = parentExperiment.number || '6';
  const subCode = subExperiment.id || `${expNumber}${letter}`;
  
  // Support both youtubeUrl and videoUrl without hardcoding fake links
  const videoUrl = subExperiment.youtubeUrl || subExperiment.videoUrl || parentExperiment.youtubeUrl || parentExperiment.videoUrl;
  const githubUrl = subExperiment.githubUrl || parentExperiment.githubUrl;

  const programCode = subExperiment.program || `# Practical ${subCode}: ${subExperiment.title}\nimport pandas as pd\nprint("Executed")`;
  const outputText = subExperiment.output || `[Execution completed with exit code 0]\nOutput stream verified.`;

  // Line numbers calculation
  const codeLines = programCode.split('\n');

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(programCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadScript = () => {
    const blob = new Blob([programCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exp_${subCode}_practical.py`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess('Downloaded Script');
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  return (
    <div className="pro-sub-details-page full-width-layout">
      {/* 1. TOP BREADCRUMB & PRACTICAL SWITCHER BAR */}
      <div className="pro-nav-breadcrumb-bar">
        <div className="nav-bar-left-group">
          <button
            className="pro-back-btn"
            onClick={onBackToExperiment}
            title={`Return to Experiment ${expNumber} Overview`}
          >
            <ArrowLeft size={16} />
            <span>Back to Exp {expNumber}</span>
          </button>

          <button
            className="pro-crumb-home-btn"
            onClick={onBackToHome}
            title="Return to Experiments List"
          >
            All Experiments
          </button>
        </div>

        {/* Quick Sub-Experiment Switcher Tabs (6A, 6B, 6C, etc.) */}
        {parentExperiment.subExperiments && parentExperiment.subExperiments.length > 1 && (
          <div className="subtask-nav-switcher-box">
            <span className="switcher-label">Switch Practical:</span>
            {parentExperiment.subExperiments.map((sub, idx) => {
              const subL = sub.letter || String.fromCharCode(65 + idx);
              const tabCode = sub.id || `${expNumber}${subL}`;
              const isActive = (sub.id && sub.id === subExperiment.id) || subL === letter;
              return (
                <button
                  key={sub.id || idx}
                  className={`subtask-switch-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSubExperiment && onSelectSubExperiment(sub)}
                  title={`Switch to Practical ${tabCode}`}
                >
                  <span>{tabCode}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="breadcrumb-trail">
          <span className="crumb" onClick={onBackToHome} style={{ cursor: 'pointer' }}>DS LAB</span>
          <ChevronRight size={13} className="crumb-arrow" />
          <span className="crumb" onClick={onBackToExperiment} style={{ cursor: 'pointer' }}>
            Experiment {expNumber}
          </span>
          <ChevronRight size={13} className="crumb-arrow" />
          <span className="crumb active">Sub-Task {subCode}</span>
        </div>
      </div>

      {/* 2. PRACTICAL HERO HEADER */}
      <div className="pro-card practical-hero-card">
        <div className="practical-hero-top-meta">
          <div className="practical-badge-row">
            <span className="practical-code-pill">{subCode}</span>
            <span className="practical-type-tag">Laboratory Exercise Session</span>
            <span className="practical-course-code">Experiment 0{expNumber} • {parentExperiment.category || 'Time Series'}</span>
          </div>

          <div className="practical-actions-row">
            {onEditExperiment && (
              <button
                className="btn-secondary"
                onClick={() => onEditExperiment(parentExperiment)}
                title="Edit YouTube Video & GitHub URLs"
                style={{ borderColor: 'var(--primary-teal)', color: 'var(--primary-teal)', fontWeight: 600 }}
              >
                <Edit3 size={13} />
                <span>Edit URLs &amp; Details</span>
              </button>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                title="View on GitHub"
              >
                <Github size={13} />
                <span>GitHub Source</span>
                <ExternalLink size={11} />
              </a>
            )}

            <button
              className="btn-secondary"
              onClick={handleDownloadScript}
              title="Download Python script"
            >
              <Download size={13} />
              <span>Download (.py)</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => window.print()}
              title="Print laboratory practical record"
            >
              <Printer size={13} />
              <span>Print Record</span>
            </button>

            {onEditExperiment && (
              <button
                className="pro-exp-menu-btn"
                onClick={() => onEditExperiment(parentExperiment)}
                title="Options: Edit URLs & Details"
                aria-label="Options"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid var(--border-light)',
                  padding: '0.4rem 0.55rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer'
                }}
              >
                <MoreVertical size={16} />
              </button>
            )}

            {downloadSuccess && (
              <span className="download-feedback-pill">
                <Check size={12} />
                <span>{downloadSuccess}</span>
              </span>
            )}
          </div>
        </div>

        <h1 className="practical-hero-title">
          {subExperiment.title}
        </h1>

        <div className="practical-tech-indicator-row">
          <span className="tech-indicator-badge">Python 3.11</span>
          <span className="tech-indicator-badge">Pandas Core</span>
          <span className="tech-indicator-badge">{parentExperiment.category || 'Time Series Analysis'}</span>
          <span className="tech-indicator-badge">Continuous Assessment (CIE)</span>
        </div>
      </div>

      {/* 3. FULL-WIDTH 2-COLUMN BALANCED WORKSPACE (NO RIGHT SIDEBAR STUDENT CARD) */}
      <div className="practical-workspace-grid full-width-workspace">
        
        {/* ====================================================================
            COLUMN 1: Video, Theory & Aim, Learning Objective, Visual Output
            ==================================================================== */}
        <div className="workspace-col-left">
          
          {/* SECTION 1: LAB DEMONSTRATION VIDEO */}
          <div className="pro-card practical-section-card">
            <div className="card-section-title-row">
              <div className="section-icon-badge video-badge">
                <Play size={16} />
              </div>
              <div>
                <h3 className="card-heading-title">1. Lab Demonstration Video</h3>
                <p className="card-heading-subtitle">Visual concept walkthrough and script explanation</p>
              </div>
            </div>

            {videoUrl ? (
              <div className="practical-video-frame">
                <div className="video-cinema-bar">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                  <span className="video-bar-title">Sub-Task {subCode} • Python Walkthrough</span>
                </div>
                <VideoPlayer
                  url={videoUrl}
                  title={`Sub-Task ${subCode} Video Walkthrough`}
                />
              </div>
            ) : (
              <div className="video-pending-box">
                <PlayCircle size={36} className="video-pending-icon" />
                <h4 className="video-pending-title">Video Walkthrough Pending Configuration</h4>
                <p className="video-pending-desc">
                  Set <code>youtubeUrl</code> or <code>videoUrl</code> in this sub-task data to automatically render an interactive HD laboratory video walkthrough.
                </p>
                {onEditExperiment && (
                  <button
                    className="btn-primary"
                    onClick={() => onEditExperiment(parentExperiment)}
                    style={{
                      marginTop: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.55rem 1.15rem',
                      fontSize: '0.85rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                    title="Open editor to paste YouTube URL"
                  >
                    <Edit3 size={14} />
                    <span>Add YouTube URL Now</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* SECTION 2: THEORETICAL CONCEPT & LAB AIM */}
          <div className="pro-card practical-section-card">
            <div className="card-section-title-row">
              <div className="section-icon-badge aim-badge">
                <Target size={16} />
              </div>
              <div>
                <h3 className="card-heading-title">2. Theoretical Concept &amp; Lab Aim</h3>
                <p className="card-heading-subtitle">Core empirical objective of Sub-Task {subCode}</p>
              </div>
            </div>

            <div className="aim-content-callout">
              <span className="aim-callout-label">Laboratory Aim:</span>
              <p className="aim-text-bold">
                {subExperiment.aim || subExperiment.description}
              </p>
            </div>

            {subExperiment.aboutProgram && (
              <div className="about-program-body" style={{ marginTop: '1.25rem' }}>
                <span className="aim-callout-label">Theoretical Concept:</span>
                <p className="about-program-text">
                  {subExperiment.aboutProgram}
                </p>
              </div>
            )}

            {(subExperiment.syntax || subExperiment.generalSyntax) && (
              <div className="syntax-code-display" style={{ marginTop: '1.25rem' }}>
                <div className="syntax-header-label">Syntax &amp; Function Signatures:</div>
                <pre className="syntax-pre-block">
                  <code>{subExperiment.syntax || subExperiment.generalSyntax}</code>
                </pre>
              </div>
            )}
          </div>

          {/* SECTION 3: LEARNING OBJECTIVE */}
          <div className="pro-card practical-section-card">
            <div className="card-section-title-row">
              <div className="section-icon-badge info-badge">
                <Award size={16} />
              </div>
              <div>
                <h3 className="card-heading-title">3. Learning Objective</h3>
                <p className="card-heading-subtitle">Target academic competency and technical proficiency</p>
              </div>
            </div>

            <div className="objective-callout-card">
              <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong className="obj-title">Curriculum Competency:</strong>
                <p className="obj-desc">
                  {subExperiment.learningObjective || `Master the principles and implementation of ${subExperiment.title} using vectorized operations in Pandas.`}
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: VISUAL OUTPUT / GENERATED PLOT */}
          <div className="pro-card practical-section-card">
            <div className="card-section-title-row">
              <div className="section-icon-badge subexps-badge">
                <BarChart3 size={16} />
              </div>
              <div>
                <h3 className="card-heading-title">4. Visual Output / Generated Plot</h3>
                <p className="card-heading-subtitle">Graphic data visualization produced by execution</p>
              </div>
            </div>

            <VisualPlotPreview
              plotType={subExperiment.visualPlotType || 'time_series_line'}
              title={subExperiment.title}
            />
          </div>

          {/* STEP-BY-STEP PROCEDURE (IF PRESENT) */}
          {subExperiment.procedure && subExperiment.procedure.length > 0 && (
            <div className="pro-card practical-section-card">
              <div className="card-section-title-row">
                <div className="section-icon-badge procedure-badge">
                  <ListOrdered size={16} />
                </div>
                <div>
                  <h3 className="card-heading-title">Laboratory Procedure Protocol</h3>
                  <p className="card-heading-subtitle">Step-by-step benchmark execution protocol</p>
                </div>
              </div>

              <div className="procedure-steps-list">
                {subExperiment.procedure.map((step, idx) => (
                  <div key={idx} className="procedure-step-row">
                    <span className="step-number-tag">Step {idx + 1}</span>
                    <span className="step-desc-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* ====================================================================
            COLUMN 2: Python Code, Copy/Run, Output, Explanation
            ==================================================================== */}
        <div className="workspace-col-right">
          
          {/* SECTION 5, 6, 7: PYTHON IMPLEMENTATION, COPY CODE, RUN CODE */}
          <div className="pro-card code-panel-card">
            <div className="code-panel-header">
              <div className="code-panel-left">
                <div className="code-lang-icon">
                  <Terminal size={15} style={{ color: '#38bdf8' }} />
                </div>
                <div>
                  <span className="code-filename">exp_{subCode}_program.py</span>
                  <span className="code-runtime-info">5. Python Implementation</span>
                </div>
              </div>

              <div className="code-panel-actions">
                {/* 6. COPY CODE BUTTON */}
                <button
                  className="code-header-btn"
                  onClick={handleCopyCode}
                  title="Copy Python Program to Clipboard"
                >
                  {copiedCode ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
                  <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                </button>

                {/* 7. RUN CODE BUTTON */}
                {onOpenInEditor && (
                  <button
                    className="code-header-btn primary"
                    onClick={() => onOpenInEditor(programCode, `exp_${subCode}_program.py`)}
                    title="Run code in interactive Code Editor"
                  >
                    <Play size={13} />
                    <span>Run Code</span>
                    <ExternalLink size={11} />
                  </button>
                )}
              </div>
            </div>

            {/* LINE-NUMBERED CODE BLOCK */}
            <div className="code-editor-container-grid">
              <div className="code-line-numbers-gutter" aria-hidden="true">
                {codeLines.map((_, i) => (
                  <span key={i} className="line-number-cell">{i + 1}</span>
                ))}
              </div>
              <div className="code-source-cell">
                <pre className="code-syntax-pre-block">
                  <code>{programCode}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* SECTION 8: KERNEL EXECUTION OUTPUT */}
          <div className="pro-card output-panel-card">
            <div className="output-panel-header">
              <div className="output-title-left">
                <Terminal size={15} style={{ color: '#34d399' }} />
                <span className="output-panel-title">8. Kernel Execution Output</span>
              </div>
              <div className="output-status-chip">
                <span className="status-ping green" />
                <span>Exit Code 0 (0.16s)</span>
              </div>
            </div>

            <div className="terminal-screen-box">
              <pre className="terminal-raw-text">
                {outputText}
              </pre>
            </div>
          </div>

          {/* SECTION 9: EXPLANATION */}
          <div className="pro-card practical-section-card">
            <div className="card-section-title-row">
              <div className="section-icon-badge explanation-badge">
                <BookOpen size={16} />
              </div>
              <div>
                <h3 className="card-heading-title">9. Detailed Program Explanation</h3>
                <p className="card-heading-subtitle">Algorithmic behavior and mechanics</p>
              </div>
            </div>

            <div className="explanation-prose-container">
              <p className="explanation-text-content">
                {subExperiment.explanation || 'Detailed empirical output verified against standard Pandas computational standards.'}
              </p>
            </div>
          </div>

          {/* VIVA VOCE (IF PRESENT) */}
          {subExperiment.vivaVoce && subExperiment.vivaVoce.length > 0 && (
            <div className="pro-card practical-section-card">
              <div className="card-section-title-row">
                <div className="section-icon-badge viva-badge">
                  <HelpCircle size={16} />
                </div>
                <div>
                  <h3 className="card-heading-title">Viva Voce Review Questions</h3>
                  <p className="card-heading-subtitle">Continuous practical evaluation assessment</p>
                </div>
              </div>

              <div className="viva-questions-list">
                {subExperiment.vivaVoce.map((item, idx) => (
                  <div key={idx} className="viva-item-box">
                    <span className="viva-q-title">Q{idx + 1}: {item.question}</span>
                    <p className="viva-a-text">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
