import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { neonClasses, type NeonColor } from '@/lib/neon';

type EduItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  status?: string;
  color: NeonColor;
  details?: string;
  competencies?: string[];
  modules?: string[];
};

const educationData: EduItem[] = [
  {
    title: 'Master 2 Innovation, Digital & Conseil',
    institution: 'Université Paris-Saclay — Mention Innovation, Entreprise et Société',
    period: '2025 — 2026',
    description: 'Formation 100 % en alternance — digital, data & transformation',
    status: 'En cours',
    color: 'blue',
    competencies: [
      'Exploiter la data & l’IA pour digitaliser des processus métier (finance, trading, opérations)',
      'Piloter des projets de transformation digitale : cadrage, MVP, automatisation, mise en prod',
      'Concevoir des solutions digitales data-driven (dashboards, workflows, agents IA)',
      'Comprendre l’économie numérique : plateformes, modèles d’affaires, usages et data',
      'Intégrer enjeux data, IA générative, régulation (RGPD) et impacts organisationnels',
      'Dialoguer finance / IT / métier : diagnostic, recommandations et conduite du changement',
    ],
    modules: [
      'Économie numérique & data',
      'Intelligence artificielle & digital',
      'Modèles d’affaires du numérique',
      'UX design & Design Thinking',
      'Management de projets innovants',
      'Conseil & transformation digitale',
    ],
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
  const { ref, isVisible } = useInView(0.12);

  return (
    <section id="education" ref={ref} className="py-24 cyber-grid-bg">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-heading">
            <span className="gradient-text">Formation</span>
          </h2>
          <p className="section-sub">
            De la finance quantitative à la transformation digitale, data & IA.
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
                      <div className={`mt-1 p-2 rounded-lg ${c.bgSoft} shrink-0`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold ${c.text} mb-1`}>{edu.title}</h3>
                        <p className="text-foreground/80 mb-1">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.description}</p>
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

                  {edu.details && (
                    <p className="mt-5 text-sm text-foreground/75 leading-relaxed border-t border-border/50 pt-5">
                      {edu.details}
                    </p>
                  )}

                  {edu.competencies && edu.competencies.length > 0 && (
                    <div className="mt-5">
                      <h4 className={`text-sm font-semibold ${c.text} mb-3`}>
                        Compétences acquises
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {edu.competencies.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2.5 p-2.5 rounded-lg bg-muted/25 border border-border/40"
                          >
                            <CheckCircle2 className={`w-4 h-4 ${c.text} mt-0.5 shrink-0`} />
                            <span className="text-xs sm:text-sm text-foreground/80 leading-snug">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.modules && edu.modules.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {edu.modules.map((mod) => (
                        <span
                          key={mod}
                          className={`px-2.5 py-1 rounded-md text-xs font-medium ${c.bgSoft}`}
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="max-w-4xl mx-auto mt-6 text-center text-[11px] text-muted-foreground">
            Sources :{' '}
            <a
              href="https://www.masteridc.fr/le-master"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue/80 hover:underline"
            >
              masteridc.fr
            </a>
            {' · '}
            <a
              href="https://www.universite-paris-saclay.fr/formation/master/innovation-entreprise-et-societe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue/80 hover:underline"
            >
              Université Paris-Saclay — mention IES
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
