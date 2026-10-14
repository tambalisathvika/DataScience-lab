import React from 'react';
import MbuLogo from './MbuLogo';
import { Pencil, Github, ExternalLink, GraduationCap, ShieldCheck, Award, Linkedin, Globe, Code2, FileText } from 'lucide-react';

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

          {/* Profile Links & Quick Actions */}
          <div className="student-footer-action" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              <a 
                href={student.portfolioUrl || 'https://portfolio-indol-omega-hu7kdhu3ks.vercel.app'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="student-gh-button"
                style={{ background: '#f0fdfa', color: '#0f766e', borderColor: '#ccfbf1', padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                title="Open Personal Portfolio"
              >
                <Globe size={13} style={{ color: '#0f766e' }} />
                <span>Portfolio</span>
                <ExternalLink size={10} style={{ opacity: 0.7 }} />
              </a>

              <a 
                href={student.leetcodeUrl || 'https://leetcode.com/u/tambalisathvika/'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="student-gh-button"
                style={{ background: '#fffbeb', color: '#b45309', borderColor: '#fef3c7', padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                title="Open LeetCode Profile"
              >
                <Code2 size={13} style={{ color: '#f59e0b' }} />
                <span>LeetCode</span>
                <ExternalLink size={10} style={{ opacity: 0.7 }} />
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
              <a 
                href={student.githubRepo || 'https://github.com/tambalisathvika'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="student-gh-button"
                style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                title="Open Student's GitHub Repository"
              >
                <Github size={13} />
                <span>GitHub</span>
                <ExternalLink size={10} style={{ opacity: 0.7 }} />
              </a>

              <a 
                href={student.linkedinUrl || 'https://www.linkedin.com/in/tambali-sathvika'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="student-gh-button"
                style={{ background: '#f0f7fd', color: '#0a66c2', borderColor: '#cbe4f9', padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                title="Open Student's LinkedIn Profile"
              >
                <Linkedin size={13} />
                <span>LinkedIn</span>
                <ExternalLink size={10} style={{ opacity: 0.7 }} />
              </a>
            </div>

            <a 
              href={student.resumeUrl || '/Tambali_Sathvika_Resume.pdf'} 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Tambali_Sathvika_Resume.pdf"
              className="student-gh-button"
              style={{ background: '#f8fafc', color: '#334155', borderColor: '#e2e8f0', padding: '0.4rem 0.6rem', fontSize: '0.8rem', justifyContent: 'center' }}
              title="Download Student Resume (PDF)"
            >
              <FileText size={13} style={{ color: '#0f766e' }} />
              <span>Download Resume (PDF)</span>
              <ExternalLink size={10} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
