import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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
  const { ref: parallaxRef, offset } = useParallax(0.2);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-20"
      ref={parallaxRef}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{ y: offset }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Image with glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative h-full w-full">
            <motion.img
              src="/portfolio_photo.jpeg"
              alt="Irin Ann Shaji"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-gray-950/40 to-gray-950" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors group"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-gray-200">Available for opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mt-8 mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block">Irin Ann</span>
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Shaji
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with typing */}
        <motion.div variants={itemVariants} className="mb-8 h-12">
          <p className="text-2xl md:text-3xl text-gray-300">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 font-semibold">
              {displayed}
            </span>
            <motion.span
              className="inline-block ml-1 text-teal-400 font-bold"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            >
              _
            </motion.span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-12"
        >
          Crafting beautiful, scalable digital products with modern technologies.
          Specializing in React, Next.js, and elegant UI/UX design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <motion.button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300" />
            <span className="relative text-gray-950 flex items-center gap-2">
              Explore My Work
              <ExternalLink size={18} />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/5 backdrop-blur-xl transition-all flex items-center gap-2"
          >
            <Mail size={18} />
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
            { icon: Twitter, label: 'Twitter', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-400/40 hover:bg-teal-400/10 transition-all backdrop-blur-md"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-teal-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
}
