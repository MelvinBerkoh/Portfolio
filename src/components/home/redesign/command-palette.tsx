"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  Home,
  Mail,
  Route,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  type ComponentType,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { siteConfig } from "@/data/site";

type CommandItem = {
  label: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
};

const commands: CommandItem[] = [
  {
    label: "Go to Intro",
    description: "Back to the top",
    href: "#top",
    icon: Home,
  },
  {
    label: "Go to Projects",
    description: "See the projects I have built",
    href: "#projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "Go to Journey",
    description: "See how I got here",
    href: "#journey",
    icon: Route,
  },
  {
    label: "Go to Skills",
    description: "See the tools I use",
    href: "#skills",
    icon: Code2,
  },
  {
    label: "Go to About",
    description: "A little more about me",
    href: "#about",
    icon: UserRound,
  },
  {
    label: "Contact Me",
    description: "Get in touch",
    href: "#contact",
    icon: Mail,
  },
  {
    label: "View Resume",
    description: "Open my resume",
    href: siteConfig.resume,
    icon: FileText,
    external: true,
  },
  {
    label: "GitHub Profile",
    description: "View my repositories",
    href: siteConfig.github,
    icon: Code2,
    external: true,
  },
  {
    label: "LinkedIn Profile",
    description: "View my LinkedIn",
    href: siteConfig.linkedin,
    icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: "Email Me",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return commands;
    }

    return commands.filter((command) => {
      return (
        command.label.toLowerCase().includes(normalizedQuery) ||
        command.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [query]);

  const closePalette = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onOpenChange(false);
  }, [onOpenChange]);

  const runCommand = useCallback(
    (command: CommandItem) => {
      closePalette();

      if (command.external) {
        window.open(command.href, "_blank", "noopener,noreferrer");
        return;
      }

      window.location.href = command.href;
    },
    [closePalette],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    inputRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        if (open) {
          closePalette();
        } else {
          onOpenChange(true);
        }

        return;
      }

      if (!open) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closePalette();
        return;
      }

      if (event.key === "Tab") {
        const dialog = dialogRef.current;

        if (!dialog) {
          return;
        }

        const focusableElements =
          dialog.querySelectorAll<HTMLElement>(
            [
              "input:not([disabled])",
              "button:not([disabled])",
              "a[href]",
              '[tabindex]:not([tabindex="-1"])',
            ].join(","),
          );

        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];

        const lastElement =
          focusableElements[focusableElements.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === firstElement
        ) {
          event.preventDefault();
          lastElement.focus();
          return;
        }

        if (
          !event.shiftKey &&
          document.activeElement === lastElement
        ) {
          event.preventDefault();
          firstElement.focus();
        }

        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((current) => {
          if (filteredCommands.length === 0) {
            return 0;
          }

          return (current + 1) % filteredCommands.length;
        });

        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelectedIndex((current) => {
          if (filteredCommands.length === 0) {
            return 0;
          }

          return (
            (current - 1 + filteredCommands.length) %
            filteredCommands.length
          );
        });

        return;
      }

      if (event.key === "Enter") {
        const command = filteredCommands[selectedIndex];

        if (command) {
          event.preventDefault();
          runCommand(command);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    closePalette,
    filteredCommands,
    onOpenChange,
    open,
    runCommand,
    selectedIndex,
  ]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
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
            duration: 0.16,
          }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-background/70 px-4 pt-[14vh] backdrop-blur-md"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              closePalette();
            }
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{
              opacity: 0,
              y: -14,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card/95 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b px-4">
              <Search className="h-4 w-4 shrink-0 text-brand" />

              <input
                ref={inputRef}
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search the site..."
                aria-label="Search site commands"
                className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />

              <button
                type="button"
                onClick={closePalette}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                aria-label="Close command palette"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[430px] overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command, index) => {
                  const Icon = command.icon;
                  const selected = index === selectedIndex;

                  return (
                    <button
                      key={command.label}
                      type="button"
                      onMouseEnter={() => {
                        setSelectedIndex(index);
                      }}
                      onFocus={() => {
                        setSelectedIndex(index);
                      }}
                      onClick={() => {
                        runCommand(command);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                        selected
                          ? "bg-brand/10 text-foreground"
                          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                          selected
                            ? "border-brand/30 bg-brand/10 text-brand"
                            : "bg-background/70"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">
                          {command.label}
                        </p>

                        <p className="mt-0.5 truncate text-xs text-muted-foreground">
                          {command.description}
                        </p>
                      </div>

                      {command.external && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 opacity-50" />
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="px-3 py-10 text-center">
                  <p className="text-sm font-medium">
                    No results
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Try another search.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t px-4 py-3 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span>↑ ↓ navigate</span>
                <span>↵ open</span>
              </div>

              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}