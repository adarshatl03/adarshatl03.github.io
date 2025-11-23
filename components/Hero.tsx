// components/Hero.tsx
"use client";
import { useEffect, useRef } from "react";
import type { FC } from "react";

const Hero: FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;
    import("gsap").then(({ gsap }) => {
      if (!heroRef.current) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.from(".hero-title", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        })
          .from(".hero-sub", { opacity: 0, y: 10, duration: 0.8 }, "-=.6")
          .from(".hero-actions", { opacity: 0, y: 10, duration: 0.8 }, "-=.7");
      }, heroRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={heroRef} className="py-20">
      <div className="bg-card rounded-2xl p-8 shadow-sm">
        <h1 className="hero-title text-5xl font-bold text-fg">
          Hi, I&apos;m Adarsh 👋
        </h1>
        <p className="hero-sub mt-4 text-lg text-muted max-w-2xl">
          Senior React / Next.js developer — building performance-first,
          maintainable frontend systems for enterprise apps.
        </p>

        <div className="hero-actions mt-6 flex gap-4">
          <a href="/projects" className="px-4 py-2 rounded-md bg-fg text-bg">
            View work
          </a>
          <a
            href="/contact"
            className="px-4 py-2 rounded-md border border-fg text-fg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
