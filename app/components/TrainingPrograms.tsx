import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { PenTool, BookText, Users2, GraduationCap } from 'lucide-react';

export function TrainingPrograms() {
  const { ref, inView } = useInView();

  const programs = [
    {
      icon: PenTool,
      title: 'Nelson Handwriting',
      description: 'Comprehensive training in the Nelson Handwriting methodology, focusing on consistent letter formation, fluency, and legibility.',
      features: ['Letter formation', 'Handwriting fluency', 'Assessment tools', 'Teacher resources'],
      color: 'bg-violet-600',
    },
    {
      icon: BookText,
      title: 'Print Handwriting',
      description: 'Master the fundamentals of print handwriting instruction for early years learners with proven techniques.',
      features: ['Foundation skills', 'Print mastery', 'Progress tracking', 'Parent guides'],
      color: 'bg-[#ffd85f]',
    },
    {
      icon: Users2,
      title: 'Inclusive Education',
      description: 'Differentiated instruction strategies that meet diverse learning needs and create equitable learning environments.',
      features: ['Differentiation', 'UDL framework', 'Adaptive methods', 'Special needs'],
      color: 'bg-emerald-500',
    },
    {
      icon: GraduationCap,
      title: 'Literacy & Mathematics',
      description: 'Creative, engaging approaches to teaching foundational literacy and numeracy skills in early childhood education.',
      features: ['Phonics methods', 'Number sense', 'Creative activities', 'Assessment'],
      color: 'bg-[#dcc7ff]',
    },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#fffdf8] py-24 transition-colors duration-300 dark:bg-[#1b1428]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#dcc7ff] rounded-full blur-3xl dark:bg-violet-600/30" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffd85f] rounded-full blur-3xl dark:bg-amber-400/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 dark:text-amber-50 mb-4">
            Our <span className="text-violet-700 dark:text-[#ffd85f]">Training Programs</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-amber-50/75 max-w-3xl mx-auto">
            Specialized professional development programs designed to elevate teaching practices
            and student outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl shadow-violet-950/20 backdrop-blur-xl transition-colors duration-300 dark:bg-white/8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{program.title}</h3>
                <p className="text-slate-700 dark:text-white/75 mb-6">{program.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-white/70">
                      <div className={`w-1.5 h-1.5 rounded-full ${program.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
