import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Download } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'App/Web Developer', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Irin Ann Shaji
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-teal-400 to-cyan-400 opacity-50" />
          </span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-8">
          <p className="text-2xl md:text-3xl text-gray-400 font-light">
            <span className="text-teal-400 font-semibold">{displayed}</span>
            <span className="animate-pulse text-teal-400">|</span>
          </p>
        </div>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          I build smart and efficient applications by combining software development with 
          emerging AI concepts.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
  
        {/* View Work Button */}
        <button
          onClick={() =>
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="px-8 py-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
    >
    View My Work
   </button>

    {/* Download CV */}
    <a
      href="/cv.pdf"
      download
      className="px-8 py-4 rounded-xl border border-white/10 hover:border-teal-500/50 text-gray-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-white/5 flex items-center gap-2"
    >
      <Download size={18} />
    Download CV
    </a>

</div>

        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, label: 'GitHub', href: 'https://github.com/irinannshaji' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/irin-ann-shaji-758a0132b' },
            { icon: Twitter, label: 'Twitter', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
