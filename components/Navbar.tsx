import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-40 top-0 left-0 backdrop-blur-md bg-white/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-400 flex items-center justify-center text-white font-bold">D</div>
          <span className="font-semibold">Dimension</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline" href="#features">Features</a>
          <a className="hover:underline" href="#pricing">Pricing</a>
          <a className="hover:underline" href="#docs">Docs</a>
          <button className="px-4 py-2 rounded-lg bg-brand-500 text-white shadow-lg hover:opacity-95">Get Started</button>
        </div>
        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-lg">☰</button>
        </div>
      </div>
    </nav>
  );
}
