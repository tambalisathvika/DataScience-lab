import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Upload, Check, Edit3 } from 'lucide-react';
import { compressImage } from '../utils/storage';

export default function EditExperimentModal({ isOpen, onClose, experiment, onSave }) {
  if (!isOpen || !experiment) return null;

  const [number, setNumber] = useState(experiment.number || '1');
  const [title, setTitle] = useState(experiment.title || '');
  const [description, setDescription] = useState(experiment.description || '');
  const [thumbnail, setThumbnail] = useState(experiment.thumbnail || '/exp1-thumb.png');
  const [videoUrl, setVideoUrl] = useState(experiment.videoUrl || '');
  const [githubUrl, setGithubUrl] = useState(experiment.githubUrl || '');
  const [summary, setSummary] = useState(experiment.summary || '');
  const [topicsText, setTopicsText] = useState((experiment.topics || []).join('\n'));
  const [completed, setCompleted] = useState(experiment.completed !== false);

  const [subExperiments, setSubExperiments] = useState(
    experiment.subExperiments && experiment.subExperiments.length > 0
      ? [...experiment.subExperiments]
      : [
          {
            id: 'sub-A',
            letter: 'A',
            title: '',
            description: '',
            image: '/exp1-thumb.png',
            videoUrl: '',
            githubUrl: '',
            aim: '',
            syntax: '',
            generalSyntax: '',
            aboutProgram: '',
            program: '',
            output: '',
            explanation: ''
          }
        ]
  );

  const [activeSubTab, setActiveSubTab] = useState(0);
  const [isProcessingImg, setIsProcessingImg] = useState(false);

  // Handle main thumbnail upload
  const handleMainThumbUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsProcessingImg(true);
      const compressed = await compressImage(file, 640, 360, 0.82);
      setThumbnail(compressed);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessingImg(false);
    }
  };

  // Handle sub experiment thumbnail upload
  const handleSubThumbUpload = async (e, index) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setIsProcessingImg(true);
      const compressed = await compressImage(file, 640, 360, 0.82);
      setSubExperiments((prev) => {
        const copy = [...prev];
        copy[index] = { ...copy[index], image: compressed };
        return copy;
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessingImg(false);
    }
  };

  // Add new sub-experiment
  const handleAddSubExp = () => {
    const nextIdx = subExperiments.length;
    const letter = String.fromCharCode(65 + nextIdx);
    setSubExperiments((prev) => [
      ...prev,
      {
        id: `sub-${letter}-${Date.now()}`,
        letter: letter,
        title: '',
        description: '',
        image: '/exp1-thumb.png',
        videoUrl: '',
        githubUrl: '',
        aim: '',
        syntax: '',
        generalSyntax: '',
        aboutProgram: '',
        program: '',
        output: '',
        explanation: ''
      }
    ]);
    setActiveSubTab(nextIdx);
  };

  // Remove sub-experiment
  const handleRemoveSubExp = (idxToRemove) => {
    if (subExperiments.length <= 1) {
      alert('At least one sub-experiment is recommended.');
      return;
    }
    const updated = subExperiments
      .filter((_, idx) => idx !== idxToRemove)
      .map((sub, i) => ({
        ...sub,
        letter: String.fromCharCode(65 + i)
      }));
    setSubExperiments(updated);
    setActiveSubTab(Math.max(0, idxToRemove - 1));
  };

  // Update sub-experiment field
  const updateSubField = (idx, field, value) => {
    setSubExperiments((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter an experiment title.');
      return;
    }

    const topics = topicsText
      .split('\n')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const updatedExperiment = {
      ...experiment,
      number: number.trim() || '1',
      title: title.trim(),
      description: description.trim(),
      thumbnail: thumbnail || '/exp1-thumb.png',
      videoUrl: videoUrl.trim(),
      githubUrl: githubUrl.trim(),
      summary: summary.trim(),
      completed: completed,
      topics: topics.length > 0 ? topics : [title.trim()],
      subExperiments: subExperiments.map((sub, idx) => ({
        ...sub,
        id: sub.id || `${number.trim()}${sub.letter || String.fromCharCode(65 + idx)}`,
        letter: sub.letter || String.fromCharCode(65 + idx)
      }))
    };

    onSave(updatedExperiment);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Edit3 size={22} style={{ color: 'var(--primary-teal)' }} />
            <h3 className="modal-title">Edit Experiment {experiment.number}: {experiment.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ maxHeight: 'calc(85vh - 140px)', overflowY: 'auto' }}>
            {/* Main Info */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Exp Number *</label>
                <input
                  type="text"
                  className="form-input"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Experiment Title *</label>
                <input
                  type="text"
                  className="form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Short Description</label>
              <textarea
                className="form-textarea"
                style={{ minHeight: '65px' }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Thumbnail Upload & Video URL */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Card Thumbnail Image</label>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <img
                    src={thumbnail}
                    alt="Preview"
                    style={{ width: '64px', height: '42px', borderRadius: '4px', objectFit: 'cover', border: '1px solid var(--border-light)' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/exp1-thumb.png';
                    }}
                  />
                  <label className="upload-btn-label">
                    <Upload size={14} />
                    <span>Change Thumbnail</span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleMainThumbUpload}
                      disabled={isProcessingImg}
                    />
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Main Video URL (YouTube)</label>
                <input
                  type="text"
                  className="form-input"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">GitHub URL</label>
                <input
                  type="url"
                  className="form-input"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Completion Status</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem' }}>
                  <input
                    type="checkbox"
                    id="edit-completed-check"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--primary-teal)' }}
                  />
                  <label htmlFor="edit-completed-check" style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
                    Mark as Completed (affects % progress)
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Experiment Summary</label>
              <textarea
                className="form-textarea"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Topics (one per line)</label>
              <textarea
                className="form-textarea"
                style={{ minHeight: '80px' }}
                value={topicsText}
                onChange={(e) => setTopicsText(e.target.value)}
              />
            </div>

            <div className="section-divider" />

            {/* Sub-Experiments Section */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Sub-Experiments
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Edit aim, syntax, code, output, and YouTube links.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleAddSubExp}
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.825rem' }}
                >
                  <Plus size={15} />
                  <span>+ Add Sub Experiment</span>
                </button>
              </div>

              {/* Sub Exp Tab Headers */}
              <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.5rem', marginBottom: '1rem', overflowX: 'auto' }}>
                {subExperiments.map((sub, sIdx) => (
                  <button
                    key={sIdx}
                    type="button"
                    onClick={() => setActiveSubTab(sIdx)}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: activeSubTab === sIdx ? '1px solid var(--primary-teal)' : '1px solid var(--border-light)',
                      background: activeSubTab === sIdx ? 'var(--primary-teal-light)' : '#ffffff',
                      color: activeSubTab === sIdx ? 'var(--primary-teal-dark)' : 'var(--text-secondary)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <span>Sub Exp {sub.letter || String.fromCharCode(65 + sIdx)}</span>
                    {subExperiments.length > 1 && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveSubExp(sIdx);
                        }}
                        style={{ color: '#ef4444', display: 'flex', alignItems: 'center' }}
                      >
                        <X size={13} />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Active Sub Exp Form Fields */}
              {subExperiments[activeSubTab] && (
                <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="badge-tag teal">
                      Sub-Experiment {subExperiments[activeSubTab].letter}
                    </span>
                    {subExperiments.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveSubExp(activeSubTab)}
                        style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <Trash2 size={14} />
                        <span>Remove Sub Experiment</span>
                      </button>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Sub Experiment Title *</label>
                    <input
                      type="text"
                      className="form-input"
                      value={subExperiments[activeSubTab].title}
                      onChange={(e) => updateSubField(activeSubTab, 'title', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Description / Main To-Do</label>
                    <textarea
                      className="form-textarea"
                      style={{ minHeight: '60px' }}
                      value={subExperiments[activeSubTab].description}
                      onChange={(e) => updateSubField(activeSubTab, 'description', e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">YouTube Video URL</label>
                      <input
                        type="text"
                        className="form-input"
                        value={subExperiments[activeSubTab].videoUrl}
                        onChange={(e) => updateSubField(activeSubTab, 'videoUrl', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">GitHub URL</label>
                      <input
                        type="url"
                        className="form-input"
                        value={subExperiments[activeSubTab].githubUrl}
                        onChange={(e) => updateSubField(activeSubTab, 'githubUrl', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Sub Thumbnail */}
                  <div className="form-group">
                    <label className="form-label">Sub-Experiment Image</label>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <img
                        src={subExperiments[activeSubTab].image || '/exp1-thumb.png'}
                        alt="Sub Exp Preview"
                        style={{ width: '60px', height: '40px', borderRadius: '4px', objectFit: 'cover' }}
                      />
                      <label className="upload-btn-label">
                        <Upload size={14} />
                        <span>Upload Image</span>
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={(e) => handleSubThumbUpload(e, activeSubTab)}
                          disabled={isProcessingImg}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Aim and Syntax */}
                  <div className="form-group">
                    <label className="form-label">Aim</label>
                    <input
                      type="text"
                      className="form-input"
                      value={subExperiments[activeSubTab].aim}
                      onChange={(e) => updateSubField(activeSubTab, 'aim', e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Syntax</label>
                      <textarea
                        className="form-textarea code-input"
                        style={{ minHeight: '70px' }}
                        value={subExperiments[activeSubTab].syntax}
                        onChange={(e) => updateSubField(activeSubTab, 'syntax', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">General Syntax</label>
                      <textarea
                        className="form-textarea code-input"
                        style={{ minHeight: '70px' }}
                        value={subExperiments[activeSubTab].generalSyntax}
                        onChange={(e) => updateSubField(activeSubTab, 'generalSyntax', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Program / Python Code</label>
                    <textarea
                      className="form-textarea code-input"
                      value={subExperiments[activeSubTab].program}
                      onChange={(e) => updateSubField(activeSubTab, 'program', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Expected Output</label>
                    <textarea
                      className="form-textarea code-input"
                      value={subExperiments[activeSubTab].output}
                      onChange={(e) => updateSubField(activeSubTab, 'output', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Explanation</label>
                    <textarea
                      className="form-textarea"
                      value={subExperiments[activeSubTab].explanation}
                      onChange={(e) => updateSubField(activeSubTab, 'explanation', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isProcessingImg}>
              <Check size={16} />
              <span>Update Experiment</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
