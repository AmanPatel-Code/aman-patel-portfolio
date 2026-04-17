import { ContactLink } from "@/components/ContactLink";
import { personalInfo } from "@/data/portfolio";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Github,
  Globe,
  Linkedin,
  Mail,
  Monitor,
  Phone,
} from "lucide-react";

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-3 shadow-card w-full md:w-56">
      <span className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
        {icon}
      </span>
      <div>
        <p className="font-display font-bold text-lg text-foreground leading-none">
          {value}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="home"
      className="relative bg-card border-b border-border overflow-hidden"
      data-ocid="home.section"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.07,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: identity + CTA */}
          <div>
            <span className="inline-block badge-dev mb-4">
              Available for opportunities
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary mb-5 font-display">
              {personalInfo.title}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base max-w-lg mb-8">
              {personalInfo.objective}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-smooth shadow-elevated"
                data-ocid="hero.projects_button"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-smooth"
                data-ocid="hero.contact_button"
              >
                Contact Me
              </button>
            </div>

            {/* Contact links */}
            <div className="grid sm:grid-cols-2 gap-2">
              <ContactLink
                href={`tel:${personalInfo.phone}`}
                icon={<Phone size={14} className="text-primary" />}
                label={personalInfo.phone}
              />
              <ContactLink
                href={`mailto:${personalInfo.email}`}
                icon={<Mail size={14} className="text-primary" />}
                label={personalInfo.email}
              />
              <ContactLink
                href={personalInfo.linkedin}
                icon={<Linkedin size={14} className="text-primary" />}
                label="LinkedIn Profile"
                external
              />
              <ContactLink
                href={personalInfo.github}
                icon={<Github size={14} className="text-primary" />}
                label="GitHub Profile"
                external
              />
            </div>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col gap-3 md:items-end">
            <StatCard
              icon={<Briefcase size={18} className="text-primary" />}
              value="3+"
              label="Years IT Support"
            />
            <StatCard
              icon={<Code2 size={18} className="text-accent" />}
              value="4"
              label="Live Projects"
            />
            <StatCard
              icon={<Monitor size={18} className="text-primary" />}
              value="L1/L2"
              label="Technical Support"
            />
            <StatCard
              icon={<Globe size={18} className="text-accent" />}
              value="React"
              label="& React Native"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
