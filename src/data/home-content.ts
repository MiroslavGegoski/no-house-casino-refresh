/**
 * Homepage content for the new nohousecasinos.com homepage.
 * Every heading, paragraph, image and link the body sections render lives here.
 * Header and footer data (bottom of file) mirror the live site and must not change.
 */
import heroPhone from "@/assets/hero-phone-sydney.jpg";
import testLabDesk from "@/assets/test-lab-desk.jpg";
import playSafe from "@/assets/play-safe.jpg";
import ctaBackdrop from "@/assets/hero-casino.jpg";
import calculatorArt from "@/assets/bonus-casino.jpg";
import legalArt from "@/assets/why-australia.jpg";
import payoutsArt from "@/assets/payments-secure.jpg";
import gamePokies from "@/assets/game-pokies.jpg";
import gameBlackjack from "@/assets/game-blackjack.jpg";
import gameRoulette from "@/assets/game-roulette.jpg";
import gamePoker from "@/assets/game-poker.jpg";
import gameBaccarat from "@/assets/game-baccarat.jpg";
import gameKeno from "@/assets/game-keno.jpg";

const U = "https://nohousecasinos.com/wp-content/uploads";
const S = "https://nohousecasinos.com";

export const siteLogo = `${U}/2025/10/cropped-cropped-NoHouse-Casinos-Logo-LastVersion.webp`;

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: "Australia’s independent casino guide · Updated monthly",
  title: "Real Money Casinos, Tested by Real Aussie Punters",
  highlight: "Tested by Real Aussie Punters",
  text: "We sign up, deposit, play and cash out at every casino before it earns a spot on our list. No paid rankings, no fluff — just the sites worth your time and your money.",
  primary: { label: "See the 2026 leaderboard", href: "#leaderboard" },
  secondary: { label: "Try the bonus calculator", href: "#bonus-calculator" },
  image: heroPhone,
  imageAlt: "Phone showing a gold pokie game in front of Sydney Harbour at night",
  quickLinks: [
    { label: "Pokies", href: `${S}/games/free-pokies/` },
    { label: "No deposit bonuses", href: `${S}/bonuses/no-deposit-bonuses/` },
    { label: "PayID casinos", href: `${S}/payments/payid/` },
    { label: "High roller", href: `${S}/bonuses/high-roller/` },
  ],
};

export const heroStats = [
  { value: "30", label: "casinos ranked" },
  { value: "100%", label: "real-money tested" },
  { value: "AUD", label: "friendly sites only" },
];

/* ---------- Podium + leaderboard ---------- */
export const podium = {
  eyebrow: "This month’s podium",
  title: "The Top 3 Casinos Right Now",
  text: "Our three highest-scoring casinos this month. Each one cleared every check in our test lab — from sign-up to the first withdrawal.",
};

export const leaderboard = {
  eyebrow: "Full rankings",
  title: "The 2026 Aussie Casino Leaderboard",
  text: "Sort the full list your way. Our ranking weighs safety, payouts and fairness first — or flip to the biggest bonus or most free spins if that’s what you’re after.",
  sortLabels: {
    rank: "Our ranking",
    bonus: "Biggest bonus",
    spins: "Most free spins",
    match: "Highest match %",
  },
};

/* ---------- Bonus calculator ---------- */
export const calculator = {
  eyebrow: "Bonus maths, made simple",
  title: "How Much Do You Really Need to Play?",
  text: "A big bonus is only as good as its wagering. Plug in an offer and see how much you get, what your balance becomes and how much you need to bet before you can withdraw.",
  note: "Always check the casino’s own terms — some games count less towards wagering, and offers can have time limits and max bet rules.",
  image: calculatorArt,
};

/* ---------- Games ---------- */
export const gamesSection = {
  eyebrow: "Find your game",
  title: "What Do You Feel Like Playing Tonight?",
  text: "From quick spins to slow-burn strategy, pick a game and we’ll show you where to play it.",
};

export const games = [
  { title: "Pokies", tag: "Most played", img: gamePokies, href: `${S}/games/free-pokies/`, text: "Thousands of reels, from three-reel classics to Megaways and jackpot pokies." },
  { title: "Blackjack", tag: "Strategy", img: gameBlackjack, href: `${S}/games/online-blackjack/`, text: "Beat the dealer to 21 with the right moves." },
  { title: "Roulette", tag: "Classic", img: gameRoulette, href: `${S}/games/online-roulette/`, text: "European, French or American — place your bets." },
  { title: "Live Poker", tag: "Skill", img: gamePoker, href: `${S}/games/online-poker/`, text: "Hold’em tables, video poker and tournaments." },
  { title: "Baccarat", tag: "High stakes", img: gameBaccarat, href: `${S}/games/online-baccarat/`, text: "Player, banker or tie — fast and elegant." },
  { title: "Keno", tag: "Easy play", img: gameKeno, href: `${S}/games/keno/`, text: "Pick your numbers and watch the draw." },
];

