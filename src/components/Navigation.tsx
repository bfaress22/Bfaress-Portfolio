import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Détection de la section active
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'about', label: 'À propos', icon: '👤' },
    { id: 'education', label: 'Formation', icon: '🎓' },
    { id: 'experience', label: 'Expérience', icon: '💼' },
    { id: 'skills', label: 'Compétences', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,240,255,0.1)]' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo avec effet néon */}
            <div 
              onClick={() => scrollToSection('home')}
              className="group relative text-3xl font-bold cursor-pointer"
            >
              <span className="gradient-text hover:scale-110 transition-transform duration-300 inline-block cyber-pulse">
                BF
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="absolute -top-1 -right-1 w-3 h-3 text-neon-yellow animate-pulse" />
            </div>
            
            {/* Navigation desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden ${
                    activeSection === item.id 
                      ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xs">{item.icon}</span>
                    {item.label}
                  </span>
                  
                  {/* Effet de balayage */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Indicateur actif */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple animate-glow"></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Bouton contact et menu mobile */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="hidden sm:block group relative bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-500 transform hover:scale-105 neon-border cyber-pulse overflow-hidden"
              >
                <span className="relative z-10">Contactez-moi</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              
              {/* Menu hamburger mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full glass-card border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 transform hover:scale-110"
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

      {/* Menu mobile */}
      <div className={`fixed top-0 right-0 h-full w-80 glass-card border-l border-white/10 z-40 transform transition-transform duration-500 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="p-6 mt-20">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  activeSection === item.id 
                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 neon-border"
            >
              Contactez-moi
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay pour le menu mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
