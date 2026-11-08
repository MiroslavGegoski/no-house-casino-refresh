import { useState } from "react";
import { Menu, X } from "lucide-react";
import { headerMenu, siteLogo } from "@/data/home-content";

/** Kept visually identical to the live nohousecasinos.com header. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-header font-chrome text-header-foreground">
      <div className="container-site flex h-[90px] items-center justify-between">
        <a href="https://nohousecasinos.com/" className="shrink-0 pl-[15px]" aria-label="NoHouse Casinos home">
          <img src={siteLogo} alt="NoHouse Casinos Logo" width={140} height={50} className="h-[50px] w-auto" />
        </a>
        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-10 xl:pr-[160px]">
            {headerMenu.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-base font-semibold transition-colors hover:text-header-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-header-foreground/10 lg:hidden" aria-label="Mobile">
          <ul className="container-site py-2">
            {headerMenu.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="block py-3 text-base font-semibold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
