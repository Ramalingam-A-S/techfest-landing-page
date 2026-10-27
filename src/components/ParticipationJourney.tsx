import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';
import { CrosshairIcon, CornerBracket } from './VectorGraphics';

export const ParticipationJourney: React.FC = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative py-24 sm:py-36 bg-void"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal-on-scroll max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan mb-3 tracking-widest">
            <CrosshairIcon className="w-4 h-4 text-cyan" />
            <span>// 04 ONBOARDING PROTOCOL</span>
          </div>
          <h2
            id="journey-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
          >
            THE PARTICIPATION JOURNEY.
          </h2>
          <p className="mt-3 text-base text-gray-400">
            From initial team formation to competing on the main stage at IIT Bombay Powai. Follow the verified pathway.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.steps.map((step, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll relative bg-surface border border-white/10 hover:border-cyan/50 p-6 rounded-lg transition-all flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
            >
              <CornerBracket position="top-left" className="absolute top-2 left-2 w-2.5 h-2.5 text-cyan/40 group-hover:text-cyan" />
              
              <div>
                {/* Step Number & Connector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-cyan/70 group-hover:text-cyan transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={step.actionUrl}
                  target={step.isExternal ? '_blank' : undefined}
                  rel={step.isExternal ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-cyan hover:text-white transition-colors"
                >
                  <span>{step.actionText}</span>
                  {step.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Accommodation Quick Reminder Card */}
        <div className="reveal-on-scroll mt-12 bg-surface-elevated border border-white/10 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-cyan/10 border border-cyan/30 rounded-full text-cyan">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-base">
                Outstation Contingent & Visitor Accommodation
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Official student housing inside IIT Bombay hostels during fest dates. Early booking required.
              </div>
            </div>
          </div>

          <a
            href="https://techfest.org/accommodation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-cyan text-void font-mono font-bold text-xs rounded hover:bg-white transition-colors shrink-0"
          >
            VIEW ACCOMMODATION GUIDELINES &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
