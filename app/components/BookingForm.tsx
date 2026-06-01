'use client';

import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Mail, Phone, User, Send, BookOpen, Loader2 } from 'lucide-react';
import { useState } from 'react';

export function BookingForm() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    training: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Could not send your booking request.');

      setSubmitStatus('success');
      setSubmitMessage('Your booking request has been sent. We will get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', training: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Could not send your booking request.');
    }
  };

  return (
    <section ref={ref} className="py-24 bg-[#fffdf8] dark:bg-[#1b1428] relative overflow-hidden transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-150 h-150 bg-[#dcc7ff]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-150 h-150 bg-[#ffd85f]/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* ✅ Fixed: slate in light, white in dark */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Book Your{' '}
            {/* ✅ Fixed: amber-500 in light mode is visible; yellow reserved for dark */}
            <span className="text-amber-500 dark:text-[#ffd85f]">Training</span>
          </h2>
          {/* ✅ Fixed: slate-600 in light, white/80 in dark */}
          <p className="text-xl text-slate-600 dark:text-white/80 max-w-3xl mx-auto">
            Ready to elevate your teaching practice? Register for our upcoming training sessions.
          </p>
        </motion.div>

        <div className="grid gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex items-center justify-center m-auto">
              {/* ✅ Fixed: slightly stronger opacity in light mode for visibility */}
              <div className="absolute flex items-center justify-center m-auto w-full md:w-150 -inset-0.5 bg-[#ffd85f] rounded-[1.5rem] blur opacity-40 dark:opacity-25" />

              {/* ✅ Fixed: solid white bg in light mode, translucent in dark */}
              <form
                onSubmit={handleSubmit}
                className="relative w-full md:w-150 bg-white dark:bg-white/10 backdrop-blur-xl rounded-[1.5rem] p-8 border border-slate-200 dark:border-white/15 space-y-6"
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-950 dark:text-amber-50 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-950 dark:text-amber-50 placeholder:text-slate-500 dark:placeholder:text-white/50 focus:border-violet-600 dark:focus:border-amber-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-950 dark:text-amber-50 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-950 dark:text-amber-50 placeholder:text-slate-500 dark:placeholder:text-white/50 focus:border-violet-600 dark:focus:border-amber-300"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-950 dark:text-amber-50 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-950 dark:text-amber-50 placeholder:text-slate-500 dark:placeholder:text-white/50 focus:border-violet-600 dark:focus:border-amber-300"
                  />
                </div>

                {/* Training Interest */}
                <div className="space-y-2">
                  <Label htmlFor="training" className="text-slate-950 dark:text-amber-50 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Training &amp; Interest
                  </Label>
                  <Select value={formData.training} onValueChange={(value) => setFormData({ ...formData, training: value })}>
                    <SelectTrigger
                      className="bg-white dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-950 dark:text-amber-50"
                      aria-required="true"
                    >
                      <SelectValue placeholder="Select a training program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nelson">Nelson Handwriting Training</SelectItem>
                      <SelectItem value="print">Print Handwriting Training</SelectItem>
                      <SelectItem value="inclusive">Inclusive Education</SelectItem>
                      <SelectItem value="literacy">Literacy &amp; Mathematics Training</SelectItem>
                      <SelectItem value="book">Interested in our Book</SelectItem>
                      <SelectItem value="all">All Programs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-950 dark:text-amber-50 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your school, number of teachers, preferred dates, or any special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white dark:bg-white/10 border-slate-200 dark:border-white/15 text-slate-950 dark:text-amber-50 placeholder:text-slate-500 dark:placeholder:text-white/50 focus:border-violet-600 dark:focus:border-amber-300 min-h-32"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-[#ffd85f] hover:bg-amber-200 text-slate-950 rounded-full shadow-2xl shadow-violet-950/20"
                >
                  {submitStatus === 'submitting' ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {submitStatus === 'submitting' ? 'Sending Request...' : 'Submit Booking Request'}
                </Button>

                {submitMessage && (
                  <p className={`text-sm text-center ${submitStatus === 'success' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {submitMessage}
                  </p>
                )}

                {/* ✅ Fixed: muted slate in light, white/60 in dark */}
                <p className="text-slate-500 dark:text-white/60 text-sm text-center">
                  We&apos;ll get back to you within 24 hours to confirm your training session.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}