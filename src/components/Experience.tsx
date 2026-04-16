import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    role: 'B.Tech in Computer Science and Engineering (AI)',
    company: 'Mar Baselios Christian College of Engineering & Technology',
    period: '2022 – Present',
    location: 'Kerala, India',
    description:
      'Currently pursuing B.Tech with a specialization in Artificial Intelligence. Gaining strong knowledge in software development, data structures, and problem-solving through academic learning and hands-on projects.',
    tags: ['CSE', 'Artificial Intelligence', 'Programming'],
  },
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'Academic Projects',
    period: '2023 – Present',
    location: 'Self Projects',
    description:
      'Developed multiple full-stack applications including an Inventory Management System, Exam Automation System, and Smart Hotel Management System using Flutter, PHP, and MySQL.',
    tags: ['Flutter', 'PHP', 'MySQL', 'Full Stack'],
  },
  {
    type: 'work',
    role: 'Web Developer',
    company: 'Personal Projects',
    period: '2023 – Present',
    location: 'Self Learning',
    description:
      'Built responsive web applications such as a Smart Bookstore Website and Random Animal Fact Generator using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    type: 'work',
    role: 'Machine Learning Enthusiast',
    company: 'AI Projects',
    period: '2024 – Present',
    location: 'Self Learning',
    description:
      'Worked on machine learning projects like House Price Prediction, focusing on data analysis and predictive modeling using Python.',
    tags: ['Python', 'Machine Learning'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 bg-gray-950" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A timeline of my learning, projects, and development journey.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl border-2 items-center justify-center z-10 ${
                    exp.type === 'work'
                      ? 'bg-gray-950 border-teal-500/60 text-teal-400'
                      : 'bg-gray-950 border-cyan-500/60 text-cyan-400'
                  }`}
                >
                  {exp.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                </div>

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

                  <div className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 hover:border-teal-500/20 transition-all duration-300">
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

                    <div
                      className={`flex flex-wrap gap-2 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-gray-800 text-gray-400 text-xs border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}