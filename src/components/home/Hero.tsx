import { ArrowDown, BadgeCheck, Gauge, ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage, intro } from "@/data/home-content";

const trust = [
  { icon: ShieldCheck, label: "Licensed offshore" },
  { icon: Gauge, label: "Payouts tested" },
  { icon: Trophy, label: "30 casinos ranked" },
  { icon: BadgeCheck, label: "Updated for 2026" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />
      <img
        src={heroImage}
        alt=""
        aria-hidden
        className="mask-fade-left pointer-events-none absolute bottom-0 right-[-60px] h-[78%] w-auto max-w-none opacity-40 sm:right-0 sm:opacity-70 md:h-[92%] lg:right-[max(0px,calc((100vw-1140px)/2-40px))] lg:opacity-100"
      />
      <div className="absolute inset-0 bg-hero" aria-hidden />

      <div className="container-site relative pb-28 pt-14 md:pb-36 md:pt-24">
        <p className="eyebrow animate-rise inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-gold">
          <span className="size-1.5 rounded-full bg-gold" /> Australia · 2026 Edition
        </p>
        <h1 className="animate-rise mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl [animation-delay:80ms]">
          Best Aussie Casinos for 2026 - <span className="text-gold-gradient">Compare the Best Australian Online Casinos</span>
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-base text-navy-muted sm:text-lg [animation-delay:160ms]">{intro[0]}</p>
        <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
          <Button asChild variant="gold" size="xl">
            <a href="#top-casinos">
              See the top casinos <ArrowDown />
            </a>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <a href="#how-we-rate">How we rate</a>
          </Button>
        </div>
        <ul className="animate-rise mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium sm:flex sm:flex-wrap [animation-delay:320ms]">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-4 text-gold" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function EditorNote() {
  return (
    <div className="container-site relative -mt-16 md:-mt-20">
      <div className="grid gap-6 rounded-3xl border bg-card p-6 shadow-lift sm:p-10 md:grid-cols-2 md:gap-10">
        <p className="text-lg leading-relaxed text-foreground first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.85] first-letter:text-primary">
          {intro[1]}
        </p>
        <div className="flex flex-col justify-between gap-6">
          <p className="leading-relaxed text-muted-foreground">{intro[2]}</p>
          <div className="flex items-center gap-3 border-t pt-5 text-sm">
            <span className="flex size-10 items-center justify-center rounded-full bg-gold-gradient font-display font-extrabold text-gold-foreground">
              N
            </span>
            <span>
              <span className="block font-semibold text-foreground">NoHouseCasinos Editorial</span>
              <span className="text-muted-foreground">Independent reviews for Aussie players</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
