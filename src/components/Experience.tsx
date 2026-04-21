import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    type: 'work',
    role: 'Senior Full Stack Engineer',
    company: 'Vercel',
    period: '2022 – Present',
    location: 'San Francisco, CA',
    description:
      'Leading frontend infrastructure for Vercel\'s deployment dashboard. Reduced build times by 40% through intelligent caching strategies. Mentoring a team of 6 engineers across 3 time zones.',
    tags: ['React', 'Next.js', 'Rust', 'Go'],
  },
  {
    type: 'work',
    role: 'Frontend Engineer',
    company: 'Stripe',
    period: '2020 – 2022',
    location: 'Remote',
    description:
      'Built and maintained core components of Stripe\'s merchant dashboard. Shipped the redesigned payments flow used by 2M+ businesses. Established design system standards adopted company-wide.',
    tags: ['TypeScript', 'React', 'GraphQL', 'CSS-in-JS'],
  },
  {
    type: 'education',
    role: 'B.S. Computer Science',
    company: 'Stanford University',
    period: '2016 – 2020',
    location: 'Stanford, CA',
    description:
      'Graduated with Honors. Specialized in Human-Computer Interaction and Distributed Systems. Senior thesis on adaptive UI personalization using machine learning.',
    tags: ['HCI', 'Distributed Systems', 'ML', 'Algorithms'],
  },
  {
    type: 'work',
    role: 'Software Engineer Intern',
    company: 'Figma',
    period: '2019 – 2019',
    location: 'San Francisco, CA',
    description:
      'Developed real-time collaboration features for the multiplayer canvas editor. Built the initial prototype for Smart Layout that shipped as a product feature.',
    tags: ['C++', 'React', 'WebSockets', 'Canvas API'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: (i: number) => i % 2 === 0 ? -20 : 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-28 bg-gray-950 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            A timeline of the roles and institutions that shaped my career.
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row gap-8"
              >
                <motion.div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl border-2 items-center justify-center z-10 ${
                    exp.type === 'work'
                      ? 'bg-gray-950 border-teal-500/60 text-teal-400'
                      : 'bg-gray-950 border-cyan-500/60 text-cyan-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                >
                  {exp.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </motion.div>

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1 md:hidden">
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center ${
                        exp.type === 'work'
                          ? 'border-teal-500/40 text-teal-400 bg-teal-500/10'
                          : 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
                      }`}
                    >
                      {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                    </div>
                    <span className="text-gray-500 text-xs">{exp.period}</span>
                  </div>

                  <motion.div
                    className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-300 backdrop-blur-md"
                    whileHover={{ y: -5, scale: 1.01 }}
                  >
                    <div
                      className={`hidden md:flex items-center gap-2 text-gray-500 text-xs mb-3 ${
                        i % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1">{exp.role}</h3>
                    <p
                      className={`font-semibold text-sm mb-3 ${
                        exp.type === 'work' ? 'text-teal-400' : 'text-cyan-400'
                      }`}
                    >
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <motion.div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {exp.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                          }}
                          className="px-2.5 py-1 rounded-md bg-gray-800/50 text-gray-400 text-xs border border-white/5 backdrop-blur-sm"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
