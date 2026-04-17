import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-background py-20"
      data-ocid="experience.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Career"
          title="Professional Experience"
          description="Over 3 years spanning enterprise IT support and modern software engineering."
        />

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-6 top-6 bottom-6 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="relative flex gap-6 items-start"
                data-ocid={`experience.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border-2 border-border bg-card items-center justify-center z-10 shadow-card">
                  <span
                    className={`w-4 h-4 rounded-full ${
                      exp.type === "Development" ? "bg-accent" : "bg-primary"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth">
                  <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                    <div>
                      <span
                        className={
                          exp.type === "Development" ? "badge-dev" : "badge-it"
                        }
                      >
                        {exp.type}
                      </span>
                      <h3 className="font-display font-bold text-lg text-foreground mt-2 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted rounded-full px-3 py-1 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
