import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HomeHero, LogoMarquee } from "@/components/home/HomeHero";
import { Leaderboard, Podium } from "@/components/home/Rankings";
import { BonusCalculator } from "@/components/home/BonusCalculator";
import { Faq, FinalCta, GameFinder, LegalAndSafety, Payouts, TestLab } from "@/components/home/Sections";

const title = "Real Money Casinos Australia 2026 – Tested by Aussie Punters | NoHouseCasinos";
const description =
  "Every casino tested with real deposits and withdrawals. Compare the 2026 Aussie leaderboard, work out bonus wagering and find fast-paying sites.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HomeHero />
        <LogoMarquee />
        <Podium />
        <Leaderboard />
        <BonusCalculator />
        <GameFinder />
        <TestLab />
        <Payouts />
        <LegalAndSafety />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
