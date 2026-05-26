"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-svh items-center overflow-hidden pb-32 pt-24 sm:pt-32"
    >
      {/* Background blur blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="w-full space-y-16">
        {/* Hero text content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
              Sr. AEM Developer & Tech Lead
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Building content platforms{" "}
              <span className="text-gradient-shimmer">teams trust</span>
              <br />
              and users actually enjoy.
            </h1>
            <p
              className="max-w-2xl text-base sm:text-lg"
              style={{ color: "var(--muted)" }}
            >
              I&apos;m Srikanth Kanteti. I&apos;ve spent 7+ years helping Global 500
              companies modernize legacy CMS setups into faster, cleaner AEM
              and headless experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
                style={{ background: "var(--accent)" }}
              >
                Discuss a Project
              </a>
              <a
                href="#experience"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40"
              >
                View Experience
              </a>

              <div className="flex items-center gap-5 ml-2">
                <a
                  href="https://www.linkedin.com/in/srikanth-kanteti-94100317a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-violet-400"
                  style={{ color: "var(--muted)" }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/srikanth010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-violet-400"
                  style={{ color: "var(--muted)" }}
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#contact"
                  className="transition-colors hover:text-violet-400"
                  style={{ color: "var(--muted)" }}
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t pt-8"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p
            className="mb-4 text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            Worked with teams at
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 opacity-40 hover:opacity-70 transition-opacity">
            {[
              "WYNDHAM HOTELS",
              "CISCO",
              "EAST WEST BANK",
              "MAARK LLC",
              "SKILLVOICE",
            ].map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-wide"
                style={{ color: "var(--foreground)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
