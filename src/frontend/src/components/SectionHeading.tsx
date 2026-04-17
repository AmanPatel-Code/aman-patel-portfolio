interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-2">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
