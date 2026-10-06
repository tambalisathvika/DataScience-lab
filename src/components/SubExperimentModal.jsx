import React from 'react';
import { X, ArrowRight, Github, ExternalLink, Play, Layers } from 'lucide-react';

export default function SubExperimentModal({
  isOpen,
  onClose,
  parentExperiment,
  subExperiment,
  onReadMore
}) {
  if (!isOpen || !subExperiment || !parentExperiment) return null;

  const letter = subExperiment.letter || 'A';
  const expNumber = parentExperiment.number || '1';
  const expTitle = subExperiment.title || parentExperiment.title;
  const description = subExperiment.description || subExperiment.aboutProgram || '';
  const thumbnail = subExperiment.image || parentExperiment.thumbnail || '/exp1-thumb.png';
  const githubLink = subExperiment.githubUrl || parentExperiment.githubUrl || 'https://github.com';

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-container pro-sub-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-tag-group">
            <span className="pro-tag-badge">
              Experiment {expNumber}{letter}
            </span>
            <span className="modal-tag-sub">Laboratory Sub-Module</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body pro-sub-modal-body">
          {/* Media Header Preview */}
          <div className="pro-modal-media-wrap">
            <img
              src={thumbnail}
              alt={expTitle}
              className="pro-modal-media-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/exp1-thumb.png';
              }}
            />
            <div className="pro-modal-media-overlay" />
            <div className="pro-modal-play-badge">
              <Play size={20} fill="#ffffff" />
            </div>
          </div>

          <div className="pro-modal-info">
            <h4 className="pro-modal-title">{expTitle}</h4>
            <p className="pro-modal-desc">{description}</p>
          </div>
        </div>

        <div className="modal-footer pro-modal-footer">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="pro-btn-github-sub"
            title="Open Sub-Experiment in GitHub"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>

          <div className="pro-modal-btn-group">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button
              type="button"
              className="pro-btn-read-more modal-read-more"
              onClick={() => {
                onClose();
                onReadMore(parentExperiment, subExperiment);
              }}
              title="Open full sub-experiment documentation and code"
            >
              <span>Read More</span>
              <ArrowRight size={14} className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
