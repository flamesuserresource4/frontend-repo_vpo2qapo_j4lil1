import React from 'react';
import { Sparkles, ShieldCheck, Rocket, Gauge } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-5 w-5 text-fuchsia-400" />,
    title: 'Rapid delivery',
    desc: 'Move from idea to polished product quickly with iterative sprints and clean architecture.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-fuchsia-400" />,
    title: 'Robust foundations',
    desc: 'Type-safe APIs, strong auth, and battle‑tested tooling to scale with confidence.',
  },
  {
    icon: <Gauge className="h-5 w-5 text-fuchsia-400" />,
    title: 'Performance first',
    desc: 'Ship snappy interfaces and optimized backends with real‑world monitoring.',
  },
  {
    icon: <Sparkles className="h-5 w-5 text-fuchsia-400" />,
    title: 'Polished UX',
    desc: 'Thoughtful micro‑interactions and accessible components for a delightful feel.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What I bring to your SaaS</h2>
          <p className="mt-3 text-white/70">A practical blend of product thinking, engineering, and design.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-fuchsia-400/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
