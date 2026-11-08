import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-line bg-ink/95">
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-4 px-[22px] pt-4 sm:flex-nowrap sm:gap-6 sm:px-9 sm:py-4 lg:px-14">
        <a className="inline-flex shrink-0" href="#top" aria-label="HealthFact home">
          <Image
            src="/HealthFact identity.svg"
            alt="HealthFact"
            width={148}
            height={28}
            priority
            className="h-auto w-[132px] sm:w-[148px]"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="order-3 -mx-[22px] flex flex-[1_0_100%] gap-[22px] overflow-x-auto px-[22px] py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:order-none sm:mx-0 sm:flex-auto sm:justify-end sm:gap-5 sm:overflow-visible sm:px-0 sm:py-0 lg:gap-8"
        >
          <a className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="#systems">
            Explore the body
          </a>
          <a className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="#how-it-works">
            How it works
          </a>
          <a className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="#library">
            Health library
          </a>
          <a className="shrink-0 text-[10px] font-semibold text-cloud sm:text-xs" href="#footer" aria-label="Language: English">
            EN
          </a>
        </nav>
        <a
          className="ml-auto inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-mint px-3.5 text-xs font-semibold text-[#08130f] transition-colors hover:bg-[#a1f0d4] sm:ml-0 sm:min-h-10"
          href="#explore"
        >
          Get started <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}