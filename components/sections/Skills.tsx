import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillBadge } from "@/components/shared/SkillBadge";
import { skills } from "@/lib/constants";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            number="02."
            title="Tech Stack"
            subtitle="Technologies and tools I work with."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {skills.map((category, catIdx) => (
            <AnimatedSection key={category.category} delay={catIdx * 0.08}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-36 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                    {category.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBadge
                      key={skill}
                      skill={skill}
                      index={catIdx * 5 + skillIdx}
                    />
                  ))}
                </div>
              </div>
              {catIdx < skills.length - 1 && (
                <div className="mt-6 h-px bg-border/50" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
