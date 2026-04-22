import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'API Design', level: 87 },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'from-blue-500 to-teal-500',
    skills: [
      { name: 'Docker / Kubernetes', level: 75 },
      { name: 'Git & CI/CD', level: 82 },
      { name: 'AWS / Cloud', level: 78 },
      { name: 'System Design', level: 80 },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB',
  'Docker', 'AWS', 'GraphQL', 'REST APIs', 'Tailwind CSS', 'Figma',
  'Git', 'Jest', 'Redux', 'Supabase', 'Stripe', 'Vercel',
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <motion.span
          className="text-gray-500 text-xs"
          animate={animate ? { opacity: [0, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg shadow-teal-500/20`}
          initial={{ width: '0%' }}
          animate={animate ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="skills" className="py-28 bg-gray-950 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-4">
            <span className="text-sm font-medium text-gray-300">EXPERTISE</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications.
          </motion.p>
        </motion.div>

        {/* Skill Groups */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-white/5 rounded-2xl p-7 hover:border-teal-500/20 transition-all duration-300 backdrop-blur-md group"
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${group.color}`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-white font-bold text-lg">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={isVisible}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Full Tech Stack</h3>
            <p className="text-gray-400">Technologies and tools I work with regularly.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-3 rounded-lg border border-white/10 bg-gradient-to-br from-gray-800/30 to-gray-900/30 text-gray-300 text-sm font-medium text-center hover:border-teal-500/40 hover:text-teal-400 transition-all backdrop-blur-sm cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
