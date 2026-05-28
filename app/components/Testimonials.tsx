import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mr. Jasmine Emmanuel-Smart',
      role: 'Parent',
      rating: 5,
      text: 'I have seen an incredible transformation in my child\'s education, My son\'s writing has improved a whole lot! Soundskillhub is doing an excellent job with the kids.',
      badge: true,
    },
    {
      name: 'Chinonye Obioha',
      role: 'Parent',
      rating: 5,
      text: 'I have been meaning to write a review concerning your handwriting class with my son. I don\'t know how you do it but the way my boy\'s handwriting changed was like magic to me. You know how he was writing previously, I don\'t even like studying with him because the handwriting annoys me. Thank you so much. I appreciate your effort and patience.',
      bagde: true,
    },
    {
      name: 'Miracle Ohiafi',
      role: 'Parent',
      rating: 5,
      text: 'In just 2 months, Soundskillhub transformed my son\'s handwriting from indescribable to legible, clear, and neat. Her patiance, dedication, and love show in the results. Soundskillhub is simply the best handwriting coach.',
      bagde: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-linear-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            From the <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">People </span>
            I’ve Worked With
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from teachers, parents, and educational leaders who have experienced our training programs.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}  // ← subtle lift, not scale (avoids layout shift)
              onClick={() => setActiveIndex(index)}
              className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 overflow-hidden ${activeIndex === index
                ? 'bg-purple-600 text-white shadow-2xl'
                : 'bg-white text-slate-900 shadow-md hover:shadow-lg border border-slate-200'
                }`}
            >
              {/* Optional verified badge */}
              {testimonial.badge && (
                <span className={`absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full ${activeIndex === index
                  ? 'bg-white/20 text-white'
                  : 'bg-emerald-50 text-emerald-700'
                  }`}>
                  {testimonial.badge}
                </span>
              )}

              {/* Large opening quote mark */}
              <div className={`text-5xl leading-none mb-2 font-serif select-none ${activeIndex === index ? 'text-white/30' : 'text-slate-200'
                }`}>
                "
              </div>

              {/* Review text comes first for readability */}
              <p className={`text-sm italic leading-relaxed mb-4 ${activeIndex === index ? 'text-white/85' : 'text-slate-600'
                }`}>
                {testimonial.text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${activeIndex === index
                      ? 'fill-yellow-300 text-yellow-300'
                      : 'fill-amber-400 text-amber-400'
                      }`}
                  />
                ))}
              </div>

              {/* Divider */}
              <div className={`h-px mb-4 ${activeIndex === index ? 'bg-white/20' : 'bg-slate-100'
                }`} />

              {/* Author row with avatar */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${activeIndex === index
                  ? 'bg-white/20 text-white'
                  : 'bg-purple-100 text-purple-700'
                  }`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className={`font-semibold text-sm leading-tight ${activeIndex === index ? 'text-white' : 'text-slate-900'
                    }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-xs ${activeIndex === index ? 'text-white/65' : 'text-slate-500'
                    }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
