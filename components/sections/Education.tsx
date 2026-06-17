import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education } from "@/lib/constants";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading number="06." title="Education" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-border to-transparent hidden md:block" />

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="md:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-background hidden md:block" />

                  <div className="card-glass rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0 mt-0.5">
                          <GraduationCap size={18} className="text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-cyan-300 font-medium text-sm mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground shrink-0">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-cyan-400" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                        {edu.grade}
                      </span>
                    </div>

                    {edu.bullets && (
                      <ul className="mt-3 space-y-1">
                        {edu.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
