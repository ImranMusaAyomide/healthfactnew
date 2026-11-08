import Image from "next/image";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bone,
  Brain,
  Check,
  Heart,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wind,
} from "lucide-react";
import Header from "./header";

const systems = [
  {
    icon: HeartPulse,
    title: "Cardiovascular",
    description: "Your heart, blood and circulation.",
    link: "Explore the heart",
  },
  {
    icon: Wind,
    title: "Respiratory",
    description: "Every breath, explained.",
    link: "Explore breathing",
  },
  {
    icon: Activity,
    title: "Musculoskeletal",
    description: "The framework that moves you.",
    link: "Explore movement",
  },
  {
    icon: Brain,
    title: "Nervous",
    description: "Your body's communication network.",
    link: "Explore the brain",
  },
];

const questions = [
  {
    question: "Do I need medical knowledge?",
    answer:
      "Not at all. Start with a body part and explore each explanation in everyday language.",
  },
  {
    question: "Can HealthFact tell me what is wrong?",
    answer:
      "No. HealthFact is an educational resource, not a symptom checker or diagnostic service.",
  },
  {
    question: "Do I have to share my location?",
    answer:
      "No. Location is optional and is never needed to explore the anatomy library.",
  },
];

const eyebrowClass =
  "mb-3.5 flex items-center gap-2 font-mono text-[9px] font-medium uppercase leading-snug tracking-[0.13em] text-mint sm:text-[10px]";

const buttonBase =
  "inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border px-[18px] text-xs font-semibold transition duration-200 hover:-translate-y-0.5";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={eyebrowClass}>{children}</p>;
}

