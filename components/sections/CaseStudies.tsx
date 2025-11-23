// components/sections/CaseStudies.tsx
import type { FC } from "react";

const CaseStudies: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-4">Case studies</h2>

      <article className="mb-6">
        <h3 className="font-semibold">Draggable Scheduler — Problem & Fix</h3>
        <p className="text-muted mt-2">
          Problem: Timetabling required dynamic width calculation, overlapping events, and live drag-resize operations.
          Solution: Built a grid-based positioning system using absolute transforms and a custom collision detection algorithm.
          Result: Reduced booking conflicts by 92% in user tests and improved UX for heavy scheduling flows.
        </p>
        <ul className="text-sm mt-2 text-muted">
          <li>Role: Architecture + Implementation</li>
          <li>Tech: React, TypeScript, precise DOM transforms</li>
        </ul>
      </article>

      <article>
        <h3 className="font-semibold">Subscription System — Upgrades & Downgrades</h3>
        <p className="text-muted mt-2">
          Problem: Customers needed clear upgrade/downgrade behavior, pro-rata handling and admin visibility.
          Solution: Implemented a service layer with Stripe price mapping and webhooks; built admin UI for plan migrations.
          Result: Reduced churn on plan changes; billing disputes dropped by 75%.
        </p>
        <ul className="text-sm mt-2 text-muted">
          <li>Role: Backend integration + UI flows</li>
          <li>Tech: Stripe, Prisma, Next.js API routes (export-safe patterns)</li>
        </ul>
      </article>
    </div>
  );
};

export default CaseStudies;
