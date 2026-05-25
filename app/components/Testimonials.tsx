import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mrs. Adebayo Folake',
      role: 'School Principal',
      school: 'Greenfield International School, Lagos',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      rating: 5,
      text: 'Soundskill Hub has completely transformed how our teachers approach handwriting instruction. The Nelson Handwriting training was comprehensive and immediately applicable. Our students\' handwriting improved dramatically within weeks!',
    },
    {
      name: 'Mr. Okafor Chinedu',
      role: 'Primary School Teacher',
      school: 'Excellence Academy, Abuja',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      rating: 5,
      text: 'The inclusive education workshop opened my eyes to new teaching methodologies. I now have practical strategies to support all my students, regardless of their learning differences. Highly recommended!',
    },
    {
      name: 'Mrs. Ibrahim Fatima',
      role: 'Early Years Coordinator',
      school: 'Sunshine Montessori, Port Harcourt',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
      rating: 5,
      text: 'The creative literacy and mathematics training gave me so many engaging activities for my students. The trainers are knowledgeable, patient, and truly passionate about education.',
    },
    {
      name: 'Dr. Eze Ngozi',
      role: 'Educational Consultant',
      school: 'Independent Consultant',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      rating: 5,
      text: 'As someone who trains teachers across multiple schools, I confidently recommend Soundskill Hub. Their programs are research-based, practical, and deliver measurable results.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
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

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Quote decoration */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-10 blur-2xl" />

            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
              <Quote className="w-16 h-16 text-purple-200 mb-6" />

              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic"
              >
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </motion.p>

              <div>
                <motion.img
                  key={activeIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                />
                <div className="flex-1">
                  <motion.h4
                    key={`name-${activeIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold text-slate-900"
                  >
                    {testimonials[activeIndex].name}
                  </motion.h4>
                  <motion.p
                    key={`role-${activeIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-slate-600"
                  >
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].school}
                  </motion.p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
