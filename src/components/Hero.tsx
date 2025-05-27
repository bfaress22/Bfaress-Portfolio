
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid-bg">
      {/* Éléments décoratifs animés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-neon-pink/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Photo de profil */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-neon-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.5)] animate-glow">
                <img 
                  src="/lovable-uploads/0cbe2c23-ed24-40ff-834b-2eb637013fef.png" 
                  alt="Bilal Faress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text animate-pulse-neon">Bilal Faress</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            <span className="text-neon-blue">Analyste Quantitatif</span> & 
            <span className="text-neon-purple"> Développeur</span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionné par l'innovation digitale et la finance quantitative, 
            je conçois des solutions créatives pour résoudre les défis complexes de demain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg neon-border"
            >
              Découvrir mon parcours
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg"
            >
              Me contacter
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/bilal-faress-1929401b1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://github.com/bfaress22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card neon-border hover:bg-neon-purple/10 transition-all duration-300 transform hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-neon-purple group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
