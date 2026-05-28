import { motion } from "motion/react";
import { BookMarked, CheckCircle2, PenLine, ShoppingBag } from "lucide-react";
import { useInView } from "./hooks/useInView";
import BECOMINGHER from '../../public/becoming.jpg';
import Image from "next/image";

export function BooksAuthored() {
  const { ref, inView } = useInView();

  const books = [
    {
      title: "Becoming Her",
      category: "Inspiration & Growth",
      description:
        "A practical guide for helping learners build confident, readable handwriting through simple daily practice.",
      highlights: ["Letter formation", "Practice routines", "Teacher and parent support"],
      gradient: "from-purple-600 via-pink-600 to-amber-500",
      accent: "bg-amber-300",
      image: BECOMINGHER,
    },
    {
      title: "How To Support Your Child's Learning At Home",
      category: "Parenting & Learning",
      description:
        "A focused resource for parents and educators who want to guide children with clear expectations and steady progress.",
      highlights: ["Goal setting", "Learning habits", "Confidence building"],
      gradient: "from-blue-600 via-cyan-500 to-emerald-500",
      accent: "bg-cyan-300",
      image: BECOMINGHER,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700">
            <PenLine className="h-4 w-4" />
            Author Resources
          </div>
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Books <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Authored By Me</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-600">
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
              className="group grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[220px_1fr] md:p-6"
            >
              <div className="relative mx-auto aspect-3/4 w-full max-w-55">
                <Image src={book.image} alt="book.title" className="rounded-2xl hover:scale-105 transition-discrete" />
              </div>

              <div className="flex flex-col justify-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">
                  {book.category}
                </p>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {book.title}
                </h3>
                <p className="mb-6 text-slate-600">
                  {book.description}
                </p>
                <ul className="mb-8 space-y-3">
                  {book.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-transform duration-300 hover:scale-105"
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
