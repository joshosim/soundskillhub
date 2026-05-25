import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Button } from './ui/button';
import { Clock, Users, Star, BookOpen, CheckCircle2 } from 'lucide-react';

export function Courses() {
  const { ref, inView } = useInView();

  const courses = [
    {
      title: 'How To Achieve Clear And Neat Handwriting',
      level: 'Beginner',
      duration: '6 Weeks',
      students: '120+',
      rating: 4.9,
      price: '₦45,000',
      image: 'https://images.unsplash.com/photo-1602145095452-aba06946ed05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMHByYWN0aWNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzc5NzE0NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        'Nelson Handwriting basics',
        'Letter formation techniques',
        'Assessment strategies',
        // 'Digital resources included',
      ],
    },

    {
      title: 'How To Set Clear Goals For Your Child',
      level: 'Advanced',
      duration: '10 Weeks',
      students: '65+',
      rating: 4.8,
      price: '₦75,000',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjB3cml0aW5nfGVufDF8fHx8MTc3OTcxNDc4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: [
        // 'UDL framework implementation',
        'Special needs strategies',
        'Adaptive teaching methods',
        'IEP development',
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive professional development courses designed for educators at every level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full border backdrop-blur-lg z-20 ${getLevelColor(course.level)}`}>
                    <span className="text-sm font-semibold">{course.level}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </h3>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    {/* <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div> */}
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} enrolled
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  {/* <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-sm text-slate-500">Course Fee</div>
                      <div className="text-2xl font-bold text-slate-900">{course.price}</div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-6">
                      Enroll Now
                    </Button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            More Coming Soon ...
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
