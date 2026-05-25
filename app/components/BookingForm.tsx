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
            Book Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to elevate your teaching practice? Register for our upcoming training sessions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30" />

              <form onSubmit={handleSubmit} className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6">
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
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl shadow-purple-500/50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Registration
                </Button>

                <p className="text-white/60 text-sm text-center">
                  We&apos;ll get back to you within 24 hours to confirm your training session.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: Calendar,
                title: 'Flexible Scheduling',
                description: 'Choose training dates that work for your school schedule. We offer weekday, weekend, and holiday sessions.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                // icon: Users,
                icon: BookOpen,
                title: 'Customized Training',
                description: 'Programs tailored to your school\'s specific needs, class sizes, and teaching objectives.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Resources',
                description: 'All participants receive digital resources, certificates, and ongoing support after training.',
                color: 'from-amber-500 to-orange-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+234 810 808 4179</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@soundskillhub.com</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