/* ---------- Test lab ---------- */
export const testLab = {
  eyebrow: "Inside our test lab",
  title: "Every Casino Gets the Same 5-Point Check",
  text: "Our reviewers open real accounts with their own money. If a casino fails any of these checks, it doesn’t make the list — no matter what it offers us.",
  image: testLabDesk,
  imageAlt: "Reviewer’s desk with a laptop, checklist, coins and casino chips",
  checks: [
    { title: "Licence & security", text: "We confirm a valid offshore licence, SSL encryption and clear company details." },
    { title: "Real deposit, real withdrawal", text: "We deposit, play and cash out to time how fast the money actually lands." },
    { title: "Bonus terms in plain English", text: "We read the fine print on wagering, max bets and expiry so you don’t have to." },
    { title: "Games & software", text: "We check the lobby for trusted studios, fair games and smooth mobile play." },
    { title: "Support that answers", text: "We message live chat and email with real questions and rate the replies." },
  ],
  link: { label: "Read our full rating method", href: `${S}/how-we-rate-casinos/` },
};

export const providers = [
  { name: "Pragmatic Play", img: `${U}/2025/05/Pragmatic-Play-Casino-Software-Provider-Logo.webp`, href: `${S}/providers/pragmatic-play-casinos/` },
  { name: "PlayTech", img: `${U}/2025/05/PlayTech-Casino-Software-Provider-Logo.webp`, href: `${S}/providers/playtech-casinos/` },
  { name: "Play'n GO", img: `${U}/2025/05/Play-N-Go-Casino-Software-Provider-Logo.webp`, href: `${S}/providers/playn-go-casinos/` },
  { name: "NetEnt", img: `${U}/2025/05/Netent-Software-Provider-Logo.webp`, href: `${S}/providers/netent-casinos/` },
  { name: "IGT", img: `${U}/2025/05/IGT-Casino-Software-Provider-Logo.webp`, href: `${S}/providers/igt-casinos/` },
  { name: "Evolution Gaming", img: `${U}/2025/05/Evolution-Gaming-Casino-Software-Provider-Logo.webp`, href: `${S}/providers/evolution-casinos/` },
];

/* ---------- Payouts ---------- */
export const payouts = {
  eyebrow: "Deposits & withdrawals",
  title: "Get Your Winnings Without the Wait",
  text: "The right payment method makes all the difference. These are the options Aussie players reach for most — and what each one is best at.",
  image: payoutsArt,
  imageAlt: "Phone with a gold security shield",
  link: { label: "Compare all payment methods", href: `${S}/payments/` },
};

export const payments = [
  { name: "PayID", bestFor: "Instant bank transfers", text: "Send money straight from your Aussie bank using just your email or phone number.", img: `${U}/2025/05/PayId-Casinos-Payment-Method-1.webp`, href: `${S}/payments/payid/` },
  { name: "Neosurf", bestFor: "Private deposits", text: "Prepaid vouchers you can buy with cash — no card or bank details shared.", img: `${U}/2025/05/Neosurf-Casinos-Payment-Method.webp`, href: `${S}/payments/neosurf/` },
  { name: "Flexepin", bestFor: "Budget control", text: "Load a fixed amount and play with exactly what’s on the voucher.", img: `${U}/2025/05/FlexePin-Casinos-Payment-Method.webp`, href: `${S}/payments/flexepin-casinos/` },
  { name: "eZeeWallet", bestFor: "Quick cash-outs", text: "An e-wallet that keeps casino money separate from your everyday account.", img: `${U}/2025/05/eZeeWallet-Casino-Payment-Method-Australia.webp`, href: `${S}/payments/ezeewallet-casinos/` },
];

/* ---------- Legal + play safe ---------- */
export const legalCard = {
  eyebrow: "The short answer",
  title: "Can Aussies Play Online Casinos?",
  text: "Yes — with a catch. The Interactive Gambling Act 2001 stops companies from offering online casino games to Australians, but it doesn’t make it illegal for you to play at offshore casinos. That’s why every site we list holds an international licence and accepts Aussie players.",
  image: legalArt,
};

export const playSafe = {
  eyebrow: "Play smart",
  title: "Stay in Control, Every Session",
  text: "Gambling should be fun, not a way to make money. A few simple habits keep it that way.",
  image: playSafe,
  imageAlt: "Phone with a timer and lock icon next to an hourglass and gold coins",
  tips: [
    "Set a deposit limit before you play",
    "Decide how long you’ll play and stick to it",
    "Never chase losses",
    "Take regular breaks",
  ],
  help: [
    { label: "Gambling Help Online · 1800 858 858", href: "https://www.gamblinghelponline.org.au/" },
    { label: "BetStop — national self-exclusion", href: "https://www.betstop.gov.au/" },
  ],
  link: { label: "Our responsible gambling guide", href: `${S}/responsible-gambling/` },
};

