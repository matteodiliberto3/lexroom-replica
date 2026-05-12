"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const panelTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

const contentVariants = {
  collapsed: {
    opacity: 0,
    y: 8,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const lineVariants = {
  collapsed: {
    opacity: 0,
    y: 8,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: panelTransition,
  },
};

export function Accordion({ items }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}`;

        return (
          <div key={item.id} className="card-surface overflow-hidden">
            <h3>
              <button
                type="button"
                id={`${panelId}-trigger`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-semibold tracking-[-0.02em]"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <motion.span
                  aria-hidden="true"
                  className="text-brand text-2xl leading-none"
                  animate={{ rotate: isOpen ? 0 : 0, scale: isOpen ? 1 : 1 }}
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={`${panelId}-trigger`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={panelTransition}
                  className="overflow-hidden border-t border-border"
                >
                  <motion.div
                    className="px-5 py-4 text-text-muted"
                    variants={contentVariants}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                  >
                    {item.answer.split("\n").map((line, index) => (
                      <motion.p
                        key={`${item.id}-${index}`}
                        variants={lineVariants}
                        className={cn(index > 0 && "mt-3")}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
