import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Sparkles, Workflow, Bot } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = 'Transformation Digitale · IA · Automatisation';

  useEffect(() => {
    setIsVisible(true);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid-bg matrix-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-[55%] right-[28%] w-40 h-40 bg-neon-pink/10 rounded-full blur-2xl quantum-float"
          style={{ animationDelay: '1.2s' }}
        />

        <div className="absolute top-24 left-[12%] text-neon-blue/25 quantum-float">
          <Workflow size={22} />
        </div>
        <div
          className="absolute bottom-28 right-[14%] text-neon-purple/25 quantum-float"
          style={{ animationDelay: '1s' }}
        >
          <Bot size={26} />
        </div>
        <div
          className="absolute top-[38%] right-[22%] text-neon-green/25 quantum-float"
          style={{ animationDelay: '2.4s' }}
        >
          <Sparkles size={18} />
        </div>
      </div>

      <div className="absolute inset-0 neural-network-bg pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10 pt-24 pb-16">
        <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className={`mb-8 flex justify-center ${isVisible ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.05s' }}
          >
            <div className="relative">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-[0_0_40px_rgba(0,240,255,0.35)] animate-glow">
                <img
                  src="/lovable-uploads/0cbe2c23-ed24-40ff-834b-2eb637013fef.JPG"
                  alt="Bilal Faress"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -inset-3 rounded-full border border-neon-purple/25 pointer-events-none"
                style={{ animation: 'orbit 22s linear infinite' }}
              />
              <div
                className="absolute -inset-6 rounded-full border border-dashed border-neon-pink/15 pointer-events-none"
                style={{ animation: 'orbit 32s linear infinite reverse' }}
              />
              <div className="absolute -bottom-1 right-2 px-3 py-1 bg-neon-green/15 text-neon-green text-xs font-medium rounded-full border border-neon-green/40 backdrop-blur-sm">
                Dispo. sept. 2026
              </div>
            </div>
          </div>

          <p
            className={`text-sm uppercase tracking-[0.25em] text-neon-blue/80 mb-4 font-mono ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.15s' }}
          >
            Paris · ENGIE · Paris-Saclay
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-5 relative tracking-tight">
            <span className="gradient-text animate-pulse-neon">Bilal Faress</span>
            <span
              className="absolute inset-0 gradient-text opacity-15 glitch-text pointer-events-none"
              aria-hidden
            >
              Bilal Faress
            </span>
          </h1>

          <div className="text-lg md:text-xl text-gray-300 mb-5 min-h-[1.75rem] font-mono">
            <span className="text-neon-green/80">{'>'}</span>{' '}
            <span className="text-neon-blue">{typingText}</span>
            <span className="inline-block w-2 h-5 ml-0.5 align-middle bg-neon-green/80 animate-pulse" />
          </div>

          <p className="text-base md:text-lg text-neon-purple/90 mb-4 font-medium">
            Alternant Product Control Trading Gaz — ENGIE
          </p>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Consultant en transformation digitale en formation (M2 Innovation, Digital &amp; Conseil).
            Je transforme des besoins métier en solutions concrètes : automatisation, apps web et agents IA —
            du cadrage à la mise en production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={() => scrollToSection('experience')}
              className="group relative bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-500 hover:scale-[1.03] px-8 py-6 text-base neon-border overflow-hidden"
            >
              <span className="relative z-10">Voir mon expérience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="group border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-500 hover:scale-[1.03] px-8 py-6 text-base overflow-hidden"
            >
              Me contacter
            </Button>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/bilal-faress-1929401b1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative p-3.5 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-400 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/bfaress22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative p-3.5 rounded-full glass-card border border-neon-purple/40 hover:bg-neon-purple/10 transition-all duration-400 hover:scale-110"
            >
              <Github className="w-6 h-6 text-neon-purple group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <div className="w-5 h-9 border-2 border-neon-blue/40 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-neon-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              width: '100%',
              animation: `data-stream ${5 + i}s linear infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
