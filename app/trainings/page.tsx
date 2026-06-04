'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { useInView } from '@/app/components/hooks/useInView';
import { trainingPrograms } from '@/app/data/trainingPrograms';
import { ArrowLeft } from 'lucide-react';

export default function TrainingsPage() {
  const { ref, inView } = useInView();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">

      <section ref={ref} className="relative overflow-hidden bg-[#fffdf8] py-24 transition-colors duration-300 dark:bg-[#1b1428]">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#dcc7ff] rounded-full blur-3xl dark:bg-violet-600/30" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ffd85f] rounded-full blur-3xl dark:bg-amber-400/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/#programs"
              className="inline-flex items-center gap-2 text-violet-700 dark:text-[#ffd85f] hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-950 dark:text-amber-50 mb-4">
              All <span className="text-violet-700 dark:text-[#ffd85f]">Training Programs</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-amber-50/75 max-w-3xl mx-auto">
              Explore our comprehensive collection of professional development programs designed to elevate your teaching practice and maximize student outcomes.
            </p>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full rounded-3xl border border-white/15 bg-white/10 p-8 shadow-xl shadow-violet-950/20 backdrop-blur-xl transition-colors duration-300 dark:bg-white/8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">{program.title}</h3>
                  <p className="text-slate-700 dark:text-white/75 mb-6 line-clamp-3">{program.description}</p>

                  {/* Features */}
                  {program.features.length > 0 && (
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-white/70 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${program.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
