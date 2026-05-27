import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mummy Jemuel',
      role: 'Parent',
      // school: 'Greenfield International School, Lagos',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 5,
      text: 'I have seen an incredible transformation in my child\'s education, My son\'s writing has improved a whole lot! Soundskillhub is doing an excellent job with the kids.',
    },
    {
      name: 'Mr. Jasmine Emmanuel-Smart',
      role: 'Parent',
      // school: 'Excellence Academy, Abuja',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      rating: 5,
      text: 'I have been meaning to write a review concerning your handwriting class with my son. I don\'t know how you do it but the way my boy\'s handwriting changed was like magic to me.s',
    },
    {
      name: 'Chinony Obioha',
      role: 'Parent',
      // school: 'Sunshine Montessori, Port Harcourt',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      rating: 5,
      text: 'You know how he was writing previously, I don\'t even like studying with him because the handwriting annoys me. Thank you so much. I appreciate your effort and patience.',
    },
    {
      name: 'Miracle Ohiafi',
      role: 'Parent',
      // school: 'Independent Consultant',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 5,
      text: 'In just 2 months, Soundskillhub transformed my son\'s handwriting from indescribable to legible, clear, and neat. Her patiance, dedication, and love show in the results. Soundskillhub is simply the best handwriting coach.',
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
            What Educators <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from teachers, principals, and educational leaders who have experienced our training programs.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${activeIndex === index
                ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl'
                : 'bg-white text-slate-900 shadow-lg hover:shadow-xl border border-slate-200'
                }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-white/20"
              />
              <h4 className={`font-bold mb-1 ${activeIndex === index ? 'text-white' : 'text-slate-900'}`}>
                {testimonial.name}
              </h4>
              <h4 className={`italic mb-1 ${activeIndex === index ? 'text-white' : 'text-slate-900'}`}>
                {testimonial.text}
              </h4>
              <p className={`text-sm mb-3 ${activeIndex === index ? 'text-white/90' : 'text-slate-600'}`}>
                {testimonial.role}
              </p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${activeIndex === index
                      ? 'fill-amber-300 text-amber-300'
                      : 'fill-amber-400 text-amber-400'
                      }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
