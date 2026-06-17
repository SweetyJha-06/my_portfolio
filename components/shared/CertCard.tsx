"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import type { Certification } from "@/types";

interface CertCardProps {
  cert: Certification;
  index: number;
}

export function CertCard({ cert, index }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group card-glass rounded-xl p-5 flex flex-col gap-3
        hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
        transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
          <Award size={18} className="text-cyan-400" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-cyan-300 transition-colors">
            {cert.name}
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">{cert.issuer}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
        {cert.date && (
          <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
        )}
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label={`View credential for ${cert.name}`}
          >
            View Credential
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
