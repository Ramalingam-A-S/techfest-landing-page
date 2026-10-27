import React from 'react';
import { ArrowUp, ExternalLink, MapPin, Compass } from 'lucide-react';
import { SITE_DATA } from '../data/siteContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      id="contact"
      className="relative bg-surface-elevated/70 border-t border-white/10 pt-16 pb-12 overflow-hidden text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Campus Coordinates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                TECHFEST
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan/10 border border-cyan/30 text-cyan">
                IIT BOMBAY
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Asia’s Largest Science and Technology Festival. Organized annually by the students of the Indian Institute of Technology Bombay since 1998.
            </p>

            <div className="pt-2 text-xs font-mono text-gray-400 space-y-1.5">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>SAC, IIT Bombay, Powai, Mumbai 400076, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass className="w-3.5 h-3.5 text-cyan shrink-0" />
                <span>{SITE_DATA.meta.coordinates} // Powai Lake Campus</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-cyan uppercase tracking-wider mb-2">
                Official Channels
              </div>
              <div className="flex flex-wrap gap-2">
                {SITE_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 text-xs font-mono bg-surface border border-white/10 hover:border-cyan hover:text-cyan rounded transition-colors"
                    aria-label={`Techfest on ${social.name} (opens in new tab)`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Event Verticals */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-cyan font-bold tracking-wider uppercase">
              // Event Verticals
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#robowars" className="hover:text-cyan transition-colors">
                  International Robowars
                </a>
              </li>
              <li>
                <a href="#competitions" className="hover:text-cyan transition-colors">
                  Technical Competitions
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-cyan transition-colors">
                  Certified Workshops
                </a>
              </li>
              <li>
                <a href="#exhibitions" className="hover:text-cyan transition-colors">
                  World Tech Exhibitions
                </a>
              </li>
              <li>
                <a href="https://techfest.org/twmun" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Techfest World MUN</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-cyan transition-colors">
                  Technoholix Pro-Nite
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics & Hospitality */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-cyan font-bold tracking-wider uppercase">
              // Logistics & Stay
            </div>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://techfest.org/accommodation" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Campus Accommodation</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://techfest.org/contactus" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Contact SAC Team</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://techfest.org/history" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Festival History (1998)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://techfest.org/media" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Media Room & Press</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://techfest.org/recognition" target="_blank" rel="noopener noreferrer" className="hover:text-cyan flex items-center space-x-1">
                  <span>Global Recognition</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Patronages */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-cyan font-bold tracking-wider uppercase">
              // Patronages
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Held under the continuous global patronages of UNESCO, UNICEF, Make in India, and Say No to Drugs.
            </p>
            <div className="pt-2">
              <a
                href="https://techfest.org/competitions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-2 bg-cyan text-void font-bold rounded hover:bg-white transition-colors"
              >
                <span>OFFICIAL PORTAL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Techfest, IIT Bombay. Built for the 2026–27 Edition.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://techfest.org/legals"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Privacy & Legal
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-cyan hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
