import React from 'react';
import { BarChart3, TrendingUp, Sparkles, Clock, Calendar, Globe, Layers, ArrowRight } from 'lucide-react';

export default function VisualPlotPreview({ plotType, title }) {
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
          <div className="frequency-grid-preview">
            <div className="freq-grid-row">
              <span className="freq-label">Daily (freq='D'):</span>
              <div className="freq-cells-strip">
                {days.map((item, idx) => (
                  <div key={idx} className="freq-cell active">
                    <span className="cell-date">{item.d}</span>
                    <span className="cell-badge">Day {idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="freq-grid-row" style={{ marginTop: '1.25rem' }}>
              <span className="freq-label">Business (freq='B'):</span>
              <div className="freq-cells-strip">
                {days.map((item, idx) => (
                  <div key={idx} className={`freq-cell ${item.isB ? 'active business' : 'skipped'}`}>
                    <span className="cell-date">{item.d}</span>
                    <span className="cell-badge">{item.isB ? 'Active' : 'Skipped (Weekend)'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6B.1: Automatic weekend exclusion verified in Business Day DatetimeIndex generation.</span>
        </div>
      </div>
    );
  }

  // 3. Time Zone Localization and Conversion (6C)
  if (plotType === 'tz_offset_chart') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Globe size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Multi-Timezone Spatial Alignment Across Continents</span>
          </div>
          <span className="plot-engine-tag">IANA Olson DB Projection</span>
        </div>

        <div className="svg-plot-container">
          <div className="timezone-visual-bars">
            <div className="tz-bar-row">
              <div className="tz-meta-col">
                <strong>UTC (Baseline)</strong>
                <span>Offset: +00:00</span>
              </div>
              <div className="tz-time-pill-track">
                <div className="tz-point-badge">12:00 PM (June 1)</div>
                <div className="tz-point-badge">18:00 PM (June 1)</div>
                <div className="tz-point-badge">00:00 AM (June 2)</div>
                <div className="tz-point-badge">06:00 AM (June 2)</div>
              </div>
            </div>

            <div className="tz-bar-row" style={{ marginTop: '0.85rem' }}>
              <div className="tz-meta-col">
                <strong>Asia/Kolkata (IST)</strong>
                <span>Offset: +05:30</span>
              </div>
              <div className="tz-time-pill-track teal">
                <div className="tz-point-badge">17:30 PM (June 1)</div>
                <div className="tz-point-badge">23:30 PM (June 1)</div>
                <div className="tz-point-badge">05:30 AM (June 2)</div>
                <div className="tz-point-badge">11:30 AM (June 2)</div>
              </div>
            </div>

            <div className="tz-bar-row" style={{ marginTop: '0.85rem' }}>
              <div className="tz-meta-col">
                <strong>America/New_York (EDT)</strong>
                <span>Offset: -04:00</span>
              </div>
              <div className="tz-time-pill-track blue">
                <div className="tz-point-badge">08:00 AM (June 1)</div>
                <div className="tz-point-badge">14:00 PM (June 1)</div>
                <div className="tz-point-badge">20:00 PM (June 1)</div>
                <div className="tz-point-badge">02:00 AM (June 2)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6C.1: Simultaneous observation coordinates localized across international time offsets without synchronization drift.</span>
        </div>
      </div>
    );
  }

  // 4. Period Range Timeline (6D)
  if (plotType === 'period_range_timeline') {
    const quarters = [
      { q: '2026Q1', rev: 420.5, h: 75 },
      { q: '2026Q2', rev: 460.2, h: 90 },
      { q: '2026Q3', rev: 510.0, h: 110 },
      { q: '2026Q4', rev: 580.4, h: 135 },
      { q: '2027Q1', rev: 610.1, h: 145 },
      { q: '2027Q2', rev: 640.8, h: 155 }
    ];

    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <BarChart3 size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Quarterly Revenue Interval Breakdown (PeriodRange Q-DEC)</span>
          </div>
          <span className="plot-engine-tag">Period Duration Analysis</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 220" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            <line x1="40" y1="180" x2="470" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
            {quarters.map((q, idx) => {
              const x = 60 + idx * 68;
              const y = 180 - q.h;
              return (
                <g key={idx}>
                  <rect x={x} y={y} width="44" height={q.h} rx="5" fill="#0d9488" opacity="0.85" />
                  <text x={x + 22} y={y - 8} fontSize="10" textAnchor="middle" fill="#0f172a" fontWeight="700">
                    ₹{q.rev}
                  </text>
                  <text x={x + 22} y="196" fontSize="10" textAnchor="middle" fill="#475569" fontWeight="600">
                    {q.q}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6D.1: Sequential span-of-time quarters evaluated with continuous period addition and fiscal rollover.</span>
        </div>
      </div>
    );
  }

  // 5. Frequency Realignment (6E)
  if (plotType === 'asfreq_alignment') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Layers size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Frequency Mapping from Annual (Y-DEC) to Sub-Periods</span>
          </div>
          <span className="plot-engine-tag">asfreq Alignment</span>
        </div>

        <div className="svg-plot-container">
          <div className="asfreq-mapping-diagram">
            <div className="asfreq-parent-box">
              <span className="parent-tag">Annual Period: 2026 (Full Year Span)</span>
              <div className="parent-interval-bar">
                <div className="child-marker start">
                  <strong>Start: how='start'</strong>
                  <span>2026-01 (January)</span>
                </div>
                <div className="interval-filler">12 Calendar Months Span</div>
                <div className="child-marker end">
                  <strong>End: how='end'</strong>
                  <span>2026-12 (December)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6E.1: Start/end coordinate boundary resolution during frequency downscaling.</span>
        </div>
      </div>
    );
  }

  // 6. To Period Grouping (6F)
  if (plotType === 'to_period_group') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <Clock size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: Timestamp Slices Grouped into Monthly Period Envelope</span>
          </div>
          <span className="plot-engine-tag">to_period / to_timestamp</span>
        </div>

        <div className="svg-plot-container">
          <div className="to-period-group-diagram">
            <div className="discrete-points-box">
              <span className="tag-header">Individual Timestamps (DatetimeIndex)</span>
              <div className="points-pills">
                <span>2026-01-01</span>
                <span>2026-01-02</span>
                <span>2026-01-03</span>
                <span>2026-01-04</span>
                <span>2026-01-05</span>
              </div>
            </div>

            <div className="down-arrow-container">
              <ArrowRight size={20} style={{ transform: 'rotate(90deg)', color: '#0d9488' }} />
              <span className="arrow-text">.to_period('M')</span>
            </div>

            <div className="envelope-bucket-box">
              <span className="tag-header">Unified Periodic Bucket (PeriodIndex)</span>
              <div className="bucket-highlight">
                <strong>Period: 2026-01</strong>
                <span>(Spans 2026-01-01 00:00:00 to 2026-01-31 23:59:59)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="plot-footer-note">
          <span>Figure 6F.1: Projection of individual timestamp points into a cohesive monthly reporting span.</span>
        </div>
      </div>
    );
  }

  // 7. Resampling Comparison Curve (6G)
  if (plotType === 'resample_curve') {
    return (
      <div className="visual-plot-card">
        <div className="plot-header-bar">
          <div className="plot-title-group">
            <TrendingUp size={15} style={{ color: '#0d9488' }} />
            <span className="plot-title-text">Visual Plot: High-Frequency Raw Daily Data vs Smoothed Weekly Downsampling</span>
          </div>
          <span className="plot-engine-tag">Signal Aggregation</span>
        </div>

        <div className="svg-plot-container">
          <svg viewBox="0 0 500 230" className="plot-svg-canvas" preserveAspectRatio="xMidYMid meet">
            {/* Grid */}
            <line x1="40" y1="40" x2="470" y2="40" stroke="#f1f5f9" />
            <line x1="40" y1="90" x2="470" y2="90" stroke="#f1f5f9" />
            <line x1="40" y1="140" x2="470" y2="140" stroke="#f1f5f9" />
            <line x1="40" y1="190" x2="470" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="40" y1="40" x2="40" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* High frequency fluctuating raw signal (gray dashed) */}
            <path
              d="M 50,150 L 70,130 L 90,160 L 110,120 L 130,140 L 150,110 L 170,135 L 190,95 L 210,115 L 230,85 L 250,105 L 270,75 L 290,90 L 310,65 L 330,80 L 350,60 L 370,70 L 390,50 L 410,65 L 430,55 L 450,45"
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
