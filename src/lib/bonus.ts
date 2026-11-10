/** Pieces of a welcome offer string such as "325% Up To $3,000 + 200 Free Spins". */
export type BonusParts = { matchPct: number | null; maxAmount: number | null; freeSpins: number | null };

export function parseBonus(text: string): BonusParts {
  const match = text.match(/(\d+(?:\.\d+)?)\s*%\s*up to/i);
  const max = text.match(/\$\s*([\d,]+)/);
  const spins = text.match(/(\d[\d,]*)\s*free spins/i);
  const num = (s: string) => Number(s.replace(/,/g, ""));
  return {
    matchPct: match?.[1] ? num(match[1]) : null,
    maxAmount: max?.[1] ? num(max[1]) : null,
    freeSpins: spins?.[1] ? num(spins[1]) : null,
  };
}

export type WageringInput = {
  deposit: number;
  matchPct: number;
  maxBonus: number;
  wageringX: number;
  /** Whether the playthrough applies to the bonus only or to deposit + bonus. */
  appliesTo: "bonus" | "both";
};

export type WageringResult = { bonus: number; balance: number; turnover: number };

export function calcWagering({ deposit, matchPct, maxBonus, wageringX, appliesTo }: WageringInput): WageringResult {
  const d = Math.max(0, deposit || 0);
  const bonus = Math.min((d * Math.max(0, matchPct || 0)) / 100, Math.max(0, maxBonus || 0));
  const base = appliesTo === "bonus" ? bonus : d + bonus;
  return { bonus, balance: d + bonus, turnover: base * Math.max(0, wageringX || 0) };
}
