import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-line bg-ink/95">
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-x-4 px-[22px] pt-4 md:flex-nowrap md:gap-6 md:px-9 md:py-4 lg:px-14">
        <Link className="inline-flex shrink-0" href="/" aria-label="HealthFact home">
          <Image
            src="/HealthFact identity.svg"
            alt="HealthFact"
            width={148}
            height={28}
            priority
            className="h-auto w-[132px] sm:w-[148px]"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="order-3 -mx-[22px] flex flex-[1_0_100%] gap-[22px] overflow-x-auto px-[22px] py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:order-none md:mx-0 md:flex-auto md:justify-end md:gap-5 md:overflow-visible md:px-0 md:py-0 lg:gap-8"
        >
          <Link className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="/#systems">
            Explore the body
          </Link>
          <Link className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="/#how-it-works">
            How it works
          </Link>
          <Link className="shrink-0 text-[10px] text-muted transition-colors hover:text-mint sm:text-xs" href="/#library">
            Health library
          </Link>
          <Link className="shrink-0 text-[10px] font-semibold text-cloud sm:text-xs" href="/#footer" aria-label="Language: English">
            EN
          </Link>
        </nav>
        <Link
          className="ml-auto inline-flex min-h-9 shrink-0 items-center justify-center gap-2 rounded-lg bg-mint px-3.5 text-xs font-semibold text-[#08130f] transition-colors hover:bg-[#a1f0d4] md:ml-0 md:min-h-10"
          href="/create"
        >
          Get started <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}