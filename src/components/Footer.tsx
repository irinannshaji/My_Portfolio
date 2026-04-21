import { Github, Linkedin, Twitter, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xl">
            <Code2 size={22} />
            <span>Irin</span>
          </div>

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

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 hover:text-teal-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1.5">
            &copy; {year} Alex Chen. Made with
            <Heart size={12} className="text-teal-500 fill-teal-500" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
