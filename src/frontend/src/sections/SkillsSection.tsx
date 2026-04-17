import { SectionHeading } from "@/components/SectionHeading";
import { SkillBadge } from "@/components/SkillBadge";
import { skillCategories } from "@/data/portfolio";
import { Code2, Monitor, Wrench } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-muted/30 py-20 border-y border-border"
      data-ocid="skills.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Expertise"
          title="Technical Skills"
          description="A dual skillset spanning IT infrastructure and modern software development."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const icon =
              cat.id === "it-support" ? (
                <Monitor size={18} className="text-primary" />
              ) : cat.id === "development" ? (
                <Code2 size={18} className="text-accent" />
              ) : (
                <Wrench size={18} className="text-muted-foreground" />
              );

            return (
              <div
                key={cat.id}
                className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth"
                data-ocid={`skills.${cat.id}_card`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    {icon}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground">
                    {cat.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} variant={cat.type} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
