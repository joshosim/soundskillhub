import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Users, TrendingUp, Sparkles, BookOpen, Heart } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function WhyChooseUs() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Award,
      title: 'Professional Trainers',
      statValue: 15,
      statSuffix: '+',
      description: 'Certified experts with years of experience in educational training and handwriting instruction.',
      color: 'bg-violet-600',
      textColor: 'text-violet-200',
      delay: 0.1,
    },
    {
      icon: Users,
      title: 'School Support',
      statValue: 50,
      statSuffix: '+',
      description: 'Partnered schools benefiting from our comprehensive training and support programs.',
      color: 'bg-[#ffd85f]',
      textColor: 'text-amber-200',
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      title: 'Student Improvement',
      statValue: 95,
      statSuffix: '%',
      description: 'Success rate in improving students\' handwriting and foundational learning skills.',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-200',
      delay: 0.3,
    },
    {
      icon: Sparkles,
      title: 'Creative Methods',
      statValue: 100,
      statSuffix: '+',
      description: 'Innovative teaching activities and resources designed for engaging learning experiences.',
      color: 'bg-amber-500',
      textColor: 'text-amber-200',
      delay: 0.4,
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      statValue: 24,
      statSuffix: '/7',
      description: 'Access to online resources, recorded sessions, and continuous support for educators.',
      color: 'bg-[#dcc7ff]',
      textColor: 'text-violet-200',
      delay: 0.5,
    },
    {
      icon: Heart,
      title: 'Inclusive Approach',
      statValue: 100,
      statSuffix: '%',
      description: 'Committed to differentiated instruction that meets the needs of all learners.',
      color: 'bg-violet-500',
      textColor: 'text-violet-200',
      delay: 0.6,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#fffdf8] dark:bg-[#1b1428] relative overflow-hidden transition-colors duration-300">
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
            Why Choose <span className="text-violet-700 dark:text-[#ffd85f]">Soundskill Hub</span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-amber-50/75 max-w-3xl mx-auto">
            Experience excellence in educational training with measurable results and lasting impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full bg-white dark:bg-white/10 rounded-[1.5rem] p-8 border border-violet-100 dark:border-white/15 shadow-lg hover:shadow-xl transition-all dark:shadow-violet-950/20">
                {/* Icon and Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: feature.delay + 0.3 }}
                    className="text-right"
                  >
                    <div className={`text-3xl font-bold ${feature.textColor} dark:${feature.textColor} tabular-nums text-slate-950`}>
                      <AnimatedCounter value={feature.statValue} suffix={feature.statSuffix} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-700 dark:text-white/70 leading-relaxed">{feature.description}</p>

                {/* Animated line */}
                <motion.div
                  className={`h-1 ${feature.color} rounded-full mt-6`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: feature.delay + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white dark:bg-white/10 rounded-[1.5rem] border border-violet-100 dark:border-white/15 shadow-lg dark:shadow-violet-950/20">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
              Ready to Transform Your Teaching Practice?
            </h3>
            <p className="text-slate-700 dark:text-white/70 mb-6 max-w-2xl">
              Join hundreds of educators who have elevated their teaching with our proven methodologies.
            </p>
            <a
              href="#contact"><motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ffd85f] text-slate-950 font-semibold rounded-full shadow-2xl hover:bg-amber-200 transition-colors"
              >
                Get Started Today
              </motion.button></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
