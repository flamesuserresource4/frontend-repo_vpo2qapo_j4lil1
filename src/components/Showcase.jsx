import React from 'react';

const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Streamed metrics, role-based access, and sleek, responsive charts.',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI-Powered Support Assistant',
    desc: 'Context-aware chat with docs ingestion and analytics.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Subscription Billing Platform',
    desc: 'Plans, trials, metered usage, and seamless Stripe integration.',
    img: 'https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected work</h2>
          <p className="mt-3 text-white/70">A few recent builds spanning dashboards, AI, and billing.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
