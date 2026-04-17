import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { ExternalLink, Globe } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-background py-20"
      data-ocid="projects.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Portfolio"
          title="Live Projects"
          description="Production-deployed web and mobile applications built with React.js and React Native."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <a
              key={proj.id}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth hover:border-accent/30 flex flex-col"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe size={18} className="text-primary" />
                </div>
                <div className="flex items-center gap-1.5">
                  {"ongoing" in proj && proj.ongoing && (
                    <span className="badge-dev">Ongoing</span>
                  )}
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
                  />
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                {proj.title}
              </h3>
              <p className="text-xs text-muted-foreground font-mono mb-3">
                {proj.domain}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {proj.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-0.5 rounded bg-muted text-xs text-muted-foreground font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Visit Site CTA */}
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-smooth">
                Visit Site <ExternalLink size={13} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
