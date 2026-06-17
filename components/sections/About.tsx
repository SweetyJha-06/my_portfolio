import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/constants";

const stats = [
  { value: "2+", label: "Projects Built" },
  { value: "250+", label: "Problems Solved" },
  { value: "8.55", label: "MCA GPA" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading number="01." title="About Me" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Bio */}
          <AnimatedSection delay={0.1} className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-base">
              I&apos;m a software developer specializing in{" "}
              <span className="text-cyan-300 font-medium">backend engineering</span> and{" "}
              <span className="text-cyan-300 font-medium">applied machine learning</span>.
              I&apos;m currently pursuing my MCA at{" "}
              <span className="text-foreground font-medium">
                SRM Institute of Science and Technology
              </span>
              , where I&apos;m building systems that bridge research and practical software.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My internship at{" "}
              <span className="text-foreground font-medium">Anna University</span> gave me
              hands-on experience automating complex analog circuit verification pipelines —
              reducing manual effort dramatically using incremental ML models.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Outside of professional work, I&apos;m an active competitive programmer, having
              solved 250+ algorithmic problems in Java, Python, and SQL on LeetCode and
              GeeksforGeeks.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
              >
                ✦ {personalInfo.email}
              </a>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glass rounded-xl p-5 flex items-center gap-4"
                >
                  <span className="text-3xl font-bold gradient-text font-mono">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
