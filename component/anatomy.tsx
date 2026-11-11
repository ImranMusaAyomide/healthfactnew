"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle } from "lucide-react";
import Header from "../landingpage/header";

const anatomyOptions = [
  { id: "male", title: "Male anatomy", image: "/male.jpg" },
  { id: "female", title: "Female anatomy", image: "/female.jpg" },
] as const;

export default function Anatomy() {
  const [selectedAnatomy, setSelectedAnatomy] = useState<
    (typeof anatomyOptions)[number]["id"]
  >("male");
  const selectedOption = anatomyOptions.find(
    ({ id }) => id === selectedAnatomy,
  );

  return (
    <>
      <Header />

      <main className="flex-1 px-5 pb-10 pt-7 sm:px-8 sm:pt-8">
        <div className="mx-auto w-full max-w-[764px]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <Link
              className="inline-flex items-center gap-1.5 text-[10px] text-muted transition-colors hover:text-cloud"
              href="/language"
            >
              <ArrowLeft aria-hidden="true" size={13} />
              Back
            </Link>
            <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-subtle sm:text-[9px]">
              Your experience <span className="px-1 text-mint">/</span> 3 of 3
            </p>
          </div>

          <div
            aria-label="Step 3 of 3"
            aria-valuemax={3}
            aria-valuemin={1}
            aria-valuenow={3}
            className="mb-5 grid grid-cols-3 gap-[5px]"
            role="progressbar"
          >
            <span className="h-[3px] rounded-full bg-mint" />
            <span className="h-[3px] rounded-full bg-mint" />
            <span className="h-[3px] rounded-full bg-mint" />
          </div>

          <p className="mb-2 font-mono text-[8px] font-medium uppercase tracking-[0.13em] text-mint sm:text-[9px]">
            Choose a starting point
          </p>
          <h1 className="text-[clamp(28px,5vw,36px)] font-normal leading-tight tracking-[-0.045em]">
            Every body has a story.
          </h1>
          <p className="mt-2 text-[11px] leading-relaxed text-muted sm:text-xs">
            Choose an anatomy model to begin. This is a learning preference,
            not a question about your identity.
          </p>

          <div
            aria-label="Choose an anatomy model"
            className="mt-5 grid gap-2.5 sm:grid-cols-2"
            role="group"
          >
            {anatomyOptions.map(({ id, title, image }) => {
              const isSelected = selectedAnatomy === id;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`rounded-xl border p-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint ${
                    isSelected
                      ? "border-mint bg-[#0d171c]"
                      : "border-line bg-surface hover:border-mint/50"
                  }`}
                  key={id}
                  onClick={() => setSelectedAnatomy(id)}
                  type="button"
                >
                  <span className="flex items-center justify-between gap-3 text-[12px] font-medium">
                    {title}
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
                  </span>
                  <span className="mx-auto mt-2 block aspect-square w-full max-w-[300px] overflow-hidden rounded-sm bg-[#080e11]">
                    <Image
                      alt={`${title} full body anatomy model, anterior view`}
                      className="h-full w-full object-contain"
                      height={800}
                      src={image}
                      width={800}
                    />
                  </span>
                  <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.08em] text-subtle">
                    Full body <span className="px-1 text-mint">/</span>{" "}
                    Anterior view
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-cloud">
                Both models include all major body systems.
              </p>
              <p className="mt-1.5 max-w-[480px] text-[9px] leading-relaxed text-muted">
                Anatomy varies between people. These models represent typical
                anatomy, not every body or medical variation.
              </p>
            </div>
            <Link
              className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-mint px-3.5 text-[9px] font-semibold text-ink transition-colors hover:bg-[#a1f0d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              href="/#systems"
            >
              Explore {selectedOption?.title.toLowerCase()}
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
