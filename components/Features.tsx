
import React from 'react';

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/8 shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Everything you need to build docs & landing pages</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Reusable components, blazing-fast delivery, and delightful micro-interactions out of the box.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Composable UI" desc="Create pages from small, reusable building blocks that share a consistent design language." />
          <FeatureCard title="Fast by default" desc="Server-side rendering, trimmed bundles, and sensible defaults keep pages fast." />
          <FeatureCard title="Interactive" desc="Micro-interactions and animated transitions powered by Framer Motion when needed." />
          <FeatureCard title="Accessible" desc="Components that look great and follow best accessibility practices." />
          <FeatureCard title="Docs-first" desc="Author docs as components — interleave examples, code, and live previews." />
          <FeatureCard title="Deploy anywhere" desc="Static export or server-render — integrate with your existing infra." />
        </div>
      </div>
    </section>
  );
}
