import { ContactLink } from "@/components/ContactLink";
import { SectionHeading } from "@/components/SectionHeading";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-background py-20"
      data-ocid="contact.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <SectionHeading
            label="Get in Touch"
            title="Let's Connect"
            description="Open to new opportunities in IT Support, Software Engineering, or hybrid roles. Reach out!"
            centered
          />
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-card hover:shadow-elevated transition-smooth"
            data-ocid="contact.phone_card"
          >
            <ContactLink
              href={`tel:${personalInfo.phone}`}
              icon={<Phone size={15} className="text-primary" />}
              label={`+91 ${personalInfo.phone}`}
            />
          </div>

          <div
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-card hover:shadow-elevated transition-smooth"
            data-ocid="contact.email_card"
          >
            <ContactLink
              href={`mailto:${personalInfo.email}`}
              icon={<Mail size={15} className="text-primary" />}
              label={personalInfo.email}
            />
          </div>

          <div
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-card hover:shadow-elevated transition-smooth"
            data-ocid="contact.linkedin_card"
          >
            <ContactLink
              href={personalInfo.linkedin}
              icon={<Linkedin size={15} className="text-primary" />}
              label="LinkedIn Profile"
              external
            />
          </div>

          <div
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-card hover:shadow-elevated transition-smooth"
            data-ocid="contact.github_card"
          >
            <ContactLink
              href={personalInfo.github}
              icon={<Github size={15} className="text-primary" />}
              label="GitHub Profile"
              external
            />
          </div>

          <div
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-card hover:shadow-elevated transition-smooth sm:col-span-2 md:col-span-1"
            data-ocid="contact.location_card"
          >
            <ContactLink
              href={`https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`}
              icon={<MapPin size={15} className="text-primary" />}
              label={personalInfo.location}
              external
            />
          </div>
        </div>

        {/* Primary email CTA */}
        <div className="mt-12 text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-smooth shadow-elevated text-base"
            data-ocid="contact.email_cta_button"
          >
            <Mail size={18} />
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
