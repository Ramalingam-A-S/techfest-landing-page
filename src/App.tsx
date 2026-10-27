import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FestivalIdentity } from './components/FestivalIdentity';
import { EventDiscovery } from './components/EventDiscovery';
import { FeaturedInnovation } from './components/FeaturedInnovation';
import { ParticipationJourney } from './components/ParticipationJourney';
import { FestivalAtmosphere } from './components/FestivalAtmosphere';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  // Initialize IntersectionObserver scroll reveals
  useScrollReveal();

  return (
    <div className="min-h-screen bg-void text-gray-100 flex flex-col font-sans selection:bg-cyan selection:text-void">
      {/* Accessible Skip Link for Screen Readers & Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan focus:text-void focus:font-mono focus:font-bold focus:shadow-lg focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Festival Identity & Heritage */}
        <FestivalIdentity />

        {/* 3. Discover the Festival (Pathways & Filters) */}
        <EventDiscovery />

        {/* 4. Featured Innovation Spotlight */}
        <FeaturedInnovation />

        {/* 5. Participation Journey */}
        <ParticipationJourney />

        {/* 6. Festival Atmosphere & Technoholix */}
        <FestivalAtmosphere />

        {/* 7. Final Call to Action */}
        <FinalCta />
      </main>

      {/* Global Institutional Footer */}
      <Footer />
    </div>
  );
};

export default App;
