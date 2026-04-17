import { SectionHeading } from "@/components/SectionHeading";
import {
  certifications,
  education,
  languages,
  strengths,
} from "@/data/portfolio";
import { Award, CheckCircle2, GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-muted/30 py-20 border-y border-border"
      data-ocid="education.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Education list — 2/3 width */}
          <div className="md:col-span-2">
            <SectionHeading
              label="Academic"
              title="Education"
              description="Computer Science foundation with ongoing professional development."
            />
            <div className="mt-8 space-y-4">
              {education.map((edu, i) => (
                <div
                  key={edu.id}
                  className="bg-card border border-border rounded-2xl px-6 py-5 shadow-card flex items-start gap-4 hover:shadow-elevated transition-smooth"
                  data-ocid={`education.item.${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="text-xs text-accent font-semibold">
                        {edu.year}
                      </span>
                      {edu.grade && (
                        <span className="badge-it">{edu.grade}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: certs + languages + strengths */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <SectionHeading label="Credentials" title="Certifications" />
              <div className="mt-6 space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={cert.id}
                    className="bg-card border border-border rounded-xl px-4 py-3 shadow-card flex items-center gap-3 hover:shadow-elevated transition-smooth"
                    data-ocid={`certifications.item.${i + 1}`}
                  >
                    <Award size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {cert.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang.id} className="badge-it">
                    {lang.name} · {lang.level}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Strengths
              </h3>
              <ul className="space-y-2">
                {strengths.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-accent flex-shrink-0"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
