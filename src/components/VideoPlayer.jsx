import React from 'react';
import { PlayCircle, VideoOff } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../utils/video';

export default function VideoPlayer({ url, title = 'Video Player' }) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="video-player-container">
        <div className="video-fallback-box">
          <PlayCircle size={44} style={{ color: 'var(--primary-teal)' }} />
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              Laboratory Demonstration Video
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              No external video URL specified for this session.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="video-player-container">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
