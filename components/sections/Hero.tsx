"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowDown } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/constants";

const socials = [
  { href: personalInfo.github, icon: Github, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: personalInfo.leetcode, icon: Code2, label: "LeetCode" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <motion.div variants={item} className="flex items-center gap-2">
              {personalInfo.availableForWork && (
                <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 rounded-full">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
                  </span>
                  Open for Opportunities
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Sweety Jha</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="text-xl md:text-2xl text-muted-foreground font-mono"
            >
              <TypeAnimation
                sequence={personalInfo.roles.flatMap((r) => [r, 2000])}
                wrapper="span"
                repeat={Infinity}
                className="text-cyan-300"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed max-w-lg text-base md:text-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-lg bg-cyan-500 text-background font-semibold text-sm
                  hover:bg-cyan-400 transition-colors duration-200 glow-cyan"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm
                  hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-200"
              >
                View Work
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-4 pt-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-border text-muted-foreground
                    hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-2xl scale-110" />
              {/* Ring border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-blue-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
                  <Image
                    src="/images/profile.png"
                    alt="Sweety Jha — Software Developer"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Decorative dot grid */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-30">
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-cyan-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
