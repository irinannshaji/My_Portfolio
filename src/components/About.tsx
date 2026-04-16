import { useEffect, useRef, useState } from 'react';
import { MapPin, Coffee, Award, Users, Code, BookOpen } from 'lucide-react';

  const stats = [
  { icon: Coffee, value: '10+', label: 'Projects Done' },
  { icon: MapPin, value: 'Kerala, India', label: 'Based In' },
  { icon: Code, value: 'Full Stack', label: 'Focus Area' },
  { icon: BookOpen, value: 'B.Tech AI', label: 'Education' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-2/5">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                      src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full max-w-md h-auto object-cover border-4 border-teal-500/30 shadow-2xl"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-teal-500 text-gray-950 font-bold px-5 py-3 rounded-xl shadow-xl text-sm">
                  Open to Work
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Turning ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  digital reality
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am currently pursuing a B.Tech in Computer Science and Engineering with a specialization in 
                Artificial Intelligence. I have a strong interest in developing practical software solutions and enjoy 
                working on projects that solve real-world problems. I focus on continuously improving my skills through 
                hands-on development and exploring new technologies.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                I have experience with Flutter, PHP, MySQL, HTML, CSS, and JavaScript, and have built projects 
                such as an Inventory Management System that integrates both frontend and backend functionalities. 
                I am particularly interested in building efficient, user-friendly applications and expanding my knowledge 
                in both software development and AI to grow as a well-rounded developer.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="bg-gray-800/50 border border-white/5 rounded-xl p-4 text-center hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-200 group"
                  >
                    <Icon
                      size={20}
                      className="mx-auto mb-2 text-teal-400 group-hover:scale-110 transition-transform"
                    />
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
