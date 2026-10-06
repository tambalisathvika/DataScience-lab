import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit2, Trash2, ArrowRight, Play, BookOpen, Layers, CheckCircle2, Clock } from 'lucide-react';

export default function ExperimentCard({ 
  experiment, 
  onReadMore, 
  onOpenSubExpModal, 
  onEdit, 
  onDelete 
}) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const subCount = experiment.subExperiments?.length || 0;
  const topicsCount = experiment.topics?.length || 0;
  const isCompleted = experiment.completed !== false;

  return (
    <article className="pro-exp-card">
      <div className="pro-exp-media-wrap">
        {/* Number Badge */}
        <div className="pro-media-badge-left">
          <span className="badge-exp-num">EXP {experiment.number}</span>
          <span className="badge-sub-count">{subCount} Sub-Exps</span>
        </div>

        {/* Completion status pill */}
        <div className="pro-media-badge-right">
          {isCompleted ? (
            <span className="status-badge-chip completed">
              <CheckCircle2 size={12} />
              <span>Complete</span>
            </span>
          ) : (
            <span className="status-badge-chip in-progress">
              <Clock size={12} />
              <span>In Progress</span>
            </span>
          )}

          {/* Three-dot dropdown menu */}
          <div ref={menuRef} style={{ position: 'relative' }}>
            <button
              className="pro-exp-menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              aria-label="Experiment options"
              title="Options"
            >
              <MoreVertical size={16} />
            </button>

            {showMenu && (
              <div className="pro-menu-dropdown">
                <button 
                  className="pro-menu-item"
                  onClick={() => {
                    setShowMenu(false);
                    onEdit(experiment);
                  }}
                >
                  <Edit2 size={14} style={{ color: 'var(--primary-teal)' }} />
                  <span>Edit Experiment</span>
                </button>
                <div className="pro-menu-divider" />
                <button 
                  className="pro-menu-item delete"
                  onClick={() => {
                    setShowMenu(false);
                    onDelete(experiment);
                  }}
                >
                  <Trash2 size={14} />
                  <span>Delete Experiment</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Card Thumbnail Image */}
        <img
          src={experiment.thumbnail || '/exp1-thumb.png'}
          alt={experiment.title}
          className="pro-exp-thumb-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/exp1-thumb.png';
          }}
        />
        <div className="pro-exp-media-overlay" />
      </div>

      <div className="pro-exp-content">
        <div className="pro-exp-header">
          <div className="pro-exp-subtitle">Experiment {experiment.number}</div>
          <h3 className="pro-exp-title" onClick={() => onReadMore(experiment)}>
            {experiment.title}
          </h3>
        </div>

        <p className="pro-exp-description">
          {experiment.description}
        </p>

        {/* Topics Chips Preview */}
        {topicsCount > 0 && (
          <div className="pro-exp-topics-meta">
            <span className="topics-count-label">
              <BookOpen size={13} />
              <span>{topicsCount} Topics covered</span>
            </span>
          </div>
        )}

        {/* Card Actions Footer */}
        <div className="pro-exp-actions">
          <button 
            className="pro-btn-read-more" 
            onClick={() => onReadMore(experiment)}
            title="Read Complete Experiment Details"
          >
            <span>Read More</span>
            <ArrowRight size={14} className="arrow-icon" />
          </button>

          <div className="pro-sub-btns-group">
            {experiment.subExperiments && experiment.subExperiments.map((sub, idx) => {
              const letter = sub.letter || String.fromCharCode(65 + idx);
              return (
                <button
                  key={sub.id || idx}
                  className="pro-btn-sub-exp"
                  onClick={() => onOpenSubExpModal(experiment, sub)}
                  title={`Open Experiment ${experiment.number}${letter} Summary Modal`}
                >
                  <span>Exp {letter}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
