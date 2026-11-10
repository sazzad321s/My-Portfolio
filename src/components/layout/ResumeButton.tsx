import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function ResumeButton({ className }: { className?: string }) {
  if (siteConfig.resume.available) {
    return (
      <Button href={siteConfig.resume.url} download size="sm" className={className}>
        <Download className="size-4" aria-hidden /> Resume
      </Button>
    );
  }
  return (
    <span
      aria-disabled="true"
      title="Resume coming soon"
      className={`inline-flex h-9 cursor-not-allowed whitespace-nowrap items-center gap-2 rounded-xl border border-dashed border-line px-3.5 text-sm font-semibold text-muted ${className ?? ""}`}
    >
      <Download className="size-4" aria-hidden /> Resume
      <span className="text-xs font-normal">coming soon</span>
    </span>
  );
}
