
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/8 mt-12 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-indigo-400 flex items-center justify-center text-white font-bold">D</div>
          <span className="font-semibold">Dimension</span>
        </div>
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Dimension. Built with Next.js + Tailwind.</div>
      </div>
    </footer>
  );
}
