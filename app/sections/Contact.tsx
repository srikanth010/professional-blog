"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export function Contact() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest sm:text-base"
            style={{ color: "var(--accent)" }}
          >
            Get in touch
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="accent-text">Exceptional</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl px-3 text-base sm:text-lg"
            style={{ color: "var(--muted)" }}
          >
            Whether you need AEM architectural guidance, a technical lead for a
            site migration, or a full-stack expert for your next platform — I&apos;m
            happy to discuss your goals.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[1fr_1.6fr] items-start">
          {/* Left: meta info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div
              className="rounded-2xl border p-6 space-y-4"
              style={{
                borderColor: "var(--card-border)",
                background:
                  "linear-gradient(to bottom right, var(--card), var(--card-border))",
              }}
            >
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--muted)" }}
                >
                  Response Time
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  Typically within 24–48 hours
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--muted)" }}
                >
                  Available For
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  Contract, full-time, consulting
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "var(--muted)" }}
                >
                  Specialties
                </p>
                <p style={{ color: "var(--foreground)" }}>
                  AEM Architecture, Headless CMS, Enterprise Migration
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border p-8"
            style={{
              borderColor: "var(--card-border)",
              background:
                "linear-gradient(to bottom right, var(--card), var(--card-border))",
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
