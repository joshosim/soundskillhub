import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles, BookOpen, Award, Users, PenLine } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  const handwritingWord = 'Handwriting';
  const learningPhrase = 'Learning Experiences';

  return (
    <section className="paper-grid relative flex min-h-svh items-center justify-center overflow-hidden bg-[#fffdf8] text-slate-950 transition-colors duration-300 dark:bg-[#1b1428] dark:text-amber-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-32 h-80 w-80 rounded-full bg-[#dcc7ff] opacity-80 dark:opacity-20" />
        <div className="absolute bottom-24 left-28 h-64 w-64 rounded-full bg-[#ffd85f] opacity-70 dark:opacity-25" />
        <div className="absolute left-1/2 top-24 h-16 w-48 -translate-x-1/2 rounded-full bg-violet-200/70 dark:bg-violet-400/20" />
        <div className="absolute right-[8%] top-[28%] hidden h-20 w-20 rounded-full border-[14px] border-[#ffd85f] lg:block" />
        <div className="absolute bottom-[14%] right-[16%] hidden h-28 w-28 rounded-full border-[18px] border-[#dcc7ff] lg:block" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 text-center sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-lg dark:border-white/10 dark:bg-white/10 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-amber-500 dark:text-amber-200" />
            <span className="text-xs text-slate-700 dark:text-amber-50/90 sm:text-sm">Premium Educational Training</span>
          </motion.div>

          <h1 className="mx-auto mb-5 max-w-5xl text-4xl font-bold leading-[1.08] text-slate-950 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl dark:text-amber-50">
            <span className="block">Transforming</span>
            <span className="relative mx-auto mt-1 inline-block max-w-full px-1 align-baseline font-hand text-4xl font-bold leading-[1.08] text-violet-700 sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#ffd85f]">
              {handwritingWord.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 10, rotate: -4 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.22, delay: 0.55 + index * 0.055 }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.svg
                viewBox="0 0 310 38"
                className="absolute -bottom-4 left-0 h-7 w-full overflow-visible text-[#ffd85f] dark:text-violet-300 sm:-bottom-5 sm:h-9"
                aria-hidden="true"
              >
                <motion.path
                  d="M8 20 C68 35 118 3 172 18 C218 30 252 23 302 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.15, delay: 1.1, ease: 'easeInOut' }}
                />
              </motion.svg>
            </span>
            <span className="block text-3xl leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl">&</span>
            <span className="relative mx-auto mt-1 flex max-w-[20rem] flex-wrap justify-center gap-x-2 gap-y-1 px-1 font-hand text-4xl font-bold leading-[1.05] text-violet-700 sm:max-w-4xl sm:gap-x-4 sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#ffd85f]">
              {learningPhrase.split(' ').map((word, wordIndex) => (
                <span key={word} className="inline-block whitespace-nowrap">
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={`${word}-${letter}-${letterIndex}`}
                      className="inline-block"
                      initial={{ opacity: 0, y: 10, rotate: -4 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        duration: 0.22,
                        delay: 1.2 + wordIndex * 0.44 + letterIndex * 0.045,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
              <motion.svg
                viewBox="0 0 520 44"
                className="absolute -bottom-5 left-1/2 h-8 w-[88%] -translate-x-1/2 overflow-visible text-[#ffd85f] dark:text-violet-300 sm:-bottom-6 sm:h-10"
                aria-hidden="true"
              >
                <motion.path
                  d="M10 25 C80 40 132 8 200 23 C274 39 338 7 412 22 C452 30 482 27 510 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.25, delay: 2, ease: 'easeInOut' }}
                />
              </motion.svg>
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-slate-700 dark:text-amber-50/80 sm:mb-10 sm:text-lg lg:text-xl">
            Empowering educators and students across Nigeria and beyond with innovative
            handwriting training, inclusive education, and creative teaching methodologies.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#contact"><Button
                size="lg"
                className="w-full rounded-full border-0 bg-violet-600 px-6 py-5 text-base text-white shadow-xl shadow-violet-950/20 hover:bg-violet-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200"
              >
                <PenLine className="h-5 w-5" />
                Book Training
              </Button></a>
            <a
              href="#courses">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-violet-200 bg-white/80 px-6 py-5 text-base text-violet-700 backdrop-blur-lg hover:bg-violet-50 sm:w-auto sm:px-8 sm:py-6 sm:text-lg dark:border-white/15 dark:bg-white/10 dark:text-amber-50 dark:hover:bg-white/15"
              >
                Explore Courses
              </Button></a>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { value: 500, suffix: '+', label: 'Teachers Trained' },
            { value: 10, suffix: '+', label: 'Schools Partnered' },
            { value: 2000, suffix: '+', label: 'Students Impacted' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-violet-100 bg-white/85 p-4 shadow-lg shadow-violet-950/5 backdrop-blur-lg sm:p-5 lg:p-6 dark:border-white/10 dark:bg-white/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-1 text-3xl font-bold text-violet-700 tabular-nums sm:text-4xl dark:text-amber-200">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-600 sm:text-base dark:text-amber-50/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-violet-300 p-2 dark:border-white/30">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-amber-200"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
