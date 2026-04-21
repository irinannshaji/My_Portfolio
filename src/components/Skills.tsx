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
      { name: 'Three.js / WebGL', level: 70 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-blue-500 to-teal-500',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 78 },
    ],
  },
  {
    category: 'Tools & Cloud',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'AWS / GCP', level: 75 },
      { name: 'Docker / Kubernetes', level: 72 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Figma / Design', level: 85 },
    ],
  },
];

const techBadges = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker',
  'AWS', 'Next.js', 'GraphQL', 'Redis', 'Tailwind', 'Figma',
  'Git', 'Linux', 'MongoDB', 'Kubernetes',
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-5">
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
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: '0%' }}
          animate={animate ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

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
    <section id="skills" className="py-28 bg-gray-950 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.p variants={itemVariants} className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Expertise
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-7 hover:border-teal-500/20 transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-white font-semibold text-base">{group.category}</h3>
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

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <p className="text-center text-gray-500 text-sm mb-5 uppercase tracking-widest">
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-400 text-sm hover:border-teal-500/40 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200 cursor-default backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