/* ---------- FAQ ---------- */
export const faqSection = {
  eyebrow: "Questions & answers",
  title: "Everything You Wanted to Ask",
  text: "Quick answers to the questions we hear most from Aussie players.",
};

export const faqs = [
  { q: "How do you choose which casinos to list?", a: "Every casino goes through our 5-point test: licence and security, a real deposit and withdrawal, bonus terms, games and software, and customer support. Only casinos that pass every check make the leaderboard." },
  { q: "Are these casinos safe for Australians?", a: "We only list offshore casinos with a valid international licence, encrypted payments and clear terms. We also re-check our list every month and remove any site that stops meeting our standards." },
  { q: "What does wagering mean?", a: "Wagering (or playthrough) is how many times you need to bet a bonus before you can withdraw winnings from it. A $100 bonus with 40x wagering means you need to place $4,000 in bets. Use our bonus calculator to work it out for any offer." },
  { q: "Which payment method pays out fastest?", a: "E-wallets and PayID are usually the quickest options. Voucher methods like Neosurf and Flexepin are great for deposits, but you’ll often need a different method to withdraw." },
  { q: "Can I play on my phone?", a: "Yes. Every casino on our list works in your phone’s browser — no download needed. A few also offer apps for Android or iOS." },
  { q: "Do I pay tax on casino winnings in Australia?", a: "Gambling winnings are generally not taxed for recreational players in Australia, because gambling is treated as a hobby rather than income. If you’re unsure about your situation, speak to a tax professional." },
  { q: "Are the casino games fair?", a: "The casinos we recommend use games from established studios that are tested for random results. Look for return-to-player (RTP) figures in the game info to see how a game is set up to pay back over time." },
  { q: "What should I do if gambling stops being fun?", a: "Take a break and reach out for support. Gambling Help Online (1800 858 858) is free and available 24/7, and BetStop lets you block yourself from licensed Australian wagering sites." },
];

/* ---------- Closing call to action ---------- */
export const finalCta = {
  title: "Ready to Find Your Next Favourite Casino?",
  text: "Jump back to the leaderboard and pick a casino that’s already been tested for you.",
  button: { label: "Back to the leaderboard", href: "#leaderboard" },
  image: ctaBackdrop,
};

/* ---------- Site chrome (identical to live site) ---------- */
export const headerMenu = [
  { label: "Online Casinos", href: "https://nohousecasinos.com/" },
  { label: "Reviews", href: "https://nohousecasinos.com/reviews/" },
  { label: "Bonuses", href: "https://nohousecasinos.com/bonuses/" },
  { label: "Payments", href: "https://nohousecasinos.com/payments/" },
  { label: "Games", href: "https://nohousecasinos.com/games/" },
  { label: "Providers", href: "https://nohousecasinos.com/providers/" },
];

export const footerMenu = [
  { label: "Popular Pages", href: "https://nohousecasinos.com/#" },
  { label: "Bonus Offers", href: "https://nohousecasinos.com/bonuses/" },
  { label: "Payment Methods", href: "https://nohousecasinos.com/payments/" },
  { label: "Providers", href: "https://nohousecasinos.com/providers/" },
  { label: "Best Casinos", href: "https://nohousecasinos.com/reviews/" },
];

export const footerLinks = [
  { label: "About Us", href: "https://nohousecasinos.com/about-us/" },
  { label: "Disclaimer", href: "https://nohousecasinos.com/disclaimer/" },
  { label: "Terms and Conditions", href: "https://nohousecasinos.com/terms-and-conditions/" },
  { label: "Responsible Gambling", href: "https://nohousecasinos.com/responsible-gambling/" },
  { label: "Contact Us", href: "https://nohousecasinos.com/contact-us/" },
  { label: "How We Rate Casinos", href: "https://nohousecasinos.com/how-we-rate-casinos/" },
  { label: "How We Work", href: "https://nohousecasinos.com/how-we-work/" },
];

export const responsibleLogos = [
  { name: "18+", img: `${U}/2025/10/18_Sign-removebg-preview.png`, href: undefined, h: "h-6" },
  { name: "BetBlocker", img: `${U}/2025/10/BetBlocker_-_NoHouseCasinos.com-removebg-preview.webp`, href: "https://www.betblocker.org/", h: "h-7" },
  { name: "Gamban", img: `${U}/2025/10/Gamban_-_NoHouseCasinos.com-removebg-preview.webp`, href: "https://gamban.com/", h: "h-10" },
  { name: "GambleAware", img: `${U}/2025/10/GambleAware_-_NoHouseCasinos.com-removebg-preview.webp`, href: "https://www.gambleaware.org/", h: "h-7" },
  { name: "GamCare", img: `${U}/2025/10/GamCare_-_NoHouseCasinos.com-removebg-preview.webp`, href: "https://www.gamcare.org.uk/", h: "h-8" },
  { name: "Gordon Moody", img: `${U}/2025/10/GordonMoody_-_NoHouseCasinos.com-removebg-preview.webp`, href: "https://gamblingtherapy.org/", h: "h-12" },
];
