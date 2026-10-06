import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-input-wrapper">
      <Search className="search-input-icon" size={17} />
      <input
        type="text"
        className="search-input"
        placeholder="Search experiments..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search experiments"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          style={{
            position: 'absolute',
            right: '0.65rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center'
          }}
          aria-label="Clear search"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
