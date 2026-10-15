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
  Activity,
  FileText,
  Braces,
  FileSpreadsheet,
  Server,
  Database,
  Filter,
  SlidersHorizontal,
  AlertTriangle,
  Search
} from 'lucide-react';

export default function VisualPlotPreview({ plotType, title }) {

  // =========================================================================
  // EXPERIMENT 1: DATA INGESTION & FILE STORAGE FORMATS
  // =========================================================================

  // 1A. Text & Delimited Stream Parsing (1A)
  if (plotType === 'text_delimited_stream') {
    const records = [
      { id: '101', name: 'Aarav Sharma', dept: 'Data Science', gpa: '8.92', att: '94.5%' },
      { id: '102', name: 'Diya Reddy', dept: 'Data Science', gpa: '9.15', att: '96.0%' },
      { id: '103', name: 'Rohan Verma', dept: 'Computer Science', gpa: '7.85', att: '88.0%' },
      { id: '104', name: 'Ananya Patel', dept: 'Electronics', gpa: '8.40', att: '91.5%' }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <FileText size={15} style={{ color: '#818cf8' }} />
            <span className="plot-title-text">Visual Plot: CSV Character Stream to DataFrame Matrix</span>
          </div>
          <span className="plot-engine-tag">pd.read_csv(sep=',')</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Raw Character Stream Box (Top) */}
            <rect x="25" y="20" width="450" height="42" rx="6" fill="#0f172a" stroke="#4338ca" strokeWidth="1.5" />
            <text x="35" y="36" fontSize="9" fill="#818cf8" fontWeight="700">RAW FILE BUFFER STREAM (Delimiter = Comma)</text>
            <text x="35" y="52" fontSize="9.5" fill="#e0e7ff" fontFamily="monospace">
              101<tspan fill="#f43f5e">,</tspan>Aarav Sharma<tspan fill="#f43f5e">,</tspan>Data Science<tspan fill="#f43f5e">,</tspan>8.92<tspan fill="#f43f5e">,</tspan>94.5<tspan fill="#38bdf8">\n</tspan>102<tspan fill="#f43f5e">,</tspan>Diya Reddy...
            </text>

            {/* Parsing Ingestion Funnel Arrow */}
            <path d="M 250,65 L 250,90" stroke="#818cf8" strokeWidth="2.5" />
            <polygon points="250,95 245,85 255,85" fill="#818cf8" />
            <text x="270" y="82" fontSize="9" fill="#c7d2fe" fontWeight="600">C-Engine Tokenizer</text>

            {/* Tabular DataFrame Grid (Bottom) */}
            <rect x="25" y="100" width="450" height="110" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="25" y="100" width="450" height="24" rx="8" fill="#1e1b4b" />
            
            {/* Headers */}
            <text x="45" y="116" fontSize="9" fill="#e0e7ff" fontWeight="700">StudentID</text>
            <text x="130" y="116" fontSize="9" fill="#e0e7ff" fontWeight="700">StudentName</text>
            <text x="245" y="116" fontSize="9" fill="#e0e7ff" fontWeight="700">Department</text>
            <text x="360" y="116" fontSize="9" fill="#e0e7ff" fontWeight="700">CGPA</text>
            <text x="425" y="116" fontSize="9" fill="#e0e7ff" fontWeight="700">Attendance</text>
            <line x1="25" y1="124" x2="475" y2="124" stroke="#e2e8f0" />

            {/* Rows */}
            {records.map((r, idx) => (
              <g key={idx}>
                <text x="45" y={142 + idx * 18} fontSize="9" fill="#4338ca" fontWeight="700">{r.id}</text>
                <text x="130" y={142 + idx * 18} fontSize="9" fill="#1e293b" fontWeight="600">{r.name}</text>
                <text x="245" y={142 + idx * 18} fontSize="9" fill="#64748b">{r.dept}</text>
                <text x="360" y={142 + idx * 18} fontSize="9" fill="#0d9488" fontWeight="700">{r.gpa}</text>
                <text x="425" y={142 + idx * 18} fontSize="9" fill="#0284c7" fontWeight="600">{r.att}</text>
                {idx < 3 && <line x1="30" y1={148 + idx * 18} x2="470" y2={148 + idx * 18} stroke="#f1f5f9" />}
              </g>
            ))}

            <text x="250" y="225" fontSize="8.5" textAnchor="middle" fill="#64748b" fontStyle="italic">
              High-performance vectorized memory allocation into contiguous 2D NumPy array buffers.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 1A.1: Delimited text parser decoding byte streams into indexed Pandas Series columns.</span>
        </div>
      </div>
    );
  }

  // 1B. JSON Tree to Matrix (1B)
  if (plotType === 'json_tree_matrix') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Braces size={15} style={{ color: '#c084fc' }} />
            <span className="plot-title-text">Visual Plot: Hierarchical JSON to Normalized Flat Matrix</span>
          </div>
          <span className="plot-engine-tag">pd.json_normalize()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Left: Nested JSON Object Tree */}
            <rect x="25" y="25" width="200" height="185" rx="8" fill="#0f172a" stroke="#7e22ce" strokeWidth="1.5" />
            <rect x="25" y="25" width="200" height="26" rx="8" fill="#581c87" />
            <text x="125" y="42" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">Hierarchical JSON Object</text>
            
            <text x="35" y="68" fontSize="9" fill="#c084fc" fontFamily="monospace">{"{"}</text>
            <text x="45" y="85" fontSize="9" fill="#e9d5ff" fontFamily="monospace">"id": "DS201",</text>
            <text x="45" y="102" fontSize="9" fill="#e9d5ff" fontFamily="monospace">"name": "Kavya Murthy",</text>
            <text x="45" y="120" fontSize="9" fill="#38bdf8" fontFamily="monospace">"scores": {"{"}</text>
            <text x="60" y="138" fontSize="9" fill="#facc15" fontFamily="monospace">"Mid1": 24,</text>
            <text x="60" y="155" fontSize="9" fill="#facc15" fontFamily="monospace">"Mid2": 23,</text>
            <text x="60" y="172" fontSize="9" fill="#facc15" fontFamily="monospace">"Lab": 48</text>
            <text x="45" y="188" fontSize="9" fill="#38bdf8" fontFamily="monospace">{"}"}</text>
            <text x="35" y="202" fontSize="9" fill="#c084fc" fontFamily="monospace">{"}"}</text>

            {/* Transform Arrow */}
            <path d="M 235,115 L 275,115" stroke="#c084fc" strokeWidth="2.5" />
            <polygon points="280,115 270,110 270,120" fill="#c084fc" />
            <text x="257" y="105" fontSize="8" textAnchor="middle" fill="#c084fc" fontWeight="700">json_normalize()</text>

            {/* Right: Normalized Flat Columns */}
            <rect x="290" y="25" width="185" height="185" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="290" y="25" width="185" height="26" rx="8" fill="#1e1b4b" />
            <text x="382" y="42" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">Flattened 2D Columns</text>

            <rect x="300" y="60" width="165" height="26" rx="4" fill="#e0e7ff" />
            <text x="310" y="76" fontSize="9" fill="#3730a3" fontWeight="700">id</text>
            <text x="440" y="76" fontSize="9" textAnchor="end" fill="#0f172a" fontWeight="600">DS201</text>

            <rect x="300" y="92" width="165" height="26" rx="4" fill="#e0e7ff" />
            <text x="310" y="108" fontSize="9" fill="#3730a3" fontWeight="700">name</text>
            <text x="440" y="108" fontSize="9" textAnchor="end" fill="#0f172a" fontWeight="600">Kavya Murthy</text>

            <rect x="300" y="124" width="165" height="26" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="140" fontSize="9" fill="#92400e" fontWeight="700">scores.Mid1</text>
            <text x="440" y="140" fontSize="9" textAnchor="end" fill="#b45309" fontWeight="800">24</text>

            <rect x="300" y="156" width="165" height="26" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="172" fontSize="9" fill="#92400e" fontWeight="700">scores.Mid2</text>
            <text x="440" y="172" fontSize="9" textAnchor="end" fill="#b45309" fontWeight="800">23</text>

            <rect x="300" y="188" width="165" height="18" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
            <text x="310" y="200" fontSize="8" fill="#92400e" fontWeight="700">scores.Lab</text>
            <text x="440" y="200" fontSize="8" textAnchor="end" fill="#b45309" fontWeight="800">48</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 1B.1: Recursive unnesting of embedded child dictionaries into composite dot-delimited column keys.</span>
        </div>
      </div>
    );
  }

  // 1C. Microsoft Excel Multi-Sheet Grid (1C)
  if (plotType === 'excel_sheets_grid') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <FileSpreadsheet size={15} style={{ color: '#10b981' }} />
            <span className="plot-title-text">Visual Plot: Microsoft Excel Multi-Worksheet Architecture</span>
          </div>
          <span className="plot-engine-tag">pd.ExcelWriter &amp; read_excel()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Outer Workbook Container */}
            <rect x="35" y="20" width="430" height="195" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" />
            
            {/* Top Toolbar Ribbon */}
            <rect x="35" y="20" width="430" height="28" rx="8" fill="#065f46" />
            <text x="50" y="38" fontSize="10" fill="#ffffff" fontWeight="700">mbu_student_performance.xlsx • Excel Workbook</text>
            <text x="445" y="38" fontSize="9" textAnchor="end" fill="#a7f3d0">OpenPyXL Engine</text>

            {/* Active Worksheet Grid: CSE_Department */}
            <rect x="50" y="58" width="400" height="115" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* Grid Header Row */}
            <rect x="50" y="58" width="400" height="22" fill="#ecfdf5" />
            <text x="70" y="73" fontSize="9" fill="#065f46" fontWeight="700">RollNo</text>
            <text x="160" y="73" fontSize="9" fill="#065f46" fontWeight="700">Name</text>
            <text x="270" y="73" fontSize="9" fill="#065f46" fontWeight="700">Python_Marks</text>
            <text x="375" y="73" fontSize="9" fill="#065f46" fontWeight="700">DSA_Marks</text>
            <line x1="50" y1="80" x2="450" y2="80" stroke="#a7f3d0" strokeWidth="1" />

            {/* Row 1 */}
            <text x="70" y="98" fontSize="9" fill="#334155" fontWeight="600">24CS101</text>
            <text x="160" y="98" fontSize="9" fill="#0f172a" fontWeight="600">Aditya Nair</text>
            <text x="270" y="98" fontSize="9" fill="#0d9488" fontWeight="700">88</text>
            <text x="375" y="98" fontSize="9" fill="#0d9488" fontWeight="700">84</text>
            <line x1="50" y1="106" x2="450" y2="106" stroke="#f1f5f9" />

            {/* Row 2 */}
            <text x="70" y="124" fontSize="9" fill="#334155" fontWeight="600">24CS102</text>
            <text x="160" y="124" fontSize="9" fill="#0f172a" fontWeight="600">Bhavna Joshi</text>
            <text x="270" y="124" fontSize="9" fill="#0d9488" fontWeight="700">92</text>
            <text x="375" y="124" fontSize="9" fill="#0d9488" fontWeight="700">90</text>
            <line x1="50" y1="132" x2="450" y2="132" stroke="#f1f5f9" />

            {/* Row 3 */}
            <text x="70" y="150" fontSize="9" fill="#334155" fontWeight="600">24CS103</text>
            <text x="160" y="150" fontSize="9" fill="#0f172a" fontWeight="600">Chirag Reddy</text>
            <text x="270" y="150" fontSize="9" fill="#0d9488" fontWeight="700">79</text>
            <text x="375" y="150" fontSize="9" fill="#0d9488" fontWeight="700">81</text>

            {/* Bottom Sheet Tabs */}
            {/* Sheet 1 Tab (Active) */}
            <rect x="50" y="180" width="130" height="26" rx="4" fill="#ffffff" stroke="#10b981" strokeWidth="1.5" />
            <rect x="50" y="180" width="130" height="4" fill="#10b981" />
            <text x="115" y="196" fontSize="9.5" textAnchor="middle" fill="#065f46" fontWeight="700">CSE_Department (Active)</text>

            {/* Sheet 2 Tab */}
            <rect x="185" y="182" width="150" height="24" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            <text x="260" y="197" fontSize="9.5" textAnchor="middle" fill="#64748b" fontWeight="600">DataScience_Department</text>

            <text x="445" y="197" fontSize="8.5" textAnchor="end" fill="#64748b">sheet_name='CSE_Department'</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 1C.1: Multi-sheet Excel workbook structure allowing targeted extraction of departmental tables.</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // EXPERIMENT 2: WEB APIS & DATABASE CONNECTIVITY
  // =========================================================================

  // 2A. Web API Pipeline (2A)
  if (plotType === 'web_api_pipeline') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Server size={15} style={{ color: '#0284c7' }} />
            <span className="plot-title-text">Visual Plot: RESTful Web API Request-Response Pipeline</span>
          </div>
          <span className="plot-engine-tag">requests.get() &amp; JSON DataFrame</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Client Node */}
            <rect x="30" y="60" width="110" height="110" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />
            <rect x="30" y="60" width="110" height="24" rx="8" fill="#0369a1" />
            <text x="85" y="76" fontSize="9.5" textAnchor="middle" fill="#ffffff" fontWeight="700">Python Client</text>
            <text x="85" y="105" fontSize="8.5" textAnchor="middle" fill="#38bdf8" fontFamily="monospace">requests.get()</text>
            <text x="85" y="125" fontSize="8" textAnchor="middle" fill="#94a3b8">Params: ?limit=10</text>
            <text x="85" y="145" fontSize="8" textAnchor="middle" fill="#94a3b8">Headers: Auth Bearer</text>

            {/* Request Arrow (Rightward) */}
            <path d="M 145,90 L 225,90" stroke="#0284c7" strokeWidth="2.5" />
            <polygon points="230,90 220,85 220,95" fill="#0284c7" />
            <text x="187" y="82" fontSize="8" textAnchor="middle" fill="#0284c7" fontWeight="700">HTTP GET</text>

            {/* API Server Node */}
            <rect x="235" y="45" width="120" height="140" rx="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="295" cy="80" r="22" fill="#0369a1" />
            <text x="295" y="84" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="800">API</text>
            <text x="295" y="120" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">REST Server</text>
            <rect x="250" y="132" width="90" height="18" rx="3" fill="#065f46" />
            <text x="295" y="145" fontSize="8.5" textAnchor="middle" fill="#34d399" fontWeight="700">Status: 200 OK</text>
            <text x="295" y="168" fontSize="8" textAnchor="middle" fill="#94a3b8">Content: JSON</text>

            {/* Response Arrow (Rightward to DataFrame) */}
            <path d="M 360,115 L 390,115" stroke="#10b981" strokeWidth="2.5" />
            <polygon points="395,115 385,110 385,120" fill="#10b981" />
            <text x="377" y="105" fontSize="8" textAnchor="middle" fill="#10b981" fontWeight="700">JSON</text>

            {/* Ingested DataFrame Node */}
            <rect x="400" y="60" width="85" height="110" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" />
            <rect x="400" y="60" width="85" height="24" rx="8" fill="#065f46" />
            <text x="442" y="76" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">DataFrame</text>
            <text x="442" y="105" fontSize="8" textAnchor="middle" fill="#065f46" fontWeight="700">id | name | city</text>
            <text x="442" y="125" fontSize="8" textAnchor="middle" fill="#475569">1 | Leanne | Gwen</text>
            <text x="442" y="145" fontSize="8" textAnchor="middle" fill="#475569">2 | Ervin | Wisoky</text>

            <rect x="40" y="195" width="420" height="24" rx="4" fill="#0f172a" />
            <text x="250" y="211" fontSize="9" textAnchor="middle" fill="#38bdf8" fontWeight="600">
              Live REST Ingestion: Automated deserialization of HTTP JSON payloads into analytics memory.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 2A.1: Distributed API ingestion protocol transforming HTTP endpoints into reproducible DataFrames.</span>
        </div>
      </div>
    );
  }

  // 2B. SQLite Relational Schema (2B)
  if (plotType === 'sqlite_relational_schema') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Database size={15} style={{ color: '#06b6d4' }} />
            <span className="plot-title-text">Visual Plot: SQLite Relational Schema &amp; Pandas Query Execution</span>
          </div>
          <span className="plot-engine-tag">sqlite3 &amp; pd.read_sql_query()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Database Engine Schema Box */}
            <rect x="30" y="25" width="210" height="185" rx="8" fill="#0f172a" stroke="#0891b2" strokeWidth="2" />
            <rect x="30" y="25" width="210" height="28" rx="8" fill="#155e75" />
            <text x="135" y="43" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">SQLite Engine: LabStudents</text>
            
            <text x="45" y="75" fontSize="9" fill="#22d3ee" fontWeight="700">StudentID (PK)</text>
            <text x="180" y="75" fontSize="8.5" fill="#94a3b8">INTEGER</text>

            <text x="45" y="98" fontSize="9" fill="#e0f2fe" fontWeight="600">FullName</text>
            <text x="180" y="98" fontSize="8.5" fill="#94a3b8">TEXT</text>

            <text x="45" y="121" fontSize="9" fill="#e0f2fe" fontWeight="600">Branch</text>
            <text x="180" y="121" fontSize="8.5" fill="#94a3b8">TEXT</text>

            <text x="45" y="144" fontSize="9" fill="#e0f2fe" fontWeight="600">Semester</text>
            <text x="180" y="144" fontSize="8.5" fill="#94a3b8">INTEGER</text>

            <text x="45" y="167" fontSize="9" fill="#22d3ee" fontWeight="700">CGPA</text>
            <text x="180" y="167" fontSize="8.5" fill="#94a3b8">REAL</text>

            <rect x="40" y="180" width="190" height="20" rx="3" fill="#083344" />
            <text x="135" y="194" fontSize="8" textAnchor="middle" fill="#38bdf8" fontFamily="monospace">Parameterized INSERT (?, ?, ...)</text>

            {/* Query Pipeline Connector */}
            <path d="M 245,115 L 280,115" stroke="#06b6d4" strokeWidth="2.5" />
            <polygon points="285,115 275,110 275,120" fill="#06b6d4" />

            {/* Query Execution Output Box */}
            <rect x="290" y="25" width="185" height="185" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="290" y="25" width="185" height="28" rx="8" fill="#0e7490" />
            <text x="382" y="43" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">pd.read_sql_query()</text>

            <rect x="300" y="60" width="165" height="22" rx="3" fill="#0f172a" />
            <text x="382" y="75" fontSize="8" textAnchor="middle" fill="#22d3ee" fontFamily="monospace">WHERE CGPA &gt;= 8.5</text>

            {/* Result Records */}
            <rect x="300" y="90" width="165" height="26" rx="4" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" />
            <text x="310" y="106" fontSize="8.5" fill="#0e7490" fontWeight="700">101: Sathvika T.</text>
            <text x="455" y="106" fontSize="9" textAnchor="end" fill="#0891b2" fontWeight="800">9.45 GPA</text>

            <rect x="300" y="122" width="165" height="26" rx="4" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" />
            <text x="310" y="138" fontSize="8.5" fill="#0e7490" fontWeight="700">102: Pradyumna D.</text>
            <text x="455" y="138" fontSize="9" textAnchor="end" fill="#0891b2" fontWeight="800">9.20 GPA</text>

            <rect x="300" y="154" width="165" height="26" rx="4" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" />
            <text x="310" y="170" fontSize="8.5" fill="#0e7490" fontWeight="700">103: Venkata R.</text>
            <text x="455" y="170" fontSize="9" textAnchor="end" fill="#0891b2" fontWeight="800">8.85 GPA</text>

            <text x="382" y="200" fontSize="8" textAnchor="middle" fill="#64748b" fontStyle="italic">ORDER BY CGPA DESC applied</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 2B.1: Relational SQL execution offloading heavy filtering to SQLite before DataFrame ingestion.</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // EXPERIMENT 3: DATA CLEANING & PREPROCESSING
  // =========================================================================

  // 3A. Missing Data Imputation Map (3A)
  if (plotType === 'missing_data_imputation_map') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Filter size={15} style={{ color: '#f59e0b' }} />
            <span className="plot-title-text">Visual Plot: Missing Value Diagnosis &amp; Statistical Imputation</span>
          </div>
          <span className="plot-engine-tag">dropna() &amp; fillna(mean/mode)</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Left: Raw Data with Null Holes */}
            <rect x="30" y="30" width="190" height="175" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="30" y="30" width="190" height="26" rx="8" fill="#78350f" />
            <text x="125" y="47" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">Raw Data (with Nulls)</text>

            <text x="40" y="74" fontSize="9" fill="#64748b" fontWeight="600">Student</text>
            <text x="110" y="74" fontSize="9" fill="#64748b" fontWeight="600">Mid1</text>
            <text x="175" y="74" fontSize="9" fill="#64748b" fontWeight="600">Dept</text>
            <line x1="35" y1="80" x2="215" y2="80" stroke="#e2e8f0" />

            <text x="40" y="100" fontSize="9" fill="#1e293b">101: Aarav</text>
            <text x="115" y="100" fontSize="9" fill="#0f172a" fontWeight="700">22.0</text>
            <text x="175" y="100" fontSize="9" fill="#0f172a">CSE</text>

            <text x="40" y="125" fontSize="9" fill="#1e293b">102: Bhavna</text>
            <text x="115" y="125" fontSize="9" fill="#0f172a" fontWeight="700">18.0</text>
            <text x="175" y="125" fontSize="9" fill="#0f172a">ECE</text>

            {/* Missing Rows */}
            <text x="40" y="150" fontSize="9" fill="#1e293b">103: Chirag</text>
            <rect x="105" y="137" width="35" height="18" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="122" y="150" fontSize="9" textAnchor="middle" fill="#b91c1c" fontWeight="700">NaN</text>
            <text x="175" y="150" fontSize="9" fill="#0f172a">CSE</text>

            <text x="40" y="175" fontSize="9" fill="#1e293b">104: Divya</text>
            <text x="115" y="175" fontSize="9" fill="#0f172a" fontWeight="700">24.0</text>
            <rect x="165" y="162" width="45" height="18" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="187" y="175" fontSize="9" textAnchor="middle" fill="#b91c1c" fontWeight="700">NaN</text>

            {/* Imputation Flow Arrow */}
            <path d="M 225,115 L 270,115" stroke="#f59e0b" strokeWidth="2.5" />
            <polygon points="275,115 265,110 265,120" fill="#f59e0b" />
            <text x="250" y="105" fontSize="8" textAnchor="middle" fill="#b45309" fontWeight="700">fillna(mean)</text>

            {/* Right: Imputed Clean Data */}
            <rect x="280" y="30" width="190" height="175" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="280" y="30" width="190" height="26" rx="8" fill="#065f46" />
            <text x="375" y="47" fontSize="10" textAnchor="middle" fill="#ffffff" fontWeight="700">Cleaned (Imputed Data)</text>

            <text x="290" y="74" fontSize="9" fill="#64748b" fontWeight="600">Student</text>
            <text x="360" y="74" fontSize="9" fill="#64748b" fontWeight="600">Mid1</text>
            <text x="425" y="74" fontSize="9" fill="#64748b" fontWeight="600">Dept</text>
            <line x1="285" y1="80" x2="465" y2="80" stroke="#e2e8f0" />

            <text x="290" y="100" fontSize="9" fill="#1e293b">101: Aarav</text>
            <text x="365" y="100" fontSize="9" fill="#0f172a" fontWeight="700">22.0</text>
            <text x="425" y="100" fontSize="9" fill="#0f172a">CSE</text>

            <text x="290" y="125" fontSize="9" fill="#1e293b">102: Bhavna</text>
            <text x="365" y="125" fontSize="9" fill="#0f172a" fontWeight="700">18.0</text>
            <text x="425" y="125" fontSize="9" fill="#0f172a">ECE</text>

            {/* Imputed Cells */}
            <text x="290" y="150" fontSize="9" fill="#1e293b">103: Chirag</text>
            <rect x="350" y="137" width="40" height="18" rx="3" fill="#dcfce7" stroke="#10b981" strokeWidth="1" />
            <text x="370" y="150" fontSize="9" textAnchor="middle" fill="#15803d" fontWeight="800">21.80*</text>
            <text x="425" y="150" fontSize="9" fill="#0f172a">CSE</text>

            <text x="290" y="175" fontSize="9" fill="#1e293b">104: Divya</text>
            <text x="365" y="175" fontSize="9" fill="#0f172a" fontWeight="700">24.0</text>
            <rect x="415" y="162" width="45" height="18" rx="3" fill="#dcfce7" stroke="#10b981" strokeWidth="1" />
            <text x="437" y="175" fontSize="9" textAnchor="middle" fill="#15803d" fontWeight="800">CSE*</text>

            <text x="250" y="222" fontSize="8.5" textAnchor="middle" fill="#64748b">
              * Numerical null imputed with column mean (21.80); Categorical null imputed with mode ('CSE').
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 3A.1: Zero data attrition achieved by statistical central tendency imputation.</span>
        </div>
      </div>
    );
  }

  // 3B. Data Transformation Binning (3B)
  if (plotType === 'data_transformation_binning') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <SlidersHorizontal size={15} style={{ color: '#f97316' }} />
            <span className="plot-title-text">Visual Plot: Continuous Discretization (pd.cut) &amp; Feature Scaling</span>
          </div>
          <span className="plot-engine-tag">pd.cut() &amp; Min-Max [0, 1]</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Axis Baseline (Marks from 0 to 100) */}
            <line x1="50" y1="120" x2="450" y2="120" stroke="#cbd5e1" strokeWidth="3" />

            {/* Bins Partition Rectangles */}
            {/* Pass: 0 to 60 */}
            <rect x="50" y="55" width="130" height="65" fill="#fee2e2" opacity="0.6" stroke="#ef4444" strokeWidth="1" />
            <text x="115" y="80" fontSize="11" textAnchor="middle" fill="#b91c1c" fontWeight="700">Pass Band</text>
            <text x="115" y="98" fontSize="9" textAnchor="middle" fill="#ef4444">0 – 60 Marks</text>

            {/* Good: 60 to 75 */}
            <rect x="180" y="55" width="85" height="65" fill="#fef3c7" opacity="0.6" stroke="#f59e0b" strokeWidth="1" />
            <text x="222" y="80" fontSize="11" textAnchor="middle" fill="#b45309" fontWeight="700">Good</text>
            <text x="222" y="98" fontSize="9" textAnchor="middle" fill="#d97706">60 – 75</text>

            {/* Very Good: 75 to 90 */}
            <rect x="265" y="55" width="95" height="65" fill="#e0f2fe" opacity="0.6" stroke="#0284c7" strokeWidth="1" />
            <text x="312" y="80" fontSize="11" textAnchor="middle" fill="#0369a1" fontWeight="700">Very Good</text>
            <text x="312" y="98" fontSize="9" textAnchor="middle" fill="#0284c7">75 – 90</text>

            {/* Distinction: 90 to 100 */}
            <rect x="360" y="55" width="90" height="65" fill="#dcfce7" opacity="0.6" stroke="#10b981" strokeWidth="1" />
            <text x="405" y="80" fontSize="11" textAnchor="middle" fill="#15803d" fontWeight="700">Distinction</text>
            <text x="405" y="98" fontSize="9" textAnchor="middle" fill="#16a34a">90 – 100</text>

            {/* Student Sample Points on Axis */}
            {/* Ramesh: 62 */}
            <circle cx="190" cy="120" r="5" fill="#b45309" />
            <text x="190" y="140" fontSize="9" textAnchor="middle" fill="#0f172a" fontWeight="700">Ramesh: 62</text>
            <text x="190" y="152" fontSize="8" textAnchor="middle" fill="#64748b">Norm: 0.179</text>

            {/* Sita: 88 */}
            <circle cx="345" cy="120" r="5" fill="#0369a1" />
            <text x="345" y="140" fontSize="9" textAnchor="middle" fill="#0f172a" fontWeight="700">Sita: 88</text>
            <text x="345" y="152" fontSize="8" textAnchor="middle" fill="#64748b">Norm: 0.846</text>

            {/* Kiran: 94 */}
            <circle cx="410" cy="120" r="5" fill="#15803d" />
            <text x="410" y="140" fontSize="9" textAnchor="middle" fill="#0f172a" fontWeight="700">Kiran: 94</text>
            <text x="410" y="152" fontSize="8" textAnchor="middle" fill="#64748b">Norm: 1.000</text>

            {/* Scaling Formula Banner */}
            <rect x="50" y="175" width="400" height="34" rx="6" fill="#0f172a" />
            <text x="250" y="196" fontSize="9.5" textAnchor="middle" fill="#38bdf8" fontWeight="600">
              Min-Max Normalization: x_norm = (x - 55) / (94 - 55) ∈ [0.0, 1.0]
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 3B.1: Discretization partitions continuous spectrums into ordinal categorical buckets.</span>
        </div>
      </div>
    );
  }

  // 3C. Outlier IQR Scatter & Thresholds (3C)
  if (plotType === 'outlier_iqr_scatter') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <AlertTriangle size={15} style={{ color: '#ef4444' }} />
            <span className="plot-title-text">Visual Plot: Tukey 1.5 * IQR Outlier Detection Boundaries</span>
          </div>
          <span className="plot-engine-tag">IQR = Q3 - Q1 Boundary Rule</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Axis Grid */}
            <line x1="50" y1="180" x2="460" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="30" x2="50" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Y Ticks */}
            <text x="42" y="180" fontSize="9" textAnchor="end" fill="#64748b">0</text>
            <text x="42" y="145" fontSize="9" textAnchor="end" fill="#64748b">200</text>
            <text x="42" y="105" fontSize="9" textAnchor="end" fill="#64748b">500</text>
            <text x="42" y="45" fontSize="9" textAnchor="end" fill="#64748b">1000</text>

            {/* Normal Range Shading [88.75 to 238.75] */}
            <rect x="50" y="138" width="410" height="35" fill="#ecfdf5" opacity="0.7" />
            
            {/* Upper Bound Threshold Line (238.75) */}
            <line x1="50" y1="138" x2="460" y2="138" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" />
            <rect x="320" y="122" width="130" height="18" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
            <text x="385" y="134" fontSize="8.5" textAnchor="middle" fill="#b91c1c" fontWeight="700">Upper Cutoff: 238.75</text>

            {/* Normal Observation Points (120 to 200) */}
            {[65, 85, 105, 125, 145, 165, 185, 205, 225, 245, 265, 285, 305].map((x, idx) => (
              <circle key={idx} cx={x} cy={165 - (idx % 3) * 6} r="4" fill="#0d9488" />
            ))}

            {/* Extreme Outliers: Obs 14 (850) and Obs 15 (920) */}
            <circle cx="390" cy="62" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            <rect x="350" y="40" width="80" height="18" rx="3" fill="#7f1d1d" />
            <text x="390" y="52" fontSize="8.5" textAnchor="middle" fill="#fee2e2" fontWeight="800">Obs 14: 850 ⚠️</text>

            <circle cx="430" cy="48" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            <rect x="395" y="24" width="80" height="18" rx="3" fill="#7f1d1d" />
            <text x="435" y="36" fontSize="8.5" textAnchor="middle" fill="#fee2e2" fontWeight="800">Obs 15: 920 ⚠️</text>

            {/* Quartile Legend Card */}
            <rect x="60" y="45" width="180" height="60" rx="6" fill="#0f172a" />
            <text x="70" y="62" fontSize="9" fill="#34d399" fontWeight="700">Q1: 145.00  |  Q3: 182.50</text>
            <text x="70" y="78" fontSize="9" fill="#38bdf8" fontWeight="700">IQR = 37.50</text>
            <text x="70" y="94" fontSize="8.5" fill="#fca5a5">Outliers Exceeding Bound: 2 rows</text>

            <text x="250" y="210" fontSize="9.5" textAnchor="middle" fill="#1e293b" fontWeight="600">
              Observation Sample Index (n=15)
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 3C.1: Non-parametric IQR outlier detection preventing extreme metric distortion.</span>
        </div>
      </div>
    );
  }

  // 3D. Regex Token Extraction (3D)
  if (plotType === 'regex_token_extraction') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Search size={15} style={{ color: '#eab308' }} />
            <span className="plot-title-text">Visual Plot: Regex Pattern Matching &amp; Entity Tokenization</span>
          </div>
          <span className="plot-engine-tag">re.search() &amp; str.extract()</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Raw Messy Text String Header */}
            <rect x="30" y="20" width="440" height="42" rx="6" fill="#0f172a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="40" y="36" fontSize="8.5" fill="#facc15" fontWeight="700">UNSTRUCTURED INPUT TEXT OBSERVATION</text>
            <text x="40" y="52" fontSize="9.5" fill="#fef9c3" fontFamily="monospace">
              "Sathvika T. - Phone: (0877) 223-4567, Email: sathvika.t@mbu.edu.in"
            </text>

            {/* 3 Regex Tokenizer Pipes */}
            {/* Tokenizer 1: Name */}
            <g transform="translate(30, 80)">
              <rect width="135" height="115" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
              <rect width="135" height="24" rx="8" fill="#1d4ed8" />
              <text x="67" y="16" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">1. Name Pattern</text>
              <text x="10" y="42" fontSize="8" fill="#1e40af" fontFamily="monospace">r"^([A-Za-z\s.]+)-"</text>
              <rect x="10" y="60" width="115" height="30" rx="4" fill="#dbeafe" />
              <text x="67" y="79" fontSize="10" textAnchor="middle" fill="#1e3a8a" fontWeight="800">Sathvika T.</text>
              <text x="67" y="104" fontSize="8" textAnchor="middle" fill="#64748b">Leading Text Anchor</text>
            </g>

            {/* Tokenizer 2: Email & Domain */}
            <g transform="translate(182, 80)">
              <rect width="135" height="115" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />
              <rect width="135" height="24" rx="8" fill="#047857" />
              <text x="67" y="16" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">2. Email &amp; Domain</text>
              <text x="10" y="42" fontSize="8" fill="#065f46" fontFamily="monospace">r"@([\w.-]+)"</text>
              <rect x="10" y="60" width="115" height="30" rx="4" fill="#d1fae5" />
              <text x="67" y="79" fontSize="10" textAnchor="middle" fill="#064e3b" fontWeight="800">mbu.edu.in</text>
              <text x="67" y="104" fontSize="8" textAnchor="middle" fill="#64748b">Host Group Extraction</text>
            </g>

            {/* Tokenizer 3: Clean Phone */}
            <g transform="translate(335, 80)">
              <rect width="135" height="115" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="1.5" />
              <rect width="135" height="24" rx="8" fill="#b45309" />
              <text x="67" y="16" fontSize="9" textAnchor="middle" fill="#ffffff" fontWeight="700">3. Phone Digits</text>
              <text x="10" y="42" fontSize="8" fill="#92400e" fontFamily="monospace">re.sub(r'\D', '')</text>
              <rect x="10" y="60" width="115" height="30" rx="4" fill="#fef3c7" />
              <text x="67" y="79" fontSize="10" textAnchor="middle" fill="#78350f" fontWeight="800">08772234567</text>
              <text x="67" y="104" fontSize="8" textAnchor="middle" fill="#64748b">Stripped Non-Digits</text>
            </g>

            <rect x="50" y="208" width="400" height="20" rx="4" fill="#0f172a" />
            <text x="250" y="222" fontSize="8.5" textAnchor="middle" fill="#fef08a">
              Vectorized regex matching converts messy unstructured textual entries into relational features.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 3D.1: Deterministic capture group parsing extracting semantic entities from freeform text.</span>
        </div>
      </div>
    );
  }

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

  // =========================================================================
  // EXPERIMENT 7: DATA AGGREGATION & GROUPBY OPERATIONS
  // =========================================================================

  // 1. GroupBy Single & Multiple Key Splitting (7A)
  if (plotType === 'groupby_single_multiple_split') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Layers size={15} style={{ color: '#818cf8' }} />
            <span className="plot-title-text">Visual Plot: Split-Apply-Combine Single & Multiple Key Pipeline</span>
          </div>
          <span className="plot-engine-tag">df.groupby(['Dept', 'Year'])</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Background Grid */}
            <rect x="15" y="15" width="470" height="205" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />

            {/* Split Stage (Left) */}
            <rect x="25" y="28" width="130" height="175" rx="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.2" />
            <rect x="25" y="28" width="130" height="24" rx="6" fill="#312e81" />
            <text x="90" y="44" fontSize="9" fill="#e0e7ff" fontWeight="700" textAnchor="middle">1. INPUT DATA (N=8)</text>
            
            {/* Rows summary */}
            <text x="35" y="68" fontSize="8" fill="#a855f7" fontFamily="monospace">CSE: Ravi (85), Sita (90)</text>
            <text x="35" y="84" fontSize="8" fill="#a855f7" fontFamily="monospace">CSE: Kiran (75), Lakshmi (95)</text>
            <text x="35" y="104" fontSize="8" fill="#38bdf8" fontFamily="monospace">ECE: Arun (78), Priya (88)</text>
            <text x="35" y="120" fontSize="8" fill="#38bdf8" fontFamily="monospace">ECE: Anil (82), Rahul (70)</text>
            
            <rect x="35" y="145" width="110" height="42" rx="4" fill="#0f172a" stroke="#4338ca" strokeWidth="1" />
            <text x="90" y="160" fontSize="8.5" fill="#c7d2fe" fontWeight="700" textAnchor="middle">Split By Keys</text>
            <text x="90" y="176" fontSize="7.5" fill="#94a3b8" textAnchor="middle">Single: Dept | Multi: Dept+Yr</text>

            {/* Transition Arrow 1 */}
            <path d="M 160,115 L 180,115" stroke="#818cf8" strokeWidth="2" />
            <polygon points="184,115 178,111 178,119" fill="#818cf8" />

            {/* Partition Groups Stage (Middle) */}
            <g transform="translate(190, 28)">
              {/* CSE Box */}
              <rect x="0" y="0" width="135" height="82" rx="6" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1.2" />
              <text x="67" y="16" fontSize="9" fill="#d8b4fe" fontWeight="700" textAnchor="middle">Cohort: CSE (Avg: 86.25)</text>
              <line x1="8" y1="22" x2="127" y2="22" stroke="#4c1d95" />
              <text x="12" y="38" fontSize="8" fill="#f5d0fe" fontFamily="monospace">Yr 2 (n=3): Mean 83.33</text>
              <text x="12" y="52" fontSize="7.5" fill="#e9d5ff">Ravi(85), Sita(90), Kiran(75)</text>
              <text x="12" y="68" fontSize="8" fill="#f5d0fe" fontFamily="monospace">Yr 3 (n=1): Mean 95.00</text>
              <text x="12" y="78" fontSize="7.5" fill="#e9d5ff">Lakshmi (Marks: 95)</text>

              {/* ECE Box */}
              <rect x="0" y="93" width="135" height="82" rx="6" fill="#082f49" stroke="#38bdf8" strokeWidth="1.2" />
              <text x="67" y="109" fontSize="9" fill="#7dd3fc" fontWeight="700" textAnchor="middle">Cohort: ECE (Avg: 79.50)</text>
              <line x1="8" y1="115" x2="127" y2="115" stroke="#075985" />
              <text x="12" y="131" fontSize="8" fill="#bae6fd" fontFamily="monospace">Yr 2 (n=1): Mean 70.00</text>
              <text x="12" y="141" fontSize="7.5" fill="#e0f2fe">Rahul (Marks: 70)</text>
              <text x="12" y="157" fontSize="8" fill="#bae6fd" fontFamily="monospace">Yr 3 (n=3): Mean 82.67</text>
              <text x="12" y="167" fontSize="7.5" fill="#e0f2fe">Arun(78), Priya(88), Anil(82)</text>
            </g>

            {/* Transition Arrow 2 */}
            <path d="M 330,115 L 350,115" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="354,115 348,111 348,119" fill="#38bdf8" />

            {/* Combined Result Stage (Right) */}
            <rect x="360" y="28" width="115" height="175" rx="6" fill="#022c22" stroke="#10b981" strokeWidth="1.2" />
            <rect x="360" y="28" width="115" height="24" rx="6" fill="#065f46" />
            <text x="417" y="44" fontSize="9" fill="#a7f3d0" fontWeight="700" textAnchor="middle">3. AGGREGATE</text>

            <text x="370" y="72" fontSize="8.5" fill="#6ee7b7" fontWeight="700">Single Key Mean:</text>
            <text x="370" y="88" fontSize="8" fill="#ffffff" fontFamily="monospace">CSE: 86.25</text>
            <text x="370" y="102" fontSize="8" fill="#ffffff" fontFamily="monospace">ECE: 79.50</text>

            <line x1="368" y1="112" x2="467" y2="112" stroke="#047857" strokeDasharray="2 2" />

            <text x="370" y="128" fontSize="8.5" fill="#6ee7b7" fontWeight="700">Multi Key Mean:</text>
            <text x="370" y="144" fontSize="7.5" fill="#e0e7ff" fontFamily="monospace">CSE, Y2: 83.33</text>
            <text x="370" y="158" fontSize="7.5" fill="#e0e7ff" fontFamily="monospace">CSE, Y3: 95.00</text>
            <text x="370" y="172" fontSize="7.5" fill="#e0e7ff" fontFamily="monospace">ECE, Y2: 70.00</text>
            <text x="370" y="186" fontSize="7.5" fill="#e0e7ff" fontFamily="monospace">ECE, Y3: 82.67</text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 7A.1: Split-Apply-Combine pipeline demonstrating partition of student records by single (Department) and multiple (Department, Year) keys into grouped aggregations.</span>
        </div>
      </div>
    );
  }

  // 2. Multi-Metric Summary Statistics with aggregate() (7B)
  if (plotType === 'aggregate_statistics_matrix') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <BarChart3 size={15} style={{ color: '#10b981' }} />
            <span className="plot-title-text">Visual Plot: Multi-Column Summary Statistics Matrix (.aggregate)</span>
          </div>
          <span className="plot-engine-tag">.aggregate({'{\'Marks\': [...], \'Attendance\': [...]\'}'})</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Canvas Base */}
            <rect x="15" y="15" width="470" height="205" rx="8" fill="#0b1329" stroke="#1e293b" strokeWidth="1" />

            {/* Hierarchical Column Header */}
            <rect x="25" y="25" width="450" height="30" rx="4" fill="#1e293b" />
            <text x="70" y="44" fontSize="9" fill="#94a3b8" fontWeight="700" textAnchor="middle">Department</text>
            
            {/* Marks Header Group */}
            <rect x="135" y="28" width="160" height="24" rx="3" fill="#312e81" stroke="#6366f1" strokeWidth="1" />
            <text x="215" y="44" fontSize="9.5" fill="#c7d2fe" fontWeight="700" textAnchor="middle">Marks Metrics [sum, mean, std]</text>
            
            {/* Attendance Header Group */}
            <rect x="305" y="28" width="160" height="24" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
            <text x="385" y="44" fontSize="9.5" fill="#a7f3d0" fontWeight="700" textAnchor="middle">Attendance Metrics [sum, mean, std]</text>

            {/* Row 1: CSE */}
            <g transform="translate(25, 62)">
              <rect width="450" height="38" rx="4" fill="#1e1b4b" stroke="#4338ca" strokeWidth="0.8" />
              <text x="45" y="24" fontSize="11" fill="#a855f7" fontWeight="800" textAnchor="middle">CSE</text>
              
              {/* Marks metrics */}
              <text x="140" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 240</text>
              <text x="195" y="24" fontSize="9" fill="#38bdf8" fontWeight="700" fontFamily="monospace">μ: 80.0</text>
              <text x="255" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>

              {/* Attendance metrics */}
              <text x="315" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 270</text>
              <text x="370" y="24" fontSize="9" fill="#34d399" fontWeight="700" fontFamily="monospace">μ: 90.0</text>
              <text x="430" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>
            </g>

            {/* Row 2: ECE */}
            <g transform="translate(25, 106)">
              <rect width="450" height="38" rx="4" fill="#082f49" stroke="#0284c7" strokeWidth="0.8" />
              <text x="45" y="24" fontSize="11" fill="#38bdf8" fontWeight="800" textAnchor="middle">ECE</text>
              
              {/* Marks metrics */}
              <text x="140" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 210</text>
              <text x="195" y="24" fontSize="9" fill="#38bdf8" fontWeight="700" fontFamily="monospace">μ: 70.0</text>
              <text x="255" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>

              {/* Attendance metrics */}
              <text x="315" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 240</text>
              <text x="370" y="24" fontSize="9" fill="#34d399" fontWeight="700" fontFamily="monospace">μ: 80.0</text>
              <text x="430" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>
            </g>

            {/* Row 3: EEE */}
            <g transform="translate(25, 150)">
              <rect width="450" height="38" rx="4" fill="#064e3b" stroke="#059669" strokeWidth="0.8" />
              <text x="45" y="24" fontSize="11" fill="#34d399" fontWeight="800" textAnchor="middle">EEE</text>
              
              {/* Marks metrics */}
              <text x="140" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 270</text>
              <text x="195" y="24" fontSize="9" fill="#38bdf8" fontWeight="700" fontFamily="monospace">μ: 90.0</text>
              <text x="255" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>

              {/* Attendance metrics */}
              <text x="315" y="24" fontSize="9" fill="#e0e7ff" fontFamily="monospace">Sum: 285</text>
              <text x="370" y="24" fontSize="9" fill="#34d399" fontWeight="700" fontFamily="monospace">μ: 95.0</text>
              <text x="430" y="24" fontSize="9" fill="#94a3b8" fontFamily="monospace">σ: 5.0</text>
            </g>

            {/* Bottom summary indicator */}
            <text x="250" y="208" fontSize="8.5" fill="#64748b" textAnchor="middle" fontStyle="italic">
              Simultaneous vectorized evaluation of Sum (Σ), Mean (μ), and Standard Deviation (σ) across cohorts.
            </text>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 7B.1: Multi-column aggregation matrix comparing sum, mean, and standard deviation distributions across CSE, ECE, and EEE cohorts.</span>
        </div>
      </div>
    );
  }

  // 3. Iris EDA & Grouped Distributions (7C)
  if (plotType === 'iris_eda_distributions') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Activity size={15} style={{ color: '#ec4899' }} />
            <span className="plot-title-text">Visual Plot: Iris Species Exploratory Morphological Distributions</span>
          </div>
          <span className="plot-engine-tag">Iris Dataset EDA (N=150)</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 240" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Background Canvas */}
            <rect x="15" y="15" width="470" height="205" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />

            {/* Title / Info Bar */}
            <text x="30" y="38" fontSize="9.5" fill="#e2e8f0" fontWeight="700">Species Class Morphological Separation (Mean Petal & Sepal Length):</text>

            {/* Chart Area */}
            {/* Y Axis */}
            <line x1="95" y1="55" x2="95" y2="185" stroke="#475569" strokeWidth="1.5" />
            <line x1="95" y1="185" x2="465" y2="185" stroke="#475569" strokeWidth="1.5" />
            
            {/* Grid Lines */}
            <line x1="95" y1="145" x2="465" y2="145" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="95" y1="105" x2="465" y2="105" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="95" y1="65" x2="465" y2="65" stroke="#1e293b" strokeDasharray="3 3" />

            <text x="85" y="188" fontSize="8" fill="#94a3b8" textAnchor="end">0.0 cm</text>
            <text x="85" y="148" fontSize="8" fill="#94a3b8" textAnchor="end">2.5 cm</text>
            <text x="85" y="108" fontSize="8" fill="#94a3b8" textAnchor="end">5.0 cm</text>
            <text x="85" y="68" fontSize="8" fill="#94a3b8" textAnchor="end">7.5 cm</text>

            {/* Group 1: Setosa */}
            <g transform="translate(130, 0)">
              {/* Sepal Length Bar: 5.006 cm */}
              <rect x="0" y="105" width="28" height="80" rx="3" fill="#38bdf8" />
              <text x="14" y="99" fontSize="8" fill="#7dd3fc" fontWeight="700" textAnchor="middle">5.01</text>

              {/* Petal Length Bar: 1.462 cm */}
              <rect x="34" y="161" width="28" height="24" rx="3" fill="#a855f7" />
              <text x="48" y="156" fontSize="8" fill="#d8b4fe" fontWeight="700" textAnchor="middle">1.46</text>

              <text x="31" y="200" fontSize="9" fill="#f8fafc" fontWeight="700" textAnchor="middle">setosa</text>
              <text x="31" y="210" fontSize="7" fill="#64748b" textAnchor="middle">(n=50)</text>
            </g>

            {/* Group 2: Versicolor */}
            <g transform="translate(245, 0)">
              {/* Sepal Length Bar: 5.936 cm */}
              <rect x="0" y="90" width="28" height="95" rx="3" fill="#38bdf8" />
              <text x="14" y="84" fontSize="8" fill="#7dd3fc" fontWeight="700" textAnchor="middle">5.94</text>

              {/* Petal Length Bar: 4.260 cm */}
              <rect x="34" y="117" width="28" height="68" rx="3" fill="#a855f7" />
              <text x="48" y="111" fontSize="8" fill="#d8b4fe" fontWeight="700" textAnchor="middle">4.26</text>

              <text x="31" y="200" fontSize="9" fill="#f8fafc" fontWeight="700" textAnchor="middle">versicolor</text>
              <text x="31" y="210" fontSize="7" fill="#64748b" textAnchor="middle">(n=50)</text>
            </g>

            {/* Group 3: Virginica */}
            <g transform="translate(360, 0)">
              {/* Sepal Length Bar: 6.588 cm */}
              <rect x="0" y="79" width="28" height="106" rx="3" fill="#38bdf8" />
              <text x="14" y="73" fontSize="8" fill="#7dd3fc" fontWeight="700" textAnchor="middle">6.59</text>

              {/* Petal Length Bar: 5.552 cm */}
              <rect x="34" y="96" width="28" height="89" rx="3" fill="#a855f7" />
              <text x="48" y="90" fontSize="8" fill="#d8b4fe" fontWeight="700" textAnchor="middle">5.55</text>

              <text x="31" y="200" fontSize="9" fill="#f8fafc" fontWeight="700" textAnchor="middle">virginica</text>
              <text x="31" y="210" fontSize="7" fill="#64748b" textAnchor="middle">(n=50)</text>
            </g>

            {/* Legend */}
            <g transform="translate(310, 32)">
              <rect x="0" y="0" width="10" height="10" rx="2" fill="#38bdf8" />
              <text x="15" y="9" fontSize="8" fill="#cbd5e1">Mean Sepal Length</text>

              <rect x="95" y="0" width="10" height="10" rx="2" fill="#a855f7" />
              <text x="110" y="9" fontSize="8" fill="#cbd5e1">Mean Petal Length</text>
            </g>
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 7C.1: Exploratory morphological feature comparison across Iris species (Setosa, Versicolor, Virginica) showcasing distinct petal length clusters.</span>
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
