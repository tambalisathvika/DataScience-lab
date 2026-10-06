import React, { useState } from 'react';
import { X, Upload, Check, AlertCircle } from 'lucide-react';
import { compressImage } from '../utils/storage';

export default function EditStudentModal({ isOpen, onClose, student, onSave }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({ ...student });
  const [photoPreview, setPhotoPreview] = useState(student.photo || '/student-default.jpg');
  const [isProcessingImg, setIsProcessingImg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsProcessingImg(true);
      setErrorMsg('');
      // Compress to max 300x300 for student profile avatar
      const compressed = await compressImage(file, 300, 300, 0.85);
      setPhotoPreview(compressed);
      setFormData((prev) => ({ ...prev, photo: compressed }));
    } catch (err) {
      console.error('Image compression failed:', err);
      setErrorMsg('Failed to process image file. Please choose a valid image.');
    } finally {
      setIsProcessingImg(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.rollNo.trim()) {
      setErrorMsg('Name and Roll Number are required.');
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Edit Student ID Card</h3>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {errorMsg && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', fontSize: '0.85rem', background: '#fef2f2', padding: '0.6rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Photo Upload */}
            <div className="form-group">
              <label className="form-label">Student Photo</label>
              <div className="photo-upload-container">
                <img 
                  src={photoPreview} 
                  alt="Student Preview" 
                  className="photo-preview"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/student-default.jpg';
                  }}
                />
                <div>
                  <label className="upload-btn-label">
                    <Upload size={16} />
                    <span>{isProcessingImg ? 'Processing...' : 'Upload New Photo'}</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      style={{ display: 'none' }} 
                      onChange={handlePhotoUpload} 
                      disabled={isProcessingImg}
                    />
                  </label>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                    JPG, PNG or WebP. Auto-optimized for instant persistence.
                  </p>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name" 
                className="form-input" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Roll Number</label>
              <input 
                type="text" 
                name="rollNo" 
                className="form-input" 
                value={formData.rollNo} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Section</label>
                <input 
                  type="text" 
                  name="section" 
                  className="form-input" 
                  value={formData.section} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Branch</label>
                <input 
                  type="text" 
                  name="branch" 
                  className="form-input" 
                  value={formData.branch} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Assistant Professor / Faculty In-Charge</label>
              <input 
                type="text" 
                name="assistantProfessor" 
                className="form-input" 
                value={formData.assistantProfessor} 
                onChange={handleInputChange} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">GitHub Repository URL</label>
              <input 
                type="url" 
                name="githubRepo" 
                className="form-input" 
                value={formData.githubRepo} 
                onChange={handleInputChange} 
                placeholder="https://github.com/username/repository"
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={isProcessingImg}>
              <Check size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
