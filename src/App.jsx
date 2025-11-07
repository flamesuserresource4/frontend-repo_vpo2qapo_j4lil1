import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 text-white">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
            <span>SE Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10">Hire me</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Your Name — Built with love and clean code.</p>
      </footer>
    </div>
  );
}

export default App;
