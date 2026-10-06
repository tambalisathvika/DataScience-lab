import React, { useState } from 'react';
import { 
  ArrowLeft, Github, ExternalLink, Play, BookOpen, 
  Layers, CheckCircle2, ChevronRight, Code2, Sparkles, 
  FileText, Download, Printer, Copy, Check, Clock, 
  Award, ShieldCheck, Terminal, Wrench, ArrowRight,
  Database, HelpCircle, Youtube, FileCheck, Cpu, Edit3,
  MoreVertical
} from 'lucide-react';

export default function ExperimentDetails({
  experiment,
  student,
  onEditStudent,
  onBack,
  onOpenSubExpModal,
  onOpenSubExpDetails,
  onOpenInEditor,
  onEdit
}) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState('');

  if (!experiment) return null;

  const topicsList = experiment.topics && experiment.topics.length > 0
    ? experiment.topics
    : [experiment.title];

  // Master benchmark code for the experiment (aggregating sub-experiment code or default)
  const masterCode = (experiment.subExperiments && experiment.subExperiments[0]?.program)
    ? experiment.subExperiments.map((s) => `# ==============================================================================
# SUB-EXPERIMENT ${experiment.number}${s.letter || 'A'}: ${s.title.toUpperCase()}
# ==============================================================================
${s.program}`).join('\n\n')
    : `# Experiment ${experiment.number}: ${experiment.title}
import pandas as pd
import numpy as np

print("Running Experiment ${experiment.number} benchmark...")`;

  // Sample master terminal output
  const masterOutput = (experiment.subExperiments && experiment.subExperiments[0]?.output)
    ? experiment.subExperiments.map((s) => `[Sub-Experiment ${experiment.number}${s.letter || 'A'}]
${s.output}`).join('\n\n' + '='.repeat(60) + '\n\n')
    : `[Experiment ${experiment.number} Process Terminated with Code 0]
Executed successfully in 0.18s`;

  const handleCopyMasterCode = async () => {
    try {
      await navigator.clipboard.writeText(masterCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadScript = () => {
    const blob = new Blob([masterCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `experiment_${experiment.number}_master_kernel.py`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotice('Downloaded Python Script');
    setTimeout(() => setDownloadNotice(''), 3000);
  };

  // Structured learning objectives based on topics or sub-experiments
  const learningObjectives = (experiment.topics && experiment.topics.length > 0)
    ? experiment.topics.slice(0, 4).map((t, idx) => ({
        title: `Competency LO-${idx + 1}`,
        desc: t.replace(/^[a-z]\.\s*/i, '')
      }))
    : [
        {
          title: 'Foundational Theory & Mechanics',
          desc: `Understand underlying data structures, vectorized memory models, and computational principles of ${experiment.title}.`
        },
        {
          title: 'Algorithmic Implementation',
          desc: 'Apply high-performance Python and Pandas functions without computationally expensive native loops.'
        },
        {
          title: 'Empirical Output Validation',
          desc: 'Execute real-world test cases, evaluate runtime diagnostics, and verify numerical output consistency.'
        }
      ];

  const videoUrl = experiment.youtubeUrl || experiment.videoUrl;

  return (
    <div className="pro-details-page full-width-layout">
      {/* 1. BREADCRUMB NAVIGATION */}
      <div className="pro-nav-breadcrumb-bar">
        <button 
          className="pro-back-btn" 
          onClick={onBack}
          title="Return to Experiments Overview"
        >
          <ArrowLeft size={16} />
          <span>Back to All Experiments</span>
        </button>

        <div className="breadcrumb-trail">
          <span className="crumb" onClick={onBack} style={{ cursor: 'pointer' }}>DS LAB</span>
          <ChevronRight size={13} className="crumb-arrow" />
          <span className="crumb" onClick={onBack} style={{ cursor: 'pointer' }}>Experiments</span>
          <ChevronRight size={13} className="crumb-arrow" />
          <span className="crumb active">Experiment {experiment.number}</span>
        </div>
      </div>

      {/* 2. EXPERIMENT HERO / HEADER (CLEAN FULL-WIDTH) */}
      <section className="pro-card exp-full-hero-card">
        <div className="exp-hero-top-row">
          <div className="exp-hero-badges-group">
            <span className="exp-pill-num">EXPERIMENT 0{experiment.number}</span>
            <span className="exp-pill-category">{experiment.category || 'Data Science Laboratory'}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="exp-hero-status-tag">
              <CheckCircle2 size={14} style={{ color: '#10b981' }} />
              <span>{experiment.status || 'Curriculum Approved'}</span>
            </div>

            {onEdit && (
              <button
                className="pro-exp-menu-btn"
                onClick={() => onEdit(experiment)}
                title="Options: Edit URLs (YouTube / GitHub) & Experiment Details"
                aria-label="Experiment Options"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid var(--border-light)',
                  padding: '0.35rem 0.6rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--text-primary)'
                }}
              >
                <MoreVertical size={16} />
                <span>Options</span>
              </button>
            )}
          </div>
        </div>

        <h1 className="exp-full-hero-title">
          {experiment.title.toUpperCase()}
        </h1>

        <p className="exp-full-hero-description">
          {experiment.description}
        </p>

        {/* METADATA STRIP */}
        <div className="exp-hero-meta-grid">
          <div className="exp-meta-stat-box">
            <div className="meta-icon-wrapper">
              <Layers size={18} />
            </div>
            <div className="meta-info-text">
              <span className="meta-label">Practicals</span>
              <strong className="meta-value">{experiment.subExperiments?.length || 2} Modules</strong>
            </div>
          </div>

          <div className="exp-meta-stat-box">
            <div className="meta-icon-wrapper">
              <Clock size={18} />
            </div>
            <div className="meta-info-text">
              <span className="meta-label">Estimated Time</span>
              <strong className="meta-value">{experiment.estimatedTime || '3 Hours'}</strong>
            </div>
          </div>

          <div className="exp-meta-stat-box">
            <div className="meta-icon-wrapper">
              <Terminal size={18} />
            </div>
            <div className="meta-info-text">
              <span className="meta-label">Runtime</span>
              <strong className="meta-value">Python 3.11 • Pandas</strong>
            </div>
          </div>

          <div className="exp-meta-stat-box">
            <div className="meta-icon-wrapper">
              <Award size={18} />
            </div>
            <div className="meta-info-text">
              <span className="meta-label">Evaluation</span>
              <strong className="meta-value">Continuous Practical (CIE)</strong>
            </div>
          </div>
        </div>

        {/* HERO ACTION BUTTONS */}
        <div className="exp-full-actions-row">
          {experiment.subExperiments && experiment.subExperiments.length > 0 && (
            <button
              className="btn-primary-large"
              onClick={() => onOpenSubExpDetails(experiment.subExperiments[0])}
              title="Launch the first laboratory practical"
            >
              <Play size={16} />
              <span>Launch Practical {experiment.number}A</span>
            </button>
          )}

          {onEdit && (
            <button
              className="btn-secondary-large"
              onClick={() => onEdit(experiment)}
              title="Edit Experiment Details, YouTube Video, and GitHub URLs"
            >
              <Edit3 size={16} style={{ color: 'var(--primary-teal)' }} />
              <span>Edit URLs &amp; Details</span>
            </button>
          )}

          <button
            className="btn-secondary-large"
            onClick={handleDownloadScript}
            title="Download complete experimental Python kernel"
          >
            <Download size={16} />
            <span>Download Python Script</span>
          </button>

          <button
            className="btn-secondary-large"
            onClick={() => window.print()}
            title="Print official laboratory experiment record"
          >
            <Printer size={16} />
            <span>Print Record</span>
          </button>

          {downloadNotice && (
            <span className="download-feedback-pill">
              <Check size={14} />
              <span>{downloadNotice}</span>
            </span>
          )}
        </div>
      </section>

      {/* 3. SUB-EXPERIMENTS (MAIN PRACTICAL MODULES 6A-6G) */}
      <section className="pro-card exp-full-section-card" id="sub-experiments-section">
        <div className="section-header-block">
          <div className="section-title-with-badge">
            <div className="section-icon-badge subexps-badge">
              <Layers size={18} />
            </div>
            <div>
              <span className="section-eyebrow">Practical Laboratory Modules</span>
              <h2 className="section-main-heading">Sub-Experiments</h2>
            </div>
          </div>
          <p className="section-sub-desc">
            Select any practical module below to launch its dedicated 2-column workspace, step-by-step procedure, viva voce, and verified outputs.
          </p>
        </div>

        <div className="subexps-cards-full-grid">
          {experiment.subExperiments && experiment.subExperiments.map((sub, idx) => {
            const letter = sub.letter || String.fromCharCode(65 + idx);
            const codeId = `${String(experiment.number).padStart(2, '0')}${letter}`;
            return (
              <article 
                key={sub.id || idx}
                className="subexp-full-card"
                onClick={() => onOpenSubExpDetails(sub)}
              >
                <div className="subexp-full-card-top">
                  <span className="subexp-code-badge">{codeId}</span>
                  <span className="subexp-ready-badge">
                    <CheckCircle2 size={12} />
                    <span>Ready to Run</span>
                  </span>
                </div>

                <h3 className="subexp-full-title">{sub.title}</h3>
                
                <p className="subexp-full-desc">
                  {sub.description || sub.aim || sub.aboutProgram}
                </p>

                <div className="subexp-tech-tags-row">
                  <span className="tech-pill">Python</span>
                  <span className="tech-pill">Pandas</span>
                  {sub.syntax && <span className="tech-pill">Vectorized</span>}
                </div>

                <div className="subexp-full-card-footer">
                  <button 
                    className="btn-open-practical-main"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSubExpDetails(sub);
                    }}
                    title={`Open Practical ${codeId}`}
                  >
                    <span>Open Practical</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    className="btn-summary-ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenSubExpModal(experiment, sub);
                    }}
                    title="View quick preview modal"
                  >
                    <span>Summary</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. WHAT YOU WILL LEARN */}
      <section className="pro-card exp-full-section-card">
        <div className="section-header-block">
          <div className="section-title-with-badge">
            <div className="section-icon-badge info-badge">
              <BookOpen size={18} />
            </div>
            <div>
              <span className="section-eyebrow">Course Competencies</span>
              <h2 className="section-main-heading">What You Will Learn</h2>
            </div>
          </div>
          <p className="section-sub-desc">
            Key learning objectives and practical competencies attained upon completing this laboratory experiment.
          </p>
        </div>

        <div className="learning-objectives-grid">
          {learningObjectives.map((obj, idx) => (
            <div key={idx} className="objective-card-item">
              <div className="objective-card-top">
                <span className="objective-num-pill">{obj.title}</span>
                <CheckCircle2 size={16} className="objective-check-icon" />
              </div>
              <h3 className="objective-card-title">Laboratory Objective 0{idx + 1}</h3>
              <p className="objective-card-desc">{obj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CODE & PRACTICE */}
      <section className="pro-card exp-full-section-card">
        <div className="section-header-block">
          <div className="section-title-with-badge">
            <div className="section-icon-badge code-badge">
              <Code2 size={18} />
            </div>
            <div>
              <span className="section-eyebrow">Interactive Programming</span>
              <h2 className="section-main-heading">Code &amp; Practice</h2>
            </div>
          </div>
          <p className="section-sub-desc">
            Run and experiment with the code interactively. Launch into the full code editor to write, modify, and execute Python scripts.
          </p>
        </div>

        <div className="code-practice-container">
          <div className="code-practice-hero-bar">
            <div className="code-practice-meta">
              <Terminal size={16} className="terminal-icon" />
              <span className="code-file-tag">experiment_{experiment.number}_pipeline.py</span>
              <span className="code-kernel-tag">Python 3.11</span>
            </div>

            <div className="code-practice-actions">
              <button 
                className="btn-code-copy" 
                onClick={handleCopyMasterCode}
                title="Copy Code to Clipboard"
              >
                {copiedCode ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>

              {onOpenInEditor && (
                <button
                  className="btn-open-editor-primary"
                  onClick={() => onOpenInEditor(masterCode, `experiment_${experiment.number}_pipeline.py`)}
                  title="Open code in interactive editor"
                >
                  <Code2 size={15} />
                  <span>Open in Code Editor</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="code-practice-preview-grid">
            <div className="code-preview-pane">
              <div className="code-pane-tab-header">
                <span>Verified Source Script</span>
              </div>
              <pre className="code-preview-pre">
                <code>{masterCode}</code>
              </pre>
            </div>

            <div className="output-preview-pane">
              <div className="output-pane-tab-header">
                <span className="status-ping green" />
                <span>Execution Terminal Output (Exit Code 0)</span>
              </div>
              <pre className="output-preview-pre">
                {masterOutput}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESOURCES & EXTERNAL REFERENCES */}
      <section className="pro-card exp-full-section-card">
        <div className="section-header-block">
          <div className="section-title-with-badge">
            <div className="section-icon-badge terminal-badge">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="section-eyebrow">Repository &amp; Materials</span>
              <h2 className="section-main-heading">Resources &amp; External References</h2>
            </div>
          </div>
          <p className="section-sub-desc">
            Verified source repositories, documentation manuals, and prescribed data science toolchains.
          </p>
        </div>

        <div className="resources-cards-grid">
          {/* GitHub Resource Card */}
          <div className="resource-item-card">
            <div className="resource-icon-circle github">
              <Github size={20} />
            </div>
            <div className="resource-item-content">
              <h4 className="resource-item-title">GitHub Repository</h4>
              <p className="resource-item-desc">
                Complete laboratory source code, datasets, and unit test benchmarks hosted on GitHub.
              </p>
              {experiment.githubUrl ? (
                <a 
                  href={experiment.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-item-link"
                  title="Open GitHub repository"
                >
                  <span>Browse on GitHub</span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <span className="resource-pending-tag">
                    Repository URL pending
                  </span>
                  {onEdit && (
                    <button
                      className="resource-item-btn-action"
                      onClick={() => onEdit(experiment)}
                      title="Add GitHub URL"
                      style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
                    >
                      <Edit3 size={12} />
                      <span>Configure GitHub Link</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* YouTube Video Resource */}
          <div className="resource-item-card">
            <div className="resource-icon-circle youtube">
              <Youtube size={20} />
            </div>
            <div className="resource-item-content">
              <h4 className="resource-item-title">YouTube Walkthrough</h4>
              <p className="resource-item-desc">
                Watch full-resolution video lecture explanation and code walkthrough.
              </p>
              {videoUrl ? (
                <a 
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-item-link"
                  title="Open video on YouTube"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <span className="resource-pending-tag">
                    Lecture video pending
                  </span>
                  {onEdit && (
                    <button
                      className="resource-item-btn-action"
                      onClick={() => onEdit(experiment)}
                      title="Add YouTube URL"
                      style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
                    >
                      <Edit3 size={12} />
                      <span>Configure YouTube Video</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Downloadable Lab Notes */}
          <div className="resource-item-card">
            <div className="resource-icon-circle notes">
              <FileText size={20} />
            </div>
            <div className="resource-item-content">
              <h4 className="resource-item-title">Laboratory Script (.py)</h4>
              <p className="resource-item-desc">
                Official reproducible script for local JupyterLab or terminal execution.
              </p>
              <button 
                className="resource-item-btn-action"
                onClick={handleDownloadScript}
                title="Download Python script"
              >
                <Download size={13} />
                <span>Download Python Script</span>
              </button>
            </div>
          </div>

          {/* Related Tools */}
          <div className="resource-item-card">
            <div className="resource-icon-circle tools">
              <Wrench size={20} />
            </div>
            <div className="resource-item-content">
              <h4 className="resource-item-title">Related Tools &amp; Libraries</h4>
              <p className="resource-item-desc">
                Prescribed software stack for running this laboratory experiment.
              </p>
              <div className="tools-badge-wrap">
                {['Python 3.11', 'Pandas', 'NumPy', 'JupyterLab', 'Scikit-Learn'].map((tool, i) => (
                  <span key={i} className="tool-chip">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRESCRIBED SYLLABUS TOPICS */}
      <section className="pro-card exp-full-section-card">
        <div className="section-header-block">
          <div className="section-title-with-badge">
            <div className="section-icon-badge syntax-badge">
              <BookOpen size={18} />
            </div>
            <div>
              <span className="section-eyebrow">Curriculum Topics</span>
              <h2 className="section-main-heading">Prescribed Syllabus Topics</h2>
            </div>
          </div>
          <p className="section-sub-desc">
            Individual syllabus sub-topics covered in this laboratory experiment.
          </p>
        </div>

        <div className="related-topics-pills-grid">
          {topicsList.map((topic, i) => (
            <div key={i} className="topic-pill-card">
              <CheckCircle2 size={16} className="topic-check" />
              <span className="topic-title-text">{topic}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
