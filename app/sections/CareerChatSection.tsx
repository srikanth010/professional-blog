"use client";

import { motion } from "framer-motion";
import CareerChat from "../../components/CareerChat";

export function CareerChatSection() {
  return (
    <section id="chat" className="pt-24 sm:pt-32 pb-16">
      <div className="section">
        <motion.div
          
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative flex items-center justify-center z-0">
                <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-violet-600/10 blur-[35px] -z-10" style={{ transform: "scale(0.8)", opacity: 0.1 }} />
                <div className="relative w-36 h-36 sm:w-52 sm:h-52 flex items-center justify-center rounded-full overflow-hidden">
                  <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    className="w-full h-full object-cover pointer-events-none transition-opacity duration-500"
                    style={{ display: "block" }}
                  >
                    <source src="/avatar.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Ask About{" "}
              <span className="text-gradient-shimmer">Srikanth</span>
            </h2>
          </div>

          {/* Chat Component */}
          <CareerChat inline />
        </motion.div>
      </div>
    </section>
  );
}
