import { Navbar } from "@/components/Navbar";
import { type ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, [sectionIds]);

  return active;
}

const SECTIONS = [
  "home",
  "experience",
  "skills",
  "projects",
  "education",
  "contact",
];

export function Layout({ children }: LayoutProps) {
  const activeSection = useActiveSection(SECTIONS);
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "portfolio",
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-1 pt-14">{children}</main>
      <footer className="bg-card border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="text-sm text-muted-foreground">
            © {year} Aman Patel. All rights reserved.
          </span>
          <span className="text-sm text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
