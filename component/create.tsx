"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Header from "../landingpage/header";

export default function CreateAccount() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordStrength = [
    password.length >= 8,
    password.length >= 12,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /[\d\W]/.test(password),
  ].filter(Boolean).length;

  const strengthLabel =
    passwordStrength === 0
      ? "Use at least 12 characters. A mix of words is easy to remember."
      : passwordStrength <= 1
        ? "Add a few more characters."
        : passwordStrength <= 2
          ? "Fair password"
          : passwordStrength === 3
            ? "Good password"
            : "Strong password";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/personalization");
  }

  return (
    <>
      <Header />

      <main className="flex flex-1 items-start">
        <div className="mx-auto grid w-full max-w-[1014px] grid-cols-1 items-center gap-8 px-5 py-6 sm:px-9 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] md:gap-9 md:py-10 lg:grid-cols-[minmax(0,497px)_minmax(0,321px)] lg:gap-[clamp(36px,6vw,67px)] lg:px-0 lg:pt-12">
          <section
            aria-labelledby="discovery-title"
            className="flex min-h-[520px] flex-col overflow-hidden rounded-[20px] bg-[#0d171c] px-6 py-7 sm:min-h-[570px] sm:px-8 sm:py-8 lg:min-h-[606px] lg:px-[30px]"
          >
            <p className="mb-3.5 font-mono text-[9px] font-medium uppercase leading-snug tracking-[0.13em] text-mint sm:text-[10px]">
              Your body. Better understood.
            </p>
            <h1
              id="discovery-title"
              className="max-w-[470px] text-[clamp(28px,4vw,36px)] font-normal leading-[1.13] tracking-[-0.045em]"
            >
              A little understanding.
              <br />
              A healthier perspective.
            </h1>

            <div className="flex min-h-0 flex-1 items-center justify-center py-3">
              <Image
                src="/Anatomical preview.svg"
                alt="An anatomical illustration of the heart and circulatory system"
                width={560}
                height={480}
                priority
                className="h-auto max-h-[330px] w-full max-w-[390px] object-contain"
              />
            </div>

            <p className="text-[11px] leading-relaxed text-muted">
              Understand your body. Protect your health.
            </p>
            <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.1em] text-subtle">
              Human anatomy <span className="px-1 text-mint">/</span> The
              cardiovascular system
            </p>
          </section>

          <section
            aria-labelledby="signup-title"
            className="mx-auto w-full max-w-[321px] py-2 md:mx-0 md:py-0"
            id="create-account"
          >
            <p className="mb-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-mint sm:text-[10px]">
              Your journey begins here
            </p>
            <h2
              id="signup-title"
              className="text-[30px] font-normal leading-[1.12] tracking-[-0.045em] sm:text-[32px]"
            >
              Make room for
              <br />a little discovery.
            </h2>
            <p className="mt-2.5 text-[11px] text-muted sm:text-xs">
              Create your free HealthFact account.
            </p>

            <button
              className="mt-5 flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-[11px] font-medium transition-colors hover:border-mint/40 hover:bg-raised"
              type="button"
            >
              Continue with Google
            </button>

            <p className="my-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.08em] text-subtle">
              <span className="h-px flex-1 bg-line" />
              Or sign up with email
              <span className="h-px flex-1 bg-line" />
            </p>

            <form className="grid gap-3" onSubmit={handleSubmit}>
              <label className="grid gap-1.5 text-[10px] font-medium">
                Your name
                <input
                  autoComplete="name"
                  className="h-10 w-full rounded-lg border border-line bg-surface px-3 text-[11px] font-normal text-cloud outline-none transition-colors placeholder:text-muted focus:border-mint"
                  name="name"
                  placeholder="Alex Lee"
                  required
                />
              </label>

              <label className="grid gap-1.5 text-[10px] font-medium">
                Email address
                <input
                  autoComplete="email"
                  className="h-10 w-full rounded-lg border border-line bg-surface px-3 text-[11px] font-normal text-cloud outline-none transition-colors placeholder:text-muted focus:border-mint"
                  name="email"
                  placeholder="alex@example.com"
                  required
                  type="email"
                />
              </label>

              <label className="grid gap-1.5 text-[10px] font-medium">
                Password
                <span className="relative block">
                  <input
                    autoComplete="new-password"
                    className="h-10 w-full rounded-lg border border-line bg-surface px-3 pr-10 text-[11px] font-normal text-cloud outline-none transition-colors placeholder:text-muted focus:border-mint"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="At least 12 characters"
                    required
                    type={showPassword ? "text" : "password"}
                    minLength={12}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-0 inline-flex w-10 items-center justify-center text-muted transition-colors hover:text-cloud"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff size={14} aria-hidden="true" />
                    ) : (
                      <Eye size={14} aria-hidden="true" />
                    )}
                  </button>
                </span>
              </label>

              <div aria-live="polite" className="-mt-1">
                <p className="text-[9px] leading-relaxed text-subtle">
                  {strengthLabel}
                </p>
                <div
                  aria-label={`Password strength: ${passwordStrength} of 4`}
                  className="mt-2 flex gap-1"
                  role="img"
                >
                  {Array.from({ length: 4 }, (_, index) => (
                    <span
                      className={`h-[2px] flex-1 rounded-full ${
                        index < passwordStrength ? "bg-mint" : "bg-line"
                      }`}
                      key={index}
                    />
                  ))}
                </div>
              </div>

              <label className="mt-0.5 flex cursor-pointer items-start gap-2 text-[9px] leading-[1.6] text-muted">
                <input
                  className="mt-0.5 size-3.5 shrink-0 accent-mint"
                  name="terms"
                  required
                  type="checkbox"
                />
                <span>
                  I agree to the{" "}
                  <a
                    className="text-cloud underline decoration-line underline-offset-2 hover:text-mint"
                    href="/terms"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    className="text-cloud underline decoration-line underline-offset-2 hover:text-mint"
                    href="/privacy"
                  >
                    Privacy Policy
                  </a>
                  . HealthFact provides education, not medical advice.
                </span>
              </label>

              <button
                className="mt-1 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-mint px-4 text-[10px] font-semibold text-ink transition-colors hover:bg-[#a1f0d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                type="submit"
              >
                Create free account <ArrowRight size={14} aria-hidden="true" />
              </button>
            </form>

            <p className="mt-4 text-center text-[10px] text-muted">
              Already have an account?{" "}
              <Link
                className="inline-flex items-center gap-1 text-cloud transition-colors hover:text-mint"
                href="/sign-in"
              >
                Sign in <ArrowRight size={11} aria-hidden="true" />
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}