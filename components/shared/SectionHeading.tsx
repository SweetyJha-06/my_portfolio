interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-xl">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
    </div>
  );
}
