"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative card-glass rounded-xl p-6 flex flex-col gap-4
        hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
        transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-3 shrink-0">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-cyan-400 transition-colors"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
