import { useMemo, useState } from "react";
import { ArrowRight, Crown, Gift, Percent, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { rankedCasinos } from "@/data/casinos";
import { leaderboard, podium } from "@/data/home-content";
import { parseBonus } from "@/lib/bonus";
import { SectionHeading } from "./SectionHeading";

const aud = (n: number) => `$${n.toLocaleString("en-AU")}`;
const ranked = rankedCasinos.map((c, i) => ({ ...c, rank: i + 1, parts: parseBonus(c.bonus) }));
type Ranked = (typeof ranked)[number];

function BonusChips({ c, dark }: { c: Ranked; dark?: boolean }) {
  const chips = [
    c.parts.matchPct != null && { icon: Percent, label: `${c.parts.matchPct}% match` },
    c.parts.maxAmount != null && { icon: Gift, label: `Up to ${aud(c.parts.maxAmount)}` },
    c.parts.freeSpins != null && { icon: Sparkles, label: `${c.parts.freeSpins} free spins` },
  ].filter(Boolean) as { icon: typeof Gift; label: string }[];
  return (
    <ul className="flex flex-wrap gap-1.5">
      {chips.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
            dark ? "bg-navy-foreground/10 text-navy-foreground" : "bg-secondary text-secondary-foreground",
          )}
        >
          <Icon className="size-3" /> {label}
        </li>
      ))}
    </ul>
  );
}

export function Podium() {
  const [first, second, third] = ranked as [Ranked, Ranked, Ranked, ...Ranked[]];
  const order = [second, first, third];
  return (
    <section id="podium" className="relative overflow-hidden bg-navy-gradient py-20 lg:py-28">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0" />
      <div className="container-site relative">
        <SectionHeading eyebrow={podium.eyebrow} title={podium.title} tone="dark" align="center">
          <p>{podium.text}</p>
        </SectionHeading>
        <div className="mt-14 grid items-end gap-6 md:grid-cols-3">
          {order.map((c) => {
            const top = c.rank === 1;
            return (
              <article
                key={c.name}
                className={cn(
                  "relative flex flex-col items-center rounded-3xl border p-7 text-center",
                  top
                    ? "order-first border-gold bg-navy-deep shadow-gold md:order-none md:pb-10 md:pt-12"
                    : "border-navy-foreground/15 bg-navy-foreground/5",
                )}
              >
                <span
                  className={cn(
                    "absolute -top-5 flex size-10 items-center justify-center rounded-full font-display text-lg font-extrabold",
                    top ? "bg-gold-gradient text-gold-foreground" : "bg-navy-foreground text-navy-deep",
                  )}
                >
                  {top ? <Crown className="size-5" /> : c.rank}
                </span>
                <img src={c.logo} alt={c.name} width={135} height={135} loading="lazy" className={cn("rounded-2xl object-contain", top ? "size-28" : "size-20")} />
                <h3 className="mt-5 text-xl font-bold text-navy-foreground">{c.name}</h3>
                <p className={cn("mt-2 font-display font-extrabold leading-snug", top ? "text-gold-gradient text-2xl" : "text-lg text-gold")}>{c.bonus}</p>
                <div className="mt-4 flex justify-center">
                  <BonusChips c={c} dark />
                </div>
                <div className="mt-6 flex w-full flex-col gap-2">
                  <Button asChild variant="gold" size="xl" className="w-full">
                    <a href={c.play} target="_blank" rel="nofollow sponsored noopener">Claim bonus</a>
                  </Button>
                  <a href={c.review} className="text-sm font-semibold text-navy-muted underline-offset-4 hover:text-navy-foreground hover:underline">
                    Read {c.name} review
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type SortKey = keyof typeof leaderboard.sortLabels;
const sorters: Record<SortKey, (a: Ranked, b: Ranked) => number> = {
  rank: (a, b) => a.rank - b.rank,
  bonus: (a, b) => (b.parts.maxAmount ?? 0) - (a.parts.maxAmount ?? 0) || a.rank - b.rank,
  spins: (a, b) => (b.parts.freeSpins ?? 0) - (a.parts.freeSpins ?? 0) || a.rank - b.rank,
  match: (a, b) => (b.parts.matchPct ?? 0) - (a.parts.matchPct ?? 0) || a.rank - b.rank,
};

export function Leaderboard() {
  const [sort, setSort] = useState<SortKey>("rank");
  const [showAll, setShowAll] = useState(false);
  const list = useMemo(() => [...ranked].sort(sorters[sort]), [sort]);
  const visible = showAll ? list : list.slice(0, 10);

  return (
    <section id="leaderboard" className="scroll-mt-6 bg-background py-20 lg:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={leaderboard.eyebrow} title={leaderboard.title}>
            <p>{leaderboard.text}</p>
          </SectionHeading>
          <div role="tablist" aria-label="Sort casinos" className="flex shrink-0 flex-wrap gap-1 rounded-full border border-border bg-card p-1 shadow-card">
            {(Object.keys(leaderboard.sortLabels) as SortKey[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={sort === k}
                onClick={() => setSort(k)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  sort === k ? "bg-navy text-navy-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {leaderboard.sortLabels[k]}
              </button>
            ))}
          </div>
        </div>

        <ol className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {visible.map((c) => (
            <li
              key={c.name}
              className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 border-b border-border p-4 last:border-b-0 sm:p-5 md:grid-cols-[3rem_4.5rem_1fr_auto]"
            >
              <span className="hidden font-display text-2xl font-extrabold text-muted-foreground/60 md:block">
                {String(c.rank).padStart(2, "0")}
              </span>
              <div className="relative">
                <img src={c.logo} alt={c.name} width={135} height={135} loading="lazy" className="size-16 rounded-xl object-contain md:size-[4.5rem]" />
                <span className="absolute -left-2 -top-2 flex size-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-navy-foreground md:hidden">
                  {c.rank}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                <p className="mt-0.5 text-sm font-semibold text-primary">{c.bonus}</p>
                <div className="mt-2 hidden sm:block">
                  <BonusChips c={c} />
                </div>
              </div>
              <div className="col-span-2 flex gap-2 md:col-span-1">
                <Button asChild variant="outline" className="h-11 flex-1 rounded-full md:flex-none">
                  <a href={c.review}>Review</a>
                </Button>
                <Button asChild variant="gold" className="h-11 flex-1 rounded-full px-6 md:flex-none">
                  <a href={c.play} target="_blank" rel="nofollow sponsored noopener">Play now</a>
                </Button>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-center">
          <Button variant="soft" size="xl" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Show top 10 only" : `Show all ${ranked.length} casinos`} <ArrowRight className={cn("transition-transform", showAll ? "-rotate-90" : "rotate-90")} />
          </Button>
        </div>
      </div>
    </section>
  );
}
