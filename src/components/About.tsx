import { MapPin, Coffee, Award, Users, Zap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Coffee, value: '120+', label: 'Projects Done' },
  { icon: Users, value: '80+', label: 'Happy Clients' },
  { icon: MapPin, value: 'SF', label: 'Based In' },
];

const highlights = [
  {
    icon: Zap,
    title: 'Fast & Performant',
    description: 'Building lightning-quick applications optimized for speed and efficiency.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    description: 'Turning complex problems into elegant, intuitive user experiences.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-28 bg-gray-900 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Transforming Ideas Into{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Exceptional Digital Products
            </motion.span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            With expertise spanning full-stack development, UI/UX design, and cloud infrastructure,
            I deliver comprehensive solutions that drive results.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 border border-white/5 rounded-2xl p-8 hover:border-teal-500/20 transition-all duration-300 backdrop-blur-md"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-white font-bold text-xl mb-4">Professional Journey</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a full-stack developer with 5+ years of experience building products that matter.
              From startups to Fortune 500 companies, I've helped teams ship products used by millions
              of users worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My approach combines technical excellence with design thinking, ensuring every project
              not only works perfectly but also delights users. I'm passionate about clean code,
              scalable architecture, and creating seamless user experiences.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-8 backdrop-blur-md"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <h3 className="text-white font-bold text-xl mb-4">My Passion</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm driven by the challenge of creating products that solve real problems. There's nothing
              more satisfying than seeing an idea come to life and watching users benefit from it.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me contributing to open source, mentoring aspiring developers,
              or exploring the latest design trends and web technologies. I believe continuous learning
              is key to staying ahead in this fast-paced industry.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 border border-white/5 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Icon size={24} />
              </motion.div>
              <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gray-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-200 group backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
              >
                <Icon size={20} className="mx-auto mb-2 text-teal-400" />
              </motion.div>
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
