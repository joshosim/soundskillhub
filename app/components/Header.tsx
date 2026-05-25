import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import LOGO from '../../public/logo.jpg';
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Courses", href: "#courses" },
  { label: "Books", href: "#books" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textClass = isScrolled ? "text-slate-700" : "text-white";
  const mutedTextClass = isScrolled ? "text-slate-500" : "text-white/70";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
        ? "border-b border-slate-200/70 bg-white/90 shadow-lg backdrop-blur-xl"
        : "bg-slate-950/10 backdrop-blur-sm"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex min-w-0 items-center gap-3"
            aria-label="SoundSkillHub home"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br">
              <Image src={LOGO} alt="LOGO" objectFit="cover" objectPosition="center center" className="rounded-lg" height={100} width={100} />
            </span>
            <span className="min-w-0">
              <span
                className={`block truncate text-lg font-bold leading-tight ${isScrolled
                  ? "bg-gradient-to-r from-indigo-900 to-purple-700 bg-clip-text text-transparent"
                  : "text-white"
                  }`}
              >
                SoundSkillHub
              </span>
              <span className={`block truncate text-xs ${mutedTextClass}`}>
                ...reaching the peak.
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`${textClass} text-sm font-medium transition-colors hover:text-purple-400`}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition-transform duration-300 hover:scale-105"
            >
              Book Training
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`inline-flex size-10 items-center justify-center rounded-full border transition-colors md:hidden ${isScrolled
              ? "border-slate-200 bg-white text-slate-800"
              : "border-white/20 bg-white/10 text-white"
              }`}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-slate-200/70 bg-white/95 px-4 py-5 shadow-xl backdrop-blur-xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-2 py-3 font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-center font-semibold text-white"
            >
              Book Training
            </a>
          </div>
        </motion.nav>
      ) : null}
    </motion.header>
  );
}
