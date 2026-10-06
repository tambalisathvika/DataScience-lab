/**
 * Converts various YouTube URL formats to an embed URL.
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://m.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - Shorts: https://www.youtube.com/shorts/VIDEO_ID
 */
export function getYouTubeEmbedUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  const trimmed = url.trim();
  if (!trimmed) return '';

  try {
    // If it's already an embed url
    if (trimmed.includes('youtube.com/embed/')) {
      const parts = trimmed.split('embed/');
      const videoId = parts[1].split('?')[0].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Standard youtube.com/watch?v=ID
    const watchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/v\/)([^&#]+)/i);
    if (watchMatch && watchMatch[1]) {
      return `https://www.youtube.com/embed/${watchMatch[1]}`;
    }

    // Shortened youtu.be/ID
    const shortMatch = trimmed.match(/youtu\.be\/([^?&#]+)/i);
    if (shortMatch && shortMatch[1]) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }

    // Shorts youtube.com/shorts/ID
    const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([^?&#]+)/i);
    if (shortsMatch && shortsMatch[1]) {
      return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }

    // Direct ID (11 chars)
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return `https://www.youtube.com/embed/${trimmed}`;
    }

    return trimmed;
  } catch (err) {
    console.error('Error parsing video URL:', err);
    return trimmed;
  }
}
