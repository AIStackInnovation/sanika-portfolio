import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'data-intelligence', label: 'Data Intelligence' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      if (location.pathname !== '/') return;

      const offset = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveId(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e1a]/88 backdrop-blur-xl border-b border-violet-500/15 shadow-lg shadow-black/25'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-md px-1 py-1"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
          <span className="font-display font-bold tracking-wider text-white text-base sm:text-lg">
            SANIKA
          </span>
          <span className="hidden xl:inline text-[11px] font-mono text-zinc-400 border-l border-zinc-700/80 pl-2.5">
            DATA × DEV UNIVERSE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === '/' && activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-violet-300 bg-violet-500/10 border border-violet-500/20'
                    : 'text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Resume CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="/Sanika_Mhatre_Resume.pdf"
            download="Sanika_Mhatre_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold font-mono border border-violet-500/40 text-violet-200 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-700/70 bg-[#0d1225]/80 text-zinc-200 hover:text-white hover:border-violet-500/50 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0a0e1a]/98 backdrop-blur-2xl border-t border-violet-500/15 px-5 py-6 overflow-y-auto z-40"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname === '/' && activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`w-full px-4 py-3.5 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                        : 'text-zinc-200 bg-[#0d1225]/70 border border-zinc-800/70 hover:border-violet-500/30'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-zinc-500">→</span>
                  </a>
                );
              })}

              <a
                href="/Sanika_Mhatre_Resume.pdf"
                download="Sanika_Mhatre_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold text-sm shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
