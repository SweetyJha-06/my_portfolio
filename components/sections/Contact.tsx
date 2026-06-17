"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { personalInfo } from "@/lib/constants";
import { Send, Mail, Linkedin } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-colors";

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading number="08." title="Contact" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — CTA text */}
          <AnimatedSection delay={0.1} className="space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold">
              Got something worth{" "}
              <span className="gradient-text">building?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m open to interesting internships, software development
              projects, and collaboration opportunities. Drop a line and
              let&apos;s coordinate.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan-300 transition-colors group"
              >
                <div className="p-2 rounded-lg border border-border group-hover:border-cyan-400/50 transition-colors">
                  <Mail size={16} className="text-cyan-400" />
                </div>
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-cyan-300 transition-colors group"
              >
                <div className="p-2 rounded-lg border border-border group-hover:border-cyan-400/50 transition-colors">
                  <Linkedin size={16} className="text-cyan-400" />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className={inputClass + " resize-none"}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg
                  bg-cyan-500 text-background font-semibold text-sm
                  hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed
                  transition-colors duration-200 glow-cyan"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <p className="text-sm text-green-400 text-center">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try emailing directly.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
