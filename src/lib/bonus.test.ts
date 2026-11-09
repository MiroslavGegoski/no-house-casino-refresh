import { describe, expect, it } from "vitest";
import { calcWagering, parseBonus } from "./bonus";

describe("parseBonus", () => {
  it("reads match %, max amount and free spins", () => {
    expect(parseBonus("325% Up To $3,000 + 200 Free Spins")).toEqual({ matchPct: 325, maxAmount: 3000, freeSpins: 200 });
  });
  it("handles offers without a match percentage", () => {
    expect(parseBonus("Up To $10,000 + 750 Free Spins")).toEqual({ matchPct: null, maxAmount: 10000, freeSpins: 750 });
  });
});

describe("calcWagering", () => {
  it("matches the deposit and applies wagering to the bonus only", () => {
    expect(calcWagering({ deposit: 100, matchPct: 200, maxBonus: 1000, wageringX: 40, appliesTo: "bonus" })).toEqual({
      bonus: 200,
      balance: 300,
      turnover: 8000,
    });
  });
  it("caps the bonus at the maximum amount", () => {
    expect(calcWagering({ deposit: 1000, matchPct: 325, maxBonus: 3000, wageringX: 35, appliesTo: "bonus" }).bonus).toBe(3000);
  });
  it("applies wagering to deposit plus bonus when chosen", () => {
    expect(calcWagering({ deposit: 100, matchPct: 100, maxBonus: 750, wageringX: 30, appliesTo: "both" }).turnover).toBe(6000);
  });
});
