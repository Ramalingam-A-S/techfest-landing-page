# Techfest Experience & Interaction Specification

**Concept:** TECHFEST — THE FUTURE IS BUILT HERE  
**Target:** 2026–27 Edition, Indian Institute of Technology Bombay  
**Audience:** International competitors, innovators, students, tech leaders, general visitors  

---

## 1. Visual Progression Architecture

The page unfolds as an editorial journey through modern technological frontiers:

```
[01. NAVIGATION]
      │ (Transparent overlay -> Frosted persistent sticky header)
[02. HERO: THE FUTURE IS BUILT HERE]
      │ (Asymmetrical kinetic typography + SVG technical trajectories + Live telemetry strip)
[03. FESTIVAL IDENTITY & HERITAGE]
      │ (IIT Bombay SAC roots, 175,000+ footfall, UNESCO patronage, 28-year legacy)
[04. DISCOVER THE FESTIVAL (PATHWAYS)]
      │ (Editorial interactive explorer: Competitions, Workshops, Exhibitions, Lectures, Technoholix)
[05. FEATURED INNOVATION SPOTLIGHT]
      │ (Deep dive: Robowars Arena Combat, NASA Astrobee, Unitree G1 Bipedal Humanoid, ZeroCode AI)
[06. PARTICIPATION JOURNEY]
      │ (4-Step tactile roadmap: Explore -> Verify Eligibility -> Register on techfest.org -> Arrive at IITB)
[07. FESTIVAL ATMOSPHERE & NIGHTS]
      │ (Technoholix, Laser mapping, Pro-Nites, Global community energy)
[08. FINAL CALL TO ACTION]
      │ (Bold high-contrast typographic closure + Instant registration pathway)
[09. INSTITUTIONAL FOOTER]
      │ (SAC IIT Bombay coordinates, official social channels, verified routes, legal disclosures)
```

---

## 2. Section Specifications

### Section 1: Minimal Precision Navigation
- **Elements:**
  - Techfest IIT Bombay glyph wordmark with edition tag `[2026–27]`.
  - Primary navigation links:
    - `Discover` (smooth scroll anchor to `#discover`)
    - `Competitions` (verified link to `https://techfest.org/competitions` + anchor `#competitions`)
    - `Workshops` (verified link to `https://techfest.org/workshops` with "Early Bird" badge)
    - `Robowars` (verified link to `https://techfest.org/robowars`)
    - `Exhibitions` (verified link to `https://techfest.org/exhibitions`)
    - `About` (smooth scroll anchor to `#about`)
  - Status indicator: Live pulse dot (green) with label: `EDITION 29 // POWAI, MUMBAI`.
  - Registration Action: High-contrast button leading directly to the official registration portal.
- **Interactions:**
  - Background transition at `scrollY > 50px`: Opacity and backdrop-filter smoothly ramp from 0 to 90% dark glass.
  - Mobile Menu Trigger: Animated hamburger icon transitioning to an 'X' close button; expands accessible drawer with full keyboard navigation and focus management.

### Section 2: Hero — The Future Is Built Here
- **Visual Composition:**
  - Oversized stacked typography: "THE FUTURE IS BUILT HERE" with dynamic letter-spacing and electric cyan highlight.
  - Telemetry bar: `LAT 19.1334° N // LONG 72.9133° E // IIT BOMBAY // DEC 2026`.
  - Editorial description: Concise, verified statement on Techfest being Asia's largest science and technology festival, uniting global innovators across autonomous robotics, artificial intelligence, and aerospace.
  - Dual CTAs:
    - Primary CTA: `[ REGISTER FOR TECHFEST 2026–27 ]` (Direct link to `https://techfest.org/competitions` / registration).
    - Secondary CTA: `[ EXPLORE FESTIVAL VERTICALS ↓ ]` (Smooth scroll to `#discover`).
  - 2D Graphical Accents: Precision SVG grid lines, crosshairs, radial atmospheric gradients, and subtle vector trajectories indicating technological precision without WebGL.
  - Scroll Cue: Animated vertical vector line with pulsing dot inviting users down into the experience.

### Section 3: Festival Identity & Heritage
- **Objective:** Establish the credibility, legacy, and unique academic atmosphere of IIT Bombay.
- **Key Metrics & Facts:**
  - **175,000+** Attendees and Visitors across 3 festival days.
  - **2,500+** Colleges and Academic Institutions represented.
  - **25+** International Countries participating in combat robotics and global exhibitions.
  - **28+** Years of innovation legacy (established 1998).
