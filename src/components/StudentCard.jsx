import React from 'react';
import MbuLogo from './MbuLogo';
import { Pencil, Github, ExternalLink, GraduationCap, ShieldCheck, Award } from 'lucide-react';

export default function StudentCard({ student, onEdit }) {
  return (
    <div className="pro-student-card">
      {/* Top University Ribbon */}
      <div className="student-card-ribbon">
        <div className="ribbon-brand">
          <MbuLogo size={16} />
          <span>MBU • STUDENT CREDENTIAL</span>
        </div>
        <div className="ribbon-status">
          <span className="status-ping" />
          <span>VERIFIED</span>
        </div>
      </div>

      <div className="student-card-inner">
        {/* Avatar section */}
        <div className="student-card-avatar-box">
          <div className="avatar-frame">
            <img 
              src={student.photo || '/student-default.jpg'} 
              alt={student.name || 'Student Photo'} 
              className="student-avatar-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/student-default.jpg';
              }}
            />
            <button 
              className="student-quick-edit-btn" 
              onClick={onEdit} 
              aria-label="Edit Student Profile"
              title="Edit Student Information"
            >
              <Pencil size={13} />
            </button>
          </div>
          <div className="student-roll-chip">{student.rollNo}</div>
        </div>

        {/* Info Column */}
        <div className="student-card-details">
          <div className="student-name-row">
            <h3 className="student-full-name">{student.name}</h3>
            <span className="student-badge-pill">
              <Award size={12} />
              <span>{student.branch || 'Data Science'}</span>
            </span>
          </div>

          <div className="student-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Section:</span>
              <span className="meta-value">{student.section || 'DS 2'}</span>
            </div>

            <div className="meta-item">
              <span className="meta-label">Faculty Mentor:</span>
              <span className="meta-value">{student.assistantProfessor || 'Mr. S Bosu Babu'}</span>
            </div>
          </div>

          {/* GitHub action button */}
          <div className="student-footer-action">
            <a 
              href={student.githubRepo || 'https://github.com'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="student-gh-button"
              title="Open Student's GitHub Repository"
            >
              <Github size={15} />
              <span>View Repository</span>
              <ExternalLink size={12} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
