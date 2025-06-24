import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Zap, Code, Database } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = 'Innovation • Digital • Conseil';

  useEffect(() => {
    setIsVisible(true);
    
    // Animation d'écriture pour le sous-titre
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid-bg matrix-bg">
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float quantum-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-neon-pink/10 rounded-full blur-2xl animate-float quantum-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Éléments tech flottants */}
        <div className="absolute top-20 left-20 text-neon-blue/30 quantum-float">
          <Code size={24} />
        </div>
        <div className="absolute bottom-20 right-20 text-neon-purple/30 quantum-float" style={{ animationDelay: '1s' }}>
          <Database size={28} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-neon-green/30 quantum-float" style={{ animationDelay: '3s' }}>
          <Zap size={20} />
        </div>
      </div>

      {/* Réseau neural décoratif */}
      <div className="absolute inset-0 neural-network-bg pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Photo de profil avec effet hologramme */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-neon-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.5)] animate-glow cyber-pulse hologram-effect">
                <img 
                  src="/lovable-uploads/0cbe2c23-ed24-40ff-834b-2eb637013fef.JPG" 
                  alt="Bilal Faress"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Anneaux orbitaux */}
              <div className="absolute inset-0 rounded-full border-2 border-neon-purple/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 rounded-full border border-neon-pink/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Badge de statut */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full border border-neon-green/50 animate-pulse">
                Disponible
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="gradient-text animate-pulse-neon">Bilal Faress</span>
            {/* Effet de glitch subtil */}
            <span className="absolute inset-0 gradient-text opacity-20 glitch-text" style={{ animationDelay: '0.1s' }}>
              Bilal Faress
            </span>
          </h1>
          
          {/* Sous-titre avec animation de frappe */}
          <div className="text-xl md:text-2xl text-gray-300 mb-4 min-h-[2rem]">
            <span className="text-neon-blue font-mono">{'>'} </span>
            <span className="typing-text text-neon-blue">{typingText}</span>
          </div>
          
          <div className="text-lg md:text-xl text-gray-300 mb-4">
            <span className="text-neon-purple hologram-effect">🎯 Recherche alternance 12 mois • Sept. 2025</span>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed hologram-effect">
            Actuellement admis en M2 Innovation Digital Conseil à l'Université Paris-Saclay, 
            je recherche une alternance de 12 mois à partir de septembre 2025. Curieux, rigoureux 
            et passionné par la data et les technologies innovantes, je conçois des solutions 
            digitales combinant analyse, visualisation et automatisation.
          </p>
          
          {/* Boutons avec effets améliorés */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={() => scrollToSection('about')}
              className="group relative bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-500 transform hover:scale-110 px-8 py-6 text-lg neon-border cyber-pulse overflow-hidden"
            >
              <span className="relative z-10">Découvrir mon parcours</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="group relative border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-500 transform hover:scale-110 px-8 py-6 text-lg hologram-effect overflow-hidden"
            >
              <span className="relative z-10">Me contacter</span>
              <div className="absolute inset-0 bg-neon-blue/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
            </Button>
          </div>
          
          {/* Réseaux sociaux avec effets 3D */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/bilal-faress-1929401b1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-500 transform hover:scale-125 hover:rotate-12 cyber-pulse"
            >
              <Linkedin className="w-7 h-7 text-neon-blue group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-neon-blue/20 scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
            </a>
            <a 
              href="https://github.com/bfaress22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass-card neon-border hover:bg-neon-purple/10 transition-all duration-500 transform hover:scale-125 hover:rotate-12 cyber-pulse"
            >
              <Github className="w-7 h-7 text-neon-purple group-hover:text-white transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full bg-neon-purple/20 scale-0 group-hover:scale-150 transition-transform duration-500 blur-md"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll amélioré */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center cyber-pulse">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute -inset-2 border border-neon-blue/20 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Lignes de données en mouvement */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%',
              animation: `data-stream ${3 + i}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
