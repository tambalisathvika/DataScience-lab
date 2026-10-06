import React from 'react';
import MbuLogo from './MbuLogo';
import { 
  User, Edit3, Github, ExternalLink, Printer, 
  CheckCircle2, Award, Calendar, BookOpen, ShieldCheck, 
  GraduationCap, Mail, Phone, MapPin 
} from 'lucide-react';

export default function StudentProfilePage({ 
  student, 
  onEditStudent, 
  experiments = [] 
}) {
  const completedCount = experiments.filter((e) => e.completed !== false).length;
  const progressPct = experiments.length > 0 
    ? Math.round((completedCount / experiments.length) * 100) 
    : 100;

  return (
    <div className="pro-profile-page">
      {/* Profile Overview Hero */}
      <div className="pro-card profile-hero-card">
        <div className="profile-hero-banner-strip" />
        
        <div className="profile-hero-content">
          <div className="profile-avatar-wrapper">
            <img
              src={student.photo || '/student-default.jpg'}
              alt={student.name}
              className="profile-avatar-large"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/student-default.jpg';
              }}
            />
            <button
              className="profile-avatar-edit-fab"
              onClick={onEditStudent}
              title="Edit Profile Information"
            >
              <Edit3 size={15} />
            </button>
          </div>

          <div className="profile-header-meta">
            <div className="profile-name-row">
              <h1 className="profile-full-name">{student.name}</h1>
              <span className="profile-verified-badge">
                <ShieldCheck size={14} style={{ color: '#10b981' }} />
                <span>Verified Candidate</span>
              </span>
            </div>

            <div className="profile-chips-line">
              <span className="profile-roll-pill">Roll No: {student.rollNo}</span>
              <span className="profile-section-pill">Section: {student.section}</span>
              <span className="profile-branch-pill">Department of {student.branch}</span>
            </div>

            <p className="profile-univ-line">
              <GraduationCap size={14} style={{ color: 'var(--primary-teal)' }} />
              <span>Mohan Babu University (MBU), Sree Sainath Nagar, Tirupati, A.P.</span>
            </p>
          </div>

          <div className="profile-hero-actions">
            <button
              className="btn-secondary"
              onClick={() => window.print()}
              title="Print Student Profile Record"
            >
              <Printer size={14} />
              <span>Print Credentials</span>
            </button>

            <button
              className="btn-primary"
              onClick={onEditStudent}
              title="Edit Student Information"
            >
              <Edit3 size={14} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid: Left ID Card Mockup, Right Academic Metrics */}
      <div className="profile-split-grid">
        {/* Left Column: Official University ID Card */}
        <div className="profile-left-col">
          <div className="pro-card official-id-card">
            {/* Top ID Card Header */}
            <div className="id-card-institution-header">
              <MbuLogo size={32} />
              <div className="id-inst-text">
                <span className="id-inst-title">MOHAN BABU UNIVERSITY</span>
                <span className="id-inst-sub">Continuous Laboratory Evaluation</span>
              </div>
            </div>

            {/* ID Card Body */}
            <div className="id-card-body">
              <div className="id-card-photo-box">
                <img
                  src={student.photo || '/student-default.jpg'}
                  alt={student.name}
                  className="id-card-photo-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/student-default.jpg';
                  }}
                />
                <span className="id-card-roll-caption">{student.rollNo}</span>
              </div>

              <div className="id-card-info-table">
                <div className="id-row">
                  <span className="id-lbl">Name:</span>
                  <span className="id-val name-val">{student.name}</span>
                </div>
                <div className="id-row">
                  <span className="id-lbl">Roll No:</span>
                  <span className="id-val code-val">{student.rollNo}</span>
                </div>
                <div className="id-row">
                  <span className="id-lbl">Section:</span>
                  <span className="id-val">{student.section}</span>
                </div>
                <div className="id-row">
                  <span className="id-lbl">Branch:</span>
                  <span className="id-val">{student.branch}</span>
                </div>
                <div className="id-row">
                  <span className="id-lbl">Faculty Mentor:</span>
                  <span className="id-val mentor-val">{student.assistantProfessor || 'Mr. S Bosu Babu'}</span>
                </div>
              </div>
            </div>

            {/* ID Card Footer */}
            <div className="id-card-footer">
              <a
                href={student.githubRepo || 'https://github.com/tambalisathvika'}
                target="_blank"
                rel="noopener noreferrer"
                className="id-github-link"
              >
                <Github size={14} />
                <span>View Candidate Repository</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Academic & Laboratory Performance Metrics */}
        <div className="profile-right-col">
          {/* Stats Metrics Cards */}
          <div className="profile-stats-grid">
            <div className="pro-card p-stat-box">
              <div className="p-stat-top">
                <span className="p-stat-label">Total Practicals</span>
                <BookOpen size={16} style={{ color: 'var(--primary-teal)' }} />
              </div>
              <span className="p-stat-value">{completedCount} / {experiments.length}</span>
              <span className="p-stat-sub">100% Course Syllabus</span>
            </div>

            <div className="pro-card p-stat-box">
              <div className="p-stat-top">
                <span className="p-stat-label">Lab Attendance</span>
                <Calendar size={16} style={{ color: '#10b981' }} />
              </div>
              <span className="p-stat-value" style={{ color: '#10b981' }}>100%</span>
              <span className="p-stat-sub">Regular Batch DS 2</span>
            </div>

            <div className="pro-card p-stat-box">
              <div className="p-stat-top">
                <span className="p-stat-label">Continuous Eval (CIE)</span>
                <Award size={16} style={{ color: '#f59e0b' }} />
              </div>
              <span className="p-stat-value">29 / 30</span>
              <span className="p-stat-sub">Grade: A+ (Outstanding)</span>
            </div>

            <div className="pro-card p-stat-box">
              <div className="p-stat-top">
                <span className="p-stat-label">Faculty In-Charge</span>
                <User size={16} style={{ color: '#6366f1' }} />
              </div>
              <span className="p-stat-value" style={{ fontSize: '1.05rem', marginTop: '0.4rem' }}>
                {student.assistantProfessor || 'Mr. S Bosu Babu'}
              </span>
              <span className="p-stat-sub">Assistant Professor</span>
            </div>
          </div>

          {/* Laboratory Records Log Table */}
          <div className="pro-card profile-history-card">
            <div className="history-header">
              <h3 className="history-title">Registered Laboratory Experiments</h3>
              <span className="history-count">{experiments.length} Experiments Verified</span>
            </div>

            <div className="table-responsive-wrapper">
              <table className="ds-table">
                <thead>
                  <tr>
                    <th>Exp #</th>
                    <th>Experiment Title</th>
                    <th>Sub-Modules</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {experiments.map((exp) => (
                    <tr key={exp.id}>
                      <td><strong>Exp {exp.number}</strong></td>
                      <td>{exp.title}</td>
                      <td>{exp.subExperiments ? exp.subExperiments.length : 0} Sessions</td>
                      <td>
                        <span className="badge-tag teal">Verified &amp; Evaluated</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
