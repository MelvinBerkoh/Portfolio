"use client";

import Link from "next/link";
import {
  Download,
  Menu,
  Search,
  X,
} from "lucide-react";
import {
  AnimatePresence,
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

  const [mobileMenuOpen, setMobileMenuOpen] =
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
        className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4"
      >
        <div className="relative mx-auto max-w-[1050px]">
          <div
            className={`overflow-hidden border bg-background/88 shadow-lg shadow-black/[0.04] backdrop-blur-xl transition-[border-radius] duration-200 dark:shadow-black/20 ${
              mobileMenuOpen
                ? "rounded-[26px]"
                : "rounded-full"
            } md:rounded-full`}
          >
            <nav className="relative flex items-center justify-between px-2.5 py-2 sm:px-3">
              <Link
                href="#top"
                onClick={closeMobileMenu}
                className="group flex min-w-0 items-center gap-2.5 rounded-full pr-1 sm:pr-2"
              >
                <span className="sword-shine flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-card text-sm font-bold tracking-[-0.04em]">
                  <span className="text-gradient">
                    MB
                  </span>
                </span>

                <span className="hidden truncate text-sm font-semibold tracking-tight lg:block">
                  Melvin Berkoh
                </span>
              </Link>

              {/* Desktop navigation */}
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

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCommandOpen(true);
                  }}
                  className="group flex h-9 items-center gap-2 rounded-full border bg-card px-2.5 text-xs text-muted-foreground transition hover:border-brand/30 hover:text-foreground sm:px-3"
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

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(
                      (current) => !current,
                    );
                  }}
                  aria-expanded={
                    mobileMenuOpen
                  }
                  aria-controls="mobile-site-navigation"
                  aria-label={
                    mobileMenuOpen
                      ? "Close navigation menu"
                      : "Open navigation menu"
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition md:hidden ${
                    mobileMenuOpen
                      ? "border-brand/35 bg-brand/10 text-brand"
                      : "bg-card text-muted-foreground"
                  }`}
                >
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
                    {mobileMenuOpen ? (
                      <motion.span
                        key="close"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.12,
                        }}
                      >
                        <X className="h-4 w-4" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.12,
                        }}
                      >
                        <Menu className="h-4 w-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </nav>

            {/* Connected mobile navigation */}
            <AnimatePresence initial={false}>
              {mobileMenuOpen && (
                <motion.div
                  id="mobile-site-navigation"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    height: {
                      duration: 0.28,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    },
                    opacity: {
                      duration: 0.18,
                    },
                  }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="border-t border-border/70 px-2 pb-2 pt-2">
                    <div className="portfolio-grid overflow-hidden rounded-[20px]">
                      <div className="grid grid-cols-2 gap-1 p-1.5">
                        {navItems.map(
                          (item) => {
                            const isActive =
                              activeSection ===
                              item.sectionId;

                            return (
                              <Link
                                key={
                                  item.href
                                }
                                href={
                                  item.href
                                }
                                onClick={
                                  closeMobileMenu
                                }
                                className={`relative flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-xs font-medium transition duration-200 ${
                                  isActive
                                    ? "border-brand/35 bg-brand/10 text-foreground"
                                    : "border-transparent text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                                }`}
                              >
                                <span>
                                  {
                                    item.label
                                  }
                                </span>

                                <span
                                  className={`h-1.5 w-1.5 rounded-full transition ${
                                    isActive
                                      ? "bg-brand shadow-[0_0_8px_var(--cursor-glow)]"
                                      : "bg-muted-foreground/25"
                                  }`}
                                />
                              </Link>
                            );
                          },
                        )}
                      </div>

                      <div className="mx-2 border-t" />

                      <div className="p-2">
                        <Link
                          href={
                            siteConfig.resume
                          }
                          target="_blank"
                          rel="noreferrer"
                          onClick={
                            closeMobileMenu
                          }
                          className="sword-shine flex min-h-12 items-center justify-between rounded-2xl bg-foreground px-4 py-3 text-xs font-semibold text-background"
                        >
                          <span className="flex items-center gap-2">
                            <Download className="h-3.5 w-3.5" />
                            Resume
                          </span>

                          <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-60">
                            PDF
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scroll progress */}
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-6 right-6 h-px bg-border/50"
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