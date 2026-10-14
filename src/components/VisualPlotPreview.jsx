import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Calendar, 
  Globe, 
  Layers, 
  ArrowRight,
  GitMerge,
  Shuffle,
  Maximize2,
  FolderTree,
  Activity
} from 'lucide-react';

export default function VisualPlotPreview({ plotType, title }) {
  // =========================================================================
  // EXPERIMENT 4: DATA WRANGLING & HIERARCHICAL INDEXING
  // =========================================================================

  // 4A. Hierarchical Series Indexing Bar Plot
  if (plotType === 'hierarchical_bar') {
    const bars = [
      { dept: 'Engineering', branch: 'CSE', score: 85, x: 90, h: 120, color: '#0d9488' },
      { dept: 'Engineering', branch: 'ECE', score: 78, x: 165, h: 105, color: '#14b8a6' },
      { dept: 'Science', branch: 'Physics', score: 92, x: 275, h: 135, color: '#0284c7' },
      { dept: 'Science', branch: 'Chemistry', score: 88, x: 350, h: 128, color: '#38bdf8' }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <FolderTree size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Hierarchical Series Indexing (Department → Branch)</span>
          </div>
          <span className="plot-engine-tag">pd.MultiIndex.from_arrays()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            <line x1="50" y1="40" x2="450" y2="40" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="90" x2="450" y2="90" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="140" x2="450" y2="140" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="450" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis ticks */}
            <text x="42" y="44" fontSize="10" textAnchor="end" fill="#64748b">100</text>
            <text x="42" y="94" fontSize="10" textAnchor="end" fill="#64748b">75</text>
            <text x="42" y="144" fontSize="10" textAnchor="end" fill="#64748b">50</text>
            <text x="42" y="180" fontSize="10" textAnchor="end" fill="#64748b">0</text>

            {/* Bars */}
            {bars.map((b, idx) => (
              <g key={idx}>
                <rect 
                  x={b.x} 
                  y={180 - b.h} 
                  width="48" 
                  height={b.h} 
                  rx="4" 
                  fill={b.color}
                  opacity="0.9"
                />
                <rect x={b.x + 8} y={180 - b.h - 22} width="32" height="18" rx="4" fill="#0f172a" />
                <text x={b.x + 24} y={180 - b.h - 10} fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">
                  {b.score}
                </text>
                <text x={b.x + 24} y="196" fontSize="10" textAnchor="middle" fill="#1e293b" fontWeight="600">
                  {b.branch}
                </text>
              </g>
            ))}

            {/* Hierarchical Grouping Brackets */}
            {/* Engineering Bracket */}
            <path d="M 85,208 L 85,214 L 155,214 L 155,220 L 155,214 L 220,214 L 220,208" fill="none" stroke="#0d9488" strokeWidth="1.5" />
            <text x="155" y="232" fontSize="10" textAnchor="middle" fill="#0d9488" fontWeight="700">Engineering Dept</text>

            {/* Science Bracket */}
            <path d="M 270,208 L 270,214 L 340,214 L 340,220 L 340,214 L 405,214 L 405,208" fill="none" stroke="#0284c7" strokeWidth="1.5" />
            <text x="340" y="232" fontSize="10" textAnchor="middle" fill="#0284c7" fontWeight="700">Science Dept</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 4A.1: Multi-tiered Series indexing enabling grouped outer level slicing and scalar coordinate selection.</span>
        </div>
      </div>
    );
  }

  // 4B. Tabular Reshaping Flow (unstack ⇄ stack)
  if (plotType === 'unstack_stack_flow') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Shuffle size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Tabular Reshaping Flow (unstack ⇄ stack)</span>
          </div>
          <span className="plot-engine-tag">Pandas Matrix Pivot</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Left: Long/Tall Format */}
            <rect x="25" y="30" width="180" height="175" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="25" y="30" width="180" height="28" rx="8" fill="#0f172a" />
            <text x="115" y="48" fontSize="11" textAnchor="middle" fill="#ffffff" fontWeight="700">Stacked / Long Format</text>
            
            {/* Headers */}
            <text x="35" y="74" fontSize="9" fill="#64748b" fontWeight="600">Dept</text>
            <text x="80" y="74" fontSize="9" fill="#64748b" fontWeight="600">Branch</text>
            <text x="135" y="74" fontSize="9" fill="#64748b" fontWeight="600">2025</text>
            <text x="175" y="74" fontSize="9" fill="#64748b" fontWeight="600">2026</text>
            <line x1="30" y1="80" x2="195" y2="80" stroke="#e2e8f0" />

            {/* Rows */}
            <text x="35" y="100" fontSize="9" fill="#0d9488" fontWeight="600">Eng</text>
            <text x="80" y="100" fontSize="9" fill="#334155">CSE</text>
            <text x="140" y="100" fontSize="9" fill="#0f172a" fontWeight="700">85</text>
            <text x="180" y="100" fontSize="9" fill="#0f172a" fontWeight="700">90</text>

            <text x="35" y="125" fontSize="9" fill="#0d9488" fontWeight="600">Eng</text>
            <text x="80" y="125" fontSize="9" fill="#334155">ECE</text>
            <text x="140" y="125" fontSize="9" fill="#0f172a" fontWeight="700">78</text>
            <text x="180" y="125" fontSize="9" fill="#0f172a" fontWeight="700">82</text>

            <text x="35" y="150" fontSize="9" fill="#0284c7" fontWeight="600">Sci</text>
            <text x="80" y="150" fontSize="9" fill="#334155">Physics</text>
            <text x="140" y="150" fontSize="9" fill="#0f172a" fontWeight="700">92</text>
            <text x="180" y="150" fontSize="9" fill="#0f172a" fontWeight="700">95</text>

            <text x="35" y="175" fontSize="9" fill="#0284c7" fontWeight="600">Sci</text>
            <text x="80" y="175" fontSize="9" fill="#334155">Chem</text>
            <text x="140" y="175" fontSize="9" fill="#0f172a" fontWeight="700">88</text>
            <text x="180" y="175" fontSize="9" fill="#0f172a" fontWeight="700">91</text>

            {/* Center: Bidirectional Arrows */}
            {/* unstack() arrow */}
            <path d="M 215,95 L 265,95" fill="none" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#arrowTeal)" />
            <polygon points="275,95 263,90 263,100" fill="#0d9488" />
            <text x="245" y="85" fontSize="9" textAnchor="middle" fill="#0d9488" fontWeight="700">unstack()</text>

            {/* stack() arrow */}
            <polygon points="215,145 227,140 227,150" fill="#6366f1" />
            <path d="M 225,145 L 275,145" fill="none" stroke="#6366f1" strokeWidth="2.5" />
            <text x="245" y="160" fontSize="9" textAnchor="middle" fill="#6366f1" fontWeight="700">stack()</text>

            {/* Right: Wide / Unstacked Format */}
            <rect x="290" y="30" width="185" height="175" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="290" y="30" width="185" height="28" rx="8" fill="#0f172a" />
            <text x="382" y="48" fontSize="11" textAnchor="middle" fill="#ffffff" fontWeight="700">Unstacked / Wide Format</text>

            {/* MultiIndex Columns representation */}
            <text x="300" y="74" fontSize="9" fill="#64748b" fontWeight="600">Dept</text>
            <text x="345" y="74" fontSize="9" fill="#0d9488" fontWeight="600">CSE (25/26)</text>
            <text x="415" y="74" fontSize="9" fill="#0284c7" fontWeight="600">Sci (25/26)</text>
            <line x1="295" y1="80" x2="470" y2="80" stroke="#e2e8f0" />

            <text x="300" y="110" fontSize="9" fill="#0d9488" fontWeight="700">Engineering</text>
            <rect x="345" y="97" width="55" height="18" rx="3" fill="#ccfbf1" />
            <text x="372" y="110" fontSize="9" textAnchor="middle" fill="#0f766e" fontWeight="700">85.0 / 90.0</text>
            <rect x="415" y="97" width="45" height="18" rx="3" fill="#fee2e2" />
            <text x="437" y="110" fontSize="9" textAnchor="middle" fill="#b91c1c" fontWeight="600">NaN</text>

            <text x="300" y="150" fontSize="9" fill="#0284c7" fontWeight="700">Science</text>
            <rect x="345" y="137" width="55" height="18" rx="3" fill="#fee2e2" />
            <text x="372" y="150" fontSize="9" textAnchor="middle" fill="#b91c1c" fontWeight="600">NaN</text>
            <rect x="415" y="137" width="45" height="18" rx="3" fill="#e0f2fe" />
            <text x="437" y="150" fontSize="9" textAnchor="middle" fill="#0369a1" fontWeight="700">92.0 / 95.0</text>

            <text x="382" y="190" fontSize="8.5" textAnchor="middle" fill="#64748b" fontStyle="italic">Inner row index rotated to columns</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 4B.1: Reversible matrix reshaping: unstack() pivots row levels to columns; stack() restores hierarchical row index.</span>
        </div>
      </div>
    );
  }

  // 4C. Overlapping Imputation Bar Plot (combine_first)
  if (plotType === 'combine_first_bars') {
    const students = [
      { id: '101: Ravi', df1: 85, df2: 90, combined: 85, imputed: false },
      { id: '102: Sita', df1: 0, df2: 88, combined: 88, imputed: true },
      { id: '103: Arun', df1: 78, df2: 0, combined: 78, imputed: false },
      { id: '104: Kiran', df1: 0, df2: 82, combined: 82, imputed: true }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <GitMerge size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Overlapping DataFrame Imputation (combine_first)</span>
          </div>
          <span className="plot-engine-tag">df1.combine_first(df2)</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            <line x1="50" y1="40" x2="460" y2="40" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="90" x2="460" y2="90" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="140" x2="460" y2="140" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="460" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis */}
            <text x="42" y="44" fontSize="10" textAnchor="end" fill="#64748b">100</text>
            <text x="42" y="94" fontSize="10" textAnchor="end" fill="#64748b">75</text>
            <text x="42" y="144" fontSize="10" textAnchor="end" fill="#64748b">50</text>
            <text x="42" y="180" fontSize="10" textAnchor="end" fill="#64748b">0</text>

            {/* Bars for 4 students */}
            {students.map((s, idx) => {
              const startX = 75 + idx * 95;
              const df1H = (s.df1 / 100) * 140;
              const df2H = (s.df2 / 100) * 140;
              const combH = (s.combined / 100) * 140;

              return (
                <g key={idx}>
                  {/* DF1 Bar (Amber) */}
                  {s.df1 > 0 ? (
                    <rect x={startX} y={180 - df1H} width="22" height={df1H} rx="3" fill="#f59e0b" opacity="0.6" />
                  ) : (
                    <rect x={startX} y="170" width="22" height="10" rx="2" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                  )}

                  {/* DF2 Bar (Sky Blue) */}
                  {s.df2 > 0 ? (
                    <rect x={startX + 25} y={180 - df2H} width="22" height={df2H} rx="3" fill="#0284c7" opacity="0.6" />
                  ) : (
                    <rect x={startX + 25} y="170" width="22" height="10" rx="2" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                  )}

                  {/* Combined Result Bar (Teal) */}
                  <rect x={startX + 50} y={180 - combH} width="24" height={combH} rx="3" fill="#0d9488" />
                  <text x={startX + 62} y={180 - combH - 6} fontSize="10" textAnchor="middle" fill="#0d9488" fontWeight="800">
                    {s.combined}
                  </text>

                  {s.imputed && (
                    <g>
                      <circle cx={startX + 62} cy={180 - combH - 18} r="5" fill="#f59e0b" />
                      <text x={startX + 62} y={180 - combH - 15} fontSize="8" textAnchor="middle" fill="#ffffff" fontWeight="900">★</text>
                    </g>
                  )}

                  <text x={startX + 48} y="196" fontSize="9" textAnchor="middle" fill="#1e293b" fontWeight="600">
                    {s.id}
                  </text>
                </g>
              );
            })}

            {/* Legend */}
            <rect x="90" y="215" width="10" height="10" rx="2" fill="#f59e0b" opacity="0.6" />
            <text x="105" y="224" fontSize="9" fill="#64748b">DF1 (Primary)</text>

            <rect x="185" y="215" width="10" height="10" rx="2" fill="#0284c7" opacity="0.6" />
            <text x="200" y="224" fontSize="9" fill="#64748b">DF2 (Fallback)</text>

            <rect x="280" y="215" width="10" height="10" rx="2" fill="#0d9488" />
            <text x="295" y="224" fontSize="9" fill="#0f172a" fontWeight="700">Combined Result (combine_first)</text>

            <circle cx="435" cy="220" r="4" fill="#f59e0b" />
            <text x="444" y="224" fontSize="9" fill="#f59e0b" fontWeight="700">★ Imputed NaN</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 4C.1: Non-null primary DataFrame values are preserved while null cells are automatically filled from secondary DataFrame.</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // EXPERIMENT 5: DATA VISUALIZATION WITH MATPLOTLIB & SEABORN
  // =========================================================================

  // 5A. Line Plot with Subplots and Annotations
  if (plotType === 'line_annotations_plot') {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const sales = [120, 150, 180, 160, 220, 250];
    const expenses = [80, 100, 120, 110, 140, 160];

    // Subplot 1 (Sales) coords: x from 70 to 420, y from 95 to 30
    const salesPts = sales.map((val, idx) => ({
      x: 70 + idx * 70,
      y: 95 - ((val - 100) / 160) * 65
    }));
    const salesD = `M ${salesPts.map(p => `${p.x},${p.y}`).join(' L ')}`;

    // Subplot 2 (Expenses) coords: x from 70 to 420, y from 195 to 130
    const expPts = expenses.map((val, idx) => ({
      x: 70 + idx * 70,
      y: 195 - ((val - 60) / 110) * 65
    }));
    const expD = `M ${expPts.map(p => `${p.x},${p.y}`).join(' L ')}`;

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <TrendingUp size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Dual Subplots with Extreme Value Annotations</span>
          </div>
          <span className="plot-engine-tag">plt.subplots(2, 1) & ax.annotate()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Top Subplot: Sales */}
            <text x="60" y="24" fontSize="10" fill="#0f172a" fontWeight="700">Subplot 1: Monthly Sales</text>
            <line x1="60" y1="30" x2="440" y2="30" stroke="#f1f5f9" strokeDasharray="2 2" />
            <line x1="60" y1="95" x2="440" y2="95" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="60" y1="28" x2="60" y2="95" stroke="#cbd5e1" strokeWidth="1" />
            <path d={salesD} fill="none" stroke="#0284c7" strokeWidth="2.5" />

            {salesPts.map((p, idx) => (
              <g key={`s-${idx}`}>
                <circle cx={p.x} cy={p.y} r="3.5" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
              </g>
            ))}

            {/* Sales Annotation Arrow */}
            <line x1="365" y1="42" x2="415" y2="33" stroke="#ef4444" strokeWidth="1.5" />
            <polygon points="418,32 409,30 411,37" fill="#ef4444" />
            <rect x="275" y="32" width="85" height="18" rx="3" fill="#fee2e2" stroke="#f87171" strokeWidth="1" />
            <text x="317" y="44" fontSize="8.5" textAnchor="middle" fill="#991b1b" fontWeight="700">Highest Sales: 250</text>

            {/* Bottom Subplot: Expenses */}
            <text x="60" y="124" fontSize="10" fill="#0f172a" fontWeight="700">Subplot 2: Monthly Expenses</text>
            <line x1="60" y1="130" x2="440" y2="130" stroke="#f1f5f9" strokeDasharray="2 2" />
            <line x1="60" y1="195" x2="440" y2="195" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="60" y1="128" x2="60" y2="195" stroke="#cbd5e1" strokeWidth="1" />
            <path d={expD} fill="none" stroke="#f59e0b" strokeWidth="2.5" />

            {expPts.map((p, idx) => (
              <g key={`e-${idx}`}>
                <rect x={p.x - 3} y={p.y - 3} width="6" height="6" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
                <text x={p.x} y="208" fontSize="9" textAnchor="middle" fill="#64748b">{months[idx]}</text>
              </g>
            ))}

            {/* Expenses Annotation Arrow */}
            <line x1="360" y1="145" x2="415" y2="133" stroke="#ef4444" strokeWidth="1.5" />
            <polygon points="418,132 409,130 411,137" fill="#ef4444" />
            <rect x="260" y="137" width="95" height="18" rx="3" fill="#fee2e2" stroke="#f87171" strokeWidth="1" />
            <text x="307" y="149" fontSize="8.5" textAnchor="middle" fill="#991b1b" fontWeight="700">Highest Expense: 160</text>

            {/* Resolution Stamp */}
            <rect x="150" y="220" width="200" height="16" rx="4" fill="#0f172a" />
            <text x="250" y="232" fontSize="9" textAnchor="middle" fill="#38bdf8" fontWeight="700">
              plt.savefig("monthly_sales_expenses.png", dpi=300)
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 5A.1: Multi-panel line plots with customized tick labels and Matplotlib arrow annotations.</span>
        </div>
      </div>
    );
  }

  // 5B. Grouped & Stacked Bar Plots
  if (plotType === 'grouped_stacked_bar') {
    const students = [
      { name: 'S1', py: 85, ja: 75, cpp: 80, tot: 240 },
      { name: 'S2', py: 90, ja: 82, cpp: 76, tot: 248 },
      { name: 'S3', py: 78, ja: 80, cpp: 85, tot: 243 },
      { name: 'S4', py: 88, ja: 85, cpp: 90, tot: 263 }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <BarChart3 size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Grouped (Side-by-Side) vs Stacked Bar Comparison</span>
          </div>
          <span className="plot-engine-tag">df.plot(kind='bar') & stacked=True</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Divider between Left (Grouped) and Right (Stacked) */}
            <line x1="250" y1="20" x2="250" y2="200" stroke="#e2e8f0" strokeDasharray="3 3" />

            {/* Left Side: Grouped Bar Plot */}
            <text x="135" y="25" fontSize="10.5" textAnchor="middle" fill="#0f172a" fontWeight="700">1. Grouped Bars (Side-by-Side)</text>
            <line x1="40" y1="180" x2="235" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="40" y1="40" x2="40" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {students.map((s, idx) => {
              const groupX = 55 + idx * 45;
              const pyH = (s.py / 100) * 120;
              const jaH = (s.ja / 100) * 120;
              const cpH = (s.cpp / 100) * 120;

              return (
                <g key={`grp-${idx}`}>
                  <rect x={groupX} y={180 - pyH} width="11" height={pyH} fill="#0d9488" rx="2" />
                  <rect x={groupX + 12} y={180 - jaH} width="11" height={jaH} fill="#f59e0b" rx="2" />
                  <rect x={groupX + 24} y={180 - cpH} width="11" height={cpH} fill="#6366f1" rx="2" />
                  <text x={groupX + 17} y="195" fontSize="9" textAnchor="middle" fill="#475569" fontWeight="600">{s.name}</text>
                </g>
              );
            })}

            {/* Right Side: Stacked Bar Plot */}
            <text x="375" y="25" fontSize="10.5" textAnchor="middle" fill="#0f172a" fontWeight="700">2. Stacked Bars (stacked=True)</text>
            <line x1="280" y1="180" x2="475" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="280" y1="40" x2="280" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {students.map((s, idx) => {
              const stackX = 305 + idx * 45;
              const pyH = (s.py / 300) * 135;
              const jaH = (s.ja / 300) * 135;
              const cpH = (s.cpp / 300) * 135;
              const totalH = pyH + jaH + cpH;

              return (
                <g key={`stk-${idx}`}>
                  {/* C++ (Top) */}
                  <rect x={stackX} y={180 - totalH} width="24" height={cpH} fill="#6366f1" rx="2" />
                  {/* Java (Middle) */}
                  <rect x={stackX} y={180 - pyH - jaH} width="24" height={jaH} fill="#f59e0b" />
                  {/* Python (Bottom) */}
                  <rect x={stackX} y={180 - pyH} width="24" height={pyH} fill="#0d9488" rx="2" />

                  {/* Total Label */}
                  <text x={stackX + 12} y={180 - totalH - 5} fontSize="9" textAnchor="middle" fill="#0f172a" fontWeight="700">{s.tot}</text>
                  <text x={stackX + 12} y="195" fontSize="9" textAnchor="middle" fill="#475569" fontWeight="600">{s.name}</text>
                </g>
              );
            })}

            {/* Shared Legend at Bottom */}
            <rect x="140" y="215" width="10" height="10" rx="2" fill="#0d9488" />
            <text x="155" y="224" fontSize="9" fill="#0f172a" fontWeight="600">Python</text>

            <rect x="220" y="215" width="10" height="10" rx="2" fill="#f59e0b" />
            <text x="235" y="224" fontSize="9" fill="#0f172a" fontWeight="600">Java</text>

            <rect x="295" y="215" width="10" height="10" rx="2" fill="#6366f1" />
            <text x="310" y="224" fontSize="9" fill="#0f172a" fontWeight="600">C++</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 5B.1: Grouped bar plot reveals subject-level variance; stacked bar plot emphasizes cumulative performance.</span>
        </div>
      </div>
    );
  }

  // 5C. Histogram & Density Plot (KDE)
  if (plotType === 'hist_kde_plot') {
    const bins = [
      { range: '45-53', count: 3, h: 75, x: 70 },
      { range: '54-61', count: 3, h: 75, x: 130 },
      { range: '62-69', count: 3, h: 75, x: 190 },
      { range: '70-77', count: 3, h: 75, x: 250 },
      { range: '78-85', count: 4, h: 100, x: 310 },
      { range: '86-95', count: 4, h: 100, x: 370 }
    ];

    // Smooth KDE curve line
    const kdePath = "M 50,180 C 80,160 110,135 160,130 C 210,125 250,120 300,95 C 340,75 380,80 410,120 C 430,150 445,175 460,180";
    const kdeArea = "M 50,180 C 80,160 110,135 160,130 C 210,125 250,120 300,95 C 340,75 380,80 410,120 C 430,150 445,175 460,180 L 460,180 L 50,180 Z";

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Activity size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Frequency Histogram & Continuous KDE Density Curve</span>
          </div>
          <span className="plot-engine-tag">sns.histplot(bins=6, kde=True)</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="kdeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid */}
            <line x1="50" y1="40" x2="450" y2="40" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="90" x2="450" y2="90" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="140" x2="450" y2="140" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="450" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis ticks */}
            <text x="42" y="44" fontSize="10" textAnchor="end" fill="#64748b">5</text>
            <text x="42" y="94" fontSize="10" textAnchor="end" fill="#64748b">3</text>
            <text x="42" y="144" fontSize="10" textAnchor="end" fill="#64748b">1</text>
            <text x="42" y="180" fontSize="10" textAnchor="end" fill="#64748b">0</text>

            {/* Histogram Bars */}
            {bins.map((b, idx) => (
              <g key={idx}>
                <rect 
                  x={b.x} 
                  y={180 - b.h} 
                  width="56" 
                  height={b.h} 
                  fill="#818cf8" 
                  opacity="0.45"
                  stroke="#6366f1"
                  strokeWidth="1"
                />
                <text x={b.x + 28} y={180 - b.h - 6} fontSize="9" textAnchor="middle" fill="#4338ca" fontWeight="700">
                  {b.count}
                </text>
                <text x={b.x + 28} y="196" fontSize="9" textAnchor="middle" fill="#475569" fontWeight="600">
                  {b.range}
                </text>
              </g>
            ))}

            {/* KDE Filled Area & Curve */}
            <path d={kdeArea} fill="url(#kdeGradient)" />
            <path d={kdePath} fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />

            {/* Legend */}
            <rect x="110" y="215" width="12" height="12" rx="2" fill="#818cf8" opacity="0.6" stroke="#6366f1" />
            <text x="130" y="225" fontSize="9.5" fill="#334155" fontWeight="600">Observed Frequency (bins=6)</text>

            <line x1="285" y1="221" x2="310" y2="221" stroke="#f43f5e" strokeWidth="3" />
            <text x="318" y="225" fontSize="9.5" fill="#be123c" fontWeight="700">Continuous Density Curve (KDE)</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 5C.1: Discrete frequency intervals (bins=6) combined with smooth Gaussian kernel density approximation.</span>
        </div>
      </div>
    );
  }

  // 5D. Scatter Plot & Pearson Correlation
  if (plotType === 'scatter_correlation_plot') {
    const pts = [
      { h: 1, m: 45, x: 75, y: 165 },
      { h: 2, m: 50, x: 112, y: 152 },
      { h: 3, m: 55, x: 150, y: 139 },
      { h: 4, m: 60, x: 188, y: 126 },
      { h: 5, m: 65, x: 225, y: 113 },
      { h: 6, m: 70, x: 262, y: 100 },
      { h: 7, m: 72, x: 300, y: 94 },
      { h: 8, m: 80, x: 338, y: 74 },
      { h: 9, m: 85, x: 375, y: 61 },
      { h: 10, m: 90, x: 412, y: 48 }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Maximize2 size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Bivariate Scatter Plot with Pearson Trendline</span>
          </div>
          <span className="plot-engine-tag">Pearson r = +1.00 (Exact Positive)</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid */}
            <line x1="50" y1="50" x2="450" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="100" x2="450" y2="100" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="150" x2="450" y2="150" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="180" x2="450" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis marks */}
            <text x="42" y="54" fontSize="10" textAnchor="end" fill="#64748b">90</text>
            <text x="42" y="104" fontSize="10" textAnchor="end" fill="#64748b">70</text>
            <text x="42" y="154" fontSize="10" textAnchor="end" fill="#64748b">50</text>

            {/* Trendline (dashed green) */}
            <line x1="60" y1="170" x2="430" y2="42" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 4" />

            {/* Points */}
            {pts.map((p, idx) => (
              <g key={idx}>
                <circle cx={p.x} cy={p.y} r="5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                <text x={p.x} y="196" fontSize="9" textAnchor="middle" fill="#64748b">{p.h}h</text>
              </g>
            ))}

            {/* Correlation Metric Callout Box */}
            <rect x="70" y="35" width="180" height="42" rx="6" fill="#0f172a" />
            <text x="80" y="52" fontSize="9.5" fill="#38bdf8" fontWeight="700">Pearson Correlation r = 1.00</text>
            <text x="80" y="68" fontSize="8.5" fill="#94a3b8">Strong Positive Linear Dependency</text>

            {/* Axis Titles */}
            <text x="250" y="215" fontSize="10" textAnchor="middle" fill="#1e293b" fontWeight="600">Study Hours</text>
            <text x="18" y="110" fontSize="10" textAnchor="middle" fill="#1e293b" fontWeight="600" transform="rotate(-90 18,110)">Marks</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 5D.1: Upward-trending coordinate scatter confirming exact linear association between study investment and scores.</span>
        </div>
      </div>
    );
  }

  // 5E. Categorical Box Plot
  if (plotType === 'boxplot_categorical') {
    const depts = [
      { name: 'CSE', min: 72, q1: 78, med: 85, q3: 88, max: 90, x: 120, color: '#0d9488' },
      { name: 'ECE', min: 65, q1: 70, med: 75, q3: 80, max: 82, x: 250, color: '#0284c7' },
      { name: 'EEE', min: 60, q1: 68, med: 72, q3: 76, max: 85, x: 380, color: '#f59e0b' }
    ];

    // Scale function: Mark 55 -> y=190, Mark 95 -> y=30 (range 40 marks over 160 px, so 4 px per mark)
    const getY = (val) => 190 - (val - 55) * 4;

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Layers size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Multi-Category Five-Number Summary Box Plot</span>
          </div>
          <span className="plot-engine-tag">sns.boxplot(x='Department', y='Marks')</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid */}
            <line x1="50" y1="50" x2="450" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="90" x2="450" y2="90" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="130" x2="450" y2="130" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="170" x2="450" y2="170" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="190" x2="450" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis ticks */}
            <text x="42" y="54" fontSize="10" textAnchor="end" fill="#64748b">90</text>
            <text x="42" y="94" fontSize="10" textAnchor="end" fill="#64748b">80</text>
            <text x="42" y="134" fontSize="10" textAnchor="end" fill="#64748b">70</text>
            <text x="42" y="174" fontSize="10" textAnchor="end" fill="#64748b">60</text>

            {/* Box plots */}
            {depts.map((d, idx) => {
              const yMin = getY(d.min);
              const yQ1 = getY(d.q1);
              const yMed = getY(d.med);
              const yQ3 = getY(d.q3);
              const yMax = getY(d.max);
              const boxW = 54;

              return (
                <g key={idx}>
                  {/* Whiskers (center vertical line) */}
                  <line x1={d.x} y1={yMin} x2={d.x} y2={yQ1} stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />
                  <line x1={d.x} y1={yQ3} x2={d.x} y2={yMax} stroke="#475569" strokeWidth="1.5" strokeDasharray="2 2" />

                  {/* Whisker Caps (horizontal min and max lines) */}
                  <line x1={d.x - 14} y1={yMin} x2={d.x + 14} y2={yMin} stroke="#475569" strokeWidth="1.5" />
                  <line x1={d.x - 14} y1={yMax} x2={d.x + 14} y2={yMax} stroke="#475569" strokeWidth="1.5" />

                  {/* IQR Box (Q1 to Q3) */}
                  <rect 
                    x={d.x - boxW / 2} 
                    y={yQ3} 
                    width={boxW} 
                    height={yQ1 - yQ3} 
                    rx="4" 
                    fill={d.color} 
                    opacity="0.25"
                    stroke={d.color}
                    strokeWidth="2"
                  />

                  {/* Median Line */}
                  <line x1={d.x - boxW / 2} y1={yMed} x2={d.x + boxW / 2} y2={yMed} stroke="#0f172a" strokeWidth="2.5" />

                  {/* Median Value Badge */}
                  <rect x={d.x + boxW / 2 + 5} y={yMed - 9} width="40" height="18" rx="3" fill="#0f172a" />
                  <text x={d.x + boxW / 2 + 25} y={yMed + 3} fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">
                    M: {d.med}
                  </text>

                  {/* Department Label */}
                  <text x={d.x} y="208" fontSize="11" textAnchor="middle" fill="#0f172a" fontWeight="700">{d.name}</text>
                  <text x={d.x} y="222" fontSize="8.5" textAnchor="middle" fill="#64748b">IQR: {d.q3 - d.q1} pts</text>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 5E.1: Department-wise comparative distribution displaying median marks, IQR dispersion, and extreme ranges.</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // EXPERIMENT 6: TIME SERIES ANALYSIS & FORECASTING
  // =========================================================================

  // 1. Time Series Line Plot (6A)
  if (plotType === 'time_series_line') {
    const points = [
      { date: 'Jan 01', val: 105.2, x: 60, y: 150 },
      { date: 'Jan 02', val: 108.5, x: 155, y: 110 },
      { date: 'Jan 03', val: 107.8, x: 250, y: 120 },
      { date: 'Jan 04', val: 112.0, x: 345, y: 60 },
      { date: 'Jan 05', val: 110.4, x: 440, y: 80 }
    ];

    const pathD = `M ${points.map(p => `${p.x},${p.y}`).join(' L ')}`;
    const areaD = `M ${points[0].x},${points[0].y} L ${points.slice(1).map(p => `${p.x},${p.y}`).join(' L ')} L 440,200 L 60,200 Z`;

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <TrendingUp size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Sensor_A Timestamp Telemetry (Jan 01 – Jan 05)</span>
          </div>
          <span className="plot-engine-tag">Matplotlib / Pandas Visualization</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="plotGradientTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="50" y1="50" x2="460" y2="50" stroke="#e2e8f0" strokeDasharray="3 3" />
            <line x1="50" y1="100" x2="460" y2="100" stroke="#e2e8f0" strokeDasharray="3 3" />
            <line x1="50" y1="150" x2="460" y2="150" stroke="#e2e8f0" strokeDasharray="3 3" />
            <line x1="50" y1="200" x2="460" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="40" x2="50" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y axis ticks */}
            <text x="42" y="55" fontSize="10" textAnchor="end" fill="#64748b">113.0</text>
            <text x="42" y="105" fontSize="10" textAnchor="end" fill="#64748b">109.0</text>
            <text x="42" y="155" fontSize="10" textAnchor="end" fill="#64748b">105.0</text>
            <text x="42" y="200" fontSize="10" textAnchor="end" fill="#64748b">101.0</text>

            {/* Area Fill */}
            <path d={areaD} fill="url(#plotGradientTeal)" />

            {/* Data Line */}
            <path d={pathD} fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Points & Labels */}
            {points.map((p, idx) => (
              <g key={idx}>
                <circle cx={p.x} cy={p.y} r="5" fill="#ffffff" stroke="#0d9488" strokeWidth="2.5" />
                <rect x={p.x - 18} y={p.y - 24} width="36" height="18" rx="4" fill="#0f172a" />
                <text x={p.x} y={p.y - 12} fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">
                  {p.val}
                </text>
                <text x={p.x} y="218" fontSize="10" textAnchor="middle" fill="#475569" fontWeight="600">
                  {p.date}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6A.1: Continuous time series line visualization demonstrating DatetimeIndex chronological ordering.</span>
        </div>
      </div>
    );
  }

  // 2. Date Range Grid / Frequency Plot (6B)
  if (plotType === 'date_range_grid') {
    const days = [
      { d: 'Thu 01/01', isB: true },
      { d: 'Fri 01/02', isB: true },
      { d: 'Sat 01/03', isB: false, weekend: true },
      { d: 'Sun 01/04', isB: false, weekend: true },
      { d: 'Mon 01/05', isB: true },
      { d: 'Tue 01/06', isB: true },
      { d: 'Wed 01/07', isB: true }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Calendar size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Calendar Day (freq='D') vs Business Day (freq='B') Grid</span>
          </div>
          <span className="plot-engine-tag">Temporal Offset Inspection</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Calendar Day row */}
            <text x="30" y="65" fontSize="11" fontWeight="700" fill="#0f172a">Calendar Day (freq='D')</text>
            <text x="30" y="80" fontSize="9" fill="#64748b">Continuous (7/7 Days)</text>

            {days.map((item, idx) => (
              <g key={`d-${idx}`}>
                <rect
                  x={160 + idx * 46}
                  y="45"
                  width="40"
                  height="44"
                  rx="6"
                  fill="#0d9488"
                  opacity="0.9"
                />
                <text x={180 + idx * 46} y="64" fontSize="8" textAnchor="middle" fill="#ffffff" fontWeight="600">
                  {item.d.split(' ')[0]}
                </text>
                <text x={180 + idx * 46} y="78" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">
                  {item.d.split(' ')[1]}
                </text>
              </g>
            ))}

            {/* Business Day row */}
            <text x="30" y="145" fontSize="11" fontWeight="700" fill="#0f172a">Business Day (freq='B')</text>
            <text x="30" y="160" fontSize="9" fill="#64748b">Excludes Sat & Sun</text>

            {days.map((item, idx) => (
              <g key={`b-${idx}`}>
                <rect
                  x={160 + idx * 46}
                  y="125"
                  width="40"
                  height="44"
                  rx="6"
                  fill={item.isB ? "#0d9488" : "#f1f5f9"}
                  stroke={item.isB ? "none" : "#cbd5e1"}
                  strokeDasharray={item.isB ? "none" : "2 2"}
                />
                <text
                  x={180 + idx * 46}
                  y="144"
                  fontSize="8"
                  textAnchor="middle"
                  fill={item.isB ? "#ffffff" : "#94a3b8"}
                  fontWeight="600"
                >
                  {item.d.split(' ')[0]}
                </text>
                <text
                  x={180 + idx * 46}
                  y="158"
                  fontSize="9"
                  textAnchor="middle"
                  fill={item.isB ? "#ffffff" : "#94a3b8"}
                  fontWeight="700"
                >
                  {item.isB ? item.d.split(' ')[1] : 'SKIPPED'}
                </text>
              </g>
            ))}

            <rect x="160" y="195" width="310" height="24" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="315" y="211" fontSize="9.5" textAnchor="middle" fill="#475569">
              Notice: Jan 03 & Jan 04 omitted from Business Day frequency automatically.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6B.1: Comparative temporal alignment showing automated exclusion of non-trading calendar dates.</span>
        </div>
      </div>
    );
  }

  // 3. Time Zone Localization and Conversion Map (6C)
  if (plotType === 'timezone_conversion_map') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Globe size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Multi-Timezone Temporal Coordinate Mapping</span>
          </div>
          <span className="plot-engine-tag">tz_localize & tz_convert</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Timeline base bar */}
            <line x1="40" y1="120" x2="460" y2="120" stroke="#0f172a" strokeWidth="2" strokeDasharray="4 4" />

            {/* US/Eastern Node */}
            <circle cx="100" cy="120" r="28" fill="#f8fafc" stroke="#0d9488" strokeWidth="3" />
            <Clock size={18} x="91" y="111" color="#0d9488" />
            <rect x="40" y="40" width="120" height="42" rx="6" fill="#0f172a" />
            <text x="100" y="56" fontSize="10" textAnchor="middle" fill="#38bdf8" fontWeight="700">US / Eastern</text>
            <text x="100" y="72" fontSize="10" textAnchor="middle" fill="#ffffff">09:30 AM (UTC-5)</text>
            <line x1="100" y1="82" x2="100" y2="92" stroke="#0d9488" strokeWidth="2" />
            <text x="100" y="165" fontSize="10" textAnchor="middle" fill="#475569" fontWeight="600">Wall Street Open</text>

            {/* UTC Hub Node */}
            <circle cx="250" cy="120" r="32" fill="#0d9488" stroke="#0f172a" strokeWidth="3" />
            <text x="250" y="125" fontSize="11" textAnchor="middle" fill="#ffffff" fontWeight="800">UTC</text>
            <rect x="190" y="165" width="120" height="42" rx="6" fill="#0f172a" />
            <text x="250" y="181" fontSize="10" textAnchor="middle" fill="#38bdf8" fontWeight="700">Universal Base</text>
            <text x="250" y="197" fontSize="10" textAnchor="middle" fill="#ffffff">14:30 UTC (+00:00)</text>
            <line x1="250" y1="152" x2="250" y2="165" stroke="#0d9488" strokeWidth="2" />

            {/* Asia/Kolkata Node */}
            <circle cx="400" cy="120" r="28" fill="#f8fafc" stroke="#0d9488" strokeWidth="3" />
            <Clock size={18} x="391" y="111" color="#0d9488" />
            <rect x="340" y="40" width="120" height="42" rx="6" fill="#0f172a" />
            <text x="400" y="56" fontSize="10" textAnchor="middle" fill="#38bdf8" fontWeight="700">Asia / Kolkata</text>
            <text x="400" y="72" fontSize="10" textAnchor="middle" fill="#ffffff">20:00 PM (UTC+5:30)</text>
            <line x1="400" y1="82" x2="400" y2="92" stroke="#0d9488" strokeWidth="2" />
            <text x="400" y="165" fontSize="10" textAnchor="middle" fill="#475569" fontWeight="600">IST Market Close</text>

            {/* Flow indicator */}
            <path d="M 130,120 L 215,120" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M 285,120 L 370,120" stroke="#0d9488" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6C.1: Precise temporal projection demonstrating zero data drift during cross-continental timezone translation.</span>
        </div>
      </div>
    );
  }

  // 4. Period Arithmetic and Period Range (6D)
  if (plotType === 'period_arithmetic_timeline') {
    const quarters = [
      { q: '2026Q1', span: 'Jan 01 – Mar 31' },
      { q: '2026Q2', span: 'Apr 01 – Jun 30' },
      { q: '2026Q3', span: 'Jul 01 – Sep 30' },
      { q: '2026Q4', span: 'Oct 01 – Dec 31' }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Layers size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Quarterly Period Arithmetic Horizon (p + n)</span>
          </div>
          <span className="plot-engine-tag">pandas.period_range()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Base timeline */}
            <line x1="30" y1="110" x2="470" y2="110" stroke="#cbd5e1" strokeWidth="3" />

            {quarters.map((item, idx) => (
              <g key={idx}>
                {/* Quarter block */}
                <rect
                  x={50 + idx * 105}
                  y="75"
                  width="90"
                  height="70"
                  rx="8"
                  fill="#ffffff"
                  stroke={idx === 0 ? "#0d9488" : "#94a3b8"}
                  strokeWidth={idx === 0 ? "2.5" : "1.5"}
                />
                <rect
                  x={50 + idx * 105}
                  y="75"
                  width="90"
                  height="26"
                  rx="8"
                  fill={idx === 0 ? "#0d9488" : "#f1f5f9"}
                />
                <text
                  x={95 + idx * 105}
                  y="92"
                  fontSize="11"
                  textAnchor="middle"
                  fill={idx === 0 ? "#ffffff" : "#0f172a"}
                  fontWeight="700"
                >
                  {item.q}
                </text>
                <text
                  x={95 + idx * 105}
                  y="122"
                  fontSize="8.5"
                  textAnchor="middle"
                  fill="#475569"
                  fontWeight="500"
                >
                  {item.span}
                </text>

                {/* Arithmetic jump arc */}
                {idx < 3 && (
                  <path
                    d={`M ${140 + idx * 105},70 Q ${155 + idx * 105},45 ${155 + idx * 105 + 15},70`}
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2"
                  />
                )}
              </g>
            ))}

            {/* Arithmetic label */}
            <text x="200" y="40" fontSize="10" fill="#0d9488" fontWeight="700">Period + 1 Shift (Step = 1 Quarter)</text>

            <rect x="50" y="170" width="405" height="36" rx="6" fill="#0f172a" />
            <text x="252" y="192" fontSize="9.5" textAnchor="middle" fill="#38bdf8" fontWeight="600">
              Period Range Result: 4 Quarters spanning 365 calendar days continuous.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6D.1: Interval span continuity showing mathematical vector increments across fiscal quarter periods.</span>
        </div>
      </div>
    );
  }

  // 5. Asfreq Realignment (6E)
  if (plotType === 'asfreq_conversion') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Sparkles size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Annual Period Anchor Boundary Transformation (asfreq)</span>
          </div>
          <span className="plot-engine-tag">Period.asfreq('M', how='start/end')</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Fiscal Year Container */}
            <rect x="40" y="45" width="420" height="50" rx="8" fill="#0d9488" opacity="0.12" stroke="#0d9488" strokeWidth="2" />
            <text x="250" y="75" fontSize="14" textAnchor="middle" fill="#0f172a" fontWeight="800">
              Fiscal Period: Period('2026', freq='A-DEC')
            </text>

            {/* Downward transformation forks */}
            <line x1="120" y1="95" x2="120" y2="135" stroke="#0d9488" strokeWidth="2" />
            <polygon points="120,140 115,130 125,130" fill="#0d9488" />

            <line x1="380" y1="95" x2="380" y2="135" stroke="#0d9488" strokeWidth="2" />
            <polygon points="380,140 375,130 385,130" fill="#0d9488" />

            {/* Start Transform Result Card */}
            <rect x="40" y="145" width="160" height="60" rx="8" fill="#0f172a" />
            <text x="120" y="168" fontSize="10" textAnchor="middle" fill="#38bdf8" fontWeight="700">how='start' (Anchor Initial)</text>
            <text x="120" y="190" fontSize="14" textAnchor="middle" fill="#ffffff" fontWeight="800">2026-01</text>

            {/* End Transform Result Card */}
            <rect x="300" y="145" width="160" height="60" rx="8" fill="#0f172a" />
            <text x="380" y="168" fontSize="10" textAnchor="middle" fill="#38bdf8" fontWeight="700">how='end' (Anchor Final)</text>
            <text x="380" y="190" fontSize="14" textAnchor="middle" fill="#ffffff" fontWeight="800">2026-12</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6E.1: Frequency down-projection with strict boundary alignment to initial and terminal sub-periods.</span>
        </div>
      </div>
    );
  }

  // 6. To_period Projection (6F)
  if (plotType === 'to_period_projection') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <ArrowRight size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Timestamp Point-to-Interval Discretization (to_period)</span>
          </div>
          <span className="plot-engine-tag">Series.to_period('M')</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Top row: Exact nanosecond timestamps */}
            <rect x="40" y="40" width="125" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="102" y="60" fontSize="9" textAnchor="middle" fill="#64748b">Instantaneous Point</text>
            <text x="102" y="75" fontSize="10" textAnchor="middle" fill="#0f172a" fontWeight="700">2026-01-01 09:30:15</text>

            <rect x="185" y="40" width="125" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="247" y="60" fontSize="9" textAnchor="middle" fill="#64748b">Instantaneous Point</text>
            <text x="247" y="75" fontSize="10" textAnchor="middle" fill="#0f172a" fontWeight="700">2026-01-15 14:22:00</text>

            <rect x="330" y="40" width="125" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <text x="392" y="60" fontSize="9" textAnchor="middle" fill="#64748b">Instantaneous Point</text>
            <text x="392" y="75" fontSize="10" textAnchor="middle" fill="#0f172a" fontWeight="700">2026-01-31 23:59:59</text>

            {/* Ingestion Arrows into Period Container */}
            <path d="M 102,85 L 180,135" stroke="#0d9488" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M 247,85 L 247,135" stroke="#0d9488" strokeWidth="2" />
            <path d="M 392,85 L 315,135" stroke="#0d9488" strokeWidth="2" strokeDasharray="3 3" />

            {/* Bottom: Coalesced Period Interval */}
            <rect x="60" y="145" width="380" height="55" rx="10" fill="#0f172a" stroke="#0d9488" strokeWidth="2" />
            <text x="250" y="170" fontSize="11" textAnchor="middle" fill="#38bdf8" fontWeight="700">
              Coalesced Monthly Interval Period: to_period('M')
            </text>
            <text x="250" y="188" fontSize="14" textAnchor="middle" fill="#ffffff" fontWeight="800">
              2026-01 (All timestamps map into single period)
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6F.1: Projection demonstrating aggregation of dispersed nanosecond points into unified fiscal periods.</span>
        </div>
      </div>
    );
  }

  // 7. Resampling, Downsampling and Upsampling (6G)
  if (plotType === 'resample_downsampling') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <TrendingUp size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Daily Sensor Volatility vs Weekly Downsampled Trend</span>
          </div>
          <span className="plot-engine-tag">resample('W').mean()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid */}
            <line x1="40" y1="50" x2="460" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="40" y1="100" x2="460" y2="100" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="40" y1="150" x2="460" y2="150" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="40" y1="190" x2="460" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* High frequency daily volatile curve (thin dashed gray) */}
            <path
              d="M 50,140 L 70,120 L 90,150 L 110,130 L 130,125 L 150,145 L 170,110 L 190,135 L 210,105 L 230,120 L 250,90 L 270,115 L 290,80 L 310,95 L 330,70 L 350,85 L 370,60 L 390,75 L 410,50 L 430,65 L 450,45"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />

            {/* Downsampled Weekly Mean curve (thick solid teal) */}
            <path
              d="M 50,140 L 130,130 L 210,105 L 290,80 L 370,62 L 450,48"
              fill="none"
              stroke="#0d9488"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Legend */}
            <circle cx="80" cy="210" r="4" fill="#94a3b8" />
            <text x="90" y="214" fontSize="10" fill="#64748b">Raw Daily Readings (Volatile)</text>

            <circle cx="270" cy="210" r="5" fill="#0d9488" />
            <text x="282" y="214" fontSize="10" fill="#0f172a" fontWeight="700">Downsampled Weekly Mean (.mean())</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6G.1: Noise reduction achieved via temporal downsampling over irregular daily sensor variations.</span>
        </div>
      </div>
    );
  }

  // Fallback default plot
  return (
    <div className="visual-plot-card">
      <div className="plot-header-bar">
        <span className="plot-title-text">Visual Plot: {title || 'Experimental Visual Output'}</span>
        <span className="plot-engine-tag">Verification Metric</span>
      </div>
      <div className="svg-plot-container default-plot-placeholder">
        <BarChart3 size={32} style={{ color: '#0d9488', marginBottom: '0.5rem' }} />
        <span>Computational execution diagnostic graph rendered successfully.</span>
      </div>
    </div>
  );
}
