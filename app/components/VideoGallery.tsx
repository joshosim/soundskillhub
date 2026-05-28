'use client';

import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Play, Clock, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

type Video = {
  publicId: string;
  title: string;
  durationSeconds: number | null;
  duration: string;
  videoUrl: string;
  thumbnail: string;
};

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

export function VideoGallery() {
  const { ref, inView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/videos')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setVideos(data);
      })
      .catch(err => {
        console.error(err);
        setError('Could not load videos. Please try again.');
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const videosMissingDuration = videos.filter(video => video.durationSeconds == null);
    if (videosMissingDuration.length === 0) return;

    const metadataLoaders = videosMissingDuration.map(video => {
      const media = document.createElement('video');
      media.preload = 'metadata';
      media.src = video.videoUrl;

      const handleMetadata = () => {
        if (!Number.isFinite(media.duration)) return;

        setVideos(currentVideos =>
          currentVideos.map(currentVideo =>
            currentVideo.publicId === video.publicId
              ? {
                  ...currentVideo,
                  durationSeconds: media.duration,
                  duration: formatDuration(media.duration),
                }
              : currentVideo
          )
        );
      };

      media.addEventListener('loadedmetadata', handleMetadata);

      return () => {
        media.removeEventListener('loadedmetadata', handleMetadata);
        media.removeAttribute('src');
        media.load();
      };
    });

    return () => {
      metadataLoaders.forEach(cleanup => cleanup());
    };
  }, [videos]);

  const featuredVideo = videos[0] ?? null;
  const regularVideos = videos.slice(1);
  const reveal = inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };

  if (loading) {
    return (
      <section className="py-24 bg-slate-900 flex items-center justify-center min-h-100">
        <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-slate-900 flex items-center justify-center min-h-100">
        <p className="text-red-400 text-lg">{error}</p>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-125 h-125 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={reveal}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Training{' '}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Videos
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch our comprehensive training sessions and educational workshops.
          </p>
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reveal}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div
              className="relative rounded-3xl overflow-hidden group"
              onMouseEnter={() => setHoveredIndex(-1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <video
                src={featuredVideo.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={featuredVideo.thumbnail}
                className="w-full h-125 object-cover bg-black"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 pointer-events-none">
                <div className="inline-block px-4 py-2 bg-purple-600 rounded-full text-white text-sm font-semibold mb-3">
                  Featured Training
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{featuredVideo.title}</h3>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{featuredVideo.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        {videos.length === 0 && (
          <p className="text-center text-white/70">
            No training videos are available yet.
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularVideos.map((video, index) => (
            <motion.div
              key={video.publicId}
              initial={{ opacity: 0, y: 30 }}
              animate={reveal}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                {activeVideo === video.videoUrl ? (
                  <video
                    src={video.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="w-full h-48 object-cover bg-black"
                  />
                ) : (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg border border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </motion.div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded text-white text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
