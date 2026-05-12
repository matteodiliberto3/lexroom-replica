import { announcement } from "@/content/en/home";
import { siteConfig } from "@/lib/site-config";

export function AnnouncementBar() {
  return (
    <div className="bg-brand text-sm text-white">
      <div className="container-shell flex flex-wrap items-center justify-center gap-2 py-2.5">
        <span className="font-medium">{announcement.message}</span>
        <a
          href={siteConfig.external.fundingArticle}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          {announcement.linkLabel}
        </a>
      </div>
    </div>
  );
}
