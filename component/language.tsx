"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Search,
} from "lucide-react";
import Header from "../landingpage/header";

const languages = [
  { code: "EN", name: "English", englishName: "English" },
  { code: "ES", name: "Español", englishName: "Spanish" },
  { code: "FR", name: "Français", englishName: "French" },
  { code: "PT", name: "Português", englishName: "Portuguese" },
  { code: "AR", name: "العربية", englishName: "Arabic" },
  { code: "HI", name: "हिन्दी", englishName: "Hindi" },
  { code: "ZH", name: "中文", englishName: "Chinese - Simplified" },
  { code: "BN", name: "বাংলা", englishName: "Bengali" },
];

export default function Language() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [query, setQuery] = useState("");

  const filteredLanguages = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return languages;

    return languages.filter(
      ({ code, name, englishName }) =>
        code.toLocaleLowerCase().includes(normalizedQuery) ||
        name.toLocaleLowerCase().includes(normalizedQuery) ||
        englishName.toLocaleLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const selected = languages.find(({ code }) => code === selectedLanguage);

  return (
    <>
      <Header />

      <main className="flex-1 px-5 pb-10 pt-7 sm:px-8 sm:pt-8">
        <div className="mx-auto w-full max-w-[796px]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <Link
              className="inline-flex items-center gap-1.5 text-[10px] text-muted transition-colors hover:text-cloud"
              href="/personalization"
            >
              <ArrowLeft aria-hidden="true" size={13} />
              Back
            </Link>
            <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-subtle sm:text-[9px]">
              Your experience <span className="px-1 text-mint">/</span> 2 of 3
            </p>
          </div>

          <div
            aria-label="Step 2 of 3"
            aria-valuemax={3}
            aria-valuemin={1}
            aria-valuenow={2}
            className="mb-5 grid grid-cols-3 gap-[5px]"
            role="progressbar"
          >
            <span className="h-[3px] rounded-full bg-mint" />
            <span className="h-[3px] rounded-full bg-mint" />
            <span className="h-[3px] rounded-full bg-line" />
          </div>

          <p className="mb-2 font-mono text-[8px] font-medium uppercase tracking-[0.13em] text-mint sm:text-[9px]">
            Knowledge in your own words
          </p>
          <h1 className="text-[clamp(28px,5vw,36px)] font-normal leading-tight tracking-[-0.045em]">
            Choose your language.
          </h1>
          <p className="mt-2 text-[11px] text-muted sm:text-xs">
            Feel at home while you explore. You can change this at any time.
          </p>

          <label className="relative mt-5 block">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              size={14}
            />
            <span className="sr-only">Search languages</span>
            <input
              className="h-[39px] w-full rounded-lg border border-line bg-surface pl-9 pr-3 text-[10px] text-cloud outline-none transition-colors placeholder:text-subtle focus:border-mint"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search languages"
              type="search"
              value={query}
            />
          </label>

          <div
            aria-label="Available languages"
            className="mt-5 grid gap-2.5 sm:grid-cols-2"
            role="group"
          >
            {filteredLanguages.map(({ code, name, englishName }) => {
              const isSelected = selectedLanguage === code;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`flex min-h-[65px] items-center gap-4 rounded-lg border px-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${
                    isSelected
                      ? "border-mint bg-[#102b25]"
                      : "border-line bg-surface hover:border-mint/50"
                  }`}
                  key={code}
                  onClick={() => setSelectedLanguage(code)}
                  type="button"
                >
                  <span className="w-5 shrink-0 font-mono text-[8px] text-subtle">
                    {code}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[12px] leading-tight">
                      {name}
                    </span>
                    <span className="mt-1 block text-[9px] text-muted">
                      {englishName}
                    </span>
                  </span>
                  {isSelected ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="shrink-0 text-mint"
                      size={14}
                    />
                  ) : (
                    <Circle
                      aria-hidden="true"
                      className="shrink-0 text-subtle"
                      size={14}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {filteredLanguages.length === 0 && (
            <p className="py-8 text-center text-[11px] text-muted">
              No languages match your search.
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p aria-live="polite" className="text-[10px]">
                Selected: {selected?.englishName}
              </p>
              <p className="mt-1.5 text-[9px] text-muted">
                Organ names include familiar terms alongside anatomical names.
              </p>
            </div>
            <Link
              className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-mint px-3.5 text-[9px] font-semibold text-ink transition-colors hover:bg-[#a1f0d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              href="/anatomy"
            >
              Continue in {selected?.englishName}
              <ArrowRight aria-hidden="true" size={13} />
            </Link>
          </div>

          <p className="mt-5 text-[9px] leading-relaxed text-subtle">
            Your choices shape your learning experience. You can change them in
            Settings anytime.
          </p>
        </div>
      </main>
    </>
  );
}