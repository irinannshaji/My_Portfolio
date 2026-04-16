import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'React ', level: 50 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 80 },
      { name: 'Javascript', level: 70 },
      { name: 'Flutter', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-blue-500 to-teal-500',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python', level: 90 },
      { name: 'PHP', level: 95 },
      { name: 'MySQL', level: 90 },
      { name: 'phpMyAdmin', level: 90 },
    ],
  },
  {
    category: 'Tools & Cloud',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Github', level: 80 },
      { name: 'Vercel', level: 72 },
      { name: 'VS Code', level: 85 },
      { name: 'Firebase', level: 82 },
      { name: 'Figma / Design', level: 85 },
    ],
  },
];

const techBadges = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Flutter',
  'PHP',
  'MySQL',
  'Firebase',
  'Git',
  'GitHub',
  'VS Code',
  'Figma',
  'phpMyAdmin'
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 bg-gray-950" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-6 mb-14 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-7 hover:border-teal-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="text-white font-semibold text-base">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={visible}
                />
              ))}
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-center text-gray-500 text-sm mb-5 uppercase tracking-widest">
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 bg-gray-800/50 text-gray-400 text-sm hover:border-teal-500/40 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
