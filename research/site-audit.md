# Techfest IIT Bombay — Official Website Audit & Architecture Analysis

**Audit Date:** October 2026  
**Festival Target Edition:** Techfest 2026–27  
**Official Domain:** [https://techfest.org/](https://techfest.org/)  
**Hosting Infrastructure:** React Single Page Application served via AWS CloudFront CDN (`https://dsp17yg366baq.cloudfront.net`)  
**Parent Institution:** Indian Institute of Technology Bombay (IIT Bombay), Powai, Mumbai - 400076, India  

---

## 1. Executive Summary

Techfest IIT Bombay is recognized as Asia's largest annual science and technology festival. Established in 1998, it attracts over 175,000+ attendees from across 2,500+ colleges and 25+ countries, featuring competitive robotics, academic summits, global exhibitions, industry workshops, and high-energy pro-nites.

While the festival carries immense international prestige, the current web presence exhibits several usability and engineering challenges:
1. **Visual Narrative & Identity:** Heavy reliance on generic floating 3D/video hero elements and uncalibrated canvas animations without clear typographic hierarchy or an editorial narrative.
2. **Information Architecture & Discoverability:** Key festival verticals (Competitions, Workshops, Exhibitions, Robowars, Lectures) are obscured behind deep flyout menus or fragmented routes, requiring multiple clicks for first-time visitors to understand what to attend.
3. **Conversion Pathways:** Call-to-actions (Registration, Accommodation, Competitions Rulebooks, Early Bird Workshop passes) are scattered across nested views with inconsistent visual weighting.
4. **Mobile Usability & Performance:** Heavy script bundles (~776KB initial JavaScript) and unoptimized canvas/WebGL execution cause battery drain, stuttering scroll, and touch latency on mid-tier mobile devices.

The redesign will establish a high-precision, editorial technology festival design system ("THE FUTURE IS BUILT HERE") utilizing crisp two-dimensional visuals, electric cyan (`#00F0FF`) and signal orange (`#FF5500`) accents on dark graphite, ultra-refined typography, fluid CSS/SVG micro-animations, and verified factual pathways.

---

## 2. Information Architecture & Navigation Audit

### Current Official Navigation Map (Extracted from Live React Bundle)

```
techfest.org/
├── / (Home)
├── /competitions (National & International Competitions)
├── /workshops (Hands-on Technical Training & Certifications - Early Bird)
├── /accommodation (Campus Housing & Passes at IIT Bombay SAC)
├── Events (Sub-Navigation):
│   ├── /robowars (International Combat Robotics Championship)
│   ├── /lectures (Keynote Lectures & World Summits)
│   ├── /exhibitions (Global Tech Expo & Humanoid Showcase)
│   ├── /twmun (Techfest World Model United Nations)
│   ├── /social-initiative (Community Impact & Sustainability)
│   └── /ignite (Startup Pitch & Innovation Challenge)
└── Institutional / Festival Details:
    ├── /history (Festival Evolution since 1998)
    ├── /media (Press Coverage & Official Releases)
    ├── /gallery (High-Resolution Festival Archives)
    ├── /recognition (Patronages: UNESCO, UNICEF, Make in India)
    ├── /legals (Privacy Policy, Terms of Service)
    ├── /contactus (Techfest SAC Team & Department Coordinators)
    └── /profile (Participant Dashboard & Authentication)
```

### Verified Social Media & Contact Coordinates
- **Instagram:** [https://www.instagram.com/techfest_iitbombay/](https://www.instagram.com/techfest_iitbombay/)
- **X (Twitter):** [https://x.com/Techfest_IITB](https://x.com/Techfest_IITB)
- **Facebook:** [https://www.facebook.com/iitbombaytechfest/](https://www.facebook.com/iitbombaytechfest/)
- **YouTube:** [https://www.youtube.com/user/techfestiitbombay](https://www.youtube.com/user/techfestiitbombay)
- **Headquarters:** Techfest Office, Students Activity Centre (SAC), Indian Institute of Technology Bombay, Powai, Mumbai, Maharashtra 400076, India

---

## 3. Verified Festival Offerings & Technical Data

### A. Flagship Competitions
* **International Robowars (`/robowars`):** India's premier combat robotics tournament. Head-to-head robot clashes within a multi-layered bulletproof polycarbonate arena across 8kg, 15kg, 30kg, and 60kg combat classes, drawing teams from India, Mexico, Brazil, and Bangladesh.
* **Meshmerize (`/competitions`):** Autonomous grid maze-solving robotics championship. Dual-tier zonal qualifiers leading to on-campus finals at IIT Bombay with optical sensor path optimization.
* **ZeroCode AI Challenge (`/competitions`):** National prompt engineering and autonomous AI agent development sprint.
* **Namma Space 3D Challenge (`/competitions`):** Spatial computing, lidar indoor mapping, and photogrammetry navigation challenge presented with Juspay.
* **Perceptron Hackathon (`/competitions`):** Advanced machine learning and algorithmic problem-solving sprint.
* **CycloProp UAV Challenge (`/competitions`):** Aerospace engineering competition exploring novel cycloidal rotor UAV propulsion and telemetry.
* **InnovateX (`/competitions`):** Sustainable urban habitats and green mobility prototyping.

### B. Certified Workshops (`/workshops`)
* **Domains:** Artificial Intelligence, Deep Learning, Ethical Hacking & Offensive Cyber Security, Algorithmic Quantitative Trading, Full Stack Engineering, Autonomous Robotics, and Game Engine Architecture.
* **Official Accreditations:** Official Certificate of Training issued directly by Techfest, IIT Bombay.
* **Incentives:** Tiered early-bird passes, multi-ticket team discounts (2–4 members), and complimentary access passes to Techfest Pro-Nites, Keynotes, and Exhibitions.

### C. Global Exhibitions (`/exhibitions`)
* **Unitree G1 Humanoid:** Next-generation bipedal robot with 360-degree joint flexibility and dynamic balance recovery.
* **Spacehopper (ETH Zürich):** Low-gravity hopping rover designed for asteroid and planetary exploration.
* **Astrobee (NASA):** Autonomous free-flying cube robot system deployed on the International Space Station (ISS).
* **Proto Hologram:** Interactive life-size spatial holographic communication display.

### D. Keynote Lectures & World Pioneers (`/lectures`)
* **Nobel Laureates:** His Holiness The 14th Dalai Lama, Kurt Wüthrich (Chemistry), Amartya Sen (Economics), Serge Haroche (Physics).
* **Space & Defense Pioneers:** Bill Nelson (NASA Administrator), Rakesh Sharma (First Indian in Space), S. Somanath (Chairman, ISRO).

### E. Festival Atmosphere & Technoholix
* **Technoholix:** Signature night festival uniting laser projection mapping, pyrotechnics, international visual arts troupes, and EDM pro-nites.
* **Patronages:** Recognized by UNESCO, UNICEF, Say No to Drugs, and Make in India.

---

## 4. Key Target Audiences & Needs Analysis

| Audience Segment | Primary Motivation | Critical Site Requirements |
| :--- | :--- | :--- |
| **Engineering Competitors** | Register bot, download rulebook, verify deadlines & prize pools. | Instant access to competition categories, clear registration CTA, verified rulebook links. |
| **Workshop Seekers** | Learn emerging skills (AI/Cybersecurity), earn IIT Bombay certification. | Transparent curriculum, dates, fee structure, early-bird status, equipment prerequisites. |
| **General Visitors & Tech Enthusiasts** | Witness Robowars, humanoid exhibits, Nobel lectures, laser shows. | Schedule overview, campus navigation, exhibition highlights, pass acquisition. |
| **College Delegations (Outstation)** | Plan multi-day stay at IIT Bombay Powai campus. | Direct link to `/accommodation`, fee breakdown, campus amenities, rules. |
| **Industry Partners & Media** | Sponsorship opportunities, press releases, festival metrics. | Factual statistics, verified patronages, media room, direct SAC contact channel. |

---

## 5. Weaknesses of Current Website & Strategic Solutions

1. **Weakness: Ambient 3D Bloat without Narrative**  
   *Current:* Heavy WebGL/3D scenes that lag on non-discrete GPUs and delay initial content rendering.  
   *Solution:* 100% pure 2D editorial visual architecture utilizing vector SVG trajectory overlays, CSS masking, high-contrast typography, and smooth CSS hardware-accelerated transforms.
2. **Weakness: Obscured Categorization**  
   *Current:* Competitions and workshops feel buried in identical square cards without immediate distinction between combat robotics, AI hackathons, and aerospace.  
   *Solution:* Asymmetrical editorial showcase with category-specific badges, real-time filtering (Combat, AI/Coding, Aerospace, Innovation), and direct rulebook/registration CTAs.
3. **Weakness: Weak Trust & Institution Linkage**  
   *Current:* Limited visual storytelling connecting the event to IIT Bombay’s lush Powai campus and research heritage.  
   *Solution:* Integrated "Festival Identity" section highlighting IIT Bombay SAC, 175,000+ footfall, UNESCO patronage, and 28-year legacy since 1998.
4. **Weakness: Unclear User Journey**  
   *Current:* First-time users struggle with the progression from discovery to on-campus participation.  
   *Solution:* 4-step interactive "Participation Journey" (Discover -> Review Rules -> Register on Official Portal -> Prepare for IIT Bombay).

---

## 6. Verified Facts vs. Design Assumptions

| Attribute | Verified Fact (Official techfest.org) | Design & Presentation Assumption |
| :--- | :--- | :--- |
| **Official Name** | Techfest, IIT Bombay | Modernised editorial typographic wordmark |
| **Edition** | 2026–27 (29th Edition) | Theme concept: "THE FUTURE IS BUILT HERE" |
| **Venue** | IIT Bombay, Powai, Mumbai - 400076 | Atmospheric dark UI with technical grid lines inspired by Mumbai/Powai campus aesthetics |
| **Flagships** | Robowars, Meshmerize, ZeroCode, Unitree G1, Astrobee | Visual highlight cards with editorial tags |
| **Certifications** | Official Certificate of Training from Techfest IIT Bombay | Visual early-bird badge and perk highlights |
| **Color Tokens** | Historically dark theme with cyan/blue accents | Calibrated palette: `#05080F` (Dark Space), `#00F0FF` (Electric Cyan), `#FF5500` (Signal Orange) |
| **Links** | All external actions resolve to verified `techfest.org/*` paths | Strict validation: no mock URLs or fake destination routing |