- **Layout:** Asymmetric 2-column editorial grid. Left column features large narrative copy on Techfest's mission; right column displays technical metric HUD cards with subtle cyan border illumination.

### Section 4: Discover the Festival (Interactive Pathways)
- **Objective:** Eliminate confusion and provide intuitive, immediate entry into every verified category.
- **Interactive Component:**
  - Category Filter Tabs: `All`, `Competitions`, `Workshops`, `Exhibitions`, `Lectures & Summits`.
  - Dynamic Pathway Grid: Cards featuring real photography, badge tags, description of requirements, and real verified links:
    - **Competitions:** `/competitions` (Robowars, Meshmerize, ZeroCode, Perceptron, CycloProp, Namma Space)
    - **Workshops:** `/workshops` (AI & Deep Learning, Cyber Security, Algorithmic Trading, Full Stack Dev with IITB Certification)
    - **Exhibitions:** `/exhibitions` (Unitree G1 Humanoid, ETH Zürich Spacehopper, NASA Astrobee, Proto Hologram)
    - **Lectures:** `/lectures` (Nobel Laureates, NASA Administrators, ISRO Leadership)
    - **Accommodation:** `/accommodation` (Hostel stay & visitor passes on campus)
- **Behavior:** Clicking a category filter instantaneously and smoothly updates the visible feature set with accessible ARIA live-region announcements.

### Section 5: Featured Innovation Spotlight
- **Deep-Dive Showcase:**
  - **International Robowars:** 60kg titanium combat robots colliding inside a reinforced arena. Detailed specs, weight classes, and verified registration links.
  - **Unitree G1 Humanoid:** Cutting-edge bipedal locomotion, real-time balance control, and dexterity demonstrations.
  - **NASA Astrobee & Spacehopper:** Autonomous free-flying robotics on the International Space Station and low-gravity exploration.
  - **ZeroCode AI Sprint:** Building production-grade autonomous agent web solutions in real-time.

### Section 6: Participation Journey
- **4-Stage Tactile Pathway:**
  1. **Phase 01 — Discover & Team Up:** Select challenge vertical, assemble team of 1–4 members.
  2. **Phase 02 — Verify Problem Statement:** Review official rulebooks, constraints, and submission deadlines.
  3. **Phase 03 — Official Portal Registration:** Secure participant credentials via `techfest.org` registration.
  4. **Phase 04 — On-Campus IIT Bombay Finals:** Travel to Powai, Mumbai, access campus accommodation, and compete live.

### Section 7: Festival Atmosphere & Technoholix
- High-contrast visual ribbon showcasing the sensory experience of Techfest nights: laser projection mapping, EDM pro-nites, pyrotechnics, and the electric energy of thousands of students at the Open Air Theatre (Gymkhana Grounds).

### Section 8: Final Call to Action
- Typographic climax: "THE NEXT ERA OF TECHNOLOGY WILL NOT BUILD ITSELF."
- Direct action buttons with clear route indicators:
  - `REGISTER NOW ON OFFICIAL PORTAL` -> `https://techfest.org/competitions`
  - `EXPLORE WORKSHOP CERTIFICATIONS` -> `https://techfest.org/workshops`
  - `CAMPUS ACCOMMODATION GUIDE` -> `https://techfest.org/accommodation`

### Section 9: Institutional Footer
- Official attribution: Techfest, Students Activity Centre (SAC), Indian Institute of Technology Bombay, Powai, Mumbai - 400076.
- Patronage credits: UNESCO, UNICEF, Make in India, Say No to Drugs.
- Verified social links with accessible labels: Instagram, X, Facebook, YouTube.
- Quick navigation links matching the official site architecture.
- Back-to-top quick trigger.

---

## 3. Motion & Interaction Standards

- **Scroll Reveal:** Elements utilize CSS `will-change: transform, opacity;` and classes `.reveal-init` and `.reveal-active`.
- **Keyboard Navigation:** Tab sequences strictly mirror the visual reading flow. Focus outlines are styled in electric cyan (`#00F0FF`).
- **Touch Responsiveness:** Minimum button hit targets are `44px x 44px`. Hover effects gracefully degrade to clean active/tap states on touch devices.
