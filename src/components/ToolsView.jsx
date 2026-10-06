import React, { useState } from 'react';
import { 
  Wrench, ExternalLink, Copy, Check, Search, 
  Terminal, Code2, Database, BarChart3, Cpu, 
  Cloud, Table, Grid, Layers, Sparkles, CheckCircle2 
} from 'lucide-react';
import { dataScienceTools } from '../data/toolsData';

export default function ToolsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const categories = ['All', 'Programming Language', 'Interactive Environment', 'Data Manipulation', 'Scientific Computing', 'Data Visualization', 'Statistical Graphics', 'Machine Learning', 'Database & Querying', 'Business Intelligence'];

  const filteredTools = dataScienceTools.filter((tool) => {
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.mainUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopySnippet = async (toolId, snippet) => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedIndex(toolId);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const getToolIcon = (iconType, name) => {
    switch (iconType) {
      case 'code': return <Code2 size={24} />;
      case 'terminal': return <Terminal size={24} />;
      case 'cloud': return <Cloud size={24} />;
      case 'table': return <Table size={24} />;
      case 'grid': return <Grid size={24} />;
      case 'chart': return <BarChart3 size={24} />;
      case 'chart-bar': return <BarChart3 size={24} />;
      case 'cpu': return <Cpu size={24} />;
      case 'database': return <Database size={24} />;
      case 'layout': return <Layers size={24} />;
      default: return <Wrench size={24} />;
    }
  };

  return (
    <div className="pro-tools-page">
      {/* Tools Overview Banner */}
      <div className="pro-card tools-header-card">
        <div className="banner-badge-tag">
          <Wrench size={14} />
          <span>ESSENTIAL ECOSYSTEM • DATA SCIENCE LABORATORY</span>
        </div>

        <h1 className="tools-banner-title">
          Data Science Tools &amp; Technologies
        </h1>
        <p className="tools-banner-desc">
          Industry-standard scientific software, programming environments, mathematical engines, and visualization libraries prescribed for continuous laboratory experimentation.
        </p>

        {/* Search & Filter Categories */}
        <div className="tools-filter-controls">
          <div className="search-input-wrapper" style={{ flex: 1, maxWidth: '420px' }}>
            <Search className="search-input-icon" size={16} />
            <input
              type="text"
              className="search-input"
              placeholder="Search tools by name, utility, or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="tools-category-chips">
            {['All', 'Language & IDE', 'Data & Math', 'Visualization', 'Machine Learning', 'Databases'].map((cat) => {
              const isActive = (cat === 'All' && selectedCategory === 'All') ||
                (cat === 'Language & IDE' && ['Programming Language', 'Interactive Environment', 'Cloud IDE & Compute'].includes(selectedCategory)) ||
                (cat === 'Data & Math' && ['Data Manipulation', 'Scientific Computing'].includes(selectedCategory)) ||
                (cat === 'Visualization' && ['Data Visualization', 'Statistical Graphics', 'Business Intelligence'].includes(selectedCategory)) ||
                (cat === 'Machine Learning' && selectedCategory === 'Machine Learning') ||
                (cat === 'Databases' && selectedCategory === 'Database & Querying');

              return (
                <button
                  key={cat}
                  className={`tool-category-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (cat === 'All') setSelectedCategory('All');
                    else if (cat === 'Language & IDE') setSelectedCategory('Programming Language');
                    else if (cat === 'Data & Math') setSelectedCategory('Data Manipulation');
                    else if (cat === 'Visualization') setSelectedCategory('Data Visualization');
                    else if (cat === 'Machine Learning') setSelectedCategory('Machine Learning');
                    else if (cat === 'Databases') setSelectedCategory('Database & Querying');
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid of 10 Professional Tool Cards */}
      <div className="tools-cards-grid">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="pro-card tool-card-item">
            {/* Top row: Icon + Name + Category badge */}
            <div className="tool-card-header">
              <div 
                className="tool-icon-wrapper" 
                style={{ 
                  background: `${tool.badgeColor}15`, 
                  color: tool.badgeColor,
                  border: `1px solid ${tool.badgeColor}35`
                }}
              >
                {getToolIcon(tool.iconType, tool.name)}
              </div>

              <div className="tool-header-info">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <h3 className="tool-title-name">{tool.name}</h3>
                  <span 
                    className="tool-category-chip"
                    style={{ 
                      borderColor: `${tool.badgeColor}40`,
                      color: tool.badgeColor,
                      background: `${tool.badgeColor}10`
                    }}
                  >
                    {tool.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Short description */}
            <p className="tool-desc-text">
              {tool.shortDescription}
            </p>

            {/* Main Use Box */}
            <div className="tool-use-box">
              <span className="tool-use-label">Core Domain &amp; Main Use:</span>
              <p className="tool-use-value">{tool.mainUse}</p>
            </div>

            {/* Command / Code Snippet */}
            <div className="tool-snippet-box">
              <div className="snippet-topbar">
                <span className="snippet-label">Quick Snippet</span>
                <button
                  className="snippet-copy-btn"
                  onClick={() => handleCopySnippet(tool.id, tool.commandSnippet)}
                  title="Copy command to clipboard"
                >
                  {copiedIndex === tool.id ? (
                    <>
                      <Check size={12} style={{ color: '#10b981' }} />
                      <span style={{ color: '#10b981' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="tool-code-line">
                <code>{tool.commandSnippet}</code>
              </pre>
            </div>

            {/* Features check pills */}
            <div className="tool-features-row">
              {tool.features.map((feat, fIdx) => (
                <span key={fIdx} className="tool-feature-tag">
                  <CheckCircle2 size={11} style={{ color: 'var(--primary-teal)' }} />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* Footer with Explore / Open Buttons */}
            <div className="tool-card-footer">
              <a
                href={tool.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-btn-docs"
                title={`Open official ${tool.name} documentation`}
              >
                <span>Documentation</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={tool.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary tool-btn-explore"
                title={`Explore ${tool.name} official site`}
              >
                <span>Explore Tool</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="pro-card empty-search-card">
          <Wrench size={36} style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }} />
          <h4>No tools match your query "{searchQuery}"</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Try searching for Python, Pandas, Matplotlib, SQL, or Tableau.
          </p>
          <button
            className="btn-secondary"
            style={{ marginTop: '1rem' }}
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
