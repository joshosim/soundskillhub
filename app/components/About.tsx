import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Heart, Lightbulb, Award } from 'lucide-react';
import IImage from '../../public/i.jpg';
import Image from 'next/image';

export function About() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To transform educational experiences through innovative handwriting training and inclusive teaching methods.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We believe every child deserves quality education tailored to their unique learning style and needs.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Creative, research-backed methodologies that make learning handwriting and foundational skills engaging.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Empowering educators and students across Nigeria and internationally with proven training programs.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Soundskill Hub</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A premium educational brand dedicated to revolutionizing handwriting training
            and inclusive learning across Nigeria and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20" />
              <Image
                src={IImage}
                alt="Teacher training workshop"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-900">
              Pioneering Excellence in Educational Training
            </h3>
            <p className="text-lg text-slate-600">
              Soundskill Hub is at the forefront of educational innovation, specializing in
              Nelson and Print Handwriting Training, Differentiated Instruction, and creative
              teaching methodologies for literacy and mathematics in early years education.
            </p>
            <p className="text-lg text-slate-600">
              Our expert trainers work with school owners, teachers, parents, and students to
              create inclusive learning environments where every child can thrive and develop
              essential foundational skills.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-purple-100">
                <span className="text-purple-600 font-semibold">Nelson Handwriting</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-blue-100">
                <span className="text-blue-600 font-semibold">Inclusive Education</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-amber-100">
                <span className="text-amber-600 font-semibold">Creative Teaching</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-6 backdrop-blur-lg bg-white/80 rounded-2xl border border-white/20 shadow-xl h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
