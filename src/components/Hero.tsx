import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'React Specialist', 'Problem Solver'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const { ref: parallaxRef, offset } = useParallax(0.3);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-16"
      ref={parallaxRef}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: offset }}
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
        <motion.img
          src="/portfolio_photo.jpeg"
          alt="Irin Ann Shaji"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto max-w-2xl object-cover opacity-70"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-gray-950" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight mt-8">
          <span className="block">
            Irin Ann
          </span>
          <motion.span
            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Shaji
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-light mb-4">
          <span className="text-teal-400 font-semibold">{displayed}</span>
          <motion.span
            className="text-teal-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.p>

        <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          I craft beautiful, performant digital experiences that bridge the gap between elegant design
          and robust engineering. Specialized in modern web technologies and user-centric design.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-16">
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold text-base transition-all shadow-lg shadow-teal-500/25"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-teal-500/50 text-gray-300 hover:text-white font-semibold text-base transition-all hover:bg-white/5 flex items-center gap-2 backdrop-blur-sm"
          >
            <Download size={18} />
            Download CV
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-start gap-6">
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Twitter, label: 'Twitter', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all backdrop-blur-sm"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollDown}
        className="absolute bottom-10 left-10 text-gray-600 hover:text-teal-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
