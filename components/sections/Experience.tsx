import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experience } from "@/lib/constants";
import { MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading number="03." title="Experience" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-border to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="md:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-background hidden md:block" />

                  <div className="card-glass rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
