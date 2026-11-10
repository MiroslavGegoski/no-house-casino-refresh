import { ArrowRight, ArrowUpRight, Check, LifeBuoy, Scale, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqSection, faqs, finalCta, games, gamesSection, legalCard, payments, payouts, playSafe, providers, testLab } from "@/data/home-content";
import { SectionHeading } from "./SectionHeading";

export function GameFinder() {
  return (
    <section id="games" className="bg-background py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading eyebrow={gamesSection.eyebrow} title={gamesSection.title}>
          <p>{gamesSection.text}</p>
        </SectionHeading>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 lg:auto-rows-[250px] lg:grid-cols-4">
          {games.map((g, i) => (
            <a
              key={g.title}
              href={g.href}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-navy-art shadow-card",
                i === 0 && "col-span-2 row-span-2",
                i === 1 && "lg:col-span-2",
              )}
            >
              <img src={g.img} alt={g.title} width={768} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div aria-hidden className="bg-fade absolute inset-0" />
              <span className="absolute left-4 top-4 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">{g.tag}</span>
              <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-navy-foreground text-navy-deep opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className={cn("font-bold text-navy-foreground", i === 0 ? "text-3xl lg:text-4xl" : "text-xl")}>{g.title}</h3>
                <p className={cn("mt-1 text-sm text-navy-foreground/80", i === 0 ? "max-w-sm sm:text-base" : "hidden sm:block")}>{g.text}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestLab() {
  return (
    <section id="test-lab" className="bg-navy-deep py-20 lg:py-28">
      <div className="container-site grid items-start gap-12 lg:grid-cols-2">
        <div className="lg:sticky lg:top-8">
          <SectionHeading eyebrow={testLab.eyebrow} title={testLab.title} tone="dark">
            <p>{testLab.text}</p>
          </SectionHeading>
          <img src={testLab.image} alt={testLab.imageAlt} width={1200} height={912} loading="lazy" className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover" />
        </div>
        <div>
          <ol className="space-y-4">
            {testLab.checks.map((c, i) => (
              <li key={c.title} className="flex gap-5 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6">
                <span className="font-display text-4xl font-extrabold leading-none text-gold-gradient">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-navy-foreground">{c.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-navy-muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button asChild variant="onDark" size="xl" className="mt-8">
            <a href={testLab.link.href}>
              {testLab.link.label} <ArrowRight />
            </a>
          </Button>
          <div className="mt-12 border-t border-navy-foreground/10 pt-8">
            <p className="eyebrow text-navy-muted">Studios we see in the best lobbies</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {providers.map((p) => (
                <a key={p.name} href={p.href} className="flex h-16 items-center justify-center rounded-xl bg-card p-3 transition-transform hover:-translate-y-0.5">
                  <img src={p.img} alt={p.name} loading="lazy" className="max-h-full w-auto object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Payouts() {
  return (
    <section id="payouts" className="bg-background py-20 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative order-last lg:order-first">
          <img src={payouts.image} alt={payouts.imageAlt} width={768} height={960} loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] object-cover shadow-lift" />
          <div className="absolute -right-2 bottom-8 hidden items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lift sm:flex lg:-right-8">
            <ShieldCheck className="size-8 text-success" />
            <div>
              <p className="text-sm font-bold text-foreground">Encrypted payments</p>
              <p className="text-xs text-muted-foreground">Checked at every casino we list</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow={payouts.eyebrow} title={payouts.title}>
            <p>{payouts.text}</p>
          </SectionHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {payments.map((p) => (
              <a key={p.name} href={p.href} className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary">
                <div className="flex items-center justify-between gap-3">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-10 w-auto max-w-[120px] object-contain" />
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{p.bestFor}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </a>
            ))}
          </div>
          <a href={payouts.link.href} className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            {payouts.link.label} <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function LegalAndSafety() {
  return (
    <section id="play-safe" className="bg-muted py-20 lg:py-28">
      <div className="container-site grid gap-6 lg:grid-cols-2">
        <article className="relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-3xl bg-navy-deep p-8 sm:p-10">
          <img src={legalCard.image} alt="" width={896} height={896} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div aria-hidden className="bg-fade absolute inset-0" />
          <div className="relative">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gold-gradient text-gold-foreground">
              <Scale className="size-6" />
            </span>
            <p className="eyebrow mt-6 text-gold">{legalCard.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy-foreground sm:text-4xl">{legalCard.title}</h2>
            <p className="mt-4 leading-relaxed text-navy-foreground/85">{legalCard.text}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">{playSafe.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">{playSafe.title}</h2>
            </div>
            <img src={playSafe.image} alt={playSafe.imageAlt} width={1024} height={1024} loading="lazy" className="size-24 shrink-0 rounded-2xl object-cover sm:size-32" />
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{playSafe.text}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {playSafe.tips.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success text-primary-foreground">
                  <Check className="size-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 rounded-2xl bg-secondary p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-secondary-foreground">
              <LifeBuoy className="size-4" /> Free, confidential help — 24/7
            </p>
            {playSafe.help.map((h) => (
              <a key={h.href} href={h.href} target="_blank" rel="noopener" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                {h.label} <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
          <a href={playSafe.link.href} className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            {playSafe.link.label} <ArrowRight className="size-4" />
          </a>
        </article>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <SectionHeading eyebrow={faqSection.eyebrow} title={faqSection.title}>
            <p>{faqSection.text}</p>
          </SectionHeading>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6 shadow-card">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-16 text-center sm:px-12 lg:py-24">
          <img src={finalCta.image} alt="" width={1280} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div aria-hidden className="bg-fade absolute inset-0" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-navy-foreground sm:text-5xl">{finalCta.title}</h2>
            <p className="mt-5 text-lg text-navy-foreground/85">{finalCta.text}</p>
            <Button asChild variant="gold" size="xl" className="mt-8">
              <a href={finalCta.button.href}>
                {finalCta.button.label} <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
