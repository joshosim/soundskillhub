import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Mail, Phone, User, Send, BookOpen } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to elevate your teaching practice? Register for our upcoming training sessions.
          </p>
        </motion.div>

        <div className="grid gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative flex items-center justify-center m-auto">
              {/* Glow effect */}
              <div className="absolute flex items-center justify-center m-auto w-150 -inset-0.5 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30" />

              <form onSubmit={handleSubmit} className="relative w-150 bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500"
                  />
                </div>

                {/* Training Interest */}
                <div className="space-y-2">
                  <Label htmlFor="training" className="text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Training Interest
                  </Label>
                  <Select value={formData.training} onValueChange={(value) => setFormData({ ...formData, training: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select a training program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nelson">Nelson Handwriting Training</SelectItem>
                      <SelectItem value="print">Print Handwriting Training</SelectItem>
                      <SelectItem value="inclusive">Inclusive Education</SelectItem>
                      <SelectItem value="literacy">Literacy & Mathematics Training</SelectItem>
                      <SelectItem value="all">All Programs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your school, number of teachers, preferred dates, or any special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 min-h-32"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl shadow-purple-500/50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </Button>

                <p className="text-white/60 text-sm text-center">
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
