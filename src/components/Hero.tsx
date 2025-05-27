
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Sparkles } from 'lucide-react';

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-pink/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Photo de profil avec effet holographique */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_40px_rgba(0,240,255,0.6)] animate-glow group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/0cbe2c23-ed24-40ff-834b-2eb637013fef.png" 
                  alt="Bilal Faress - Innovation Digital Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-neon-pink animate-pulse" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight">
            <span className="gradient-text animate-pulse-neon">Bilal Faress</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 space-y-2">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="px-4 py-2 bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 animate-glow">
                Innovation Digital
              </span>
              <span className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/30 animate-glow" style={{ animationDelay: '0.5s' }}>
                Consultant
              </span>
              <span className="px-4 py-2 bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30 animate-glow" style={{ animationDelay: '1s' }}>
                Data Scientist
              </span>
            </div>
            <p className="text-lg text-gray-400">
              <span className="text-neon-blue">Transformation Numérique</span> • 
              <span className="text-neon-purple"> Fintech</span> • 
              <span className="text-neon-pink"> IA Générative</span>
            </p>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Futur diplômé M2 Innovation Digital Conseil à Paris-Saclay. 
            Spécialisé en <span className="text-neon-blue font-semibold">transformation digitale</span>, 
            <span className="text-neon-purple font-semibold"> finance quantitative</span> et 
            <span className="text-neon-pink font-semibold"> solutions innovantes</span>.
            <br />
            <span className="text-neon-green font-semibold">🎯 Recherche alternance 12 mois - Septembre 2025</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 px-10 py-8 text-xl neon-border shadow-[0_0_30px_rgba(0,240,255,0.5)] group"
            >
              <Sparkles className="mr-3 group-hover:animate-spin" />
              Découvrir mon expertise
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 transform hover:scale-105 px-10 py-8 text-xl backdrop-blur-xl"
            >
              Discutons de votre projet
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/bilal-faress-1929401b1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-110 group"
            >
              <Linkedin className="w-8 h-8 text-neon-blue group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://github.com/bfaress22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card neon-border hover:bg-neon-purple/10 transition-all duration-300 transform hover:scale-110 group"
            >
              <Github className="w-8 h-8 text-neon-purple group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll amélioré */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-neon-blue/50 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-gradient-to-b from-neon-blue to-neon-purple rounded-full mt-2 animate-pulse"></div>
          <div className="absolute -bottom-6 text-neon-blue text-sm animate-pulse">Explorer</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
