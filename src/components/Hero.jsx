import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-fuchsia-400" />
              <span>Software Engineer · SaaS Builder</span>
            </div>
            <h1 className="font-semibold tracking-tight text-white text-4xl leading-tight md:text-6xl">
              Clean, modern SaaS experiences that ship fast and scale.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-xl">
              I design and build interactive, production-grade web apps with polished UX, robust APIs, and thoughtful performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#showcase"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
              >
                <Rocket className="h-4 w-4" />
                Start a project
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Code2 className="h-4 w-4" />
                View capabilities
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-white/60">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                <img src="https://i.pravatar.cc/40?img=2" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                <img src="https://i.pravatar.cc/40?img=3" alt="avatar" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              </div>
              <p>Trusted by founders, startups, and teams.</p>
            </div>
          </div>

          <div className="relative h-[420px] w-full md:h-[560px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
