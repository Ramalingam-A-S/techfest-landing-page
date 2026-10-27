export interface CompetitionItem {
  id: string;
  title: string;
  category: 'Combat Robotics' | 'Autonomous Systems' | 'AI & Software' | 'Aerospace' | 'Sustainability';
  tagline: string;
  description: string;
  specs: string[];
  prize: string;
  verifiedUrl: string;
  featured?: boolean;
}

export interface WorkshopItem {
  id: string;
  title: string;
  domain: string;
  summary: string;
  skills: string[];
  certification: string;
  earlyBird: boolean;
  duration: string;
  verifiedUrl: string;
}

export interface ExhibitionItem {
  id: string;
  title: string;
  origin: string;
  organization: string;
  description: string;
  specs: string[];
  verifiedUrl: string;
}

export interface SpeakerItem {
  name: string;
  role: string;
  notability: string;
  category: 'Nobel Laureate' | 'Space Exploration' | 'Pioneering Science';
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  actionText: string;
  actionUrl: string;
  isExternal: boolean;
}

export const SITE_DATA = {
  meta: {
    edition: '2026–27',
    editionOrdinal: '29th Edition',
    editionDates: 'December 2026',
    tagline: 'The Future Is Built Here',
    fullTitle: 'Techfest IIT Bombay',
    venue: 'Students Activity Centre (SAC), IIT Bombay, Powai, Mumbai 400076, India',
    coordinates: '19.1334° N, 72.9133° E',
    officialUrl: 'https://techfest.org/',
    patronages: ['UNESCO', 'UNICEF', 'Make in India', 'Say No to Drugs']
  },

  socials: [
    { name: 'Instagram', handle: '@techfest_iitbombay', url: 'https://www.instagram.com/techfest_iitbombay/' },
    { name: 'X / Twitter', handle: '@Techfest_IITB', url: 'https://x.com/Techfest_IITB' },
    { name: 'Facebook', handle: 'iitbombaytechfest', url: 'https://www.facebook.com/iitbombaytechfest/' },
    { name: 'YouTube', handle: 'techfestiitbombay', url: 'https://www.youtube.com/user/techfestiitbombay' }
  ],

  metrics: [
    { value: '175,000+', label: 'Annual Footfall', subtext: 'Students, innovators & enthusiasts' },
    { value: '2,500+', label: 'Academic Institutions', subtext: 'Represented from India and abroad' },
    { value: '25+', label: 'Nations Represented', subtext: 'Global robotics teams and exhibits' },
    { value: '28+ Years', label: 'Innovation Legacy', subtext: 'Established at IIT Bombay in 1998' }
  ] as MetricItem[],

  competitions: [
    {
      id: 'robowars',
      title: 'International Robowars',
      category: 'Combat Robotics',
      tagline: 'High-octane mechanical warfare in a bulletproof reinforced arena',
      description: 'The crowning jewel of combat robotics in Asia. Custom-built combat machines across 8kg, 15kg, 30kg, and 60kg weight divisions clash in head-to-head destruction featuring spinners, pneumatics, and hardened armor.',
      specs: ['Weight classes: 8kg to 60kg', 'Reinforced Polycarbonate Arena', 'Global international brackets', 'Live combat telemetry'],
      prize: 'Marquee Prize Pool',
      verifiedUrl: 'https://techfest.org/robowars',
      featured: true
    },
    {
      id: 'meshmerize',
      title: 'Meshmerize',
      category: 'Autonomous Systems',
      tagline: 'Autonomous precision line-following and grid-maze resolution',
      description: 'Engineers build micro-controlled autonomous line-tracing bots capable of mapping complex dynamic mazes, calculating optimal graph trajectories, and executing speed runs with optical accuracy.',
      specs: ['Dual-Tier Zonal Qualifiers', 'Dynamic Maze Geometry', 'Optical Sensor Mapping', 'Grand Finale at IIT Bombay'],
      prize: 'National Recognition',
      verifiedUrl: 'https://techfest.org/competitions',
      featured: true
    },
    {
      id: 'zerocode',
      title: 'ZeroCode AI Challenge',
      category: 'AI & Software',
      tagline: 'National prompt engineering and autonomous agent web systems',
      description: 'A rapid agentic AI development sprint where participants harness cutting-edge large language models, prompt orchestration, and autonomous workflows to build functional web software under strict timelines.',
      specs: ['Prompt Architecture', 'Autonomous Agent Pipelines', 'Rapid Web Prototyping', 'Real-world Problem Statement'],
      prize: 'Industry Sponsored',
      verifiedUrl: 'https://techfest.org/competitions',
      featured: true
    },
    {
      id: 'nammaspace',
      title: 'Namma Space 3D Navigation',
      category: 'AI & Software',
      tagline: 'Spatial photogrammetry and indoor lidar navigation challenge',
      description: 'Presented in collaboration with Juspay. Teams tackle real-time spatial computing, 3D point-cloud reconstruction, and indoor wayfinding algorithms in complex physical architectures.',
      specs: ['Lidar Point Cloud Processing', 'Spatial Navigation', 'Industry Mentorship', 'Live Finale Evaluation'],
      prize: 'Fast-Track Opportunities',
      verifiedUrl: 'https://techfest.org/competitions'
    },
    {
      id: 'perceptron',
      title: 'Perceptron Hackathon',
      category: 'AI & Software',
      tagline: 'Algorithmic intelligence and machine learning benchmark challenge',
      description: 'Multi-phase algorithmic coding hackathon testing data pipelines, neural network architectures, and optimized compute under competitive benchmark constraints.',
      specs: ['Multi-Stage Evaluation', 'Benchmark Compute Testing', 'Algorithmic Optimization', 'On-Site Finale at IITB'],
      prize: 'Cash & Hardware Grants',
      verifiedUrl: 'https://techfest.org/competitions'
    },
    {
      id: 'cycloprop',
      title: 'CycloProp Advanced Propulsion',
      category: 'Aerospace',
      tagline: 'Next-generation UAV cycloidal rotor propulsion engineering',
      description: 'Aerospace challenge centered around the aerodynamic design, structural stability, and flight control telemetry of cycloidal rotor unmanned aerial vehicles.',
      specs: ['Aerodynamic Telemetry', 'Structural Thrust Analysis', 'Autonomous Flight Mode', 'Flight Arena Demonstrations'],
      prize: 'Aerospace Honors',
      verifiedUrl: 'https://techfest.org/competitions'
    },
    {
      id: 'innovatex',
      title: 'InnovateX Future Habitats',
      category: 'Sustainability',
      tagline: 'Engineering resilient green energy and clean urban infrastructure',
      description: 'Interdisciplinary sustainability hackathon focused on EV energy grids, carbon recapture mechanisms, and scalable circular-economy systems for growing urban centers.',
      specs: ['Hardware / Software Solutions', 'Urban Resilience Focus', 'Jury of IITB Faculty & Experts', 'Seed Funding Pathways'],
      prize: 'Incubation Support',
      verifiedUrl: 'https://techfest.org/competitions'
    }
  ] as CompetitionItem[],

  workshops: [
    {
      id: 'ai-deep-learning',
      title: 'Artificial Intelligence & Agentic Deep Learning',
      domain: 'Artificial Intelligence',
      summary: 'Comprehensive hands-on training spanning transformer architectures, RAG pipelines, neural computer vision, and autonomous agent systems.',
      skills: ['PyTorch & HuggingFace', 'Autonomous Agentic Workflows', 'Vector Databases & RAG', 'Computer Vision Deployments'],
      certification: 'Official Certificate of Training from Techfest IIT Bombay',
      earlyBird: true,
      duration: '2 Days Hands-On Intensive',
      verifiedUrl: 'https://techfest.org/workshops'
    },
    {
      id: 'cyber-security',
      title: 'Offensive Cyber Security & Ethical Hacking',
      domain: 'Information Security',
      summary: 'Tactical penetration testing, vulnerability discovery, zero-day mitigation, network packet exploitation, and defense strategies in simulated war-game environments.',
      skills: ['Reverse Engineering', 'Burp Suite & Metasploit', 'Web App Vulnerabilities (OWASP)', 'Network Defense'],
      certification: 'Official Certificate of Training from Techfest IIT Bombay',
      earlyBird: true,
      duration: '2 Days Hands-On Intensive',
      verifiedUrl: 'https://techfest.org/workshops'
    },
    {
      id: 'algo-trading',
      title: 'Algorithmic Quantitative Trading & Quant Systems',
      domain: 'FinTech & Quant Systems',
      summary: 'Mathematical finance modeling, statistical arbitrage, backtesting high-frequency strategies with Python, and risk analytics.',
      skills: ['Statistical Arbitrage', 'Time-Series Modeling', 'Python Vectorized Backtesting', 'Risk & Telemetry Engine'],
      certification: 'Official Certificate of Training from Techfest IIT Bombay',
      earlyBird: true,
      duration: '2 Days Hands-On Intensive',
      verifiedUrl: 'https://techfest.org/workshops'
    },
    {
      id: 'full-stack',
      title: 'Modern Distributed Full Stack Engineering',
      domain: 'Cloud & Web Platforms',
      summary: 'Architecting scalable microservices, edge computing, distributed state management, and modern React/Node infrastructure.',
      skills: ['React & Next.js Ecosystem', 'Distributed Event Buses', 'PostgreSQL & Edge Caching', 'Cloud Microservices CI/CD'],
      certification: 'Official Certificate of Training from Techfest IIT Bombay',
      earlyBird: false,
      duration: '2 Days Hands-On Intensive',
      verifiedUrl: 'https://techfest.org/workshops'
    }
  ] as WorkshopItem[],

  exhibitions: [
    {
      id: 'unitree-g1',
      title: 'Unitree G1 Bipedal Humanoid',
      origin: 'Hangzhou, China',
      organization: 'Unitree Robotics',
      description: 'State-of-the-art dynamic bipedal robot featuring 360° joint maneuverability, high-torque robotic actuators, and adaptive balance recovery under real-world terrain obstacles.',
      specs: ['360° Omnidirectional Joints', 'AI-Trained Locomotion', 'Dynamic Impact Recovery'],
      verifiedUrl: 'https://techfest.org/exhibitions'
    },
    {
      id: 'spacehopper',
      title: 'Spacehopper Asteroid Rover',
      origin: 'Zürich, Switzerland',
      organization: 'ETH Zürich',
      description: 'Three-legged microgravity hopping robotic platform developed for surface exploration on low-gravity celestial bodies such as asteroids and planetary moons.',
      specs: ['Microgravity Hopping Kinetics', 'Autonomous Attitude Control', 'Low-G Surface Navigation'],
      verifiedUrl: 'https://techfest.org/exhibitions'
    },
    {
      id: 'astrobee',
      title: 'Astrobee Autonomous Free-Flyer',
      origin: 'Silicon Valley, California',
      organization: 'NASA Ames Research Center',
      description: 'NASA’s autonomous robotic system operating inside the International Space Station, assisting astronauts with routine inventory audits and autonomous microgravity experiments.',
      specs: ['Cold-Gas Propulsion Simulators', 'Autonomous Vision Docking', 'Microgravity Operations'],
      verifiedUrl: 'https://techfest.org/exhibitions'
    },
    {
      id: 'proto-hologram',
      title: 'Proto M Holographic Display',
      origin: 'Los Angeles, USA',
      organization: 'Proto Inc.',
      description: 'Life-sized interactive spatial holographic communication enclosure delivering ultra-high-definition volumetric projection with real-time bidirectional streaming.',
      specs: ['4K Spatial Telepresence', 'Real-Time Bi-Directional Latency', 'Optical Depth Volumetrics'],
      verifiedUrl: 'https://techfest.org/exhibitions'
    }
  ] as ExhibitionItem[],

  speakers: [
    {
      name: 'His Holiness The 14th Dalai Lama',
      role: 'Nobel Peace Prize Laureate',
      notability: 'Addressed Techfest on ethics, scientific inquiry, and global human unity.',
      category: 'Nobel Laureate'
    },
    {
      name: 'Dr. Kurt Wüthrich',
      role: 'Nobel Laureate in Chemistry',
      notability: 'NMR spectroscopy innovator for biological macromolecules in solution.',
      category: 'Nobel Laureate'
    },
    {
      name: 'Bill Nelson',
      role: 'NASA Administrator',
      notability: 'Keynote address on the Artemis Moon exploration missions and international aerospace cooperation.',
      category: 'Space Exploration'
    },
    {
      name: 'S. Somanath',
      role: 'Former Chairman, ISRO',
      notability: 'Architect of Chandrayaan-3 lunar landing and Aditya-L1 solar observation mission.',
      category: 'Space Exploration'
    },
    {
      name: 'Prof. Amartya Sen',
      role: 'Nobel Laureate in Economics',
      notability: 'Keynote on welfare economics, poverty metrics, and technological empowerment.',
      category: 'Nobel Laureate'
    },
    {
      name: 'Wing Commander Rakesh Sharma',
      role: 'First Indian in Space (Hero of the Soviet Union)',
      notability: 'Historical reflections on spaceflight, discipline, and aerospace engineering frontiers.',
      category: 'Space Exploration'
    }
  ] as SpeakerItem[],

  steps: [
    {
      number: '01',
      title: 'Select Your Discipline',
      description: 'Explore the full spectrum of competitive robotics, software hackathons, aerospace design, and certified workshops verified on techfest.org.',
      actionText: 'Browse Categories',
      actionUrl: '#discover',
      isExternal: false
    },
    {
      number: '02',
      title: 'Examine Technical Rules',
      description: 'Download official challenge rulebooks, inspect bot dimension/weight constraints, scoring metrics, and team limits (1 to 4 members).',
      actionText: 'Inspect Competitions',
      actionUrl: 'https://techfest.org/competitions',
      isExternal: true
    },
    {
      number: '03',
      title: 'Register on Official Portal',
      description: 'Authenticate your participant profile on techfest.org, register your squad, lock in early-bird workshop seats, and receive your verification pass.',
      actionText: 'Official Registration',
      actionUrl: 'https://techfest.org/competitions',
      isExternal: true
    },
    {
      number: '04',
      title: 'Arrive at IIT Bombay',
      description: 'Book verified student accommodation at the Powai campus, verify your badges at the SAC registration desk, and compete on the grand stage.',
      actionText: 'Accommodation Guide',
      actionUrl: 'https://techfest.org/accommodation',
      isExternal: true
    }
  ] as StepItem[],

  atmosphereHighlights: [
    {
      title: 'Technoholix EDM & Visual Showcase',
      description: 'The premier open-air spectacle blending international electronic dance music, high-power lasers, and synchronized visual performance arts.',
      venue: 'Gymkhana Grounds, IIT Bombay'
    },
    {
      title: 'International Robowars Arena',
      description: 'Thousands of passionate spectators packing the amphitheater stands as 60kg combat bots battle under bright arena floodlights.',
      venue: 'Indoor Sports Complex, IIT Bombay'
    },
    {
      title: 'World Technology Expo',
      description: 'Hands-on interactions with humanoid robots, NASA rovers, and cutting-edge aerospace prototypes directly from global laboratories.',
      venue: 'Exhibition Hall & Concourse, IIT Bombay'
    },
    {
      title: 'Techfest World MUN (TWMUN)',
      description: 'Dynamic diplomatic debate and policy deliberations simulating international geopolitical crisis management.',
      venue: 'Lecture Theatre Complex, IIT Bombay'
    }
  ],

  navLinks: [
    { label: 'Explore', href: '#discover' },
    { label: 'Competitions', href: '#competitions', externalUrl: 'https://techfest.org/competitions' },
    { label: 'Workshops', href: '#workshops', externalUrl: 'https://techfest.org/workshops', badge: 'Early Bird' },
    { label: 'Exhibitions', href: '#exhibitions', externalUrl: 'https://techfest.org/exhibitions' },
    { label: 'Robowars', href: '#robowars', externalUrl: 'https://techfest.org/robowars' },
    { label: 'Identity', href: '#about' },
    { label: 'Accommodation', href: 'https://techfest.org/accommodation', externalUrl: 'https://techfest.org/accommodation' },
    { label: 'Contact', href: '#contact', externalUrl: 'https://techfest.org/contactus' }
  ]
};
