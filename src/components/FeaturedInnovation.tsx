import React, { useState } from 'react';
import { ExternalLink, Swords, Bot, Rocket, Code2, Gauge, ShieldCheck } from 'lucide-react';
import { CrosshairIcon, CornerBracket, RadarReticle } from './VectorGraphics';

interface InnovationTab {
  id: string;
  name: string;
  icon: React.ElementType;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  technicalSpecs: string[];
  officialUrl: string;
  actionText: string;
}

const INNOVATION_ITEMS: InnovationTab[] = [
  {
    id: 'robowars',
    name: 'Combat Robotics',
    icon: Swords,
    title: 'International Robowars Championship',
    category: 'Mechanical Warfare & Armor Systems',
    tagline: 'Asia\'s most intense combat robotics crucible inside a fortified arena',
    description: 'Robowars represents the pinnacle of destructive engineering at Techfest IIT Bombay. Custom combat machines clad in AR400 armor plate, high-RPM spinning vertical drums, horizontal kinetic discs, and pneumatic flippers battle to total immobilization inside a bulletproof multi-layered polycarbonate arena.',
    metrics: [
      { label: 'Weight Tiers', value: '8kg // 15kg // 30kg // 60kg' },
      { label: 'Impact Force', value: 'Up to 25,000 Joules' },
      { label: 'Arena Spec', value: 'Reinforced Polycarbonate' },
      { label: 'Global Brackets', value: 'Teams from 8+ Countries' }
    ],
    technicalSpecs: [
      'Dual-fail-safe radio frequency transmission lockout',
      'Brushless outrunner weapon motors exceeding 10,000 RPM',
      'Pneumatic high-pressure nitrogen flip actuators (100+ Bar)',
      'High-speed live arena telemetry and impact deceleration sensors'
    ],
    officialUrl: 'https://techfest.org/robowars',
    actionText: 'Register Bot on techfest.org'
  },
  {
    id: 'humanoid',
    name: 'Unitree G1 Humanoid',
    icon: Bot,
    title: 'Unitree G1 Bipedal Robotics Prototype',
    category: 'Dynamic Bipedal Locomotion',
    tagline: 'Next-generation bipedal robot with 360° omnidirectional joint articulation',
    description: 'Showcased at Techfest Exhibitions, the Unitree G1 breaks new ground in artificial bipedal agility. Featuring proprietary high-torque joint actuators, the robot demonstrates dynamic balance recovery from external physical strikes, omnidirectional acrobatic maneuvers, and precision object manipulation.',
    metrics: [
      { label: 'Joint Freedom', value: '23 to 43 Degrees' },
      { label: 'Actuator Torque', value: 'Max 120 N·m Peak' },
      { label: 'Vision Pipeline', value: '3D Lidar + Depth Intel' },
      { label: 'Terrain Recovery', value: '< 120ms Reaction' }
    ],
    technicalSpecs: [
      'Reinforcement learning-trained locomotion policy',
      'Real-time impedance torque control loop (1 kHz)',
      'Integrated tactile sensor fingertip feedback arrays',
      'Low thermal dissipation high-power brushless hub motors'
    ],
    officialUrl: 'https://techfest.org/exhibitions',
    actionText: 'Inspect Exhibition Lineup'
  },
  {
    id: 'space',
    name: 'NASA Astrobee & Spacehopper',
    icon: Rocket,
    title: 'Astrobee & Spacehopper Microgravity Systems',
    category: 'Extraterrestrial & Microgravity Robotics',
    tagline: 'Autonomous free-flying and low-gravity surface exploration platforms',
    description: 'Highlighted at the Techfest Global Tech Expo, NASA Ames’ Astrobee operates autonomously inside the International Space Station assisting astronauts, while ETH Zürich’s Spacehopper utilizes dynamic three-legged kinetics to traverse ultra-low-gravity planetary bodies and asteroids.',
    metrics: [
      { label: 'Environment', value: 'Micro-G / Asteroid' },
      { label: 'Propulsion', value: 'Cold-Gas Impellers' },
      { label: 'Autonomy', value: 'Full Vision SLAM' },
      { label: 'Docking Logic', value: 'Autonomous Perch' }
    ],
    technicalSpecs: [
      'Modular robotic arm perching and sample retrieval',
      'Visual-inertial odometry operating in illumination shifts',
      'Microgravity leaping trajectories via compliant joint springs',
      'Automated obstacle avoidance inside ISS habitable modules'
    ],
    officialUrl: 'https://techfest.org/exhibitions',
    actionText: 'Explore Space Exhibits'
  },
  {
    id: 'agentic-ai',
    name: 'ZeroCode Agentic AI',
    icon: Code2,
    title: 'ZeroCode National Agentic AI Challenge',
    category: 'Generative AI & Autonomous Software',
    tagline: 'Prompt engineering and multi-agent pipeline web orchestration',
    description: 'A nationwide crucible where engineers construct fully functional web applications and autonomous software systems in real time using large language models, structured prompt chains, and automated multi-agent code compilation without writing manual boilerplate.',
    metrics: [
      { label: 'Format', value: 'Sprint Challenge' },
      { label: 'Execution', value: 'Live Evaluation' },
      { label: 'Judging', value: 'Algorithmic + Faculty' },
      { label: 'Participants', value: 'Nationwide Colleges' }
    ],
    technicalSpecs: [
      'Multi-agent prompt orchestration pipelines',
      'Vector memory retrieval and retrieval-augmented synthesis',
      'Automated test generation and benchmark execution',
      'Real-world operational industry problem statements'
    ],
    officialUrl: 'https://techfest.org/competitions',
    actionText: 'Access Challenge Rulebook'
  }
];

