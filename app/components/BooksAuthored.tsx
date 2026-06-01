import { motion } from "motion/react";
import { PenLine, ShoppingBag } from "lucide-react";
import { useInView } from "./hooks/useInView";
import BECOMINGHER from '../../public/becoming.jpg';
import SUPPORT from '../../public/support.jpg';
import Image from "next/image";

export function BooksAuthored() {
  const { ref, inView } = useInView();

  const books = [
    {
      title: "Becoming Her",
      category: "Inspiration & Growth",
      description:
        "Becoming Her is a deeply personal and inspiring journey of growth, purpose, and self-discovery. In this book, I share my real-life story, how I moved from uncertainty to clarity, from self-doubt to confidence, and from being \'just a teacher\' to a woman building a brand, impacting lives, and . . . . . . . .",
      accent: "bg-amber-300",
      image: BECOMINGHER,
      link: "https://selar.com/9500b8"
    },
    {
      title: "How To Support Your Child's Learning At Home",
      category: "Parenting & Learning",
      description:
        "This book provides parents the tips on how to use routine, confidence and focus to raise independent thinkers.",
      accent: "bg-cyan-300",
      image: SUPPORT,
      link: "https://selar.com/22y847"
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf8] py-24 transition-colors duration-300 dark:bg-[#1b1428]"
    >
      <div className="absolute inset-0 bg-[#fffdf8] dark:bg-[#1b1428]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-white/10 dark:bg-white/10 dark:text-amber-100">
            <PenLine className="h-4 w-4" />
            Author Resources
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-950 sm:text-5xl dark:text-amber-50">
            Books <span className="text-violet-700 dark:text-[#ffd85f]">Authored By Me</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-700 dark:text-amber-50/75">
            Practical books created from years of training educators, supporting schools, and helping children learn with confidence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {books.map((book, index) => (
            <motion.article
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group grid gap-6 rounded-[1.5rem] border border-violet-100 bg-white p-5 shadow-xl shadow-violet-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/10 md:grid-cols-[220px_1fr] md:p-6"
            >
              <div className="relative mx-auto aspect-3/4 w-full max-w-55">
                <Image src={book.image} alt="book.title" className="rounded-2xl hover:scale-105 transition-discrete" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-amber-200">
                  {book.category}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-slate-950 dark:text-amber-50">
                  {book.title}
                </h3>
                <p className="mb-6 text-slate-700 dark:text-amber-50/75">
                  {book.description}
                </p>
                <a
                  href={book.link}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 hover:scale-105 hover:bg-violet-700 dark:bg-amber-300 dark:text-slate-950 dark:hover:bg-amber-200"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Request a Copy
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
