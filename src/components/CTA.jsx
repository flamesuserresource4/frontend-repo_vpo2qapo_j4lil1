import React from 'react';
import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-white/70">Available for select freelance projects and collaborations.</p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">Prefer X/LinkedIn? Happy to connect there too.</p>
        </div>
      </div>
    </section>
  );
}
