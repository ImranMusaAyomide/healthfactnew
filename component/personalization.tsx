"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  Focus,
  Info,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Header from "../landingpage/header";

const learningGoals = [
  {
    id: "body",
    icon: Focus,
    title: "Understand my body",
    description: "Get to know organs and body systems.",
  },
  {
    id: "habits",
    icon: ShieldCheck,
    title: "Build healthy habits",
    description: "Explore prevention and daily wellbeing.",
  },
  {
    id: "conditions",
    icon: BookOpen,
    title: "Learn about conditions",
    description: "Make sense of common health topics.",
  },
];

export default function Personalization() {
  const [selectedGoals, setSelectedGoals] = useState(["body", "habits"]);
  const [detailLevel, setDetailLevel] = useState<"everyday" | "detailed">(
    "everyday",
  );
  const [region, setRegion] = useState("");
  const [locationMessage, setLocationMessage] = useState("");

  function toggleGoal(goal: string) {
    setSelectedGoals((currentGoals) =>
      currentGoals.includes(goal)
        ? currentGoals.filter((currentGoal) => currentGoal !== goal)
        : [...currentGoals, goal],
    );
  }

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocationMessage(
        "Location sharing is not available in this browser. You can select a region above.",
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () =>
        setLocationMessage(
          "Location access is on for this session. Choose your region above for local guidance.",
        ),
      (error) =>
        setLocationMessage(
          error.code === error.PERMISSION_DENIED
            ? "Location permission was denied. You can still select a region above."
            : "Your location could not be determined. You can still select a region above.",
        ),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 },
    );
  }

  return (
    <>
      <Header />

      <main className="flex-1 px-5 pb-10 pt-7 sm:px-8 sm:pt-8">
        <div className="mx-auto w-full max-w-[725px]">
          <div className="mb-5 flex items-center justify-between gap-4">
            <Link
              className="inline-flex items-center gap-1.5 text-[10px] text-muted transition-colors hover:text-cloud"
              href="/create"
            >
              <ArrowLeft aria-hidden="true" size={13} />
              Back
            </Link>
            <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-subtle sm:text-[9px]">
              Your experience <span className="px-1 text-mint">/</span> 1 of 3
            </p>
          </div>

          <div
            aria-label="Step 1 of 3"
            className="mb-5 grid grid-cols-3 gap-[5px]"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={1}
          >
            <span className="h-[3px] rounded-full bg-mint" />
            <span className="h-[3px] rounded-full bg-line" />
            <span className="h-[3px] rounded-full bg-line" />
          </div>

          <p className="mb-2 font-mono text-[8px] font-medium uppercase tracking-[0.13em] text-mint sm:text-[9px]">
            Made for your curiosity
          </p>
          <h1 className="text-[clamp(28px,5vw,34px)] font-normal leading-tight tracking-[-0.045em]">
            What brings you here?
          </h1>
          <p className="mt-2 text-[11px] text-muted sm:text-xs">
            Choose what you&apos;d like to learn. There are no wrong answers.
          </p>

          <div
            aria-label="Choose what you would like to learn"
            className="mt-5 grid gap-2.5 sm:grid-cols-3"
            role="group"
          >
            {learningGoals.map(({ id, icon: Icon, title, description }) => {
              const isSelected = selectedGoals.includes(id);

              return (
                <button
                  aria-pressed={isSelected}
                  className={`min-h-[100px] rounded-xl border p-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:min-h-[100px] ${
                    isSelected
                      ? "border-mint bg-[#102b25]"
                      : "border-line bg-surface hover:border-mint/50"
                  }`}
                  key={id}
                  onClick={() => toggleGoal(id)}
                  type="button"
                >
                  <span className="mb-2 flex items-center justify-between">
                    <Icon
                      aria-hidden="true"
                      className={isSelected ? "text-mint" : "text-[#8ea69f]"}
                      size={16}
                      strokeWidth={1.5}
                    />
                    {isSelected ? (
                      <CheckCircle2
                        aria-hidden="true"
                        className="text-mint"
                        size={13}
                      />
                    ) : (
                      <Circle
                        aria-hidden="true"
                        className="text-subtle"
                        size={13}
                      />
                    )}
                  </span>
                  <span className="block text-[11px] font-medium">{title}</span>
                  <span className="mt-1 block text-[9px] leading-relaxed text-muted">
                    {description}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-7">
            <section aria-labelledby="detail-title">
              <h2 id="detail-title" className="text-[12px] font-medium">
                How much detail feels right?
              </h2>
              <p className="mt-1.5 text-[9px] text-muted">
                Start simple. You can always go deeper.
              </p>
              <div
                aria-label="Preferred detail level"
                className="mt-2 flex gap-1.5"
              >
                <button
                  aria-pressed={detailLevel === "everyday"}
                  className={`rounded-full border px-2 py-1 text-[8px] transition-colors ${
                    detailLevel === "everyday"
                      ? "border-mint bg-forest text-mint"
                      : "border-line bg-surface text-muted hover:border-mint/50"
                  }`}
                  onClick={() => setDetailLevel("everyday")}
                  type="button"
                >
                  Everyday language
                </button>
                <button
                  aria-pressed={detailLevel === "detailed"}
                  className={`rounded-full border px-2 py-1 text-[8px] transition-colors ${
                    detailLevel === "detailed"
                      ? "border-mint bg-forest text-mint"
                      : "border-line bg-surface text-muted hover:border-mint/50"
                  }`}
                  onClick={() => setDetailLevel("detailed")}
                  type="button"
                >
                  More detail
                </button>
              </div>
            </section>

            <section
              aria-labelledby="region-title"
              className="rounded-xl border border-line bg-surface p-3.5"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 id="region-title" className="text-[12px] font-medium">
                  Your region
                </h2>
                <span className="rounded-full border border-line px-2 py-1 text-[8px] text-muted">
                  Optional
                </span>
              </div>
              <p className="mt-2 text-[9px] leading-relaxed text-muted">
                See relevant emergency numbers and regional guidance. Country
                or region is enough—no precise location needed.
              </p>
              <label
                className="mt-2.5 block text-[9px] font-medium"
                htmlFor="region"
              >
                Country or region
              </label>
              <select
                className="mt-1 h-9 w-full rounded-lg border border-line bg-surface px-2.5 text-[9px] font-normal text-cloud outline-none transition-colors focus:border-mint"
                id="region"
                onChange={(event) => setRegion(event.target.value)}
                value={region}
              >
                <option value="">Select your country or region</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Ireland">Ireland</option>
                <option value="New Zealand">New Zealand</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Other">Other</option>
              </select>
              <button
                className="mt-2 inline-flex items-center gap-1 text-[9px] text-mint transition-colors hover:text-[#a1f0d4]"
                onClick={requestLocation}
                type="button"
              >
                <MapPin aria-hidden="true" size={11} />
                Use my approximate location
              </button>
              <p
                aria-live="polite"
                className="mt-1 min-h-3 text-[8px] leading-relaxed text-subtle"
              >
                {locationMessage ||
                  "Only shared if you allow it. Never used to track you."}
              </p>
              <button
                className="mt-1 text-[9px] text-muted transition-colors hover:text-cloud"
                onClick={() => {
                  setRegion("");
                  setLocationMessage("");
                }}
                type="button"
              >
                Skip location for now{" "}
                <ArrowRight
                  aria-hidden="true"
                  className="inline"
                  size={10}
                />
              </button>
            </section>
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-md bg-surface px-3 py-2.5">
            <Info
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-mint"
              size={12}
            />
            <p className="text-[9px] leading-relaxed text-muted">
              You don&apos;t need to share symptoms or a medical history.
              HealthFact personalises learning, not medical advice.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <Link
              className="text-[9px] text-muted transition-colors hover:text-cloud"
              href="/"
            >
              Skip personalisation
            </Link>
            <Link
              className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg bg-mint px-3.5 text-[9px] font-semibold text-ink transition-colors hover:bg-[#a1f0d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              href="/language"
            >
              Continue to language
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