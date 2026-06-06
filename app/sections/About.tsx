"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const TILE_IMAGES = {
  aem: "/assets/wyndham.png",
  work: "/assets/maark.png",
  location: "/assets/ewb.png",
  mindset: "/assets/cisco.png",
  default: "/assets/skillvoice.png",
} as const;

type TileKey = keyof typeof TILE_IMAGES;

const tileBase =
  "rounded-2xl border p-5 transition-all duration-200 hover:border-violet-400/40";
const tileBg = {
  borderColor: "var(--card-border)",
  background:
    "linear-gradient(to bottom right, var(--card), var(--card-border))",
} as React.CSSProperties;

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const currentImage = activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
          A little <span className="accent-text">about me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem]">
        {/* Name / role tile — mobile only */}
        <article
          className="md:hidden col-span-1 row-span-1 rounded-2xl border p-6"
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

        {/* Mobile center image */}
        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border flex items-center justify-center"
          style={{ borderColor: "var(--card-border)", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
          <Image
            src={TILE_IMAGES.default}
            alt="Portfolio project logo"
            width={600}
            height={600}
            className="h-auto w-auto max-h-full max-w-full object-contain p-4"
          />
        </article>

        {/* Name / role tile — desktop */}
        <article
          className="hidden md:flex col-span-1 row-span-1 rounded-2xl border p-7"
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
          onMouseEnter={() => setActiveTile("aem")}
          onMouseLeave={() => setActiveTile(null)}
          onFocus={() => setActiveTile("aem")}
          onBlur={() => setActiveTile(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveTile(activeTile === "aem" ? null : "aem");
            }
          }}
          tabIndex={0}
          role="button"
          className={`${tileBase} col-span-2 row-span-1 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold uppercase" style={{ color: "var(--foreground)" }}>
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
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          onFocus={() => setActiveTile("work")}
          onBlur={() => setActiveTile(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveTile(activeTile === "work" ? null : "work");
            }
          }}
          tabIndex={0}
          role="button"
          className={`${tileBase} col-span-1 row-span-2 md:col-start-3 md:row-start-2 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
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
            {["AEM", "React", "TypeScript", "GraphQL", "LLMs", "MCP"].map(
              (t) => (
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
              )
            )}
          </div>
        </article>

        {/* Location tile */}
        <article
          onMouseEnter={() => setActiveTile("location")}
          onMouseLeave={() => setActiveTile(null)}
          onFocus={() => setActiveTile("location")}
          onBlur={() => setActiveTile(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveTile(activeTile === "location" ? null : "location");
            }
          }}
          tabIndex={0}
          role="button"
          className="col-span-1 row-span-1 h-full min-h-36 rounded-2xl border overflow-hidden relative transition-all duration-200 hover:border-violet-400/40 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          style={{ borderColor: "var(--card-border)" }}
        >
          <div className="flex h-full items-center justify-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            <Image
              src={TILE_IMAGES.location}
              alt="East West Bank"
              width={240}
              height={140}
              className="h-auto w-full max-w-55 object-contain"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </article>

        {/* Mindset tile */}
        <article
          onMouseEnter={() => setActiveTile("mindset")}
          onMouseLeave={() => setActiveTile(null)}
          onFocus={() => setActiveTile("mindset")}
          onBlur={() => setActiveTile(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setActiveTile(activeTile === "mindset" ? null : "mindset");
            }
          }}
          tabIndex={0}
          role="button"
          className={`${tileBase} col-span-1 row-span-2 md:col-start-1 md:row-start-2 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
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
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 p-4 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            <Image
              src={TILE_IMAGES.mindset}
              alt="Cisco"
              width={700}
              height={900}
              className="h-32 w-full object-contain"
            />
          </div>
        </article>

        {/* Animated center image — desktop only */}
        <article
          className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border overflow-hidden relative flex items-center justify-center"
          style={{ borderColor: "var(--card-border)", backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.28,
                ease: "easeOut"
              }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              <Image
                src={currentImage}
                alt="Professional reference visual"
                width={400}
                height={400}
                className="h-auto w-auto max-h-full max-w-full object-contain"
                sizes="(min-width: 768px) 33vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
