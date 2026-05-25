import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Button } from './ui/button';
import { PenTool, BookText, Users2, GraduationCap, ArrowRight } from 'lucide-react';

export function TrainingPrograms() {
  const { ref, inView } = useInView();

  const programs = [
    {
      icon: PenTool,
      title: 'Nelson Handwriting',
      description: 'Comprehensive training in the Nelson Handwriting methodology, focusing on consistent letter formation, fluency, and legibility.',
      features: ['Letter formation', 'Handwriting fluency', 'Assessment tools', 'Teacher resources'],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: BookText,
      title: 'Print Handwriting',
      description: 'Master the fundamentals of print handwriting instruction for early years learners with proven techniques.',
      features: ['Foundation skills', 'Print mastery', 'Progress tracking', 'Parent guides'],
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Users2,
      title: 'Inclusive Education',
      description: 'Differentiated instruction strategies that meet diverse learning needs and create equitable learning environments.',
      features: ['Differentiation', 'UDL framework', 'Adaptive methods', 'Special needs'],
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: GraduationCap,
      title: 'Literacy & Mathematics',
      description: 'Creative, engaging approaches to teaching foundational literacy and numeracy skills in early childhood education.',
      features: ['Phonics methods', 'Number sense', 'Creative activities', 'Assessment'],
      gradient: 'from-amber-600 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Training Programs</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
              {/* Card glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${program.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />

              <div className="relative h-full bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-white/70 mb-6">{program.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/60">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {/* <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 group/btn w-full justify-between"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
