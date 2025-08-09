
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold">Simple pricing that grows with your team</h3>
            <p className="mt-3 text-slate-600">Start free. Upgrade when you need collaboration, analytics, and SSO.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="p-6 rounded-2xl border border-white/8">
                <div className="font-semibold">Free</div>
                <div className="mt-2 text-3xl font-extrabold">$0</div>
                <div className="mt-4 text-sm text-slate-600">Up to 3 projects, community support.</div>
              </div>
              <div className="p-6 rounded-2xl border border-white/8 bg-white/5">
                <div className="font-semibold">Team</div>
                <div className="mt-2 text-3xl font-extrabold">$15<span className="text-sm font-medium">/member</span></div>
                <div className="mt-4 text-sm text-slate-600">Unlimited projects, private repos, SSO.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
