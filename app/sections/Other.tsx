"use client";

import { motion } from "framer-motion";
import CareerChat from "../../components/CareerChat";

export function Other() {
  const cards = [
    {
      title: "Ask Srikanth",
      description: "Interactive AI-powered Q&A about my background, skills, and experience",
      color: "from-violet-500/90 to-fuchsia-500/90",
      icon: "💬",
    },
    {
      title: "Achievements",
      description: "Leading enterprise migrations, mentoring teams, and delivering high-impact solutions at scale",
      color: "from-amber-500/90 to-orange-500/90",
      icon: "🏆",
    },
    {
      title: "Connect",
      description: "GitHub, LinkedIn, Email — let's discuss AEM architecture or your next project",
      color: "from-cyan-500/90 to-blue-500/90",
      icon: "🔗",
    },
  ];

  return (
    <section
      id="other"
      className="relative overflow-hidden pb-32 pt-0"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="mb-14 text-center">
          <span
            className="text-xs font-bold uppercase tracking-widest sm:text-base"
            style={{ color: "var(--accent)" }}
          >
            Beyond the resume
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            More About <span className="text-gradient-shimmer">Me</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {/* Chat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${cards[0].color})`,
            }}
          >
            <div className="relative p-6 h-full flex flex-col justify-between min-h-[280px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ background: "radial-gradient(circle at top right, white)" }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{cards[0].icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{cards[0].title}</h3>
                <p className="text-sm text-white/80">{cards[0].description}</p>
              </div>

              <div className="relative z-10 mt-6">
                <CareerChat inline />
              </div>
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${cards[1].color})`,
            }}
          >
            <div className="relative p-6 h-full flex flex-col justify-between min-h-[280px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ background: "radial-gradient(circle at top right, white)" }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{cards[1].icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{cards[1].title}</h3>
                <p className="text-sm text-white/80">{cards[1].description}</p>
              </div>

              <div className="relative z-10 mt-6">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 text-white font-semibold group hover:gap-3 transition-all"
                >
                  Explore
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${cards[2].color})`,
            }}
          >
            <div className="relative p-6 h-full flex flex-col justify-between min-h-[280px]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ background: "radial-gradient(circle at top right, white)" }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3">{cards[2].icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{cards[2].title}</h3>
                <p className="text-sm text-white/80">{cards[2].description}</p>
              </div>

              <div className="relative z-10 mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white font-semibold group hover:gap-3 transition-all"
                >
                  Reach out
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
