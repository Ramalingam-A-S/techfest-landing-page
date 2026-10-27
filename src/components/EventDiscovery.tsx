import React, { useState } from 'react';
import { ExternalLink, Zap, BookOpen, Cpu, Users, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';
import { CrosshairIcon, CornerBracket } from './VectorGraphics';

type CategoryFilter = 'all' | 'competitions' | 'workshops' | 'exhibitions' | 'speakers';

export const EventDiscovery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  return (
    <section
      id="discover"
      aria-labelledby="discover-heading"
      className="relative py-24 sm:py-36 bg-void"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan mb-3 tracking-widest">
              <CrosshairIcon className="w-4 h-4 text-cyan" />
              <span>// 02 DISCOVERY PORTAL</span>
            </div>
            <h2
              id="discover-heading"
              className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
            >
              DISCOVER THE FESTIVAL VERTICALS.
            </h2>
            <p className="mt-3 text-base text-gray-400 max-w-2xl">
              Navigate verified domains across heavy combat robotics, algorithmic software sprints, hands-on certified workshops, and global scientific exhibitions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Verticals' },
              { id: 'competitions', label: 'Competitions' },
              { id: 'workshops', label: 'Workshops' },
              { id: 'exhibitions', label: 'Exhibitions' },
              { id: 'speakers', label: 'Keynotes' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`px-3.5 py-1.5 rounded font-mono text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-cyan text-void font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'bg-surface text-gray-400 hover:text-white hover:bg-surface-elevated border border-white/5'
                }`}
                aria-pressed={activeFilter === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. COMPETITIONS SHOWCASE */}
        {(activeFilter === 'all' || activeFilter === 'competitions') && (
          <div id="competitions" className="mb-16">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="p-1.5 bg-orange/20 border border-orange/40 text-orange rounded">
                  <Zap className="w-4 h-4" />
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  Flagship Competitions & Challenges
                </h3>
              </div>
              <a
                href="https://techfest.org/competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-cyan hover:underline"
              >
                <span>View all on techfest.org</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SITE_DATA.competitions.map((comp) => (
                <div
                  key={comp.id}
                  className="reveal-on-scroll relative bg-surface border border-white/10 hover:border-cyan/50 p-6 rounded-lg transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
                >
                  <CornerBracket position="top-left" className="absolute top-2 left-2 w-2.5 h-2.5 text-cyan/40 group-hover:text-cyan" />
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan/10 border border-cyan/30 text-cyan">
                        {comp.category}
                      </span>
                      {comp.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange/20 border border-orange/40 text-orange font-bold">
                          FLAGSHIP
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-xl text-white group-hover:text-cyan transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-xs font-mono text-gray-400 mt-1 mb-3">
                      {comp.tagline}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {comp.description}
                    </p>

                    {/* Specs / Tags */}
                    <div className="space-y-1.5 py-3 border-t border-b border-white/5 my-3">
                      {comp.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center space-x-2 text-[11px] font-mono text-gray-400">
                          <span className="w-1 h-1 rounded-full bg-cyan" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex items-center justify-between mt-auto">
                    <span className="text-xs font-mono text-gray-400">
                      Prize: <strong className="text-white">{comp.prize}</strong>
                    </span>
                    <a
                      href={comp.verifiedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 bg-surface-elevated hover:bg-cyan hover:text-void border border-white/10 text-cyan text-xs font-mono font-semibold rounded transition-colors"
                      aria-label={`Register for ${comp.title} on techfest.org`}
                    >
                      <span>Rulebook & Enter</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. WORKSHOPS SHOWCASE */}
        {(activeFilter === 'all' || activeFilter === 'workshops') && (
          <div id="workshops" className="mb-16">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="p-1.5 bg-cyan/20 border border-cyan/40 text-cyan rounded">
                  <BookOpen className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Certified Technical Workshops
                  </h3>
                  <div className="text-xs font-mono text-cyan mt-0.5">
                    Official Certificate of Training from Techfest IIT Bombay
                  </div>
                </div>
              </div>
              <a
                href="https://techfest.org/workshops"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-cyan hover:underline"
              >
                <span>View all workshops</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SITE_DATA.workshops.map((ws) => (
                <div
                  key={ws.id}
                  className="reveal-on-scroll bg-surface border border-white/10 hover:border-cyan/50 p-6 rounded-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-gray-400">
                        {ws.domain}
                      </span>
                      {ws.earlyBird && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange/20 border border-orange/40 text-orange font-bold">
                          EARLY BIRD PASS
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-xl text-white group-hover:text-cyan transition-colors">
                      {ws.title}
                    </h4>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      {ws.summary}
                    </p>

                    {/* Core Skills Checklist */}
                    <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-white/5">
                      {ws.skills.map((skill, skIdx) => (
                        <div key={skIdx} className="flex items-center space-x-1.5 text-[11px] font-mono text-gray-400">
                          <span className="text-cyan font-bold">&gt;</span>
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <div className="text-[11px] font-mono text-gray-400">
                      Duration: <span className="text-white">{ws.duration}</span>
                    </div>
                    <a
                      href={ws.verifiedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan text-void font-mono text-xs font-bold rounded hover:bg-white transition-colors"
                    >
                      <span>Enroll in Workshop</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. EXHIBITIONS SHOWCASE */}
        {(activeFilter === 'all' || activeFilter === 'exhibitions') && (
          <div id="exhibitions" className="mb-16">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="p-1.5 bg-cyan/20 border border-cyan/40 text-cyan rounded">
                  <Cpu className="w-4 h-4" />
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  World Technology Exhibitions & Robotics
                </h3>
              </div>
              <a
                href="https://techfest.org/exhibitions"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-cyan hover:underline"
              >
                <span>View all exhibits</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SITE_DATA.exhibitions.map((exhibit) => (
                <div
                  key={exhibit.id}
                  className="reveal-on-scroll bg-surface border border-white/10 hover:border-cyan/40 p-5 rounded-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="text-[11px] font-mono text-cyan mb-1">
                      {exhibit.organization}
                    </div>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan transition-colors">
                      {exhibit.title}
                    </h4>
                    <div className="text-[10px] font-mono text-gray-400 mb-3">
                      Origin: {exhibit.origin}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {exhibit.description}
                    </p>
                  </div>

                  <a
                    href={exhibit.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full pt-3 border-t border-white/5 text-xs font-mono text-gray-300 group-hover:text-cyan"
                  >
                    <span>Inspect Prototype</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. KEYNOTE SPEAKERS & PIONEERS */}
        {(activeFilter === 'all' || activeFilter === 'speakers') && (
          <div id="speakers" className="mb-6">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="p-1.5 bg-orange/20 border border-orange/40 text-orange rounded">
                  <Users className="w-4 h-4" />
                </span>
                <h3 className="font-display font-bold text-2xl text-white">
                  World Keynotes & Nobel Lectures
                </h3>
              </div>
              <a
                href="https://techfest.org/lectures"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-mono text-cyan hover:underline"
              >
                <span>Lectures Archive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SITE_DATA.speakers.map((spk, sIdx) => (
                <div
                  key={sIdx}
                  className="reveal-on-scroll bg-surface border border-white/10 p-5 rounded-lg hover:border-cyan/40 transition-colors"
                >
                  <div className="text-[10px] font-mono text-cyan mb-1 uppercase tracking-wider">
                    {spk.category}
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {spk.name}
                  </h4>
                  <div className="text-xs font-mono text-gray-400 mt-0.5 mb-2">
                    {spk.role}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {spk.notability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
