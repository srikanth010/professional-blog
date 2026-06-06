"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiApachemaven,
  SiGit,
  SiJenkins,
  SiGraphql,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";

const beltItems = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
  { name: "Maven", icon: SiApachemaven, color: "#C71C2C" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node", icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const beltChunk = [...Array(3)].flatMap(() => beltItems);

const skillGroups = [
  {
    title: "AEM Platform",
    summary: "Enterprise content management at cloud scale.",
    items: [
      "AEM as a Cloud Service (AEMaaCS)",
      "OSGi / Felix — service configuration",
      "Sling Models + HTL templating",
      "Multisite Manager + Live Copy",
      "Dispatcher TTL & caching strategy",
    ],
  },
  {
    title: "AI & LLMs",
    summary: "Practical AI features, assistant flows, and prompt design.",
    items: [
      "LLM-assisted product experiences",
      "Prompt design and response shaping",
      "RAG-style workflows and context passing",
      "Tool-augmented agents and guardrails",
      "AI UX for developer and content teams",
    ],
  },
  {
    title: "MCP & Automation",
    summary: "Model context tooling and workflow orchestration.",
    items: [
      "MCP-style tool integration",
      "Automation-friendly service design",
      "Workflow orchestration and context passing",
      "Cloud Manager / Jenkins pipelines",
      "Java and TypeScript integration layers",
    ],
  },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span
            className="text-xs font-bold uppercase tracking-widest sm:text-base"
            style={{ color: "var(--accent)" }}
          >
            Tech stack
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Skills <span className="accent-text">Overview</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--card-border)",
                background:
                  "linear-gradient(to bottom right, var(--card), var(--card-border))",
              }}
            >
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                {group.summary}
              </p>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scrolling tech belt */}
        <div
          className="mt-8 rounded-2xl border py-3"
          style={{
            borderColor: "var(--card-border)",
            background: "rgba(24,24,27,0.4)",
          }}
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 28,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-8 px-4">
                  {beltChunk.map((item, index) => (
                    <div key={`${copy}-${item.name}-${index}`} className="flex items-center gap-2">
                      <item.icon style={{ color: item.color }} size={16} />
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
