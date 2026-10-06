import React from 'react';

export default function MbuLogo({ size = 28, className = '' }) {
  return (
    <div 
      className={`mbu-logo-container ${className}`} 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        minWidth: `${size}px`, 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0
      }}
      title="Mohan Babu University (MBU)"
    >
      <img
        src="/mbu-emblem.png"
        alt="MBU Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/mbu-logo.svg';
        }}
      />
    </div>
  );
}
