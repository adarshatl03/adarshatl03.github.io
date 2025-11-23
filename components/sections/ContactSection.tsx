// components/sections/ContactSection.tsx
import { Button } from "@/components/ui/button";
import type { FC } from "react";

const ContactSection: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold">Let&apos;s build something</h2>
        <p className="text-muted mt-1">
          Open to freelance contracts, collaborations, and senior roles.
        </p>
      </div>

      <div className="mt-4 md:mt-0 flex gap-3">
        <a href="mailto:you@example.com">
          <Button>Hire me</Button>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <Button variant="outline">Download resume</Button>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
