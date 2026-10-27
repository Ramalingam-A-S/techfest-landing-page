import React from 'react';
import { Award, Globe, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';
import { CrosshairIcon, CornerBracket } from './VectorGraphics';

export const FestivalIdentity: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-32 bg-surface/40 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Subtle Background Grids */}
      <div className="absolute inset-0 bg-dots-technical opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Tag */}
        <div className="reveal-on-scroll flex items-center space-x-2 text-xs font-mono text-cyan mb-4 tracking-widest">
          <CrosshairIcon className="w-4 h-4 text-cyan" />
          <span>// 01 ARCHITECTURE & HERITAGE</span>
        </div>

        {/* 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Narrative & Identity */}
          <div className="lg:col-span-7 space-y-6">
            <h2
              id="about-heading"
              className="reveal-on-scroll font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
            >
              WHERE THE WORLD'S SHARPEST MINDS CONVERGE AT <span className="text-cyan">IIT BOMBAY</span>.
            </h2>

            <div className="reveal-on-scroll space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Founded in 1998 within the iconic Students Activity Centre (SAC) at IIT Bombay, <strong className="text-white">Techfest</strong> has grown over nearly three decades into Asia's unchallenged premier science and technology festival.
              </p>
              <p>
                Techfest serves as an unforgiving proving ground where textbook theory meets physical reality. From heavyweight titanium-armored robots clashing in high-octane combat arenas to real-time agentic AI prompt hackathons, autonomous rovers, and world summits addressed by Nobel Laureates and space commanders.
              </p>
              <p className="text-sm sm:text-base text-gray-400 font-mono">
                Headquartered across the lush 550-acre lakeside campus in Powai, Mumbai, Techfest remains entirely student-orchestrated, adhering to the highest global engineering standards and certified institutional rigor.
              </p>
            </div>

            {/* Official Institutional Accreditations & Patronages */}
            <div className="reveal-on-scroll pt-4">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                Official Patronages & Global Endorsements
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SITE_DATA.meta.patronages.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-surface-elevated border border-white/10 px-3.5 py-1.5 rounded text-xs font-mono text-gray-200"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card & Campus Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Feature Container */}
            <div className="reveal-on-scroll relative bg-surface-elevated border border-white/10 rounded-lg p-6 overflow-hidden group hover:border-cyan/40 transition-colors">
              <CornerBracket position="top-left" className="absolute top-2 left-2 w-3 h-3 text-cyan" />
              <CornerBracket position="bottom-right" className="absolute bottom-2 right-2 w-3 h-3 text-cyan" />

              {/* Decorative Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-gray-400">
                <span className="flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-cyan" />
                  <span>IIT BOMBAY SAC SYSTEM</span>
                </span>
                <span className="text-cyan font-semibold">EST. 1998</span>
              </div>

              {/* Core Pillars */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-cyan/10 border border-cyan/30 rounded text-cyan shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">Uncompromising Merit</h3>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      All competitions are evaluated under blind, rigorous judging criteria by IIT Bombay faculty, industry leads, and global experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-orange/10 border border-orange/30 rounded text-orange shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">Global Footprint</h3>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      Welcomes teams from 25+ nations with dedicated international combat brackets, cross-border hackathons, and global exhibitions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-cyan/10 border border-cyan/30 rounded text-cyan shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-mono">Hands-on Industry Impact</h3>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      Official training certifications, direct recruiting pathways, and seed incubation opportunities through IIT Bombay partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Campus Location Coordinates Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>VENUE: POWAI, MUMBAI - 400076</span>
                <a
                  href="https://techfest.org/contactus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  Contact SAC Team &rarr;
                </a>
              </div>
            </div>

            {/* Quick Accommodation Banner */}
            <div className="reveal-on-scroll bg-gradient-to-r from-cyan-dim to-transparent border border-cyan/30 p-4 rounded-lg flex items-center justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-cyan">CAMPUS HOUSING AVAILABLE</div>
                <div className="text-[12px] text-gray-300">Stay inside IIT Bombay during Techfest</div>
              </div>
              <a
                href="https://techfest.org/accommodation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-cyan text-void font-mono text-xs font-bold rounded hover:bg-white transition-colors"
              >
                BOOK STAY
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
