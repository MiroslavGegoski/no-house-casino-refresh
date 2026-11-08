import { ArrowRight, ExternalLink, Gift, Home, LayoutGrid, Smartphone, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  bonusIntro,
  bonuses,
  faqs,
  latestReviews,
  payments,
  paymentsImage,
  paymentsIntro,
  providers,
  providersIntro,
  whyImage,
  whyIntro,
  whyOutro,
  whyReasons,
} from "@/data/home-content";
import { SectionHeading } from "./SectionHeading";

const whyIcons = { home: Home, gift: Gift, grid: LayoutGrid, zap: Zap, phone: Smartphone };

export function Bonuses() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Extra value" title="Types of Online Casino Bonuses">
            <p>{bonusIntro}</p>
          </SectionHeading>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b) => (
            <article
              key={b.title}
              className="group flex flex-col rounded-3xl border bg-card p-3 shadow-card transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-2xl bg-gold-soft">
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <h3 className="text-xl font-extrabold text-foreground">{b.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                <a
                  href={b.href}
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors group-hover:bg-gold"
                >
                  {b.title} <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Providers() {
  return (
    <section className="border-y bg-muted py-20 md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Powered by" title="Online Casino Software Providers">
            <p>{providersIntro}</p>
          </SectionHeading>
          <Button asChild variant="brand" size="xl" className="mt-8">
            <a href="https://nohousecasinos.com/providers/">
              See More Software Providers <ArrowRight />
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {providers.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="group flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={p.img}
                alt={`${p.name} Casino Software Provider Logo`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyPlay() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gold-gradient opacity-90" aria-hidden />
          <img
            src={whyImage}
            alt="Australia Casino"
            loading="lazy"
            className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-lift"
          />
        </div>
        <div>
          <SectionHeading eyebrow="Why go Aussie" title="Why Play at Australian Casinos Online?">
            <p>{whyIntro}</p>
          </SectionHeading>
          <ul className="mt-8 divide-y rounded-2xl border bg-card shadow-card">
            {whyReasons.map((r) => {
              const Icon = whyIcons[r.icon];
              return (
                <li key={r.title} className="flex gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-foreground">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-5 font-medium text-foreground">{whyOutro}</p>
        </div>
      </div>
    </section>
  );
}

export function Payments() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground md:py-28">
      <div className="absolute inset-0 bg-dots opacity-70" aria-hidden />
      <div className="container-site relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <SectionHeading tone="dark" eyebrow="Banking" title="Widely Used Payment Methods for Casinos in Australia">
            <p>{paymentsIntro}</p>
          </SectionHeading>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {payments.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="group overflow-hidden rounded-2xl border border-navy-foreground/15 transition-all hover:-translate-y-1 hover:border-gold"
              >
                <img src={p.img} alt={`${p.name} Casinos Payment Method`} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              </a>
            ))}
          </div>
          <Button asChild variant="gold" size="xl" className="mt-8">
            <a href="https://nohousecasinos.com/payments/">
              See More Payment Methods <ArrowRight />
            </a>
          </Button>
        </div>
        <img
          src={paymentsImage}
          alt="Australian Online Casino Payment Methods"
          loading="lazy"
          className="mx-auto w-full max-w-sm rounded-3xl shadow-lift lg:max-w-none"
        />
      </div>
    </section>
  );
}

export function LatestReviews() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Fresh off the reels" title="Check Our Latest Casino Reviews" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {latestReviews.map((r) => (
            <article key={r.title} className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <div className="relative">
                <img src={r.img} alt={r.title} loading="lazy" className="aspect-square w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-card">
                  No Deposit Bonus
                </span>
                <span className="absolute bottom-3 right-3 rounded-xl bg-gold-gradient px-3 py-1.5 font-display text-gold-foreground shadow-gold">
                  <strong className="text-lg">{r.score}</strong>
                  <span className="text-xs">/10</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex-1 text-lg font-bold leading-snug text-foreground">{r.title}</h3>
                <div className="mt-5 flex gap-2">
                  <Button asChild variant="gold" className="flex-1 rounded-full">
                    <a href={r.play} target="_blank" rel="nofollow sponsored noopener">
                      Play Now <ExternalLink />
                    </a>
                  </Button>
                  <Button asChild variant="soft" className="flex-1 rounded-full">
                    <a href={r.review}>Read Review</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  return (
    <section className="border-t bg-muted py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <SectionHeading eyebrow="Got questions?" title="Australian Online Casinos FAQs">
            <p>Quick answers to what Aussie players ask us most.</p>
          </SectionHeading>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="rounded-2xl border bg-card px-5 shadow-card data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
