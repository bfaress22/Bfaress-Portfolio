import { GraduationCap } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { neonClasses, type NeonColor } from '@/lib/neon';

type EduItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  status?: string;
  color: NeonColor;
};

const educationData: EduItem[] = [
  {
    title: 'Master 2 Innovation, Digital & Conseil',
    institution: 'Université Paris-Saclay',
    period: '2025 — 2026',
    description: 'Formation en alternance',
    status: 'En cours',
    color: 'blue',
  },
  {
    title: 'Master Analyse Économique et Modélisation des Risques',
    institution: 'Université Mohammed V de Rabat',
    period: '2022 — 2024',
    description: 'Modélisation financière et méthodes quantitatives',
    color: 'purple',
  },
  {
    title: 'Licence Sciences Économiques et Gestion',
    institution: 'Université Moulay Ismaïl — Meknès',
    period: '2018 — 2021',
    description: 'Économie et gestion d’entreprise',
    color: 'green',
  },
];

const Education = () => {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="education" ref={ref} className="py-24 cyber-grid-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Formation</span>
          </h2>
          <p className="section-sub">
            Parcours académique de l’économie quantitative à l’innovation digitale.
          </p>

          <div className="max-w-4xl mx-auto space-y-5">
            {educationData.map((edu, index) => {
              const c = neonClasses[edu.color];
              return (
                <div
                  key={edu.title}
                  className={`glass-card p-6 md:p-8 border ${c.border} ${c.borderHover} transition-all duration-500 hover:-translate-y-0.5 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex gap-4">
                      <div className={`mt-1 p-2 rounded-lg ${c.bgSoft}`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold ${c.text} mb-1`}>{edu.title}</h3>
                        <p className="text-gray-300 mb-1">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.description}</p>
                        {edu.status && (
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${c.bgSoft} mt-2`}>
                            {edu.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`${c.text} font-semibold font-mono text-sm whitespace-nowrap`}>
                      {edu.period}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
