import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Precision Progress Line */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-cyan z-50 transition-all duration-75 shadow-[0_0_8px_rgba(0,240,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark Treatment */}
            <a
              href="#"
              className="group flex items-center space-x-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              aria-label="Techfest IIT Bombay 2026-27 Homepage"
            >
              {/* Geometric Emblem */}
              <div className="relative w-9 h-9 bg-surface-elevated border border-cyan/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-transparent" />
                <span className="font-mono text-cyan font-bold text-sm tracking-wider">TF</span>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange transform rotate-45" />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan transition-colors">
                    TECHFEST
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan/10 border border-cyan/30 text-cyan">
                    2026–27
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-gray-400">
                  <span>IIT BOMBAY</span>
                  <span className="text-gray-600">//</span>
                  <span className="text-cyan/80">SAC POWAI</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 font-mono text-xs tracking-wider">
              <a
                href="#discover"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors"
              >
                // DISCOVER
              </a>
              <a
                href="#competitions"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors"
              >
                COMPETITIONS
              </a>
              <a
                href="#workshops"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors relative"
              >
                WORKSHOPS
                <span className="ml-1.5 px-1.5 py-0.2 rounded text-[9px] bg-orange/20 border border-orange/40 text-orange font-semibold">
                  EARLY BIRD
                </span>
              </a>
              <a
                href="#robowars"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors"
              >
                ROBOWARS
              </a>
              <a
                href="#exhibitions"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors"
              >
                EXHIBITIONS
              </a>
              <a
                href="#about"
                className="px-3 py-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded transition-colors"
              >
                ABOUT
              </a>
            </nav>

            {/* Telemetry Status & Registration CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Telemetry Indicator */}
              <div className="hidden xl:flex items-center space-x-2 text-[11px] font-mono text-gray-400 bg-surface/60 border border-white/10 px-2.5 py-1.5 rounded">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                </span>
                <span>EDITION 29 // LIVE</span>
              </div>

              {/* Official Registration Action */}
              <a
                href="https://techfest.org/competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center space-x-2 px-4 py-2 font-mono text-xs font-bold text-void bg-cyan hover:bg-white hover:text-black transition-all duration-200 rounded shadow-[0_0_15px_rgba(0,240,255,0.4)] group"
                aria-label="Register on Techfest official portal (opens in new tab)"
              >
                <span>[ REGISTER ]</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="https://techfest.org/competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-mono font-bold text-void bg-cyan rounded sm:hidden"
              >
                REGISTER
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-300 hover:text-cyan hover:bg-white/5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Fullscreen Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-void/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-between p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span className="font-display font-extrabold text-xl text-white">TECHFEST</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan/10 border border-cyan/30 text-cyan">
                2026–27
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="py-8 space-y-4 font-mono text-sm">
            <div className="text-[11px] text-cyan/70 tracking-widest">// FESTIVAL NAVIGATION</div>
            <a
              href="#discover"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              01 // Discover Festival
            </a>
            <a
              href="#competitions"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              02 // Competitions & Challenges
            </a>
            <a
              href="#workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              <span>03 // Certified Workshops</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-orange/20 border border-orange/40 text-orange">
                EARLY BIRD
              </span>
            </a>
            <a
              href="#robowars"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              04 // International Robowars
            </a>
            <a
              href="#exhibitions"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              05 // World Exhibitions
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              06 // About Techfest & IIT Bombay
            </a>
            <a
              href="https://techfest.org/accommodation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded bg-surface border border-white/5 text-gray-200 hover:text-cyan hover:border-cyan/40 transition-colors"
            >
              <span>07 // Campus Accommodation</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </nav>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <a
              href="https://techfest.org/competitions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-cyan text-void font-mono font-bold text-sm rounded shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <span>REGISTER FOR TECHFEST 2026–27</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
              <span>OFFICIAL REGISTRATION PORTAL: TECHFEST.ORG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
