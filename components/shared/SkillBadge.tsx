"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-mono
        bg-secondary border border-border text-foreground
        hover:border-cyan-400/60 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)]
        transition-colors duration-200 cursor-default"
    >
      {skill}
    </motion.span>
  );
}
