import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import Masonry from 'react-responsive-masonry';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import AImage from '../../public/a.jpg';
import BImage from '../../public/b.jpg';
import DImage from '../../public/d.jpg';
import EImage from '../../public/e.jpg';
import GImage from '../../public/g.jpg';
import HImage from '../../public/h.jpg';
import JImage from '../../public/j.jpg';
import LImage from '../../public/l.jpg';
import KImage from '../../public/k.jpg';
import FImage from '../../public/f.jpg';
import MImage from '../../public/m.jpg';
import NImage from '../../public/n.jpg';
import OImage from '../../public/o.jpg';
import PImage from '../../public/p.jpg';


export function PhotoGallery() {
  const { ref, inView } = useInView();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: AImage,
      title: 'Teacher Training Workshop',
      category: 'Training',
    },
    {
      url: BImage,
      title: 'Handwriting Practice Session',
      category: 'Students',
    },
    {
      url: JImage,
      title: 'Mathematics Learning Activity',
      category: 'Classroom',
    },
    {
      url: LImage,
      title: 'Collaborative Learning',
      category: 'Training',
    },
    {
      url: KImage,
      title: 'Modern Classroom Setup',
      category: 'Classroom',
    },
    {
      url: FImage,
      title: 'Educational Workshop',
      category: 'Students',
    },
    {
      url: DImage,
      title: 'Handwriting Practice Session',
      category: 'Students',
    },
    {
      url: EImage,
      title: 'Mathematics Learning Activity',
      category: 'Classroom',
    },
    {
      url: GImage,
      title: 'Collaborative Learning',
      category: 'Training',
    },
    {
      url: PImage,
      title: 'Educational Workshop',
      category: 'Students',
    },
    {
      url: HImage,
      title: 'Modern Classroom Setup',
      category: 'Classroom',
    },
    {
      url: MImage,
      title: 'Educational Workshop',
      category: 'Students',
    },
    {
      url: NImage,
      title: 'Collaborative Learning',
      category: 'Training',
    },

    {
      url: OImage,
      title: 'Modern Classroom Setup',
      category: 'Classroom',
    },
    {
      url: PImage,
      title: 'Educational Workshop',
      category: 'Students',
    },
  ];

  return (
    <>
      <section ref={ref} className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-40 left-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-40 w-96 h-96 bg-pink-200 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Moments from our training sessions, workshops, and educational activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <Masonry
              columnsCount={3} gutter="1.5rem">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImage(image.url.src)}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image.url.src}
                      alt={image.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <ZoomIn className="w-12 h-12 text-white mb-4" />
                        <h3 className="text-white font-bold text-lg px-4 text-center">{image.title}</h3>
                        <span className="text-white/80 text-sm mt-2">{image.category}</span>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-900">
                      {image.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
