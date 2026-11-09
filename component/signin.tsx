"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import Header from "../landingpage/header";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
              className="max-w-[470px] text-[clamp(28px,4vw,36px)] font-normal leading-[1.13] tracking-[-0.045em]"
              id="discovery-title"
            >
              A little understanding.
              <br />A healthier perspective.
            </h1>

            <div className="flex min-h-0 flex-1 items-center justify-center py-3">
              <Image
                alt="An anatomical illustration of the heart and circulatory system"
                className="h-auto max-h-[330px] w-full max-w-[390px] object-contain"
                height={480}
                priority
                src="/Anatomical preview.svg"
                width={560}
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
            aria-labelledby="signin-title"
            className="mx-auto w-full max-w-[321px] py-2 md:mx-0 md:py-0"
          >
            <p className="mb-2.5 font-mono text-[9px] font-medium uppercase tracking-[0.13em] text-mint sm:text-[10px]">
              Keep your curiosity going
            </p>
            <h2
              className="text-[30px] font-normal leading-[1.12] tracking-[-0.045em] sm:text-[32px]"
              id="signin-title"
            >
              Welcome back.
            </h2>
            <p className="mt-2.5 text-[11px] leading-relaxed text-muted sm:text-xs">
              Pick up where you left off. Your next discovery is waiting.
            </p>

            <button
              className="mt-5 flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-[11px] font-medium transition-colors hover:border-mint/40 hover:bg-raised"
              type="button"
            >
              Continue with Google
            </button>

            <p className="my-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.08em] text-subtle">
              <span className="h-px flex-1 bg-line" />
              Or sign in with email
              <span className="h-px flex-1 bg-line" />
            </p>

            <form className="grid gap-3" onSubmit={handleSubmit}>
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
                    autoComplete="current-password"
                    className="h-10 w-full rounded-lg border border-line bg-surface px-3 pr-10 text-[11px] font-normal text-cloud outline-none transition-colors placeholder:text-muted focus:border-mint"
                    minLength={8}
                    name="password"
                    placeholder="••••••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-0 inline-flex w-10 items-center justify-center text-muted transition-colors hover:text-cloud"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <Eye aria-hidden="true" size={14} />
                    ) : (
                      <EyeOff aria-hidden="true" size={14} />
                    )}
                  </button>
                </span>
              </label>

              <div className="-mt-0.5 flex items-center justify-between gap-3 text-[9px]">
                <label className="flex cursor-pointer items-center gap-2 text-muted">
                  <input
                    className="size-3.5 accent-mint"
                    name="remember"
                    type="checkbox"
                  />
                  Remember me
                </label>
                <Link
                  className="text-mint transition-colors hover:text-[#a1f0d4]"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                className="mt-1 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-mint px-4 text-[10px] font-semibold text-ink transition-colors hover:bg-[#a1f0d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
                type="submit"
              >
                Sign in <ArrowRight aria-hidden="true" size={14} />
              </button>
            </form>

            <p className="mt-4 text-center text-[10px] text-muted">
              New to HealthFact?{" "}
              <Link
                className="inline-flex items-center gap-1 text-cloud transition-colors hover:text-mint"
                href="/create"
              >
                Create an account <ArrowRight aria-hidden="true" size={11} />
              </Link>
            </p>

            <p className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-muted">
              <LockKeyhole aria-hidden="true" size={12} />
              Your learning space, kept private.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}