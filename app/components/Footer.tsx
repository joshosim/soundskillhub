import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send
} from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-[#fffdf8] dark:bg-[#1b1428] text-slate-950 dark:text-amber-50 overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#dcc7ff] rounded-full blur-3xl dark:bg-violet-600/30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffd85f] rounded-full blur-3xl dark:bg-amber-400/20" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-violet-700 dark:text-[#ffd85f]">
                Soundskill Hub
              </h3>
              <p className="text-slate-700 dark:text-amber-50/75 mb-6">
                Transforming educational experiences through innovative handwriting training and inclusive teaching methodologies.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100069979204439' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-violet-100 dark:bg-white/10 hover:bg-violet-600 dark:hover:bg-violet-600 text-violet-700 dark:text-amber-50 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-950 dark:text-amber-50">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Training Programs', 'Courses', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-700 dark:text-amber-50/75 hover:text-violet-700 dark:hover:text-[#ffd85f] hover:translate-x-1 inline-block transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-950 dark:text-amber-50">Our Training Programs</h4>
              <ul className="space-y-3">
                {[
                  'Training on Nelson Handwriting',
                  'Training on Print Handwriting',
                  'Training on Differentiated Instruction and Inclusive Education',
                  'Training on Creative Ways to Teach Literacy and Mathematics for Early Years',

                ].map((program) => (
                  <li key={program}>
                    <a href="#" className="text-slate-700 dark:text-amber-50/75 hover:text-violet-700 dark:hover:text-[#ffd85f] hover:translate-x-1 inline-block transition-all duration-300">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4 text-slate-950 dark:text-amber-50">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-violet-700 dark:text-[#ffd85f] shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-amber-50/75">Yenegoa, Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-violet-700 dark:text-[#ffd85f] shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-amber-50/75">+234 810 808 4179</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-violet-700 dark:text-[#ffd85f] shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-amber-50/75">gloryntion@gmail.com</span>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/message/4G7LLSNGWWZJN1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 rounded-full text-sm font-semibold text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Newsletter Section */}
          {/* <div className="border-t border-white/10 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-white/70 mb-6">
                Get the latest updates on training programs, educational resources, and teaching tips.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-500 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 dark:text-white/60 text-sm">
              © {new Date().getFullYear()} Soundskill Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-slate-600 dark:text-white/60 hover:text-violet-700 dark:hover:text-[#ffd85f] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-slate-600 dark:text-white/60 hover:text-violet-700 dark:hover:text-[#ffd85f] transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-slate-600 dark:text-white/60 hover:text-violet-700 dark:hover:text-[#ffd85f] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#ffd85f] text-slate-950 shadow-2xl shadow-violet-950/30 flex items-center justify-center hover:bg-amber-200 transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
