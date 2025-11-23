// app/page.tsx
import Hero from "@/components/Hero";
import TechStack from "@/components/sections/TechStack";
import Strengths from "@/components/sections/Strengths";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <Hero />
      <main className="space-y-24">
        <section className="py-8">
          <TechStack />
        </section>
        <section className="py-8">
          <Strengths />
        </section>
        <section className="py-8">
          <FeaturedProjects />
        </section>
        <section className="py-8">
          <CaseStudies />
        </section>
        <section className="py-8">
          <Process />
        </section>
        <section className="py-8">
          <Testimonials />
        </section>
        <section className="py-8">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
