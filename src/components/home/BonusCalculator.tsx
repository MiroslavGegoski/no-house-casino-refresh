import { useState } from "react";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { calculator } from "@/data/home-content";
import { rankedCasinos } from "@/data/casinos";
import { calcWagering, parseBonus } from "@/lib/bonus";
import { SectionHeading } from "./SectionHeading";

const aud = (n: number) => n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
const presets = rankedCasinos
  .slice(0, 6)
  .map((c) => ({ name: c.name.replace(/ Casino$/, ""), ...parseBonus(c.bonus) }))
  .filter((p) => p.matchPct != null && p.maxAmount != null)
  .slice(0, 4);

function NumberField({ id, label, value, onChange, prefix, suffix }: { id: string; label: string; value: number; onChange: (n: number) => void; prefix?: string; suffix?: string }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">{label}</Label>
      <div className="relative mt-2">
        {prefix && <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">{prefix}</span>}
        <Input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className={cn("h-12 rounded-xl bg-background text-base font-semibold", prefix && "pl-8", suffix && "pr-10")}
        />
        {suffix && <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
}

export function BonusCalculator() {
  const [deposit, setDeposit] = useState(100);
  const [matchPct, setMatchPct] = useState(200);
  const [maxBonus, setMaxBonus] = useState(1000);
  const [wageringX, setWageringX] = useState(40);
  const [appliesTo, setAppliesTo] = useState<"bonus" | "both">("bonus");
  const r = calcWagering({ deposit, matchPct, maxBonus, wageringX, appliesTo });

  return (
    <section id="bonus-calculator" className="scroll-mt-6 bg-muted py-20 lg:py-28">
      <div className="container-site">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_380px]">
          <SectionHeading eyebrow={calculator.eyebrow} title={calculator.title}>
            <p>{calculator.text}</p>
          </SectionHeading>
          <img src={calculator.image} alt="" width={960} height={640} loading="lazy" className="hidden aspect-[3/2] w-full rounded-3xl object-cover shadow-card lg:block" />
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-lift lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-7 p-6 sm:p-10">
            <div>
              <p className="text-sm font-semibold text-foreground">Load an offer from our top list</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => {
                      setMatchPct(p.matchPct!);
                      setMaxBonus(p.maxAmount!);
                    }}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                      matchPct === p.matchPct && maxBonus === p.maxAmount
                        ? "border-primary bg-secondary text-secondary-foreground"
                        : "border-border text-foreground hover:border-primary",
                    )}
                  >
                    {p.name} · {p.matchPct}%
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <NumberField id="calc-deposit" label="Your deposit" prefix="$" value={deposit} onChange={setDeposit} />
              <NumberField id="calc-match" label="Match" suffix="%" value={matchPct} onChange={setMatchPct} />
              <NumberField id="calc-max" label="Max bonus" prefix="$" value={maxBonus} onChange={setMaxBonus} />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm font-semibold text-foreground">Wagering requirement</Label>
                <span className="font-display text-xl font-extrabold text-primary">{wageringX}x</span>
              </div>
              <Slider className="mt-4" min={0} max={70} step={1} value={[wageringX]} onValueChange={([v]) => setWageringX(v)} aria-label="Wagering requirement" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Wagering applies to</p>
              <div className="mt-3 inline-flex rounded-full border border-border bg-background p-1">
                {(["bonus", "both"] as const).map((k) => (
                  <button
                    key={k}
                    onClick={() => setAppliesTo(k)}
                    aria-pressed={appliesTo === k}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                      appliesTo === k ? "bg-navy text-navy-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {k === "bonus" ? "Bonus only" : "Deposit + bonus"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-8 bg-navy-gradient p-6 text-navy-foreground sm:p-10">
            <div aria-hidden className="bg-dots pointer-events-none absolute inset-0" />
            <div className="relative">
              <p className="flex items-center gap-2 eyebrow text-gold">
                <Calculator className="size-4" /> Your result
              </p>
              <dl className="mt-6 space-y-6" aria-live="polite">
                <div>
                  <dt className="text-sm text-navy-muted">Bonus you get</dt>
                  <dd className="font-display text-4xl font-extrabold">{aud(r.bonus)}</dd>
                </div>
                <div>
                  <dt className="text-sm text-navy-muted">Starting balance</dt>
                  <dd className="font-display text-4xl font-extrabold">{aud(r.balance)}</dd>
                </div>
                <div className="rounded-2xl border border-gold/40 bg-navy-foreground/5 p-5">
                  <dt className="text-sm text-navy-muted">Total you need to bet before withdrawing</dt>
                  <dd className="text-gold-gradient font-display text-5xl font-extrabold">{aud(r.turnover)}</dd>
                </div>
              </dl>
            </div>
            <p className="relative text-sm leading-relaxed text-navy-muted">{calculator.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