export const FeaturedInnovation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(INNOVATION_ITEMS[0].id);
  const current = INNOVATION_ITEMS.find((item) => item.id === selectedTab) || INNOVATION_ITEMS[0];

  return (
    <section
      id="robowars"
      aria-labelledby="innovation-heading"
      className="relative py-24 sm:py-36 bg-surface/30 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="reveal-on-scroll max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan mb-3 tracking-widest">
            <CrosshairIcon className="w-4 h-4 text-cyan" />
            <span>// 03 ENGINEERING CRUCIBLE</span>
          </div>
          <h2
            id="innovation-heading"
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
          >
            FEATURED INNOVATION SPOTLIGHT.
          </h2>
          <p className="mt-3 text-base text-gray-400">
            Examine verified technological benchmarks tested on the grounds of IIT Bombay.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="reveal-on-scroll grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {INNOVATION_ITEMS.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === selectedTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedTab(item.id)}
                className={`flex items-center space-x-3 p-4 rounded-lg font-mono text-xs transition-all border text-left ${
                  isSelected
                    ? 'bg-surface-elevated border-cyan text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                    : 'bg-surface border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                }`}
                aria-selected={isSelected}
              >
                <div
                  className={`p-2 rounded ${
                    isSelected ? 'bg-cyan text-void' : 'bg-white/5 text-gray-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Vertical</div>
                  <div className="font-semibold text-sm truncate">{item.name}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="reveal-on-scroll relative bg-surface-elevated border border-white/10 rounded-xl p-6 sm:p-10 overflow-hidden">
          <CornerBracket position="top-left" className="absolute top-3 left-3 w-4 h-4 text-cyan" />
          <CornerBracket position="bottom-right" className="absolute bottom-3 right-3 w-4 h-4 text-cyan" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Description & Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan/10 border border-cyan/30 text-cyan">
                  {current.category}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white mt-3">
                  {current.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-cyan mt-1">
                  {current.tagline}
                </p>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Technical Architecture Specs */}
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                  Technical Architecture & Verification Standards
                </div>
                <div className="space-y-2">
                  {current.technicalSpecs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start space-x-2.5 text-xs font-mono text-gray-300 bg-void/50 border border-white/5 p-2.5 rounded"
                    >
                      <ShieldCheck className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href={current.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-6 py-3 bg-cyan hover:bg-white text-void font-mono font-bold text-xs tracking-wider rounded transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <span>{current.actionText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Telemetry Readout Grid */}
            <div className="lg:col-span-5 bg-void/60 border border-white/10 rounded-lg p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-gray-400">
                <span className="flex items-center space-x-2">
                  <Gauge className="w-3.5 h-3.5 text-cyan" />
                  <span>LIVE TELEMETRY HUD</span>
                </span>
                <span className="text-cyan font-bold">VERIFIED</span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-surface p-3.5 rounded border border-white/5">
                    <div className="text-[10px] font-mono text-gray-400 uppercase">
                      {metric.label}
                    </div>
                    <div className="font-display font-bold text-base text-white mt-1 text-cyan">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Graphical Reticle Simulation */}
              <div className="relative h-40 bg-void border border-white/5 rounded flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-technical opacity-30" />
                <RadarReticle className="w-36 h-36 text-cyan/30 animate-pulse-subtle" />
                <div className="absolute font-mono text-[10px] text-gray-400 bottom-2 right-2">
                  IITB//TELEMETRY-STREAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
