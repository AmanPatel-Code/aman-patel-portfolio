import type { ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
}

export function ContactLink({
  href,
  icon,
  label,
  external = false,
}: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-accent transition-colors duration-200 group"
      data-ocid="contact.link"
    >
      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-200">
        {icon}
      </span>
      <span className="font-medium truncate">{label}</span>
    </a>
  );
}
