"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

type TileKey = "aem" | "work" | "location" | "mindset" | "default";

const COMPANIES: Record<
  TileKey,
  { src: string; name: string; caption: string }
> = {
  aem: {
    src: "/assets/wyndham.png",
    name: "Wyndham Hotel Group",
    caption: "AEM as a Cloud Service at global scale",
  },
  work: {
    src: "/assets/maark.png",
    name: "Maark",
    caption: "Product engineering & delivery",
  },
  location: {
    src: "/assets/ewb.png",
    name: "East West Bancorp",
    caption: "Enterprise content platform",
  },
  mindset: {
    src: "/assets/cisco.png",
    name: "Cisco",
    caption: "Large-scale authoring migrations",
  },
  default: {
    src: "/assets/skillvoice.png",
    name: "SkillVoice",
    caption: "Where it started",
  },
};

const tileBase =
  "rounded-2xl border p-5 transition-colors duration-200 hover:border-violet-400/40";
const tileBg = {
  borderColor: "var(--card-border)",
  background:
    "linear-gradient(to bottom right, var(--card), var(--card-border))",
} as React.CSSProperties;

// Reusable light surface so every brand mark reads consistently on the dark
// theme — fixes dark logos (EWB) vanishing and baked-tile logos (Wyndham)
// clashing with transparent ones.
function LogoSurface({
  src,
  alt,
  className = "",
  imgClassName = "max-h-full max-w-full",
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-white/70 bg-gradient-to-br from-white to-zinc-100 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_24px_-12px_rgba(0,0,0,0.5)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className={`h-auto w-auto object-contain ${imgClassName}`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const current = COMPANIES[activeTile ?? "default"];

  const interactiveProps = (key: TileKey) => ({
    onMouseEnter: () => setActiveTile(key),
    onMouseLeave: () => setActiveTile(null),
    onFocus: () => setActiveTile(key),
    onBlur: () => setActiveTile(null),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveTile(activeTile === key ? null : key);
      }
    },
    tabIndex: 0,
    role: "button" as const,
  });

  const focusRing =
    "outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          A little <span className="accent-text">about me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem]">
        {/* Name / role tile — mobile only */}
        <article
          className="col-span-1 row-span-1 rounded-2xl border p-6 md:hidden"
          style={tileBg}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
            Profile
          </p>
          <h3 className="mt-2 text-2xl font-black leading-tight">
            Srikanth Kanteti
          </h3>
          <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
            Sr. AEM Tech Lead • builder at heart
          </p>
        </article>

        {/* Mobile center logo */}
        <article className="overflow-hidden rounded-2xl border md:hidden" style={{ borderColor: "var(--card-border)" }}>
          <LogoSurface
            src={current.src}
            alt={current.name}
            className="aspect-square h-full w-full"
            imgClassName="max-h-[70%] max-w-[80%]"
          />
        </article>

        {/* Name / role tile — desktop */}
        <article
          className="col-span-1 row-span-1 hidden rounded-2xl border p-7 md:flex"
          style={tileBg}
        >
          <div className="flex w-full flex-col justify-center text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
              Profile
            </p>
            <h3 className="mt-2 text-3xl font-black leading-tight">
              Srikanth Kanteti
            </h3>
            <p
              className="mt-2 text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "var(--muted)" }}
            >
              Sr. AEM Tech Lead • builder at heart
            </p>
          </div>
        </article>

        {/* AEM Expertise tile */}
        <article
          {...interactiveProps("aem")}
          className={`${tileBase} col-span-2 row-span-1 ${focusRing}`}
          style={tileBg}
        >
          <h3
            className="text-sm font-bold uppercase tracking-wide"
            style={{ color: "var(--foreground)" }}
          >
            AEM Architecture
          </h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            I&apos;ve spent a good part of my career shaping AEM as a Cloud Service
            platforms, from MSM and Live Copy across 50+ locales to Dispatcher
            caching, OSGi services, and authoring setups that are easier for
            global teams to work with.
          </p>
        </article>

        {/* Tech Craft tile */}
        <article
          {...interactiveProps("work")}
          className={`${tileBase} col-span-1 row-span-2 md:col-start-3 md:row-start-2 ${focusRing}`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold">AI Delivery</h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            I like building practical tools around React, Next.js, and GraphQL,
            especially when they help content teams move faster. I&apos;m also
            exploring how LLMs and MCP can fit naturally into real workflows.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["AEM", "React", "TypeScript", "GraphQL", "LLMs", "MCP"].map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-1 text-[10px]"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "var(--muted)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Location tile — logo */}
        <article
          {...interactiveProps("location")}
          className={`col-span-1 row-span-1 h-full min-h-36 overflow-hidden rounded-2xl border transition-colors duration-200 hover:border-violet-400/40 ${focusRing}`}
          style={{ borderColor: "var(--card-border)" }}
        >
          <LogoSurface
            src={COMPANIES.location.src}
            alt={COMPANIES.location.name}
            className="h-full w-full"
            imgClassName="max-h-[60%] w-full max-w-[88%]"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </article>

        {/* Mindset tile */}
        <article
          {...interactiveProps("mindset")}
          className={`${tileBase} col-span-1 row-span-2 md:col-start-1 md:row-start-2 ${focusRing}`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold">Mindset</h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            I value steady delivery, clear decisions, and architecture that
            holds up in the real world. Most of my work has been about moving
            teams from older AEM setups to AEMaaCS without making life harder
            for editors or engineers.
          </p>
          <LogoSurface
            src={COMPANIES.mindset.src}
            alt={COMPANIES.mindset.name}
            className="mt-4 h-28 w-full"
            imgClassName="max-h-full w-full max-w-[80%]"
          />
        </article>

        {/* Animated center logo — desktop only */}
        <article
          className="relative col-start-2 row-start-2 hidden aspect-square overflow-hidden rounded-2xl border md:block"
          style={tileBg}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.02 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 220, damping: 26 }
              }
              className="absolute inset-0 flex flex-col p-3"
            >
              <LogoSurface
                src={current.src}
                alt={current.name}
                className="min-h-0 flex-1"
                imgClassName="max-h-[70%] max-w-[80%]"
                sizes="(min-width: 768px) 33vw"
                priority
              />
              <div className="px-1 pt-3 text-center">
                <p className="text-xs font-semibold leading-tight">
                  {current.name}
                </p>
                <p
                  className="mt-0.5 text-[10px] leading-tight"
                  style={{ color: "var(--muted)" }}
                >
                  {current.caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
