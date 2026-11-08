import { Fragment } from "react";
import { footerLinks, footerMenu, responsibleLogos, siteLogo } from "@/data/home-content";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current" strokeWidth={2} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" className="fill-current" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

/** Kept visually identical to the live nohousecasinos.com footer. */
export function SiteFooter() {
  const socials = [
    { label: "Facebook", cls: "bg-social-facebook", Icon: FacebookIcon },
    { label: "Instagram", cls: "bg-social-instagram", Icon: InstagramIcon },
    { label: "X-twitter", cls: "bg-social-x", Icon: XIcon },
  ];
  return (
    <footer className="bg-footer font-chrome text-footer-foreground">
      <div className="container-site pb-6 pt-5">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex gap-[5px] md:pl-[63px]">
            {socials.map(({ label, cls, Icon }) => (
              <a
                key={label}
                href="https://nohousecasinos.com/#"
                aria-label={label}
                className={`${cls} flex size-[50px] items-center justify-center text-social-foreground transition-opacity hover:opacity-90`}
              >
                <Icon />
              </a>
            ))}
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-2 md:pr-[100px]">
              {footerMenu.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-base font-semibold hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-9 text-xs leading-[22px] text-footer-muted">
          <strong className="text-footer-foreground">NoHouseCasinos.com</strong> does not provide any gambling
          services directly. Our site offers detailed reviews and information about online casinos and pokies.
          Some links on our website are affiliate links, and we may earn a commission at no additional cost to
          you. This income helps us maintain the site and continue delivering high-quality content. All content
          is intended for individuals aged 18 and over. Please gamble responsibly.
        </p>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {footerLinks.map((l, i) => (
            <Fragment key={l.label}>
              {i > 0 && (
                <li aria-hidden className="text-footer-muted">
                  ·
                </li>
              )}
              <li>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-between">
          <a href="https://nohousecasinos.com/" className="lg:pl-[15px]">
            <img src={siteLogo} alt="NoHouse Casinos Logo" className="h-[50px] w-auto" loading="lazy" />
          </a>
          {responsibleLogos.map((l) =>
            l.href ? (
              <a key={l.name} href={l.href} target="_blank" rel="noopener noreferrer">
                <img src={l.img} alt={l.name} className={`${l.h} w-auto`} loading="lazy" />
              </a>
            ) : (
              <img key={l.name} src={l.img} alt={l.name} className={`${l.h} w-auto`} loading="lazy" />
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
