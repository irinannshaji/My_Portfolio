import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Inventory Management System',
    description:
      'A full-stack system to manage products, suppliers, stock movements, and purchase tracking with efficient database handling.',
    image: 'https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg',
    tags: ['Flutter', 'PHP', 'MySQL'],
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'Exam Automation System',
    description:
      'A platform to automate exam processes including question management, evaluation, and result generation.',
    image: 'https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    featured: true,
    demo: '#',
    github: '#',
  },
  {
    title: 'Smart Bookstore Website',
    description:
      'A web application for browsing and managing books with search functionality and user-friendly interface.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    featured: false,
    demo: '#',
    github: 'https://github.com/irinannshaji',
  },
  {
    title: 'Smart Hotel Management System',
    description:
      'A system to manage hotel bookings, customer records, and billing operations efficiently.',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    tags: ['PHP', 'MySQL' ,'Flutter', 'Dart'],
    featured: false,
    demo: '#',
    github: 'https://github.com/irinannshaji',
  },
  {
    title: 'Skill Swap Platform',
    description:
      'A platform where users can exchange skills and knowledge by connecting with others for collaborative learning.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
    demo: '#',
    github: 'https://github.com/irinannshaji',
  },
  {
    title: 'House Price Prediction',
    description:
      'A machine learning project that predicts house prices based on features using data analysis and predictive modeling techniques.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    tags: ['Python', 'Machine Learning'],
    featured: true,
    demo: '#',
    github: 'https://github.com/irinannshaji',
  },
  {
    title: 'Random Animal Fact Generator',
    description:
      'A simple API-based web app that generates random animal facts dynamically using JavaScript.',
    image: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',
    tags: ['JavaScript', 'API', 'HTML', 'CSS'],
    featured: false,
    demo: '#',
    github: 'https://github.com/irinannshaji'
  },
];

const filters = ['All', 'React', 'Next.js', 'Python', 'TypeScript'];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.includes(activeFilter)));

  return (
    <section id="projects" className="py-28 bg-gray-900" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A selection of projects I've built — from SaaS platforms to AI-powered tools.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-teal-500 text-gray-950'
                  : 'border border-white/10 text-gray-400 hover:border-teal-500/40 hover:text-teal-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              className={`group relative bg-gray-950/60 border rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-500/10 ${
                project.featured ? 'border-teal-500/20' : 'border-white/5'
              }`}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-medium">
                  <Star size={10} fill="currentColor" />
                  Featured
                </div>
              )}

              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 h-48" />
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

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-gray-800 text-gray-400 text-xs border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium hover:bg-teal-500/20 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-gray-400 text-sm hover:border-white/20 hover:text-white transition-all"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
