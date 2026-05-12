import { announcement } from "@/content/en/home";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-brand text-sm text-white">
      <div className="container-shell flex flex-wrap items-center justify-center gap-2 py-2.5">
        <span className="font-medium tracking-[-0.01em]">{announcement.message}</span>
        <a
          href={siteConfig.external.fundingArticle}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "underline underline-offset-4 transition-[opacity,transform] duration-200",
            "hover:opacity-80 active:scale-[0.98]",
          )}
        >
          {announcement.linkLabel}
        </a>
      </div>
    </div>
  );
}
