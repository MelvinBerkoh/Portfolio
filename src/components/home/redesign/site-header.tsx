"use client";

import Link from "next/link";
import { Download, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

import { CommandPalette } from "@/components/home/redesign/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";

const navItems = [
  { label: "Intro", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="sticky top-4 z-50 px-4"
      >
        <nav className="mx-auto flex max-w-[980px] items-center justify-between rounded-full border bg-background/80 px-3 py-2 shadow-sm backdrop-blur-xl">
          <Link
            href="#top"
            className="flex items-center gap-2.5 rounded-full pr-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border bg-card text-sm font-bold tracking-[-0.04em]">
              <span className="text-gradient">MB</span>
            </span>

            <span className="hidden text-sm font-semibold tracking-tight lg:block">
              Melvin Berkoh
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-xs font-medium uppercase tracking-[0.08em] transition ${
                  index === 0
                    ? "border bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setCommandOpen(true);
              }}
              className="group flex h-9 items-center gap-2 rounded-full border bg-card px-3 text-xs text-muted-foreground transition hover:border-brand/30 hover:text-foreground"
              aria-label="Open command palette"
            >
              <Search className="h-3.5 w-3.5 transition group-hover:text-brand" />
              <span className="hidden sm:inline">⌘K</span>
            </button>

            <ThemeToggle />

            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-medium text-background transition hover:opacity-90 sm:flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </Link>
          </div>
        </nav>
      </motion.header>

      <CommandPalette
        open={commandOpen}
        onOpenChange={setCommandOpen}
      />
    </>
  );
}