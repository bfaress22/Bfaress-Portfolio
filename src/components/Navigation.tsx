import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X } from 'lucide-react';

const SECTIONS = [
  'home',
  'about',
  'experience',
  'projects',
  'education',
  'skills',
  'contact',
] as const;

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const current = [...SECTIONS].reverse().find((section) => {
          const element = document.getElementById(section);
          if (!element) return false;
          return element.getBoundingClientRect().top <= 120;
        });

        if (current) setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-card border-b border-border/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,240,255,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-3.5">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="group relative text-2xl font-extrabold tracking-tight"
              aria-label="Accueil"
            >
              <span className="gradient-text inline-block transition-transform duration-300 group-hover:scale-105">
                BF
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-neon-blue bg-neon-blue/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-400 hover:scale-[1.03] neon-border text-sm px-4"
              >
                Contact
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full glass-card border border-neon-blue/30 hover:border-neon-blue transition-all"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-neon-blue" />
                ) : (
                  <Menu className="w-5 h-5 text-neon-blue" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] glass-card border-l border-border z-40 transform transition-transform duration-400 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 mt-20 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
                  : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex justify-center">
            <ThemeToggle />
          </div>
          <Button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-4 bg-gradient-to-r from-neon-blue to-neon-purple neon-border"
          >
            Contactez-moi
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
};

export default Navigation;
