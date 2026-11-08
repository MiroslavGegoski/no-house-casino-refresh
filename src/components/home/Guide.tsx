import { ArrowRight, BadgeCheck, CheckCircle2, Scale, ShieldCheck, Smartphone, Star, Wallet } from "lucide-react";
import {
  chooseCriteria,
  chooseIntro,
  games,
  howItWorks,
  legal,
  legalStats,
  legalVerdict,
  marketStats,
  rateIntro,
  rateOutro,
  rateSteps,
} from "@/data/home-content";
import { SectionHeading } from "./SectionHeading";

const criteriaIcons = { star: Star, badge: BadgeCheck, shield: ShieldCheck, phone: Smartphone, wallet: Wallet };

export function HowItWorks() {
  return (
    <section className="border-y bg-muted py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_340px]">
        <div>
          <SectionHeading eyebrow="The Aussie market" title="How Australian Online Casinos Work?" />
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground md:columns-2 md:gap-10 md:space-y-0 [&>p]:mb-5 [&>p]:break-inside-avoid">
            {howItWorks.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-3xl bg-navy-gradient p-7 text-navy-foreground shadow-lift">
            <p className="eyebrow text-gold">By the numbers</p>
            <dl className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-1">
              {marketStats.map((s) => (
                <div key={s.label} className="border-l-2 border-gold/60 pl-4">
                  <dt className="font-display text-3xl font-extrabold text-gold-gradient">{s.value}</dt>
                  <dd className="mt-1 text-sm text-navy-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function HowToChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Checklist" title="How to Choose the Best Australian Online Casinos for Real Money">
          <p>{chooseIntro}</p>
        </SectionHeading>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {chooseCriteria.map((c, i) => {
            const Icon = criteriaIcons[c.icon];
            return (
              <article
                key={c.title}
                className="group relative flex flex-col rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-sm font-bold text-muted-foreground/60">0{i + 1}</span>
                </div>
                <h2 className="mt-6 font-display text-base font-extrabold tracking-wider text-foreground">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Legal() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-navy-foreground md:py-28">
      <div className="absolute inset-0 bg-dots" aria-hidden />
      <div className="container-site relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <Scale className="size-7" />
            </span>
            <SectionHeading tone="dark" eyebrow="The law, explained" title="Are online casinos legal in Australia?" className="mt-6">
              <p>{legal[0]}</p>
            </SectionHeading>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-foreground/10 bg-navy-foreground/10">
              {legalStats.map((s) => (
                <div key={s.label} className="bg-navy-deep p-5">
                  <dt className="font-display text-3xl font-extrabold text-gold-gradient sm:text-4xl">{s.value}</dt>
                  <dd className="mt-1 text-sm text-navy-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-5 leading-relaxed text-navy-muted lg:pt-24">
            {legal.slice(1).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="flex gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-navy-foreground">
              <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-gold" />
              <p className="font-medium">{legalVerdict}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Games() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Game lobby"
          title="Most Popular Online Casino Games in Australia – Play Free, No Download Required"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {games.map((g) => (
            <article
              key={g.title}
              className="group grid overflow-hidden rounded-3xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[200px_1fr]"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-navy-art sm:aspect-auto">
                <img
                  src={g.img}
                  alt={`Australian Online Casino ${g.title}`}
                  loading="lazy"
                  className="aspect-square h-full w-auto object-cover transition-transform duration-500 group-hover:scale-105 sm:h-auto sm:w-full"
                />
              </div>
              <div className="flex flex-col p-6">
                <h3 className="text-2xl font-extrabold text-foreground">{g.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                <a
                  href={g.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Discover More About {g.title} <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeRate() {
  return (
    <section id="how-we-rate" className="scroll-mt-6 bg-muted py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <SectionHeading eyebrow="Our method" title="How We Rate Online Casinos">
            <p>{rateIntro}</p>
          </SectionHeading>
          <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground">
            <ShieldCheck className="size-5 text-gold" /> {rateOutro}
          </p>
        </div>
        <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-6 before:top-6 before:w-px before:bg-border">
          {rateSteps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-5">
              <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-gold-gradient font-display text-lg font-extrabold text-gold-foreground shadow-gold">
                {i + 1}
              </span>
              <div className="rounded-2xl border bg-card p-6 shadow-card">
                <h3 className="text-xl font-extrabold text-foreground">{s.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text.map((t) => (
                    <p key={t.slice(0, 20)}>{t}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
