"use client";

import { useEffect, useRef } from "react";

export default function InteractiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("❌ Canvas element not found in DOM");
      return;
    }

    console.log("✅ Canvas element found:", canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("❌ Canvas context not found");
      return;
    }

    console.log("✅ Canvas context obtained");

    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`✅ Canvas resized to ${canvas.width}x${canvas.height}`);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Simple test: fill with color
    ctx.fillStyle = "#050509";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log("✅ Background filled");

    // Draw some test dots
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    for (let x = 50; x < canvas.width; x += 40) {
      for (let y = 50; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    console.log("✅ Test dots drawn");

    // Animation loop
    let mouseX = -9999;
    let mouseY = -9999;

    const animate = () => {
      ctx.fillStyle = "#050509";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      for (let x = 50; x < canvas.width; x += 40) {
        for (let y = 50; y < canvas.height; y += 40) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0.3, 1 - dist / 200);

          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, 3 + opacity * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
    console.log("✅ Animation loop started");

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      } else if (e instanceof TouchEvent && e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: -10,
      }}
    />
  );
}
