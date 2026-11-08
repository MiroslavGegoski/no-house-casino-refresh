import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as: Tag = "h2",
  tone = "light",
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  as?: "h2" | "h3";
  tone?: "light" | "dark";
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow", tone === "dark" ? "text-gold" : "text-primary")}>{eyebrow}</p>
      )}
      <Tag
        className={cn(
          "mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {children && (
        <div className={cn("mt-5 space-y-4 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-navy-muted" : "text-muted-foreground")}>
          {children}
        </div>
      )}
    </div>
  );
}
