// components/sections/Testimonials.tsx
import type { FC } from "react";

const quotes = [
  {
    who: "PM, Bahri",
    text: "Delivered robust UI that scaled across multiple fleets.",
  },
  {
    who: "CTO, TripCo",
    text: "Clean, readable code + pragmatic architecture.",
  },
];

const Testimonials: FC = () => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm text-fg">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {quotes.map((q) => (
          <blockquote key={q.who} className="p-4 bg-glass rounded-md">
            <p className="text-muted">“{q.text}”</p>
            <footer className="mt-2 text-sm text-muted">— {q.who}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
