import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, heroStats } from "@/data/home-content";
import { rankedCasinos } from "@/data/casinos";

export function HomeHero() {
  const pick = rankedCasinos[0]!;
  const [before] = hero.title.split(hero.highlight);
  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
      <div className="container-site relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground shadow-card">
            <span className="size-2 rounded-full bg-success" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] text-foreground sm:text-6xl lg:text-[4.2rem]">
            {before}
            <span className="relative whitespace-normal text-primary">
              {hero.highlight}
              <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-gold/70" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <a href={hero.primary.href}>
                {hero.primary.label} <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="soft" size="xl">
              <a href={hero.secondary.href}>{hero.secondary.label}</a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {hero.quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] animate-rise [animation-delay:120ms]">
          <div className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-gold-gradient opacity-90" aria-hidden />
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1280}
            height={1280}
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:left-auto sm:right-[-1.5rem] sm:w-[340px]">
            <img src={pick.logo} alt={pick.name} width={135} height={135} className="size-16 shrink-0 rounded-xl bg-navy-deep object-contain" />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">
                <BadgeCheck className="size-3.5" /> Casino of the month
              </p>
              <p className="mt-0.5 truncate font-display text-lg font-bold text-foreground">{pick.name}</p>
              <p className="truncate text-sm text-muted-foreground">{pick.bonus}</p>
            </div>
            <Button asChild variant="brand" size="sm" className="rounded-full">
              <a href={pick.play} target="_blank" rel="nofollow sponsored noopener">Play</a>
            </Button>
          </div>
          <div className="absolute -top-4 right-6 flex items-center gap-1 rounded-full bg-navy-deep px-3 py-1.5 text-xs font-semibold text-navy-foreground shadow-lift">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-gold text-gold" />
            ))}
            <span className="ml-1">Editor’s choice</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoMarquee() {
  const logos = rankedCasinos.slice(0, 14);
  return (
    <div className="overflow-hidden border-y border-navy bg-navy-deep py-5">
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((c, i) => (
          <a key={i} href={c.review} aria-hidden={i >= logos.length} tabIndex={i >= logos.length ? -1 : undefined} className="shrink-0 opacity-80 transition-opacity hover:opacity-100">
            <img src={c.logo} alt={c.name} width={135} height={135} loading="lazy" className="h-12 w-12 rounded-lg object-contain" />
          </a>
        ))}
      </div>
    </div>
  );
}
