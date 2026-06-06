"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const experiences = [
  {
    company: "Wyndham Hotels & Resorts",
    logo: "/assets/wyndham.png",
    role: "Sr. AEM Tech Lead",
    period: "Apr 2022 — Present",
    current: true,
    description:
      "Leading architectural decisions for global hospitality platforms. Implementing MSM and Live Copy strategies for 50+ brand locales, AEMaaCS migrations, Cloud Manager pipeline governance, and Dispatcher optimization at enterprise scale.",
    tags: ["AEMaaCS", "MSM", "Cloud Manager", "OSGi", "Dispatcher"],
  },
  {
    company: "East West Bank",
    logo: "/assets/ewb.png",
    role: "Sr. Applications / AEM Developer",
    period: "Mar 2021 — Apr 2022",
    current: false,
    description:
      "Modernized banking portals with AEM 6.5. Focused on secure OSGi component development, API integrations, and compliance-conscious authoring workflows.",
    tags: ["AEM 6.5", "OSGi", "Java", "API Integration"],
  },
  {
    company: "MAARK",
    logo: "/assets/maark.png",
    role: "AEM Developer",
    period: "Dec 2019 — Feb 2021",
    current: false,
    description:
      "Built custom AEM components, Sling models, and workflow automation for diverse client portfolios in an agency environment. Delivered rapid-turnaround CMS solutions.",
    tags: ["AEM 6.4", "Sling", "HTL", "React SPA Editor"],
  },
  {
    company: "Cisco",
    logo: "/assets/cisco.png",
    role: "AEM Developer (Contract)",
    period: "Dec 2018 — Dec 2019",
    current: false,
    description:
      "Collaborated on enterprise site migrations and template development within the Cisco.com digital ecosystem. Template governance and component standardization at Fortune 100 scale.",
    tags: ["AEM", "Component Library", "Migration", "Enterprise"],
  },
];

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <div className="mb-14 text-center">
          <span
            className="text-xs font-bold uppercase tracking-widest sm:text-base"
            style={{ color: "var(--accent)" }}
          >
            Career history
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Work <span className="accent-text">Experience</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: "easeOut"
              }}
              className="group rounded-2xl border p-6 transition-all duration-200 hover:border-violet-400/40"
              style={{
                borderColor: "var(--card-border)",
                background:
                  "linear-gradient(to bottom right, var(--card), var(--card-border))",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* Company logo */}
                  <div
                    className="h-10 w-10 shrink-0 rounded-xl border flex items-center justify-center overflow-hidden"
                    style={{
                      borderColor: "var(--card-border)",
                      background: "var(--card)",
                    }}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className="text-base font-bold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            background: "rgba(139, 92, 246, 0.15)",
                            color: "var(--accent)",
                            border: "1px solid rgba(139, 92, 246, 0.3)",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span
                  className="shrink-0 text-xs font-medium"
                  style={{ color: "var(--muted)" }}
                >
                  {exp.period}
                </span>
              </div>

              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      borderColor: "var(--card-border)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
