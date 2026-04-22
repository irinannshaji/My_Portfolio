import { ExternalLink, Github, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time analytics platform for cloud infrastructure monitoring with live metrics, alerting, and team collaboration tools.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
    stars: 842,
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'DesignForge AI',
    description:
      'An AI-powered design assistant that generates UI components, color palettes, and layout suggestions from natural language prompts.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI API', 'Tailwind', 'Prisma'],
    stars: 1203,
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'TaskFlow Pro',
    description:
      'Project management SaaS with Kanban boards, time tracking, team management, and automated workflow capabilities.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'GraphQL', 'AWS', 'Docker'],
    stars: 567,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'CryptoTrack',
    description:
      'Real-time cryptocurrency portfolio tracker with advanced charts, price alerts, and DeFi protocol integrations.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Python', 'Redis', 'Chart.js'],
    stars: 389,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'EcoShop',
    description:
      'Sustainable e-commerce marketplace with carbon footprint tracking, ethical sourcing scores, and green checkout options.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
    stars: 234,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'VoiceNote AI',
    description:
      'Smart voice recording app with AI-powered transcription, smart summaries, and searchable knowledge base.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Whisper API', 'MongoDB', 'Express'],
    stars: 456,
    featured: false,
    demo: '#',
    github: '#',
  },
];

const filters = ['All', 'React', 'Next.js', 'Python', 'TypeScript'];

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

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.includes(activeFilter)));

  return (
    <section id="projects" className="py-28 bg-gray-900 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mx-auto">
            A selection of projects I've built — from SaaS platforms to AI-powered tools.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-teal-500 text-gray-950'
                  : 'border border-white/10 text-gray-400 hover:border-teal-500/40 hover:text-teal-400 backdrop-blur-sm'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gray-950/60 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                project.featured ? 'border-teal-500/20 lg:col-span-1' : 'border-white/5'
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              <div className="overflow-hidden h-48 relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs ml-3 shrink-0">
                    <Star size={12} />
                    {project.stars}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={itemVariants}
                      className="px-2.5 py-1 rounded-md bg-gray-800/50 text-gray-400 text-xs border border-white/5 backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium hover:bg-teal-500/20 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 text-sm hover:border-white/20 hover:text-white transition-all backdrop-blur-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { ExternalLink, Github, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description:
      'A real-time analytics platform for cloud infrastructure monitoring with live metrics, alerting, and team collaboration tools.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets'],
    stars: 842,
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'DesignForge AI',
    description:
      'An AI-powered design assistant that generates UI components, color palettes, and layout suggestions from natural language prompts.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'OpenAI API', 'Tailwind', 'Prisma'],
    stars: 1203,
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'TaskFlow Pro',
    description:
      'Project management SaaS with Kanban boards, time tracking, team management, and automated workflow capabilities.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'GraphQL', 'AWS', 'Docker'],
    stars: 567,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'CryptoTrack',
    description:
      'Real-time cryptocurrency portfolio tracker with advanced charts, price alerts, and DeFi protocol integrations.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Python', 'Redis', 'Chart.js'],
    stars: 389,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'EcoShop',
    description:
      'Sustainable e-commerce marketplace with carbon footprint tracking, ethical sourcing scores, and green checkout options.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Vercel'],
    stars: 234,
    featured: false,
    demo: '#',
    github: '#',
  },
  {
    title: 'VoiceNote AI',
    description:
      'Smart voice recording app with AI-powered transcription, smart summaries, and searchable knowledge base.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Whisper API', 'MongoDB', 'Express'],
    stars: 456,
    featured: false,
    demo: '#',
    github: '#',
  },
];

const filters = ['All', 'React', 'Next.js', 'Python', 'TypeScript'];

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

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.includes(activeFilter)));

  return (
    <section id="projects" className="py-28 bg-gray-900 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Work
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mx-auto">
            A selection of projects I've built — from SaaS platforms to AI-powered tools.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-teal-500 text-gray-950'
                  : 'border border-white/10 text-gray-400 hover:border-teal-500/40 hover:text-teal-400 backdrop-blur-sm'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gray-950/60 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${
                project.featured ? 'border-teal-500/20 lg:col-span-1' : 'border-white/5'
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              <div className="overflow-hidden h-48 relative">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs ml-3 shrink-0">
                    <Star size={12} />
                    {project.stars}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={itemVariants}
                      className="px-2.5 py-1 rounded-md bg-gray-800/50 text-gray-400 text-xs border border-white/5 backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium hover:bg-teal-500/20 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 text-sm hover:border-white/20 hover:text-white transition-all backdrop-blur-sm"
                  >
                    <Github size={14} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
