import { ArrowUp, Mail, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'data-intelligence', label: 'Data Intelligence' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLink = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-800/80 bg-[#070a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
              <span className="font-display font-bold text-lg text-white tracking-wider">
                SANIKA
              </span>
            </div>
            <p className="mt-1 text-[11px] font-mono uppercase tracking-widest text-violet-300">
              SANIKA — THE DATA × DEVELOPMENT UNIVERSE
            </p>
            <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              I Analyse Data. I Engineer Solutions. Turning Data Into Intelligence. Building Ideas Into Products.
            </p>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLink(link.id);
                  }}
                  className="text-xs sm:text-sm text-zinc-300 hover:text-violet-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Direct Links
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/AIStackInnovation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-lg bg-[#0d1225] border border-zinc-800 hover:border-violet-500/50 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanika-shailesh-mhatre-b8a843397/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-lg bg-[#0d1225] border border-zinc-800 hover:border-cyan-500/50 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:mhatresanika799@gmail.com"
                aria-label="Send Email"
                className="w-10 h-10 rounded-lg bg-[#0d1225] border border-zinc-800 hover:border-cyan-500/50 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919152785776"
                aria-label="Call Phone"
                className="w-10 h-10 rounded-lg bg-[#0d1225] border border-zinc-800 hover:border-violet-500/50 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Sanika Shailesh Mhatre. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-violet-300 transition-colors cursor-pointer py-1 px-2"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
