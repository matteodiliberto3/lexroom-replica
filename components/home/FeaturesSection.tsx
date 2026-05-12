"use client";

import { motion } from "framer-motion";
import { Download, FileText, Layers, Search, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { features } from "@/content/en/home";
import { useSpotlight } from "@/hooks/useSpotlight";
import { cn } from "@/lib/cn";

type FeatureItem = (typeof features.items)[number];

const spanClasses = [
  "md:col-span-2 xl:col-span-2 xl:row-span-2",
  "md:col-span-2 xl:col-span-2",
  "xl:col-span-1",
  "xl:col-span-1",
  "md:col-span-2 xl:col-span-2",
];

function ModulesPreview() {
  const labels = ["Corporate", "Litigation", "IP", "Tax"];

  return (
    <div className="mt-6 grid grid-cols-2 gap-2">
      {labels.map((label, index) => (
        <motion.div
          key={label}
          className="rounded-xl border border-border/70 bg-white/70 px-3 py-2 text-xs font-medium text-foreground/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: index * 0.12, duration: 0.35 }}
        >
          <Layers className="mb-1 h-3.5 w-3.5 text-brand" aria-hidden="true" />
          {label}
        </motion.div>
      ))}
    </div>
  );
}

function LibrarySearchPreview() {
  const query = "precedent analysis for cross-border M&A";
  const [value, setValue] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId = 0;

    const type = () => {
      if (index <= query.length) {
        setValue(query.slice(0, index));
        index += 1;
        timeoutId = window.setTimeout(type, 55);
        return;
      }

      timeoutId = window.setTimeout(() => {
        index = 0;
        setValue("");
        type();
      }, 2200);
    };

    type();
    return () => window.clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="mt-6 rounded-xl border border-border/70 bg-white/80 p-3 shadow-sm">
      <motion.div
        className="flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground"
        animate={{ boxShadow: ["0 0 0 rgba(15,76,157,0)", "0 0 0 4px rgba(15,76,157,0.08)", "0 0 0 rgba(15,76,157,0)"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Search className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <span className="truncate">{value}</span>
        <motion.span
          aria-hidden="true"
          className="ml-auto h-4 w-px bg-brand"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

function ClausePreview() {
  const lines = [
    "The Seller shall indemnify...",
    "Subject to Section 4.2 limitations...",
    "Notice within fifteen (15) days...",
  ];

  return (
    <div className="mt-6 space-y-2 rounded-xl border border-border/70 bg-white/75 p-3">
      {lines.map((line, index) => (
        <motion.div
          key={line}
          className="flex items-start gap-2 text-xs text-text-muted"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.18, duration: 0.35 }}
        >
          <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          <span>{line}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SourcePreview() {
  const sources = ["Cass. Civ., Sec. I", "EU Regulation 2016/679", "Internal memo v3.2"];

  return (
    <div className="mt-6 space-y-2">
      {sources.map((source, index) => (
        <motion.div
          key={source}
          className="flex items-center justify-between rounded-lg border border-border/70 bg-white/75 px-3 py-2 text-xs"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.14, duration: 0.3 }}
        >
          <span className="truncate text-foreground/85">{source}</span>
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.2 }}
          >
            <Download className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

function SpeedPreview() {
  return (
    <div className="mt-6 rounded-xl border border-border/70 bg-white/75 p-3">
      <motion.div
        className="h-2 overflow-hidden rounded-full bg-brand-tint"
        initial={false}
      >
        <motion.div
          className="h-full rounded-full bg-brand"
          animate={{ width: ["18%", "92%", "42%", "100%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.p
        className="mt-3 flex items-center gap-2 text-xs font-medium text-brand"
        animate={{ opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <Zap className="h-3.5 w-3.5" aria-hidden="true" />
        Response generated in 2.4s
      </motion.p>
    </div>
  );
}

const previews = [
  ModulesPreview,
  LibrarySearchPreview,
  ClausePreview,
  SourcePreview,
  SpeedPreview,
];

function FeatureBentoCard({
  item,
  index,
  className,
}: {
  item: FeatureItem;
  index: number;
  className: string;
}) {
  const { ref, spotlight, onMouseMove, onMouseLeave } = useSpotlight<HTMLDivElement>();
  const Preview = previews[index] ?? ModulesPreview;

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "card-surface group relative overflow-hidden p-6",
        "transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(15,76,157,0.14)]",
        className,
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(420px circle at ${spotlight.x}px ${spotlight.y}px, color-mix(in srgb, var(--brand) 14%, transparent), transparent 58%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
        <p className="mt-4 text-text-muted">{item.description}</p>
        <Preview />
      </div>
    </motion.article>
  );
}

export function FeaturesSection() {
  return (
    <Section
      id="features"
      eyebrow={features.eyebrow}
      heading={features.heading}
      description={features.description}
    >
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
        {features.items.map((item, index) => (
          <FeatureBentoCard
            key={item.title}
            item={item}
            index={index}
            className={spanClasses[index] ?? ""}
          />
        ))}
      </div>
    </Section>
  );
}
