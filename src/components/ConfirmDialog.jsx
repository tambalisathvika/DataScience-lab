import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

export default function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel} role="alertdialog" aria-modal="true">
      <div 
        className="modal-container" 
        style={{ maxWidth: '440px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#dc2626' }}>
            <AlertTriangle size={20} />
            <h3 className="modal-title" style={{ color: '#dc2626' }}>{title || 'Confirm Deletion'}</h3>
          </div>
          <button className="modal-close-btn" onClick={onCancel} aria-label="Close dialog">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" style={{ padding: '1.25rem 1.5rem' }}>
          <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {message || 'Are you sure you want to delete this experiment? This action cannot be reversed.'}
          </p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button 
            type="button" 
            className="btn-primary" 
            style={{ background: '#dc2626', borderColor: '#b91c1c' }}
            onClick={onConfirm}
          >
            <Trash2 size={16} />
            <span>Delete Permanently</span>
          </button>
        </div>
      </div>
    </div>
  );
}
