import React from 'react';
import MbuLogo from './MbuLogo';
import { 
  FlaskConical, Layers, Wrench, Code2, User, 
  Pencil 
} from 'lucide-react';

export default function Navbar({ activeTab, onSelectTab, student, onEditStudent }) {
  return (
    <header className="pro-header-bar">
      <div className="pro-header-inner">
        {/* Left: Small MBU Logo + DS LAB Branding */}
        <div 
          className="header-brand-group" 
          onClick={() => onSelectTab('experiments')} 
          style={{ cursor: 'pointer' }}
          title="Mohan Babu University — DS LAB"
        >
          <MbuLogo size={28} />
          <div className="header-brand-divider" />
          <div className="header-brand-text">
            <span className="header-brand-title">DS LAB</span>
            <span className="header-brand-subtitle">Data Science Laboratory</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="header-nav-tabs">
          <button
            className={`header-tab-btn ${activeTab === 'experiments' ? 'active' : ''}`}
            onClick={() => onSelectTab('experiments')}
            title="Experiments"
          >
            <FlaskConical size={14} />
            <span>Experiments</span>
          </button>

          <button
            className={`header-tab-btn ${activeTab === 'modules' ? 'active' : ''}`}
            onClick={() => onSelectTab('modules')}
            title="Data Science Modules"
          >
            <Layers size={14} />
            <span>Modules</span>
          </button>

          <button
            className={`header-tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => onSelectTab('tools')}
            title="Data Science Tools"
          >
            <Wrench size={14} />
            <span>Tools</span>
          </button>

          <button
            className={`header-tab-btn ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => onSelectTab('editor')}
            title="Interactive Code Editor"
          >
            <Code2 size={14} />
            <span>Code Editor</span>
          </button>

          <button
            className={`header-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => onSelectTab('profile')}
            title="Student Profile"
          >
            <User size={14} />
            <span>Student Profile</span>
          </button>
        </nav>

        {/* Right: Compact Student Profile Badge */}
        <div className="header-student-profile-slot">
          <div 
            className="header-student-badge"
            onClick={() => onSelectTab('profile')}
            title="View Student Profile"
          >
            <img
              src={student.photo || '/student-default.jpg'}
              alt={student.name}
              className="header-student-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/student-default.jpg';
              }}
            />
            <div className="header-student-info">
              <span className="header-student-name">{student.name}</span>
              <span className="header-student-meta">{student.rollNo} • {student.section}</span>
            </div>
          </div>

          <button
            className="header-student-edit-btn"
            onClick={(e) => {
              e.stopPropagation();
              onEditStudent();
            }}
            title="Edit Student Information"
            aria-label="Edit Profile"
          >
            <Pencil size={12} />
          </button>
        </div>
      </div>
    </header>
  );
}
