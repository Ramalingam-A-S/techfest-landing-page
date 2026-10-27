import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { TrajectoryVector } from './VectorGraphics';

export const FinalCta: React.FC = () => {
  return (
    <section
      id="register-final"
      aria-labelledby="final-cta-heading"
      className="relative py-28 sm:py-40 bg-void overflow-hidden"
    >
      {/* 2D Background Atmospheric Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Subhead Tag */}
        <div className="reveal-on-scroll inline-flex items-center space-x-2 text-xs font-mono text-cyan mb-6 px-3 py-1 rounded bg-cyan/10 border border-cyan/30 tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>// 06 CONVERGENCE</span>
        </div>

        {/* Climax Typographic Statement */}
        <h2
          id="final-cta-heading"
          className="reveal-on-scroll font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
        >
          THE NEXT ERA OF TECHNOLOGY WILL NOT BUILD ITSELF.
        </h2>

        <p className="reveal-on-scroll mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Step into the arena. Whether competing in 60kg titanium combat robotics, architecting agentic AI pipelines, or earning an official IIT Bombay technical training certification, your chapter begins here.
        </p>

        {/* High-Contrast Action Pathways */}
        <div className="reveal-on-scroll mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://techfest.org/competitions"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-cyan hover:bg-white text-void font-mono font-bold text-sm tracking-wider rounded transition-all duration-200 shadow-[0_0_30px_rgba(0,240,255,0.4)] group"
          >
            <span>REGISTER ON TECHFEST.ORG</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://techfest.org/workshops"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 bg-surface hover:bg-surface-elevated border border-white/15 hover:border-cyan/40 text-gray-200 hover:text-cyan font-mono text-sm tracking-wider rounded transition-all"
          >
            <span>WORKSHOPS (EARLY BIRD)</span>
            <ArrowRight className="w-4 h-4 text-cyan" />
          </a>
        </div>

        {/* Security & Verification Callout */}
        <div className="reveal-on-scroll mt-10 flex items-center justify-center space-x-2 text-xs font-mono text-gray-400">
          <ShieldCheck className="w-4 h-4 text-cyan" />
          <span>OFFICIAL REGISTRATION PORTAL HOSTED AT TECHFEST.ORG // SAC IIT BOMBAY</span>
        </div>
      </div>

      <div className="w-full mt-12">
        <TrajectoryVector className="w-full h-12 opacity-30" />
      </div>
    </section>
  );
};
