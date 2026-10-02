"use client";

import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type ConsoleLine = {
  command: string;
  output: string;
};

type SystemStep = {
  label: string;
  detail: string;
};

type ProjectConsoleProps = {
  terminalPath: string;
  lines: ConsoleLine[];
  systemSteps: SystemStep[];
  liveUrl: string;
};

type Tab = "overview" | "system";

type WindowMode =
  | "open"
  | "minimized"
  | "closed"
  | "expanded";

type TypedLine = {
  command: string;
  output: string;
};

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "system", label: "System" },
];

export function ProjectConsole({
  terminalPath,
  lines,
  systemSteps,
  liveUrl,
}: ProjectConsoleProps) {
  const consoleRef = useRef<HTMLDivElement>(null);
  const typingStartedRef = useRef(false);

  const isInView = useInView(consoleRef, {
    once: true,
    margin: "-120px",
  });

  const shouldReduceMotion = useReducedMotion();

  const [activeTab, setActiveTab] =
    useState<Tab>("overview");

  const [windowMode, setWindowMode] =
    useState<WindowMode>("open");

  const [typedLines, setTypedLines] = useState<TypedLine[]>(
    () =>
      lines.map(() => ({
        command: "",
        output: "",
      })),
  );

  const [typingComplete, setTypingComplete] =
    useState(false);

  const isExpanded = windowMode === "expanded";
  const isMinimized = windowMode === "minimized";
  const isClosed = windowMode === "closed";

  const showMainContent = !isMinimized && !isClosed;

  useEffect(() => {
    if (
      !isInView ||
      shouldReduceMotion ||
      typingStartedRef.current
    ) {
      return;
    }

    typingStartedRef.current = true;

    let cancelled = false;

    const nextLines: TypedLine[] = lines.map(() => ({
      command: "",
      output: "",
    }));

    const wait = (milliseconds: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, milliseconds);
      });

    const updateLines = () => {
      setTypedLines(
        nextLines.map((line) => ({
          ...line,
        })),
      );
    };

    const runTypingSequence = async () => {
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        const line = lines[lineIndex];

        for (
          let characterIndex = 1;
          characterIndex <= line.command.length;
          characterIndex += 1
        ) {
          if (cancelled) {
            return;
          }

          nextLines[lineIndex].command =
            line.command.slice(0, characterIndex);

          updateLines();

          await wait(28);
        }

        await wait(90);

        for (
          let characterIndex = 1;
          characterIndex <= line.output.length;
          characterIndex += 1
        ) {
          if (cancelled) {
            return;
          }

          nextLines[lineIndex].output =
            line.output.slice(0, characterIndex);

          updateLines();

          await wait(7);
        }

        await wait(150);
      }

      if (!cancelled) {
        setTypingComplete(true);
      }
    };

    void runTypingSequence();

    return () => {
      cancelled = true;
    };
  }, [isInView, lines, shouldReduceMotion]);

  const displayedLines = shouldReduceMotion
    ? lines
    : typedLines;

  const showFinalPrompt =
    shouldReduceMotion || typingComplete;

  const handleClose = () => {
    setWindowMode((current) =>
      current === "closed" ? "open" : "closed",
    );
  };

  const handleMinimize = () => {
    setWindowMode((current) =>
      current === "minimized" ? "open" : "minimized",
    );
  };

  const handleExpand = () => {
    setWindowMode((current) =>
      current === "expanded" ? "open" : "expanded",
    );
  };

  return (
    <motion.div
      ref={consoleRef}
      layout
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              scale: 0.975,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`overflow-hidden rounded-3xl border bg-card/90 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/30 ${
        isExpanded
          ? "ring-1 ring-brand/30"
          : ""
      }`}
    >
      <div className="flex items-center justify-between border-b bg-background/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleClose}
            aria-label={
              isClosed ? "Reopen window" : "Close window"
            }
            className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-400/90 transition hover:scale-110"
          >
            <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 transition group-hover:opacity-100">
              ×
            </span>
          </button>

          <button
            type="button"
            onClick={handleMinimize}
            aria-label={
              isMinimized
                ? "Restore window"
                : "Minimize window"
            }
            className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-400/90 transition hover:scale-110"
          >
            <span className="text-[8px] font-bold leading-none text-black/60 opacity-0 transition group-hover:opacity-100">
              −
            </span>
          </button>

          <button
            type="button"
            onClick={handleExpand}
            aria-label={
              isExpanded ? "Restore size" : "Expand window"
            }
            className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400/90 transition hover:scale-110"
          >
            <span className="text-[7px] font-bold leading-none text-black/60 opacity-0 transition group-hover:opacity-100">
              +
            </span>
          </button>
        </div>

        <p className="font-mono text-[11px] text-muted-foreground">
          melvin@portfolio ~/{terminalPath}
        </p>

        <span className="w-12" />
      </div>

      <div className="flex items-center gap-1 border-b bg-background/45 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);

              if (
                windowMode === "closed" ||
                windowMode === "minimized"
              ) {
                setWindowMode("open");
              }
            }}
            className="relative rounded-lg px-3 py-2 text-xs font-medium"
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId={`console-tab-${terminalPath}`}
                className="absolute inset-0 rounded-lg bg-brand/10"
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            )}

            <span
              className={`relative z-10 transition ${
                activeTab === tab.id
                  ? "text-brand"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </span>
          </button>
        ))}

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group ml-auto rounded-lg px-3 py-2 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          Open live
          <span className="ml-1 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>

      <motion.div
        layout
        transition={{
          duration: shouldReduceMotion ? 0 : 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={
          isExpanded
            ? "min-h-[640px]"
            : isMinimized
              ? "min-h-[72px]"
              : isClosed
                ? "min-h-[112px]"
                : "min-h-[500px]"
        }
      >
        {isClosed && (
          <div className="flex min-h-[112px] items-center justify-between gap-4 px-5 sm:px-7">
            <p className="text-sm text-muted-foreground">
              Window closed.
            </p>

            <button
              type="button"
              onClick={() => setWindowMode("open")}
              className="rounded-lg border bg-background/60 px-3 py-2 text-xs font-medium transition hover:bg-secondary"
            >
              Reopen
            </button>
          </div>
        )}

        {isMinimized && (
          <div className="flex min-h-[72px] items-center justify-between gap-4 px-5 sm:px-7">
            <p className="text-sm text-muted-foreground">
              Window minimized.
            </p>

            <button
              type="button"
              onClick={() => setWindowMode("open")}
              className="rounded-lg border bg-background/60 px-3 py-2 text-xs font-medium transition hover:bg-secondary"
            >
              Restore
            </button>
          </div>
        )}

        {showMainContent && (
          <div
            className={
              activeTab === "overview"
                ? "block"
                : "hidden"
            }
          >
            <div className="p-5 sm:p-7">
              <div className="space-y-6 font-mono">
                {displayedLines.map((line, index) => {
                  if (!line.command && !line.output) {
                    return null;
                  }

                  return (
                    <div
                      key={`${terminalPath}-${lines[index].command}`}
                    >
                      {line.command && (
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-brand">$</span>

                          <span className="text-foreground">
                            {line.command}
                          </span>

                          {!shouldReduceMotion &&
                            !typingComplete &&
                            index ===
                              displayedLines.findLastIndex(
                                (item) =>
                                  item.command.length > 0,
                              ) &&
                            !line.output && (
                              <span className="h-4 w-1.5 animate-pulse rounded-sm bg-brand" />
                            )}
                        </div>
                      )}

                      {line.output && (
                        <p className="mt-2 pl-5 text-sm leading-7 text-muted-foreground">
                          {line.output}
                        </p>
                      )}
                    </div>
                  );
                })}

                {showFinalPrompt && (
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0 }
                    }
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-brand">$</span>

                    <span className="h-4 w-2 animate-pulse rounded-sm bg-brand" />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        )}

        {showMainContent &&
          activeTab === "system" && (
            <div className="flex min-h-[500px] items-center p-5 sm:p-7">
              <div className="w-full">
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 6,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  System flow
                </motion.p>

                <div className="mt-6 hidden items-stretch lg:flex">
                  {systemSteps.map((step, index) => (
                    <div
                      key={`${terminalPath}-${step.label}`}
                      className="flex min-w-0 flex-1 items-center"
                    >
                      <motion.div
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 14,
                                scale: 0.97,
                              }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: shouldReduceMotion
                            ? 0
                            : 0.32,
                          delay: shouldReduceMotion
                            ? 0
                            : index * 0.13,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full min-w-0 flex-1 rounded-2xl border bg-background/60 p-4"
                      >
                        <span className="text-xs font-semibold text-brand">
                          0{index + 1}
                        </span>

                        <p className="mt-3 font-semibold">
                          {step.label}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {step.detail}
                        </p>
                      </motion.div>

                      {index <
                        systemSteps.length - 1 && (
                        <div className="flex w-10 shrink-0 items-center justify-center">
                          <motion.div
                            initial={
                              shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scaleX: 0,
                                  }
                            }
                            animate={{
                              opacity: 1,
                              scaleX: 1,
                            }}
                            transition={{
                              duration:
                                shouldReduceMotion
                                  ? 0
                                  : 0.3,
                              delay:
                                shouldReduceMotion
                                  ? 0
                                  : index * 0.13 + 0.18,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative flex w-7 origin-left items-center"
                          >
                            <span className="h-px w-full bg-brand" />

                            <span className="-ml-1 text-sm text-brand">
                              →
                            </span>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 lg:hidden">
                  {systemSteps.map((step, index) => (
                    <motion.div
                      key={`${terminalPath}-mobile-${step.label}`}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 10,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration:
                          shouldReduceMotion
                            ? 0
                            : 0.3,
                        delay:
                          shouldReduceMotion
                            ? 0
                            : index * 0.08,
                      }}
                      className="rounded-2xl border bg-background/60 p-4"
                    >
                      <span className="text-xs font-semibold text-brand">
                        0{index + 1}
                      </span>

                      <p className="mt-3 font-semibold">
                        {step.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {step.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
      </motion.div>
    </motion.div>
  );
}