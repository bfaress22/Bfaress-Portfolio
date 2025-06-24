import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Contactez-moi</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 neon-border text-center">
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                Prêt à collaborer sur votre prochain projet ?
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Je recherche une alternance de 12 mois à partir de septembre 2025 dans le domaine de 
                l'innovation digitale et du conseil. Discutons de la façon dont je peux contribuer à 
                vos projets ambitieux !
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:bilalfaress22@gmail.com">
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg neon-border w-full sm:w-auto">
                      📧 bilalfaress22@gmail.com
                    </Button>
                  </a>
                  <a href="tel:+212622430629">
                    <Button variant="outline" className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg w-full sm:w-auto">
                      📞 +212 6 22 43 06 29
                    </Button>
                  </a>
                </div>
                
                <div className="flex justify-center space-x-6 pt-6">
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
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-gray-400">
                    📍 Paris, France / Rabat, Maroc • Disponible pour toute la France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
