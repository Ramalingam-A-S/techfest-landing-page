import React from 'react';
import { Sparkles, MapPin, Music2, Eye, Flame } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';
import { CrosshairIcon, CornerBracket } from './VectorGraphics';

export const FestivalAtmosphere: React.FC = () => {
  return (
    <section
      id="atmosphere"
      aria-labelledby="atmosphere-heading"
      className="relative py-24 sm:py-36 bg-surface/20 border-t border-b border-white/5 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal-on-scroll max-w-3xl mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan mb-3 tracking-widest">
            <CrosshairIcon className="w-4 h-4 text-cyan" />
            <span>// 05 FESTIVAL ATMOSPHERE</span>
          </div>
          <h2
            id="atmosphere-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
          >
            THE ELECTRIFYING TECHFEST EXPERIENCE.
          </h2>
          <p className="mt-3 text-base text-gray-400">
            When daytime technical heats conclude, the festival transforms into an open-air spectacle of music, lasers, and international performance arts.
          </p>
        </div>

        {/* 4-Column Editorial Atmosphere Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.atmosphereHighlights.map((item, idx) => (
            <div
              key={idx}
              className="reveal-on-scroll relative bg-surface border border-white/10 hover:border-cyan/50 p-6 rounded-lg transition-all flex flex-col justify-between group"
            >
              <CornerBracket position="top-left" className="absolute top-2 left-2 w-2.5 h-2.5 text-cyan/40 group-hover:text-cyan" />
              
              <div>
                <div className="p-2.5 w-fit rounded bg-cyan/10 border border-cyan/30 text-cyan mb-4">
                  {idx === 0 && <Music2 className="w-5 h-5" />}
                  {idx === 1 && <Flame className="w-5 h-5" />}
                  {idx === 2 && <Eye className="w-5 h-5" />}
                  {idx === 3 && <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Venue Tag */}
              <div className="pt-3 border-t border-white/5 flex items-center space-x-1.5 text-[11px] font-mono text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span className="truncate">{item.venue}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Night Pro-Nite Callout Banner */}
        <div className="reveal-on-scroll mt-12 bg-gradient-to-r from-surface-elevated via-surface to-surface-elevated border border-white/10 p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-orange mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MARQUEE NIGHT FESTIVAL: TECHNOHOLIX</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Complimentary Night Access for Registered Participants
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              Registration in any Techfest competition or workshop includes free general admission passes to Technoholix Pro-Nites and world tech exhibitions.
            </p>
          </div>

          <a
            href="https://techfest.org/competitions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan text-void font-mono font-bold text-xs tracking-wider rounded hover:bg-white transition-colors shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            CLAIM PASS WITH REGISTRATION &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
