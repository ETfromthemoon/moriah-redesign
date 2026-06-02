"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxDivider() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Background parallax: slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]"
    >
      {/* Background: Atacama night sky */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-[-80px] -z-10"
      >
        <Image
          src="/images/campamento-exterior.jpg"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center saturate-[0.82] contrast-[1.08]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0E1A1F]/60" />
      </motion.div>

      {/* Centered statement text */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-tight tracking-[-0.03em] text-white"
        >
          El norte de Chile no para.{" "}
          <span className="text-brand-highlight-dark">Nosotros tampoco.</span>
        </motion.p>
      </div>
    </section>
  );
}
