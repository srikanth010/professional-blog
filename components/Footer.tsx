"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t px-4 py-10 sm:px-0 sm:py-12"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="section">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div
            className="flex items-center gap-3 text-base"
            style={{ color: "var(--muted)" }}
          >
            <span className="text-lg font-bold accent-text">SK</span>
            <span>•</span>
            <span>© {year} Srikanth Kanteti</span>
          </div>

          <div className="text-sm" style={{ color: "var(--muted)" }}>
            Sr. AEM Tech Lead — Building enterprise digital experiences
          </div>

          <div className="flex items-center gap-5">
            {[
              {
                href: "https://github.com/srikanth010",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/srikanth-kanteti-94100317a/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "#contact", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-colors duration-200 hover:scale-110 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
                style={{ color: "var(--muted)" }}
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
