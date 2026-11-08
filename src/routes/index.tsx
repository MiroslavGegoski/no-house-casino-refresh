import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { EditorNote, Hero } from "@/components/home/Hero";
import { TopCasinos } from "@/components/home/TopCasinos";
import { Games, HowItWorks, HowToChoose, HowWeRate, Legal } from "@/components/home/Guide";
import { Bonuses, Faqs, LatestReviews, Payments, Providers, WhyPlay } from "@/components/home/Extras";
import { heroImage } from "@/data/home-content";

const title = "Best Aussie Casinos for 2026 - Compare Australian Online Casinos | NoHouseCasinos";
const description =
  "Compare the best Australian online casinos for 2026. Licensed, payout-friendly sites with big bonuses, free spins and fast PayID withdrawals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <EditorNote />
        <TopCasinos />
        <HowItWorks />
        <HowToChoose />
        <Legal />
        <Games />
        <HowWeRate />
        <Bonuses />
        <Providers />
        <WhyPlay />
        <Payments />
        <LatestReviews />
        <Faqs />
      </main>
      <SiteFooter />
    </div>
  );
}
