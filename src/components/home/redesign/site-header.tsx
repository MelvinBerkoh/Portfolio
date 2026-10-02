"use client";

import Link from "next/link";
import { Download, Search } from "lucide-react";
import {
  motion,
  useScroll,
} from "motion/react";
import {
  useEffect,
  useState,
} from "react";

import { CommandPalette } from "@/components/home/redesign/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/site";

const navItems = [
  {
    label: "Intro",
    href: "#top",
    sectionId: "top",
  },
  {
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  {
    label: "Journey",
    href: "#journey",
    sectionId: "journey",
  },
  {
    label: "Skills",
    href: "#skills",
    sectionId: "skills",
  },
  {
    label: "About",
    href: "#about",
    sectionId: "about",
  },
  {
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
  },
];

export function SiteHeader() {
  const [commandOpen, setCommandOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("top");

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = navItems
      .map((item) =>
        document.getElementById(
          item.sectionId,
        ),
      )
      .filter(
        (
          section,
        ): section is HTMLElement =>
          section !== null,
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleEntries =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio,
              );

          if (
            visibleEntries.length === 0
          ) {
            return;
          }

          setActiveSection(
            visibleEntries[0].target.id,
          );
        },
        {
          rootMargin:
            "-24% 0px -58% 0px",
          threshold: [
            0,
            0.1,
            0.25,
            0.5,
          ],
        },
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <div className="relative mx-auto max-w-[1050px]">
          <nav className="relative flex items-center justify-between rounded-full border bg-background/80 px-3 py-2 shadow-lg shadow-black/[0.04] backdrop-blur-xl dark:shadow-black/20">
            <Link
              href="#top"
              className="group flex items-center gap-2.5 rounded-full pr-2"
            >
              <span className="sword-shine flex h-9 w-9 items-center justify-center rounded-full border bg-card text-sm font-bold tracking-[-0.04em]">
                <span className="text-gradient">
                  MB
                </span>
              </span>

              <span className="hidden text-sm font-semibold tracking-tight lg:block">
                Melvin Berkoh
              </span>
            </Link>

            <div className="hidden items-center gap-0.5 md:flex">
              {navItems.map((item) => {
                const isActive =
                  activeSection ===
                  item.sectionId;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-section"
                        className="absolute inset-0 rounded-full border bg-secondary"
                        transition={{
                          type: "spring",
                          stiffness: 340,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
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

                <span className="hidden sm:inline">
                  ⌘K
                </span>
              </button>

              <ThemeToggle />

              <Link
                href={siteConfig.resume}
                target="_blank"
                rel="noreferrer"
                className="sword-shine hidden h-9 items-center gap-2 rounded-full bg-foreground px-4 text-xs font-medium text-background transition hover:-translate-y-0.5 sm:flex"
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </Link>
            </div>
          </nav>

          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-7 right-7 h-px overflow-hidden bg-border/50"
          >
            <motion.div
              style={{
                scaleX: scrollYProgress,
              }}
              className="nav-progress-shine absolute inset-0 origin-left bg-brand"
            />
          </div>
        </div>
      </motion.header>

      <CommandPalette
        open={commandOpen}
        onOpenChange={setCommandOpen}
      />
    </>
  );
}