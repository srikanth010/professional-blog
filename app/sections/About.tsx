"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TILE_IMAGES = {
  aem: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  work: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  location:
    "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=1200&auto=format&fit=crop",
  mindset:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  default:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
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

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
          About <span className="text-gradient-shimmer">Me</span>
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
            Sr. AEM Tech Lead
          </p>
        </article>

        {/* Mobile center image */}
        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--card-border)" }}>
          <Image
            src={TILE_IMAGES.default}
            alt="Developer workspace"
            width={600}
            height={600}
            className="h-full w-full object-cover"
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
              Sr. AEM Tech Lead
            </p>
          </div>
        </article>

        {/* AEM Expertise tile */}
        <article
          onMouseEnter={() => setActiveTile("aem")}
          onMouseLeave={() => setActiveTile(null)}
          className={`${tileBase} col-span-2 row-span-1`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold uppercase" style={{ color: "var(--foreground)" }}>
            AEM Architecture
          </h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            AEM as a Cloud Service expert — MSM/Live Copy for 50+ locales,
            Dispatcher TTL optimization, OSGi configurations, and secure
            authoring permission models for distributed global teams at Wyndham
            Hotels.
          </p>
        </article>

        {/* Tech Craft tile */}
        <article
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          className={`${tileBase} col-span-1 row-span-2 md:col-start-3 md:row-start-2`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold">Craft</h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            Building headless CMS architectures with Content Fragments and
            GraphQL, integrated with React/Next.js frontends. Shipping quality
            through Cloud Manager pipelines and automated testing.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["AEM", "React", "TypeScript", "Java", "GraphQL", "Jenkins"].map(
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
          className="col-span-1 row-span-1 h-full min-h-[9rem] rounded-2xl border overflow-hidden relative transition-all duration-200 hover:border-violet-400/40"
          style={{ borderColor: "var(--card-border)" }}
        >
          <Image
            src={TILE_IMAGES.location}
            alt="United States"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <p className="text-xl font-bold leading-none">United States</p>
            <p className="text-[11px]" style={{ color: "var(--muted)" }}>
              EST / CST
            </p>
          </div>
        </article>

        {/* Mindset tile */}
        <article
          onMouseEnter={() => setActiveTile("mindset")}
          onMouseLeave={() => setActiveTile(null)}
          className={`${tileBase} col-span-1 row-span-2 md:col-start-1 md:row-start-2`}
          style={tileBg}
        >
          <h3 className="text-sm font-bold">Mindset</h3>
          <p
            className="mt-2 text-xs leading-relaxed sm:text-sm"
            style={{ color: "var(--muted)" }}
          >
            Ownership, consistency, and pragmatic architecture over trend-chasing.
            Leading migrations from AEM 6.4/6.5 to AEMaaCS with zero-downtime
            strategies and 90+ Lighthouse scores.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={TILE_IMAGES.mindset}
              alt="Engineering mindset"
              width={700}
              height={900}
              className="h-40 w-full object-cover"
            />
          </div>
        </article>

        {/* Animated center image — desktop only */}
        <article
          className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border overflow-hidden relative"
          style={{ borderColor: "var(--card-border)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt="Context visual"
                fill
                className="object-cover"
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
