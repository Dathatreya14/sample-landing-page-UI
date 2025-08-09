
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
      <motion.div className="blob absolute left-1/2 top-10 w-80 h-80 rounded-full bg-purple-400/60" animate={{ x: [-60, 60, -40], y: [0, 20, -10], scale: [1, 1.08, 1] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} />
      <motion.div className="blob absolute -left-24 top-48 w-64 h-64 rounded-full bg-indigo-300/60" animate={{ x: [0, 40, -20], y: [-10, 10, -5], scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} />
      <motion.div className="blob absolute right-8 bottom-8 w-72 h-72 rounded-full bg-cyan-300/55" animate={{ x: [10, -30, 10], y: [0, -20, 0], scale: [1, 1.06, 1] }} transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }} />
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <AnimatedBlobs />
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} className="md:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Ship beautiful interactive docs and websites
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"> — fast.</span>
            </h1>
            <p className="mt-6 text-lg max-w-2xl text-slate-700">A minimal, composable system for building fast marketing sites and beautiful documentation — with delightful micro-interactions and helpful UI primitives.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-brand-500 text-white px-5 py-3 font-medium shadow-lg">Get started</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 font-medium bg-white/5">View demo</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500 items-center">
              <span className="inline-flex items-center gap-3"><strong className="text-slate-900">99.98%</strong> uptime</span>
              <span className="mx-2">•</span>
              <span className="inline-flex items-center gap-3">Trusted by teams at startups</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="h-48 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-2xl font-semibold text-indigo-700">Interactive preview</div>
              <div className="mt-4 text-sm text-slate-600">Lightweight components, server-rendered pages, and optional client interactions for a fast authoring experience.</div>
              <div className="mt-6 flex gap-3">
                <button className="flex-1 px-4 py-2 rounded-lg border border-white/10">Docs</button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white">Playground</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
