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
      color: 'bg-violet-600',
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We believe every child deserves quality education tailored to their unique learning style and needs.',
      color: 'bg-[#ffd85f]',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Creative, research-backed methodologies that make learning handwriting and foundational skills engaging.',
      color: 'bg-[#dcc7ff]',
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Empowering educators and students across Nigeria and internationally with proven training programs.',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#fffdf8] py-24 transition-colors duration-300 dark:bg-[#1b1428]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#dcc7ff] blur-3xl dark:bg-violet-600/30" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#ffd85f] blur-3xl dark:bg-amber-400/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-amber-50 mb-4">
            About <span className="text-violet-700 dark:text-[#ffd85f]">Soundskill Hub</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-amber-50/75 max-w-3xl mx-auto">
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
              <div className="absolute -inset-4 rounded-3xl bg-violet-300 blur-2xl opacity-25 dark:bg-violet-600" />
              <Image
                src={IImage}
                alt="Teacher training workshop"
                className="relative h-[500px] w-full rounded-[1.5rem] object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-950 dark:text-amber-50">
              Pioneering Excellence in Educational Training
            </h3>
            <p className="text-lg text-slate-700 dark:text-amber-50/75">
              Soundskill Hub is at the forefront of educational innovation, specializing in
              Nelson and Print Handwriting Training, Differentiated Instruction, and creative
              teaching methodologies for literacy and mathematics in early years education.
            </p>
            <p className="text-lg text-slate-700 dark:text-amber-50/75">
              Our expert trainers work with school owners, teachers, parents, and students to
              create inclusive learning environments where every child can thrive and develop
              essential foundational skills.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-violet-100 dark:border-white/10 dark:bg-white/10">
                <span className="text-violet-700 dark:text-amber-100 font-semibold">Nelson Handwriting</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-violet-100 dark:border-white/10 dark:bg-white/10">
                <span className="text-violet-700 dark:text-amber-100 font-semibold">Inclusive Education</span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md border border-amber-100 dark:border-white/10 dark:bg-white/10">
                <span className="text-amber-600 dark:text-amber-100 font-semibold">Creative Teaching</span>
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
              <div className="absolute inset-0 bg-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300 dark:bg-white/10" />
              <div className="relative p-6 backdrop-blur-lg bg-white/85 rounded-2xl border border-violet-100 shadow-xl h-full dark:border-white/10 dark:bg-white/10">
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-950 dark:text-amber-50 mb-2">{feature.title}</h4>
                <p className="text-slate-700 dark:text-amber-50/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
