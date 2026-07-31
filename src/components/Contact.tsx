import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const Contact = () => {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Contact</span>
          </h2>
          <p className="section-sub">
            Disponible à partir de septembre 2026 — discutons de vos enjeux digitaux et IA.
          </p>

          <div className="max-w-3xl mx-auto">
            <div
              className={`glass-card p-8 md:p-12 neon-border text-center ${isVisible ? 'animate-scale-up' : ''}`}
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-4">
                Prêt à collaborer ?
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
                Alternant chez ENGIE jusqu&apos;en septembre 2026, je suis ouvert aux opportunités en
                transformation digitale, automatisation et IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="mailto:bilalfaress22@gmail.com">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink transition-all duration-300 hover:scale-[1.03] px-6 py-6 text-base neon-border w-full sm:w-auto gap-2">
                    <Mail className="w-4 h-4" />
                    bilalfaress22@gmail.com
                  </Button>
                </a>
                <a href="tel:+33627408345">
                  <Button
                    variant="outline"
                    className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 hover:scale-[1.03] px-6 py-6 text-base w-full sm:w-auto gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    +33 6 27 40 83 45
                  </Button>
                </a>
              </div>

              <div className="flex justify-center gap-5 mb-8">
                <a
                  href="https://www.linkedin.com/in/bilal-faress-1929401b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3.5 rounded-full glass-card neon-border hover:bg-neon-blue/10 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="w-7 h-7 text-neon-blue group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/bfaress22"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3.5 rounded-full glass-card border border-neon-purple/40 hover:bg-neon-purple/10 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="w-7 h-7 text-neon-purple group-hover:text-white transition-colors" />
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-neon-blue" />
                Paris, France
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
