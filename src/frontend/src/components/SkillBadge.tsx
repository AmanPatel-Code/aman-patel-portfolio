interface SkillBadgeProps {
  label: string;
  variant?: "IT Support" | "Development" | "Tools";
}

export function SkillBadge({ label, variant = "Tools" }: SkillBadgeProps) {
  const classes: Record<string, string> = {
    "IT Support": "badge-it",
    Development: "badge-dev",
    Tools:
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-secondary-foreground",
  };

  return <span className={classes[variant]}>{label}</span>;
}
