"use client";

import { Github, Linkedin, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/constants";

const socials = [
  { href: personalInfo.github, icon: Github, label: "GitHub" },
  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: personalInfo.leetcode, icon: Code2, label: "LeetCode" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          &copy; {year}{" "}
          <span className="text-foreground font-medium">Sweety Jha</span>. All
          rights reserved.
        </p>

        <p className="text-xs text-center">
          Designed & engineered with focus on clean architecture and performance.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
