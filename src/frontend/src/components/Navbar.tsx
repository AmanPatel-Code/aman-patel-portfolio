import { personalInfo } from "@/data/portfolio";
import { Mail, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavClick(id: string) {
    scrollTo(id);
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-card/90 border-b border-border shadow-card backdrop-blur-md"
        data-ocid="navbar"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            type="button"
            className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => handleNavClick("home")}
            data-ocid="navbar.logo_link"
          >
            Aman Patel
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                data-ocid={`navbar.${link.id}_link`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full hover:bg-accent/90 transition-smooth"
            data-ocid="navbar.cta_button"
          >
            <Mail size={13} />
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay — close on tap */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 md:hidden bg-background/60 backdrop-blur-sm cursor-default"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-14 left-0 right-0 z-50 md:hidden bg-card border-b border-border shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
        data-ocid="navbar.mobile_drawer"
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              data-ocid={`navbar.mobile_${link.id}_link`}
              className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center gap-1.5 px-4 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:bg-accent/90 transition-smooth"
            data-ocid="navbar.mobile_cta_button"
          >
            <Mail size={14} />
            Hire Me
          </a>
        </nav>
      </div>
    </>
  );
}
