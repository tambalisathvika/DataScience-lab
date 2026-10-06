import React, { useState } from 'react';
import ExperimentCard from './ExperimentCard';
import SearchBar from './SearchBar';
import { Plus, FlaskConical, SearchX, CheckCircle, Sparkles, Filter } from 'lucide-react';

export default function ExperimentList({
  experiments,
  searchTerm,
  onSearchChange,
  onAddClick,
  onReadMore,
  onOpenSubExpModal,
  onEdit,
  onDelete
}) {
  const [filterType, setFilterType] = useState('all'); // 'all' | 'completed' | 'in-progress'

  // Dynamic percentage calculation
  const totalCount = experiments.length;
  const completedCount = experiments.filter((e) => e.completed !== false).length;
  const dynamicPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Filter experiments based on search and tab filter
  const filteredExperiments = experiments.filter((exp) => {
    // 1. Tab filter
    if (filterType === 'completed' && exp.completed === false) return false;
    if (filterType === 'in-progress' && exp.completed !== false) return false;

    // 2. Search query filter
    if (!searchTerm.trim()) return true;
    const query = searchTerm.toLowerCase();

    const matchesNumber = (exp.number || '').toString().toLowerCase().includes(query);
    const matchesTitle = (exp.title || '').toLowerCase().includes(query);
    const matchesDesc = (exp.description || '').toLowerCase().includes(query);
    const matchesTopics = (exp.topics || []).some((t) => t.toLowerCase().includes(query));
    const matchesSubExp = (exp.subExperiments || []).some(
      (s) =>
        (s.title || '').toLowerCase().includes(query) ||
        (s.description || '').toLowerCase().includes(query)
    );

    return matchesNumber || matchesTitle || matchesDesc || matchesTopics || matchesSubExp;
  });

  return (
    <section className="pro-exp-section">
      {/* Top Controls Bar */}
      <div className="pro-controls-card">
        <div className="pro-controls-left">
          <div className="section-title-wrap">
            <div className="section-icon-badge">
              <FlaskConical size={20} />
            </div>
            <div>
              <h2 className="pro-section-title">List of Experiments</h2>
              <span className="pro-section-subtitle">
                {totalCount} total laboratory {totalCount === 1 ? 'module' : 'modules'} cataloged
              </span>
            </div>
          </div>
        </div>

        <div className="pro-controls-right">
          {/* Search Box */}
          <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

          {/* Dynamic Percentage Badge with Progress Visual */}
          <div className="pro-progress-widget" title={`Curriculum Completion: ${completedCount} of ${totalCount} Experiments`}>
            <div className="pro-progress-ring-box">
              <svg className="progress-ring" width="28" height="28" viewBox="0 0 36 36">
                <path
                  className="ring-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="ring-stroke"
                  strokeDasharray={`${dynamicPercentage}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <div className="progress-text-col">
              <span className="progress-num">{dynamicPercentage}%</span>
              <span className="progress-label">Experiments</span>
            </div>
          </div>

          {/* Add Experiment Button */}
          <button className="pro-btn-add-exp" onClick={onAddClick} title="Add New Laboratory Experiment">
            <Plus size={18} />
            <span>Add Experiment</span>
          </button>
        </div>
      </div>

      {/* Grid of Experiments or Empty State */}
      {filteredExperiments.length === 0 ? (
        <div className="pro-empty-state">
          <div className="empty-icon-wrap">
            <SearchX size={44} />
          </div>
          <h3 className="empty-title">No experiments found</h3>
          <p className="empty-desc">
            {searchTerm 
              ? `No laboratory experiments matched "${searchTerm}". Try checking your spelling or clearing the search filter.`
              : 'There are currently no experiments under this view. Click "+ Add Experiment" to create one.'}
          </p>
          {searchTerm && (
            <button 
              className="btn-secondary" 
              style={{ marginTop: '0.75rem' }}
              onClick={() => onSearchChange('')}
            >
              Clear Search Filter
            </button>
          )}
        </div>
      ) : (
        <div className="pro-exp-grid">
          {filteredExperiments.map((exp) => (
            <ExperimentCard
              key={exp.id || exp.number}
              experiment={exp}
              onReadMore={onReadMore}
              onOpenSubExpModal={onOpenSubExpModal}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}
