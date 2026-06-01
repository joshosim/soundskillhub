import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MapPin } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import CHINONYE from '../../public/chinonye.jpg';
import MIRACLE from '../../public/miracle.jpg';
import Image from 'next/image';

export function Testimonials() {
  const { ref, inView } = useInView();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDraggingActive, setIsDraggingActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const lastDragX = useRef(0);
  const velocityRef = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const testimonials = [
    {
      name: 'Mr. Jasmine Emmanuel-Smart',
      role: 'Parent',
      location: 'Nigeria',
      rating: 5,
      text: "I have seen an incredible transformation in my child's education, My son's writing has improved a whole lot! Soundskillhub is doing an excellent job with the kids.",
      badge: true,
    },
    {
      url: CHINONYE,
      name: 'Chinonye Obioha',
      role: 'Parent',
      location: 'Nigeria',
      rating: 5,
      text: "I have been meaning to write a review concerning your handwriting class with my son. I don't know how you do it but the way my boy's handwriting changed was like magic to me. You know how he was writing previously, I don't even like studying with him because the handwriting annoys me. Thank you so much. I appreciate your effort and patience.",
      badge: true,
    },
    {
      url: MIRACLE,
      name: 'Miracle Ohiafi',
      role: 'Parent',
      location: 'Nigeria',
      rating: 5,
      text: "In just 2 months, Soundskillhub transformed my son's handwriting from indescribable to legible, clear, and neat. Her patiance, dedication, and love show in the results. Soundskillhub is simply the best handwriting coach.",
      badge: true,
    },
    {
      name: 'Mrs. Adeola Johnson',
      role: 'Parent',
      location: 'Lagos State',
      rating: 5,
      text: "Before joining Soundskill Hub, my son's handwriting was difficult to read and he often lost marks because of poor presentation. Within a few weeks, I noticed a remarkable improvement. His teachers now commend his neat work, and he recently won his school's weekly handwriting award. Thank you, Coach Glory, for your patience and dedication.",
      badge: true,
    },
    {
      name: 'Mr. Chinedu Okafor',
      role: 'Parent',
      location: 'Enugu State',
      rating: 5,
      text: "Soundskill Hub transformed my daughter's handwriting completely. The lessons were simple, practical, and easy for her to follow. She became more confident in class and proudly brought home a handwriting excellence certificate from her school. I highly recommend this programme to every parent.",
      badge: true,
    },
    {
      name: 'Mrs. Amina Bello',
      role: 'Parent',
      location: 'Kaduna State',
      rating: 5,
      text: 'I was amazed by the progress my son made in such a short time. His letter formation, spacing, and overall presentation improved significantly. He has won several weekly handwriting recognitions in school since training with Soundskill Hub.',
      badge: true,
    },
    {
      name: 'Mrs. Grace Ekanem',
      role: 'Parent',
      location: 'Akwa Ibom State',
      rating: 5,
      text: 'What I appreciate most is the personalized attention given to each child. My daughter now enjoys writing and takes pride in her schoolwork. Her handwriting has become one of the best in her class, and she recently received a handwriting award at school.',
      badge: true,
    },
    {
      name: 'Mr. Tunde Adebayo',
      role: 'Parent',
      location: 'Oyo State',
      rating: 5,
      text: "Coach Glory's teaching approach is exceptional. My son went from avoiding written assignments to completing them confidently. His improved handwriting has earned him praise from teachers and classmates alike. We are grateful for the positive impact.",
      badge: true,
    },
    {
      name: 'Mrs. Ngozi Eze',
      role: 'Parent',
      location: 'Anambra State',
      rating: 5,
      text: "The results exceeded my expectations. My daughter's handwriting is now neat, consistent, and beautiful. She has won multiple weekly handwriting competitions in her school, and her confidence has grown tremendously.",
      badge: true,
    },
    {
      name: 'Mrs. Sarah Williams',
      role: 'Parent',
      location: 'Manchester, United Kingdom',
      rating: 5,
      text: "Although we are based in Manchester, the online handwriting coaching from Soundskill Hub was outstanding. My son enjoyed every session and showed noticeable improvement within weeks. His teacher commented on the remarkable change in his handwriting, and he has received recognition for neat work on several occasions.",
      badge: true,
    },
    {
      name: 'Mrs. Fatima Ibrahim',
      role: 'Parent',
      location: 'Abuja, FCT',
      rating: 5,
      text: "Soundskill Hub helped my child develop not just beautiful handwriting but also discipline and attention to detail. The improvement was visible in both schoolwork and examinations. I would gladly recommend Coach Glory to any parent seeking lasting results.",
      badge: true,
    },
  ];

  const doubled = [...testimonials, ...testimonials];

  // Schedule auto-scroll resume after user interaction
  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000); // resume 2s after last interaction
  }, []);

  // Auto-scroll RAF loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;

    const step = () => {
      if (!isPaused && !isDragging.current) {
        scrollPosRef.current += speed;
        if (scrollPosRef.current >= el.scrollWidth / 2) {
          scrollPosRef.current = 0;
        }
        el.scrollLeft = scrollPosRef.current;
      }
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused]);

  // Keep scrollPosRef in sync when user drags
  const syncScrollPos = useCallback(() => {
    if (scrollRef.current) {
      scrollPosRef.current = scrollRef.current.scrollLeft;
    }
  }, []);

  // ── Mouse events ──────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    setIsDraggingActive(true);
    dragStartX.current = e.pageX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
    lastDragX.current = e.pageX;
    velocityRef.current = 0;
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - dragStartX.current;
    velocityRef.current = e.pageX - lastDragX.current;
    lastDragX.current = e.pageX;
    const newScroll = dragStartScroll.current - dx;
    scrollRef.current.scrollLeft = newScroll;
    scrollPosRef.current = newScroll;
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsDraggingActive(false);
    syncScrollPos();
    scheduleResume();
  }, [scheduleResume, syncScrollPos]);

  // ── Touch events ──────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    setIsDraggingActive(true);
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0;
    lastDragX.current = e.touches[0].clientX;
    velocityRef.current = 0;
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    velocityRef.current = e.touches[0].clientX - lastDragX.current;
    lastDragX.current = e.touches[0].clientX;
    const newScroll = dragStartScroll.current - dx;
    scrollRef.current.scrollLeft = newScroll;
    scrollPosRef.current = newScroll;
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    setIsDraggingActive(false);
    syncScrollPos();
    scheduleResume();
  }, [scheduleResume, syncScrollPos]);

  return (
    <section
      ref={ref}
      className="py-24 bg-[#fffdf8] dark:bg-[#1b1428] relative overflow-hidden transition-colors duration-300"
    >
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
            From the{' '}
            <span className="text-violet-700 dark:text-[#ffd85f]">
              People{' '}
            </span>
            I&apos;ve Worked With
          </h2>
          <p className="text-xl text-slate-700 dark:text-amber-50/75 max-w-3xl mx-auto">
            Hear from teachers, parents, and educational leaders who have
            experienced our training programs.
          </p>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-linear-to-r from-[#fffdf8] via-[#fffdf8]/80 to-transparent dark:from-[#1b1428] dark:via-[#1b1428]/80" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-linear-to-l from-[#fffdf8] via-[#fffdf8]/80 to-transparent dark:from-[#1b1428] dark:via-[#1b1428]/80" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-hidden select-none"
            style={{ cursor: isDraggingActive ? 'grabbing' : 'grab' }}
            // Mouse
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            // Touch
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {doubled.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index % testimonials.length)}
                className={`
                  relative rounded-2xl p-6 transition-all duration-300 overflow-hidden
                  flex-shrink-0 w-[85vw] sm:w-72 lg:w-80
                  ${activeIndex === index % testimonials.length
                    ? 'bg-violet-700 text-white shadow-2xl'
                    : 'bg-white text-slate-900 shadow-md hover:shadow-lg border border-violet-100 dark:bg-white/10 dark:text-amber-50 dark:border-white/10'
                  }
                `}
              >
                {testimonial.badge && (
                  <span
                    className={`absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full ${activeIndex === index % testimonials.length
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-50 text-emerald-700'
                      }`}
                  >
                    ✓ Verified
                  </span>
                )}

                <div
                  className={`text-5xl leading-none mb-2 font-serif select-none ${activeIndex === index % testimonials.length
                    ? 'text-white/30'
                    : 'text-slate-200'
                    }`}
                >
                  &quot;
                </div>

                <p
                  className={`text-sm italic leading-relaxed mb-6 ${activeIndex === index % testimonials.length
                    ? 'text-white/85'
                    : 'text-slate-600 dark:text-amber-50/75'
                    }`}
                >
                  {testimonial.text}
                </p>

                <div
                  className={`flex items-center gap-2 mb-4 font-medium ${activeIndex === index % testimonials.length
                    ? 'text-white/70'
                    : 'text-slate-400'
                    }`}
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="text-xs">{testimonial.location}</span>
                </div>

                <div
                  className={`h-px mb-4 ${activeIndex === index % testimonials.length
                    ? 'bg-white/20'
                    : 'bg-slate-100'
                    }`}
                />

                <div className="flex items-center gap-3">
                  {!testimonial.url ? (
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${activeIndex === index % testimonials.length
                        ? 'bg-white/20 text-white'
                        : 'bg-violet-100 text-violet-700 dark:bg-white/10 dark:text-amber-100'
                        }`}
                    >
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  ) : (
                    <Image
                      src={testimonial.url}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-full object-cover shrink-0"
                    />
                  )}
                  <div>
                    <p
                      className={`font-semibold text-sm leading-tight ${activeIndex === index % testimonials.length
                        ? 'text-white'
                        : 'text-slate-900 dark:text-amber-50'
                        }`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`text-xs ${activeIndex === index % testimonials.length
                        ? 'text-white/65'
                        : 'text-slate-500 dark:text-amber-50/60'
                        }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'bg-violet-700 w-8 dark:bg-[#ffd85f]'
                : 'bg-slate-300 hover:bg-slate-400 dark:bg-white/25 dark:hover:bg-white/40'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
