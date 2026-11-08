import { useState } from "react";
import { ChevronDown, Crown, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { rankedCasinos } from "@/data/casinos";
import { topIntro } from "@/data/home-content";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const PAGE = 10;

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-gold text-gold" />
      ))}
    </span>
  );
}

export function TopCasinos() {
  const [visible, setVisible] = useState(PAGE);
  const shown = rankedCasinos.slice(0, visible);

  return (
    <section id="top-casinos" className="scroll-mt-6 py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="The 2026 rankings" title="Top Online Casinos in Australia for 2026" />
          <div className="space-y-4 text-muted-foreground">
            {topIntro.map((p) => (
              <p key={p.slice(0, 20)} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        <ol className="mt-12 space-y-4">
          {shown.map((c, i) => {
            const top = i < 3;
            return (
              <li
                key={c.name}
                className={cn(
                  "group relative grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 rounded-2xl border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift sm:p-5 md:grid-cols-[3rem_88px_1fr_1.3fr_auto] md:gap-x-6",
                  top && "border-gold/60 ring-1 ring-gold/30",
                )}
              >
                {top && (
                  <span className="eyebrow absolute -top-3 right-4 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-3 py-1 text-[0.65rem] text-gold-foreground shadow-gold">
                    <Crown className="size-3" /> Top pick
                  </span>
                )}
                <span
                  className={cn(
                    "hidden font-display text-3xl font-extrabold md:block",
                    top ? "text-gold-gradient" : "text-muted-foreground/50",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <a href={c.review} className="relative block shrink-0">
                  <img
                    src={c.logo}
                    alt={`${c.name} Review`}
                    width={88}
                    height={88}
                    loading="lazy"
                    className="size-[72px] rounded-xl object-cover md:size-[88px]"
                  />
                  <span className="absolute -left-2 -top-2 flex size-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-navy-foreground md:hidden">
                    {i + 1}
                  </span>
                </a>

                <div className="min-w-0">
                  <a href={c.review} className="font-display text-lg font-bold text-foreground hover:text-primary">
                    {c.name} Review
                  </a>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Stars />
                  </div>
                </div>

                <div className="col-span-2 rounded-xl bg-secondary px-4 py-3 md:col-span-1">
                  <p className="eyebrow text-[0.65rem] text-primary">Welcome bonus</p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug text-foreground sm:text-xl">{c.bonus}</p>
                </div>

                <div className="col-span-2 flex items-center gap-2 md:col-span-1 md:flex-col md:items-stretch">
                  <Button asChild variant="gold" size="lg" className="flex-1 rounded-full md:flex-none">
                    <a href={c.play} rel="nofollow sponsored noopener" target="_blank">
                      Play Now <ExternalLink />
                    </a>
                  </Button>
                  <Button asChild variant="link" size="sm" className="flex-1 text-muted-foreground md:flex-none">
                    <a href={c.review}>Read Review</a>
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>

        {visible < rankedCasinos.length && (
          <div className="mt-10 flex justify-center">
            <Button variant="soft" size="xl" onClick={() => setVisible((v) => v + PAGE)}>
              Load More <ChevronDown />
            </Button>
          </div>
        )}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Showing {shown.length} of {rankedCasinos.length} casinos · 18+ · T&Cs apply · Gamble responsibly
        </p>
      </div>
    </section>
  );
}
