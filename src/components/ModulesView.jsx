import React, { useState } from 'react';
import { 
  BookOpen, Layers, Clock, Award, CheckCircle2, 
  ArrowRight, ArrowLeft, Search, Code2, Terminal, 
  FileText, Download, Printer, ExternalLink, 
  Sparkles, Check, Copy, ChevronRight, X, FlaskConical,
  GraduationCap, HelpCircle, ShieldCheck, Cpu, Database
} from 'lucide-react';
import { dataScienceModules } from '../data/modulesData';

export default function ModulesView({
  experiments = [],
  onNavigateToExperiment,
  onNavigateToEditor
}) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [moduleSearchQuery, setModuleSearchQuery] = useState('');
  const [topicSearchQuery, setTopicSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null); // For "Learn More" modal
  const [copiedCode, setCopiedCode] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  // Active module for detail view
  const activeModule = selectedModuleId
    ? dataScienceModules.find((m) => m.id === selectedModuleId)
    : null;

  // Filter modules in main overview
  const filteredModules = dataScienceModules.filter((mod) => {
    if (!moduleSearchQuery.trim()) return true;
    const q = moduleSearchQuery.toLowerCase();
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.shortDescription.toLowerCase().includes(q) ||
      mod.importantTopics.some((t) => t.toLowerCase().includes(q)) ||
      mod.topics.some((t) => t.title.toLowerCase().includes(q))
    );
  });

  // Filter topics within the active module
  const filteredTopics = activeModule
    ? activeModule.topics.filter((top) => {
        if (!topicSearchQuery.trim()) return true;
        const q = topicSearchQuery.toLowerCase();
        return (
          top.title.toLowerCase().includes(q) ||
          top.shortDescription.toLowerCase().includes(q) ||
          (top.concept && top.concept.toLowerCase().includes(q))
        );
      })
    : [];

  // Download official syllabus / lecture notes
  const handleDownloadNotes = (mod) => {
    const textContent = `================================================================================
MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
OFFICIAL ACADEMIC COURSE MODULE NOTES & LECTURE SYLLABUS
================================================================================
Module:         ${mod.number}: ${mod.displayTitle || mod.title}
Course Code:    ${mod.code}
Credits:        ${mod.credits}
Duration:       ${mod.duration}
Level:          ${mod.level}
Department:     ${mod.department}
Institution:    ${mod.institution}
Prerequisites:  ${mod.prerequisites.join(', ')}
--------------------------------------------------------------------------------

1. EXECUTIVE MODULE SUMMARY:
${mod.summary}

--------------------------------------------------------------------------------
2. DETAILED LECTURE TOPICS (${mod.topics.length} TOPICS):

${mod.topics.map((t) => `[Topic ${t.number}] ${t.title}
Description: ${t.shortDescription}
Concept:     ${t.concept}
Key Points:
${(t.keyPoints || []).map((kp) => `  • ${kp}`).join('\n')}
Formula/Syntax: ${t.formulaOrSyntax || 'N/A'}
Application:    ${t.realWorldApplication || 'N/A'}
--------------------------------------------------------------------------------`).join('\n\n')}

3. EXPERIMENTAL & COMPUTATIONAL CODE BENCHMARK:
File: ${mod.codeExample.filename}
${mod.codeExample.code}

================================================================================
Mohan Babu University — Continuous Academic Evaluation Series (AY 2026–2027)
================================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${mod.code}_${mod.number.replace(/\s+/g, '_')}_Official_Notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`Downloaded Study Notes for ${mod.number}`);
    setTimeout(() => setDownloadSuccess(''), 3000);
  };

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  // Connect to related experiment
  const handleOpenRelatedExperiment = (expRef) => {
    if (!onNavigateToExperiment) return;
    const foundExp = experiments.find(
      (e) => e.id === expRef.id || e.number === expRef.number
    );
    if (foundExp) {
      onNavigateToExperiment(foundExp);
    } else {
      // Fallback
      onNavigateToExperiment({
        id: expRef.id,
        number: expRef.number,
        title: expRef.title,
        description: expRef.relevance
      });
    }
  };

  // Open in interactive code editor
  const handleOpenInEditor = (codeSnippet, filename) => {
    if (onNavigateToEditor) {
      onNavigateToEditor(codeSnippet, filename);
    }
  };

  // ==========================================================================
  // VIEW A: DEDICATED MODULE DETAIL PAGE
  // ==========================================================================
  if (activeModule) {
    const isTealTheme = activeModule.id === 'mod-1';

    return (
      <div className="pro-modules-page">
        {/* Breadcrumb Navigation Bar */}
        <div className="pro-nav-breadcrumb-bar">
          <button 
            className="pro-back-btn" 
            onClick={() => {
              setSelectedModuleId(null);
              setTopicSearchQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Return to Modules Overview"
          >
            <ArrowLeft size={16} />
            <span>Back to All Modules</span>
          </button>

          <div className="breadcrumb-trail">
            <span 
              className="crumb" 
              onClick={() => {
                setSelectedModuleId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ cursor: 'pointer' }}
            >
              Modules
            </span>
            <ChevronRight size={13} className="crumb-arrow" />
            <span className="crumb active">{activeModule.number}</span>
          </div>
        </div>

        {/* 1. MODULE HERO HEADER */}
        <header className={`module-hero-banner ${isTealTheme ? 'theme-teal' : 'theme-indigo'}`}>
          <div className="module-hero-glow-layer" />
          
          <div className="module-hero-content">
            <div className="module-hero-top-row">
              <div className="module-id-badge">
                <span className="module-pill-num">{activeModule.number}</span>
                <span className="module-pill-divider">•</span>
                <span className="module-pill-code">{activeModule.code}</span>
              </div>
              <div className="module-progress-chip">
                <CheckCircle2 size={13} style={{ color: '#10b981' }} />
                <span>Curriculum Status: <strong>{activeModule.defaultProgress}% Covered</strong></span>
              </div>
            </div>

            <h1 className="module-hero-title">
              {activeModule.title}
            </h1>

            <p className="module-hero-desc">
              {activeModule.shortDescription}
            </p>

            {/* Academic Spec Meta */}
            <div className="module-hero-meta-row">
              <span className="module-meta-item">
                <Clock size={13} />
                <span>{activeModule.duration}</span>
              </span>
              <span className="module-meta-item">
                <Award size={13} />
                <span>{activeModule.credits}</span>
              </span>
              <span className="module-meta-item">
                <GraduationCap size={13} />
                <span>{activeModule.level}</span>
              </span>
              <span className="module-meta-item">
                <BookOpen size={13} />
                <span>{activeModule.topics.length} Prescribed Topics</span>
              </span>
            </div>

            {/* Action Bar */}
            <div className="module-hero-actions-bar">
              <button 
                className="btn-primary" 
                onClick={() => handleDownloadNotes(activeModule)}
                title="Download Comprehensive University Lecture Notes (.txt)"
              >
                <Download size={15} />
                <span>Download Notes &amp; Syllabus</span>
              </button>

              <button 
                className="btn-secondary" 
                onClick={() => window.print()}
                title="Print or Save as PDF"
              >
                <Printer size={15} />
                <span>Print Module</span>
              </button>

              {downloadSuccess && (
                <span className="download-feedback-pill">
                  <Check size={13} />
                  <span>{downloadSuccess}</span>
                </span>
              )}
            </div>
          </div>
        </header>

        {/* 2. LABORATORY CONNECTIONS & PRACTICAL IMPLEMENTATIONS */}
        {activeModule.relatedExperiments && activeModule.relatedExperiments.length > 0 && (
          <section className="module-resources-section">
            <div className="section-header-row">
              <div>
                <h2 className="section-title-sm">
                  <FlaskConical size={17} style={{ color: activeModule.theme.primaryColor }} />
                  <span>Laboratory Connections</span>
                </h2>
                <p className="section-subtitle-sm">
                  Practical laboratory experiments directly mapped to theoretical curriculum topics.
                </p>
              </div>
            </div>

            <div className="module-resources-grid" style={{ gridTemplateColumns: '1fr' }}>
              {/* Connected Related Experiments */}
              <div className="pro-card resource-card">
                <div className="resource-card-header">
                  <div className="resource-icon-wrap flask">
                    <FlaskConical size={16} />
                  </div>
                  <div>
                    <h3 className="resource-title">Related Experiments</h3>
                    <span className="resource-meta-label">
                      {activeModule.relatedExperiments.length} Connected Lab Module{activeModule.relatedExperiments.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                <p className="resource-desc">
                  Practical implementation modules from the laboratory syllabus directly mapped to these theoretical topics:
                </p>

                <div className="related-exps-list">
                  {activeModule.relatedExperiments.map((expRef) => (
                    <div 
                      key={expRef.id} 
                      className="related-exp-item"
                      onClick={() => handleOpenRelatedExperiment(expRef)}
                      title={`Jump to Experiment ${expRef.number}: ${expRef.title}`}
                    >
                      <div className="exp-item-badge">
                        <span>EXP {expRef.number}</span>
                      </div>
                      <div className="exp-item-content">
                        <span className="exp-item-title">{expRef.title}</span>
                        <span className="exp-item-relevance">{expRef.relevance}</span>
                      </div>
                      <div className="exp-item-arrow">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="resource-footer-note">
                  <ShieldCheck size={13} style={{ color: '#10b981' }} />
                  <span>Verified with MBU Continuous Academic Evaluation Syllabus</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. CODE IMPLEMENTATION SECTION */}
        <section className="module-code-section">
          <div className="pro-card module-code-card">
            <div className="code-card-header">
              <div className="code-header-left">
                <Terminal size={17} style={{ color: '#38bdf8' }} />
                <div>
                  <span className="code-card-filename">{activeModule.codeExample.filename}</span>
                  <span className="code-card-subtitle">{activeModule.codeExample.title}</span>
                </div>
              </div>

              <div className="code-header-actions">
                <button 
                  className="code-action-btn"
                  onClick={() => handleCopyCode(activeModule.codeExample.code)}
                  title="Copy Code to Clipboard"
                >
                  {copiedCode ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>

                <button 
                  className="code-action-btn primary"
                  onClick={() => handleOpenInEditor(activeModule.codeExample.code, activeModule.codeExample.filename)}
                  title="Open this script directly in the interactive Code Editor"
                >
                  <Code2 size={14} />
                  <span>Open in Code Editor</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>

            <div className="code-view-container">
              <pre className="code-view-pre">
                <code>{activeModule.codeExample.code}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 4. ALL TOPICS (EVERY TOPIC DISPLAYED AS A CLEAN CLICKABLE ITEM) */}
        <section className="module-topics-section">
          <div className="topics-header-bar">
            <div>
              <h2 className="section-title-sm">
                <Layers size={17} style={{ color: activeModule.theme.primaryColor }} />
                <span>Curriculum Topics ({activeModule.topics.length} Total)</span>
              </h2>
              <p className="section-subtitle-sm">
                Click on any topic or press <strong>"Learn More"</strong> to view theoretical formulations, key takeaways, and practical applications.
              </p>
            </div>

            {/* Quick Topic Search */}
            <div className="search-input-wrapper" style={{ minWidth: '240px', maxWidth: '320px' }}>
              <Search className="search-input-icon" size={14} />
              <input
                type="text"
                className="search-input"
                placeholder={`Search ${activeModule.topics.length} topics...`}
                value={topicSearchQuery}
                onChange={(e) => setTopicSearchQuery(e.target.value)}
              />
              {topicSearchQuery && (
                <button 
                  className="clear-search-btn-inside"
                  onClick={() => setTopicSearchQuery('')}
                  title="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Topics Grid */}
          <div className="topics-list-grid">
            {filteredTopics.map((topic) => (
              <article 
                key={topic.number}
                className="pro-card topic-card-item"
                onClick={() => setSelectedTopic(topic)}
              >
                <div className="topic-card-top">
                  <span className="topic-num-badge">
                    Topic {topic.number < 10 ? `0${topic.number}` : topic.number}
                  </span>
                  <span className="topic-code-tag">{topic.code}</span>
                </div>

                <h3 className="topic-item-title">
                  {topic.title}
                </h3>

                <p className="topic-item-desc">
                  {topic.shortDescription}
                </p>

                <div className="topic-item-footer">
                  <button 
                    className="topic-learn-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTopic(topic);
                    }}
                    title={`Study ${topic.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} className="learn-arrow-icon" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="pro-empty-state">
              <HelpCircle size={40} style={{ color: '#94a3b8' }} />
              <h3>No topics matched "{topicSearchQuery}"</h3>
              <p>Try clearing your search keyword to view all {activeModule.topics.length} topics.</p>
              <button 
                className="btn-secondary" 
                style={{ marginTop: '0.75rem' }}
                onClick={() => setTopicSearchQuery('')}
              >
                Clear Topic Search
              </button>
            </div>
          )}
        </section>

        {/* 5. TOPIC DETAIL "LEARN MORE" MODAL */}
        {selectedTopic && (
          <div className="modal-overlay" onClick={() => setSelectedTopic(null)}>
            <div 
              className="modal-container topic-modal-container" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="topic-modal-header">
                <div className="topic-modal-title-col">
                  <div className="topic-modal-meta">
                    <span className="modal-badge-tag">{activeModule.number}</span>
                    <span className="pill-divider">•</span>
                    <span className="modal-badge-tag">Topic {selectedTopic.number}</span>
                    <span className="pill-divider">•</span>
                    <span className="modal-badge-tag">{selectedTopic.code}</span>
                  </div>
                  <h2 className="topic-modal-title">{selectedTopic.title}</h2>
                </div>
                <button 
                  className="modal-close-btn" 
                  onClick={() => setSelectedTopic(null)}
                  title="Close Topic Modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="topic-modal-body">
                {/* 1. Core Concept */}
                <div className="topic-modal-section">
                  <h4 className="topic-modal-subtitle">
                    <BookOpen size={15} style={{ color: activeModule.theme.primaryColor }} />
                    <span>Core Concept &amp; Definition</span>
                  </h4>
                  <p className="topic-modal-text">
                    {selectedTopic.concept}
                  </p>
                </div>

                {/* 2. Key Takeaways */}
                {selectedTopic.keyPoints && selectedTopic.keyPoints.length > 0 && (
                  <div className="topic-modal-section">
                    <h4 className="topic-modal-subtitle">
                      <CheckCircle2 size={15} style={{ color: '#10b981' }} />
                      <span>Key Takeaways &amp; Principles</span>
                    </h4>
                    <ul className="topic-takeaways-list">
                      {selectedTopic.keyPoints.map((pt, i) => (
                        <li key={i} className="takeaway-item">
                          <span className="takeaway-bullet">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 3. Mathematical Formulation / Syntax */}
                {selectedTopic.formulaOrSyntax && (
                  <div className="topic-modal-section">
                    <h4 className="topic-modal-subtitle">
                      <Terminal size={15} style={{ color: '#38bdf8' }} />
                      <span>Mathematical Formulation &amp; Syntax</span>
                    </h4>
                    <div className="topic-formula-box">
                      <code>{selectedTopic.formulaOrSyntax}</code>
                    </div>
                  </div>
                )}

                {/* 4. Real-World Application */}
                {selectedTopic.realWorldApplication && (
                  <div className="topic-modal-section">
                    <h4 className="topic-modal-subtitle">
                      <Sparkles size={15} style={{ color: '#f59e0b' }} />
                      <span>Real-World Industry Application</span>
                    </h4>
                    <p className="topic-modal-app-text">
                      {selectedTopic.realWorldApplication}
                    </p>
                  </div>
                )}
              </div>

              <div className="topic-modal-footer">
                <div className="topic-modal-nav-row">
                  {/* Previous Topic Button */}
                  {selectedTopic.number > 1 && (
                    <button 
                      className="btn-secondary"
                      onClick={() => {
                        const prev = activeModule.topics.find((t) => t.number === selectedTopic.number - 1);
                        if (prev) setSelectedTopic(prev);
                      }}
                    >
                      <ArrowLeft size={13} />
                      <span>Previous Topic</span>
                    </button>
                  )}

                  {/* Next Topic Button */}
                  {selectedTopic.number < activeModule.topics.length && (
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        const next = activeModule.topics.find((t) => t.number === selectedTopic.number + 1);
                        if (next) setSelectedTopic(next);
                      }}
                    >
                      <span>Next Topic</span>
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>

                <button 
                  className="btn-secondary" 
                  onClick={() => setSelectedTopic(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================================================
  // VIEW B: MAIN MODULES OVERVIEW PAGE
  // ==========================================================================
  return (
    <div className="pro-modules-page">
      {/* 1. TOP OVERVIEW BANNER */}
      <section className="modules-main-banner">
        <div className="banner-top-meta">
          <div className="banner-badge-tag">
            <GraduationCap size={14} />
            <span>MOHAN BABU UNIVERSITY • DEPARTMENT OF DATA SCIENCE</span>
          </div>
          <div className="banner-status-tag">
            <span className="status-ping-dot" />
            <span>AY 2026–2027 Official Curriculum</span>
          </div>
        </div>

        <h1 className="modules-main-title">
          Data Science Academic Modules
        </h1>
        <p className="modules-main-desc">
          Structured university lecture coursework, theoretical formulations, and computational laboratory foundations. Based directly on prescribed Department of Data Science notes.
        </p>

        {/* Search Bar & Stats Strip */}
        <div className="modules-banner-toolbar">
          <div className="search-input-wrapper" style={{ flex: 1, maxWidth: '420px' }}>
            <Search className="search-input-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search modules, concepts, or topics..."
              value={moduleSearchQuery}
              onChange={(e) => setModuleSearchQuery(e.target.value)}
            />
            {moduleSearchQuery && (
              <button 
                className="clear-search-btn-inside"
                onClick={() => setModuleSearchQuery('')}
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="modules-stat-counter">
            <span className="stat-counter-num">{dataScienceModules.length}</span>
            <span className="stat-counter-label">Core Modules Cataloged</span>
          </div>
        </div>
      </section>

      {/* 2. MODULE CARDS GRID */}
      <section className="modules-cards-container">
        <div className="modules-cards-grid">
          {filteredModules.map((module) => {
            const isTeal = module.id === 'mod-1';
            const iconComponent = isTeal ? (
              <BookOpen size={24} style={{ color: module.theme.primaryColor }} />
            ) : (
              <Cpu size={24} style={{ color: module.theme.primaryColor }} />
            );

            return (
              <article 
                key={module.id} 
                className={`pro-card module-overview-card ${isTeal ? 'theme-teal' : 'theme-indigo'}`}
              >
                {/* Top Subtle Identity Accent Line */}
                <div 
                  className="card-top-accent-line" 
                  style={{ background: module.theme.primaryColor }} 
                />

                <div className="module-card-body">
                  {/* Header Row: Module # and Topic Count */}
                  <div className="module-card-header">
                    <div className="module-card-badge-group">
                      <div className="module-card-icon-frame">
                        {iconComponent}
                      </div>
                      <div>
                        <span className="module-card-num-label">{module.number}</span>
                        <span className="module-card-code-label">{module.code}</span>
                      </div>
                    </div>

                    <div className="module-card-topics-count">
                      <span className="count-num">{module.topics.length}</span>
                      <span className="count-label">Topics</span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h2 
                    className="module-card-title"
                    onClick={() => {
                      setSelectedModuleId(module.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {module.title}
                  </h2>

                  <p className="module-card-desc">
                    {module.summary}
                  </p>

                  {/* Progress Indicator */}
                  <div className="module-card-progress-box">
                    <div className="progress-label-row">
                      <span className="progress-title">Curriculum Progress</span>
                      <span className="progress-percentage">{module.defaultProgress}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${module.defaultProgress}%`,
                          background: `linear-gradient(90deg, ${module.theme.primaryColor} 0%, ${module.theme.accentColor} 100%)`
                        }} 
                      />
                    </div>
                  </div>

                  {/* Important Topics Preview */}
                  <div className="module-card-important-topics">
                    <span className="important-topics-heading">Key Topics Covered:</span>
                    <ul className="important-topics-list">
                      {module.importantTopics.map((topicName, idx) => (
                        <li key={idx} className="important-topic-item">
                          <span 
                            className="important-topic-dot" 
                            style={{ background: module.theme.primaryColor }} 
                          />
                          <span>{topicName}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Metadata & Explore Button */}
                  <div className="module-card-footer">
                    <div className="module-card-credits">
                      <Clock size={12} />
                      <span>{module.duration.split('•')[0].trim()}</span>
                      <span className="footer-meta-divider">•</span>
                      <span>{module.credits}</span>
                    </div>

                    <button 
                      className={`module-explore-btn ${isTeal ? 'teal' : 'indigo'}`}
                      onClick={() => {
                        setSelectedModuleId(module.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      title={`Explore ${module.title}`}
                    >
                      <span>Explore Module</span>
                      <ArrowRight size={14} className="explore-arrow" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredModules.length === 0 && (
          <div className="pro-empty-state">
            <BookOpen size={44} style={{ color: '#94a3b8' }} />
            <h3>No modules matched your search</h3>
            <p>No coursework modules found for "{moduleSearchQuery}". Try clearing the search query.</p>
            <button 
              className="btn-secondary" 
              style={{ marginTop: '0.75rem' }}
              onClick={() => setModuleSearchQuery('')}
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
