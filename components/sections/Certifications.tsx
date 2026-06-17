import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CertCard } from "@/components/shared/CertCard";
import { certifications } from "@/lib/constants";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading number="05." title="Certifications" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <CertCard key={cert.name} cert={cert} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
