import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Play, Clock, Eye } from 'lucide-react';
import { useState } from 'react';

export function VideoGallery() {
  const { ref, inView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const videos = [
    {
      title: 'Nelson Handwriting: Complete Teacher Training',
      duration: '45:32',
      views: '2.5K',
      thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdHJhaW5pbmclMjB3b3Jrc2hvcCUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Nzk3MTQ3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
    },
    {
      title: 'Inclusive Education Strategies',
      duration: '32:18',
      views: '1.8K',
      thumbnail: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjB3cml0aW5nfGVufDF8fHx8MTc3OTcxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Creative Literacy Activities',
      duration: '28:45',
      views: '2.1K',
      thumbnail: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwbWF0aGVtYXRpY3MlMjBsaXRlcmFjeXxlbnwxfHx8fDE3Nzk3MTQ3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Early Years Mathematics Workshop',
      duration: '38:20',
      views: '1.5K',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3OTcxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Print Handwriting Fundamentals',
      duration: '35:12',
      views: '1.9K',
      thumbnail: 'https://images.unsplash.com/photo-1602145095452-aba06946ed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMHByYWN0aWNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc5NzE0NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const featuredVideo = videos.find(v => v.featured);
  const regularVideos = videos.filter(v => !v.featured);

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Training <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Watch our comprehensive training sessions and educational workshops.
          </p>
        </motion.div>

        {/* Featured Video */}
        {featuredVideo && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div 
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(-1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Play button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                animate={{ scale: hoveredIndex === -1 ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </motion.div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="inline-block px-4 py-2 bg-purple-600 rounded-full text-white text-sm font-semibold mb-3">
                  Featured Training
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{featuredVideo.title}</h3>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{featuredVideo.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{featuredVideo.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
                  
                  {/* Play button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg border border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </motion.div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded text-white text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{video.views} views</span>
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
