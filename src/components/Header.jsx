import React from 'react';
import StudentCard from './StudentCard';
import MbuLogo from './MbuLogo';
import { Database, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';

export default function Header({ student, onEditStudent }) {
  return (
    <header className="pro-header-wrapper">
      <div className="pro-brand-section">
        {/* MBU Academic Institution Tag */}
        <div className="pro-university-badge">
          <MbuLogo size={28} />
          <div className="university-badge-text">
            <span className="univ-name">MOHAN BABU UNIVERSITY</span>
            <span className="univ-dept">School of Computing • Department of Data Science</span>
          </div>
          <span className="pill-divider">•</span>
          <span className="pill-session">AY 2026–2027</span>
        </div>

        <div className="pro-heading-group">
          <h1 className="pro-main-title">
            DS LAB
            <span className="title-teal-dot" />
          </h1>
          <p className="pro-sub-title">
            Data Science Laboratory
          </p>
          <p className="pro-sub-desc">
            Continuous practical evaluation, algorithm implementations, and experimental analytics workbench.
          </p>
        </div>

        <div className="pro-tags-row">
          <span className="pro-quick-tag">
            <BookOpen size={13} />
            <span>Python 3.11</span>
          </span>
          <span className="pro-quick-tag">
            <Database size={13} />
            <span>Pandas &amp; Scikit-Learn</span>
          </span>
          <span className="pro-quick-tag">
            <ShieldCheck size={13} />
            <span>NBA &amp; NAAC Accredited Coursework</span>
          </span>
        </div>
      </div>

      <div className="pro-header-card-slot">
        <StudentCard student={student} onEdit={onEditStudent} />
      </div>
    </header>
  );
}
