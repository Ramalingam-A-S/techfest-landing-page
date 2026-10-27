import React from 'react';
import { ArrowDown, ExternalLink, Zap, Compass } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';
import { RadarReticle, TrajectoryVector, CornerBracket } from './VectorGraphics';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-void"
    >
      {/* 2D Background Vector Grid & Atmospheric Radiance */}
      <div className="absolute inset-0 bg-grid-technical opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[900px] sm:h-[450px] bg-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-orange/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative 2D Technical Radar Reticle (Absolute Left & Right Accents) */}
      <div className="absolute top-20 right-6 sm:right-16 opacity-30 pointer-events-none hidden md:block">
        <RadarReticle className="w-56 h-56 text-cyan/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Telemetry Annotation Header */}
        <div className="reveal-on-scroll flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8 font-mono text-xs sm:text-sm text-gray-400">
          <div className="flex items-center space-x-2 bg-surface border border-white/10 px-3 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan font-bold">IIT BOMBAY</span>
            <span className="text-gray-500">//</span>
            <span>{SITE_DATA.meta.editionOrdinal}</span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 bg-surface/50 border border-white/5 px-3 py-1 rounded text-gray-400">
            <Compass className="w-3.5 h-3.5 text-cyan" />
            <span>{SITE_DATA.meta.coordinates}</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-orange/10 border border-orange/30 px-3 py-1 rounded text-orange font-semibold text-xs">
            <Zap className="w-3.5 h-3.5" />
            <span>ASIA'S LARGEST TECH FESTIVAL</span>
          </div>
        </div>

        {/* Oversized Stacked Headline */}
        <div className="relative mb-6 sm:mb-8">
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95]"
          >
            <span className="block reveal-on-scroll">THE FUTURE</span>
            <span className="block reveal-on-scroll text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan to-cyan-dark">
              IS BUILT HERE.
            </span>
          </h1>

          {/* Subtitle / Narrative */}
          <div className="reveal-on-scroll max-w-3xl mt-6 sm:mt-8">
            <p className="text-base sm:text-xl text-gray-300 font-normal leading-relaxed">
              The premier international science and technology crucible of <strong className="text-white font-semibold">IIT Bombay</strong>. 
              Uniting over <span className="text-cyan font-mono font-medium">175,000+</span> global minds across combat robotics, autonomous systems, agentic artificial intelligence, aerospace, and hands-on certified engineering.
            </p>
          </div>
        </div>

        {/* Action Controls & Official Portal Path */}
        <div className="reveal-on-scroll flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-2">
          {/* Primary Action Button */}
          <a
            href="https://techfest.org/competitions"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center space-x-3 px-8 py-4 bg-cyan hover:bg-white text-void font-mono font-bold text-sm tracking-wider rounded transition-all duration-200 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] group"
          >
            <span>REGISTER FOR TECHFEST 2026–27</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary Action Anchor */}
          <a
            href="#discover"
            className="inline-flex items-center justify-center space-x-3 px-7 py-4 bg-surface hover:bg-surface-elevated border border-white/15 hover:border-cyan/50 text-gray-200 hover:text-cyan font-mono text-sm tracking-wider rounded transition-all duration-200 group"
          >
            <span>EXPLORE FESTIVAL VERTICALS</span>
            <ArrowDown className="w-4 h-4 text-cyan transition-transform group-hover:translate-y-1" />
          </a>

          {/* Accommodation Quick Link */}
          <a
            href="https://techfest.org/accommodation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-4 py-3 text-xs font-mono text-gray-400 hover:text-white transition-colors text-center"
          >
            <span>Campus Stay at IITB &rarr;</span>
          </a>
        </div>

        {/* Technical HUD Metrics Ribbon (Below Headline) */}
        <div className="reveal-on-scroll mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {SITE_DATA.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative bg-surface/70 border border-white/10 hover:border-cyan/40 p-4 rounded transition-all duration-200"
            >
              <CornerBracket position="top-left" className="absolute top-1.5 left-1.5 w-2 h-2 text-cyan/40" />
              <CornerBracket position="bottom-right" className="absolute bottom-1.5 right-1.5 w-2 h-2 text-cyan/40" />
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {metric.value}
              </div>
              <div className="font-mono text-xs text-cyan font-medium uppercase mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trajectory Graphic & Scroll Indicator */}
      <div className="w-full relative mt-8 z-10">
        <TrajectoryVector className="w-full h-12 sm:h-16 opacity-40" />
        <div className="flex items-center justify-center mt-2">
          <a
            href="#discover"
            className="flex items-center space-x-2 text-[11px] font-mono text-gray-400 hover:text-cyan transition-colors"
            aria-label="Scroll to discover section"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-bounce" />
            <span>SCROLL TO EXPLORE DISCOVERY MATRICES</span>
          </a>
        </div>
      </div>
    </section>
  );
};