function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className={`${buttonBase} border-mint bg-mint text-ink hover:bg-[#a1f0d4]`} href={href}>
      {children} <ArrowRight size={15} aria-hidden="true" />
    </a>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section className="mx-auto grid min-h-[540px] max-w-[1240px] grid-cols-1 items-center gap-2 px-[22px] py-[54px] sm:grid-cols-2 sm:gap-5 sm:px-9 sm:py-14 lg:min-h-[610px] lg:gap-9 lg:px-14 lg:py-[58px]">
          <div className="py-0 sm:py-5">
            <Eyebrow><span className="size-1.5 rounded-full bg-mint shadow-[0_0_12px_#83e3c28c]" />A new perspective on you</Eyebrow>
            <h1 className="mb-[22px] max-w-[590px] text-[clamp(45px,13vw,66px)] font-normal leading-[1.04] tracking-[-0.045em] sm:text-[clamp(46px,6vw,76px)]">
              Understand your body. Protect your health.
            </h1>
            <p className="max-w-[445px] text-[13px] leading-[1.8] text-muted sm:text-sm">
              Meet the extraordinary world inside you. Explore realistic 3D anatomy and turn curiosity into everyday health knowledge.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-[11px]">
              <ArrowLink href="#systems">Start exploring</ArrowLink>
              <a className={`${buttonBase} border-line text-cloud hover:border-mint/50 hover:bg-white/5`} href="#how-it-works">
                See how it works
              </a>
            </div>
            <p className="mt-[19px] flex items-center gap-[7px] text-[10px] text-subtle">
              <Check size={13} className="text-mint" aria-hidden="true" /> Free to explore. Made for you.
            </p>
          </div>

          <div className="relative mx-[-7px] flex min-w-0 items-center justify-center sm:mx-0">
            <Image
              src="/Hero anatomy.svg"
              alt="Detailed 3D illustration of the human body's anatomy"
              width={610}
              height={650}
              priority
              className="block h-auto max-h-[430px] w-full object-contain lg:max-h-[540px]"
            />
            <div className="absolute bottom-[22%] left-[1%] flex items-center gap-2 rounded-lg border border-white/10 bg-ink/90 px-2.5 py-2 text-[11px] sm:bottom-[24%] sm:left-[2%] sm:px-3">
              <span className="size-[5px] rounded-full bg-mint" />
              <HeartPulse size={14} className="text-mint" aria-hidden="true" />
              <span>Heart</span>
              <span className="h-3.5 w-px bg-line" />
              <span className="text-muted">Explore</span>
            </div>
            <p className="absolute bottom-0 left-2 font-mono text-[7px] uppercase tracking-[0.08em] text-subtle sm:text-[8px]">
              A closer look · human anatomy
            </p>
          </div>
        </section>

        <section className="border-y border-line" aria-label="What you can do">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 px-[22px] py-[7px] sm:grid-cols-3 sm:gap-6 sm:px-9 sm:py-[23px] lg:px-14">
            {[
              { icon: Sparkles, title: "Explore in 3D", text: "See how your body fits together" },
              { icon: Activity, title: "Learn in plain language", text: "Clear answers, without the jargon" },
              { icon: ShieldCheck, title: "Build healthier habits", text: "Small steps, informed choices" },
            ].map(({ icon: Icon, title, text }) => (
              <div className="flex items-center gap-[13px] border-b border-line py-[15px] last:border-0 sm:border-0 sm:py-0" key={title}>
                <Icon size={17} className="shrink-0 text-mint" aria-hidden="true" />
                <span className="grid gap-0.5">
                  <strong className="text-[11px] font-medium">{title}</strong>
                  <small className="text-[10px] text-muted">{text}</small>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-[22px] py-14 sm:px-9 sm:py-20 lg:px-14" id="systems">
          <div className="mb-6">
            <Eyebrow>01 / Explore the extraordinary</Eyebrow>
            <h2 className="mb-3 text-[34px] font-normal leading-tight tracking-[-0.045em] sm:text-[clamp(30px,4vw,44px)]">
              One body. Connected systems.
            </h2>
            <p className="text-xs text-muted">Follow your curiosity, from the big picture to the smallest detail.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {systems.map(({ icon: Icon, title, description, link }) => (
              <a
                className="flex min-h-[168px] flex-col rounded-xl border border-line bg-surface p-4 transition duration-200 hover:-translate-y-1 hover:border-mint/40 hover:bg-raised sm:min-h-[190px] sm:p-[22px]"
                href="#how-it-works"
                key={title}
              >
                <Icon size={21} strokeWidth={1.5} className="mb-3 text-mint sm:mb-[18px]" aria-hidden="true" />
                <h3 className="mb-1 text-[13px] font-medium tracking-tight sm:text-[15px]">{title}</h3>
                <p className="mb-[18px] text-[10px] text-muted sm:text-[11px]">{description}</p>
                <span className="mt-auto flex items-center gap-1 text-[9px] text-mint sm:text-[10px]">
                  {link} <ArrowUpRight size={13} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#0d171c] py-12 sm:py-[66px]" id="how-it-works">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[30px] px-[22px] sm:gap-[38px] sm:px-9 md:grid-cols-2 lg:gap-24 lg:px-14">
            <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-ink">
              <Image
                src="/Anatomical preview.svg"
                alt="Anatomical model showing the heart and circulatory system"
                width={560}
                height={480}
                className="block aspect-[560/480] h-auto w-full object-cover"
              />
              <div className="absolute bottom-[17px] left-[17px] flex gap-[7px]">
                <span className="rounded-full border border-mint/50 bg-ink/85 px-2.5 py-1 text-[9px] text-mint">Heart</span>
                <span className="rounded-full border border-line bg-ink/85 px-2.5 py-1 text-[9px] text-cloud">Cardiovascular</span>
              </div>
            </div>
            <div className="md:order-none">
              <Eyebrow>02 / Curiosity, made intuitive</Eyebrow>
              <h2 className="text-[34px] font-normal leading-[1.13] tracking-[-0.045em] sm:text-[clamp(30px,4vw,44px)]">
                Look closer.<br />Learn more.
              </h2>
              <ol className="mt-[21px] grid gap-4 sm:mt-[27px] sm:gap-5">
                {[
                  ["01", "Choose your anatomy", "Start with a part of the body that you want to understand."],
                  ["02", "Select what interests you", "Rotate, zoom and explore the parts beneath the surface."],
                  ["03", "Connect anatomy to everyday health", "Understand functions, common conditions and ways to care for yourself."],
                ].map(([number, title, text]) => (
                  <li className="grid grid-cols-[26px_1fr] gap-[13px]" key={number}>
                    <span className="pt-0.5 font-mono text-[10px] text-mint">{number}</span>
                    <div>
                      <h3 className="mb-0.5 text-[13px] font-medium">{title}</h3>
                      <p className="text-[10px] leading-relaxed text-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-[22px] py-[54px] sm:px-9 sm:py-[74px] lg:px-14">
          <div className="mb-6">
            <Eyebrow>03 / A closer look</Eyebrow>
            <h2 className="text-[34px] font-normal leading-tight tracking-[-0.045em] sm:text-[clamp(30px,4vw,44px)]">
              A remarkable pump.<br />A vital place to start.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {[
              ["01 / Know your heart", "What does your heart do?", "Your heart moves blood around your body, delivering oxygen and nutrients to your cells.", "2 min read", "#library"],
              ["02 / Understand signs", "When chest pain is urgent", "Learn which symptoms need immediate help—and why you should never wait for certainty.", "4 min read", "#urgent"],
              ["03 / Take care", "Care for your heart, every day", "Movement, smoke-free living and knowing your risks all make a useful place to begin.", "3 min read", "#habits"],
            ].map(([kicker, title, text, readTime, href]) => (
              <article className="flex min-h-[165px] flex-col rounded-xl border border-white/[0.08] bg-surface p-[19px] sm:min-h-[194px] sm:p-[21px]" key={title}>
                <p className="mb-[11px] font-mono text-[8px] uppercase tracking-[0.09em] text-mint">{kicker}</p>
                <h3 className="mb-[7px] text-[15px] font-medium tracking-tight">{title}</h3>
                <p className="mb-[19px] text-[10px] leading-[1.7] text-muted">{text}</p>
                <a className="mt-auto flex items-center justify-between font-mono text-[9px] text-muted" href={href}>
                  {readTime}<ArrowUpRight size={13} className="text-mint" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-forest py-[51px] sm:py-[67px]" id="habits">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[29px] px-[22px] sm:grid-cols-2 sm:gap-9 sm:px-9 lg:gap-16 lg:px-14">
            <div>
              <Eyebrow>04 / Knowledge into action</Eyebrow>
              <h2 className="mb-3 text-[34px] font-normal leading-[1.13] tracking-[-0.045em]">
                Small habits.<br />Meaningful care.
              </h2>
              <p className="mb-[21px] max-w-[390px] text-[11px] leading-[1.75] text-[#b6c7c1]">
                Understanding your body is a beginning. Put that knowledge to work with practical prevention guidance.
              </p>
              <a className={`${buttonBase} border-transparent bg-ink text-cloud hover:bg-[#13221e]`} href="#library">
                Explore prevention <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
            <ul className="grid gap-[17px] sm:gap-[21px]">
              {[
                { icon: Leaf, title: "Move in ways you enjoy", text: "Build activity into your day at a pace that works for you." },
                { icon: Heart, title: "Make room for rest", text: "Regular sleep supports your physical and mental wellbeing." },
                { icon: ShieldCheck, title: "Know your own normal", text: "Notice changes and speak to a clinician when something concerns you." },
              ].map(({ icon: Icon, title, text }) => (
                <li className="grid grid-cols-[20px_1fr] gap-[13px]" key={title}>
                  <Icon size={17} className="mt-px text-mint" aria-hidden="true" />
                  <div>
                    <h3 className="mb-0.5 text-[13px] font-medium">{title}</h3>
                    <p className="text-[10px] leading-relaxed text-[#b6c7c1]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[30px] px-[22px] py-[54px] sm:gap-[38px] sm:px-9 sm:py-[76px] md:grid-cols-2 lg:gap-24 lg:px-14" id="library">
          <div className="relative md:order-none">
            <Image
              src="/Knee anatomy.svg"
              alt="Detailed 3D illustration of the knee joint"
              width={560}
              height={460}
              className="block aspect-[560/460] h-auto w-full object-cover"
            />
            <p className="absolute bottom-3 left-[13px] font-mono text-[7px] uppercase tracking-[0.08em] text-subtle">
              Explore the knee · musculoskeletal system
            </p>
          </div>
          <div>
            <Eyebrow>Beyond anatomy / The health library</Eyebrow>
            <h2 className="mb-3 text-[34px] font-normal leading-[1.13] tracking-[-0.045em]">
              Health knowledge<br />for real life.
            </h2>
            <p className="mb-[22px] text-[11px] leading-[1.8] text-muted">
              From common illnesses to everyday injuries, connect what you see inside your body with what you experience outside it.
            </p>
            <div className="mb-5 border-t border-line pt-4">
              <div className="flex items-center gap-[9px]">
                <Bone size={17} className="text-mint" aria-hidden="true" />
                <h3 className="text-[13px] font-medium">What happens in a sprain?</h3>
              </div>
              <p className="my-2 text-[10px] leading-[1.7] text-muted">
                A sprain stretches or tears a ligament—the tissue connecting bones. Learn how to protect the joint and when to seek care.
              </p>
              <span className="font-mono text-[8px] uppercase tracking-[0.09em] text-mint">Explore the musculoskeletal system</span>
            </div>
            <a className={`${buttonBase} border-line text-cloud hover:border-mint/50 hover:bg-white/5`} href="#explore">
              Explore the health library <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[30px] px-[22px] pb-[55px] pt-0 sm:gap-[38px] sm:px-9 sm:pb-[76px] sm:pt-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-14" id="urgent">
          <div>
            <Eyebrow>05 / Be better prepared</Eyebrow>
            <h2 className="mb-3 text-[34px] font-normal leading-[1.13] tracking-[-0.045em]">Know when to act.</h2>
            <p className="mb-5 max-w-[380px] text-[11px] leading-[1.75] text-muted">
              Recognizing warning signs can help you seek the right care. Start with clear, practical first-aid education.
            </p>
            <a className={`${buttonBase} border-line text-cloud hover:border-mint/50 hover:bg-white/5`} href="#disclaimer">
              Read first-aid guidance <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
          <aside className="rounded-xl border border-line bg-[#111b1f] p-[19px] sm:p-[23px]">
            <p className="mb-[18px] flex items-center gap-[7px] font-mono text-[8px] uppercase tracking-[0.1em] text-subtle">
              <span className="size-1.5 rounded-full bg-[#f0b879]" /> When to get help
            </p>
            <TriangleAlert size={19} className="text-[#f0b879]" aria-hidden="true" />
            <h3 className="mb-1 mt-2 text-[15px] font-medium">Possible heart attack?</h3>
            <p className="mb-[14px] text-[10px] leading-[1.7] text-muted">
              Chest pressure or pain, shortness of breath, sweating or pain spreading to an arm, jaw or back can be warning signs.
            </p>
            <div className="flex items-start gap-2 rounded-md border border-[#e1a068]/20 bg-[#703e21]/20 p-2.5 text-[9px] leading-[1.65] text-[#dfb58f]">
              <TriangleAlert size={15} className="shrink-0" aria-hidden="true" />
              <span>Call your local emergency number immediately. Do not drive yourself. Symptoms can vary—do not wait for them all to appear.</span>
            </div>
          </aside>
        </section>

        <section className="bg-[#0d171c] py-[31px] sm:py-[35px]" id="disclaimer">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[18px] px-[22px] sm:grid-cols-2 sm:gap-[54px] sm:px-9 lg:px-14">
            <div>
              <Eyebrow>06 / Clarity, not certainty</Eyebrow>
              <h2 className="text-[31px] font-normal leading-[1.13] tracking-[-0.045em] sm:text-[clamp(26px,3.2vw,37px)]">
                For understanding.<br />Not self-diagnosis.
              </h2>
            </div>
            <div className="text-[10px] leading-[1.75] text-muted">
              <p>HealthFact makes anatomy and health topics easier to understand. It does not diagnose conditions or replace a qualified health professional.</p>
              <p className="mt-2.5">Medical advice is personal. If you have worries about a symptom, seek advice from a clinician. In an emergency, get urgent help.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[960px] px-[22px] py-[54px] sm:px-9 sm:py-[68px]">
          <Eyebrow>07 / A few things to know</Eyebrow>
          <h2 className="mb-5 text-[32px] font-normal leading-tight tracking-[-0.045em] sm:text-[clamp(30px,4vw,42px)]">
            Curious about HealthFact?
          </h2>
          <div className="border-t border-line">
            {questions.map(({ question, answer }) => (
              <details className="group border-b border-line" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3.5 py-[15px] text-xs marker:hidden [&::-webkit-details-marker]:hidden sm:py-[17px]">
                  {question}
                  <ArrowDownRight className="shrink-0 text-mint transition-transform group-open:rotate-45" size={16} aria-hidden="true" />
                </summary>
                <p className="mb-[17px] mr-[35px] mt-[-4px] text-[11px] leading-[1.7] text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-forest text-center" id="explore">
          <div className="mx-auto flex max-w-[1240px] flex-col items-center px-[22px] py-12 sm:px-9 sm:py-[62px] lg:px-14">
            <Eyebrow>Your next discovery is you</Eyebrow>
            <h2 className="mb-[21px] text-[clamp(31px,8.5vw,43px)] font-normal leading-[1.13] tracking-[-0.045em] sm:text-[clamp(34px,5vw,53px)]">
              Get to know your body.<br />One discovery at a time.
            </h2>
            <ArrowLink href="#systems">Begin your exploration</ArrowLink>
            <p className="mt-3.5 font-mono text-[9px] text-[#b2c5bd]">Free to explore · No medical knowledge needed</p>
          </div>
        </section>
      </main>

      <footer className="py-7 pb-6" id="footer">
        <div className="mx-auto max-w-[1240px] px-[22px] sm:px-9 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-[19px] border-b border-line pb-[19px] sm:flex-row sm:items-center">
            <a className="inline-flex" href="#top" aria-label="HealthFact home">
              <Image src="/HealthFact identity.svg" alt="HealthFact" width={148} height={28} className="h-auto w-[136px]" />
            </a>
            <nav className="flex flex-wrap gap-[18px] text-[10px] text-muted sm:gap-[21px]" aria-label="Footer navigation">
              <a className="transition-colors hover:text-mint" href="#disclaimer">Privacy</a>
              <a className="transition-colors hover:text-mint" href="#disclaimer">Terms</a>
              <a className="transition-colors hover:text-mint" href="#disclaimer">Accessibility</a>
            </nav>
          </div>
          <div className="flex flex-col gap-1.5 pt-[15px] text-[9px] leading-relaxed text-subtle sm:flex-row sm:justify-between">
            <p>© 2026 HealthFact. Understand your body. Protect your health.</p>
            <p>Educational information only. Not a substitute for professional medical advice.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
