import { Github, Linkedin, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xl">
            <Code2 size={22} />
            <span>portfolio.</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['#about', '#skills', '#projects', '#experience', '#contact'].map((href) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-gray-500 hover:text-teal-400 text-sm capitalize transition-colors"
              >
                {href.replace('#', '')}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/irinannshaji', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/irin-ann-shaji-758a0132b', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-600 hover:text-teal-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1.5">
            &copy; {year} Irin Ann Shaji. Made with
            <Heart size={12} className="text-teal-500 fill-teal-500" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}