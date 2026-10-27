# Design System: TECHFEST — THE FUTURE IS BUILT HERE

**System Version:** 2.0  
**Project:** Techfest IIT Bombay Landing Page Redesign (2026–27 Edition)  
**Philosophy:** Editorial Creative Technologist aesthetic. Combines high-contrast Swiss typography with tactical avionics and research laboratory telemetry. Avoids generic SaaS templates and floating 3D spheres. 100% two-dimensional vector, CSS-driven motion, and authentic imagery.

---

## 1. Color Palette & Tokens

The palette establishes an ultra-deep graphite environment punctured by hyper-vibrant signal emitters (Electric Cyan and Signal Orange), mimicking research labs, cleanrooms, and illuminated robotics arenas.

| Token | Hex Value | Semantic Role | Usage & Guidelines |
| :--- | :--- | :--- | :--- |
| `--color-bg-base` | `#030712` | Absolute Void | Root canvas background, deep foundation. |
| `--color-bg-surface` | `#0B1120` | Graphite Surface | Component containers, navigation header, cards. |
| `--color-bg-elevated` | `#111827` | Elevated Surface | Hover states, modals, popovers, category pills. |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Subtle Wireframe | Structural grid borders, section separators. |
| `--color-border-highlight` | `rgba(0, 240, 255, 0.25)` | Active Wireframe | Focus rings, active category triggers, glow frames. |
| `--color-accent-cyan` | `#00F0FF` | **Primary Accent** | Key interactive buttons, vital highlights, telemetry indicators. |
| `--color-accent-cyan-dim` | `rgba(0, 240, 255, 0.12)`| Cyan Wash | Pill backgrounds, subtle badge fills, gradient fades. |
| `--color-accent-orange` | `#FF5500` | **Secondary Accent** | Live alerts, early-bird tags, combat robotics callouts. |
| `--color-accent-orange-dim`| `rgba(255, 85, 0, 0.12)` | Orange Wash | Alert badges, countdown accent, high-intensity tags. |
| `--color-text-primary` | `#F9FAFB` | Titanium White | Primary headlines, critical numerical readouts, titles. |
| `--color-text-secondary` | `#9CA3AF` | Silver Muted | Body paragraphs, category descriptors, meta tags. |
| `--color-text-tertiary` | `#6B7280` | Carbon Dim | Technical coordinates, footnotes, subtle timestamps. |

---

## 2. Typography Hierarchy

The typographic system pairs an ultra-expressive, geometric headline family with a high-legibility engineered sans-serif, punctuated by monospaced telemetry annotations.

### Font Stacks
- **Display & Headlines:** `'Space Grotesk'`, `'Syne'`, system sans-serif, -apple-system, sans-serif
- **Body & Interface:** `'Inter'`, system sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Telemetry & Monospace:** `'JetBrains Mono'`, `'Fira Code'`, Menlo, Monaco, Consolas, monospace

### Scale & Rhythms

| Level | Size | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `clamp(3.5rem, 9vw, 8.5rem)` | 800 (Bold) | `0.92` | `-0.04em` | "THE FUTURE IS BUILT HERE" |
| **Section Title (H2)**| `clamp(2.25rem, 5vw, 4.25rem)` | 700 (Bold) | `1.05` | `-0.03em` | "DISCOVER THE FESTIVAL", "INNOVATION" |
| **Subheading (H3)** | `clamp(1.5rem, 3vw, 2.25rem)` | 600 (Semi) | `1.2` | `-0.02em` | Feature titles, pathway headlines |
| **Section Label** | `0.75rem (12px)` | 700 (Bold) | `1.0` | `0.25em` | `// 01 ARCHITECTURE`, `// LIVE STATUS` |
| **Body Large** | `1.125rem (18px)` | 400 (Regular) | `1.65` | `-0.01em` | Hero lead paragraph, festival mission |
| **Body Regular** | `0.9375rem (15px)` | 400 (Regular) | `1.6` | `0` | Card content, descriptions, rules |
| **Telemetry / Small**| `0.8125rem (13px)` | 500 (Medium) | `1.4` | `0.05em` | Coordinate readouts, metadata tags |

---

## 3. Spacing, Grids & Breakpoints

### Asymmetrical Editorial Grid
- **12-Column Technical Grid:** Generous gutters (`1.5rem` to `2.5rem`), with deliberate breaking elements (e.g. 7-column content juxtaposed with 5-column offset image or interactive telemetry card).
- **Max Content Width:** `1440px` (`max-w-7xl` or custom `1536px` wrapper) to preserve cinematic framing on ultra-wide displays without horizontal blowout.

### Responsive Breakpoints
- **Mobile Small:** `360px` (Dense vertical stacking, full-width touch targets >= 44px)
- **Mobile Standard:** `390px` (Refined margins, readable type scaling)
- **Tablet:** `768px` (2-column editorial flow, persistent quick nav)
- **Laptop:** `1024px` (Full desktop navigation, 3-column event discovery)
- **Desktop:** `1440px` (Optimal editorial composition with negative margins)
- **Ultra-Wide:** `1920px` (Centered stage with ambient vector wireframes)

---

## 4. Component Patterns

### A. Navigation Header
- **Initial State:** Floating, transparent backdrop with micro-grid border, blending seamlessly into hero photography and SVG trajectories.
- **Scrolled State:** Translucent frosted dark glass (`backdrop-blur-md bg-gray-950/80 border-b border-white/10`) with glowing electric cyan accent line.
- **Interactive Elements:** Wordmark with technical coordinates `[IITB.1998//2026]`, direct category jump anchors, official external links with indicator glyphs, and a high-contrast `REGISTER` CTA button.
- **Mobile Menu:** Fullscreen tactical drawer with keyboard trap, escape listener, clear section categorization, and quick-access contact coordinates.

### B. Interactive Category Pathway Cards
- Visual composition: High-contrast photography overlay, SVG technical crosshairs, live category badge, and unambiguous destination CTA linking to verified `techfest.org` URLs.
- Hover response: Subtle border luminescence (`border-cyan-400/60`), 2D vector coordinate shift, and soft directional arrow translation without jarring layout movement.

### C. Technical Buttons
- **Primary Action (Cyan Glow):** Solid electric cyan background (`#00F0FF`), near-black text (`#05080F`), monospace tracking, micro-corner cuts or angled brackets (`[ CTA ]`).
- **Secondary Action (Wireframe):** Ghost surface with thin border (`border-white/20`), cyan text on hover, arrow glyph animation.
- **Urgent Action (Signal Orange):** Early-bird workshop registration or live Robowars entry with high-visibility orange badge.

---

## 5. Motion Principles

1. **Native Hardware-Accelerated Performance:**  
   Exclusively animate `transform` and `opacity` properties. No layout-triggering properties (`width`, `margin`, `top`) in animations.
2. **Scroll Reveals via IntersectionObserver:**  
   Clean thresholds (`0.15`) with subtle stagger (`stagger-delay: 80ms`). Elements transition with smooth ease-out curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
3. **Strict Reduced-Motion Accessibility:**  
   Full `@media (prefers-reduced-motion: reduce)` support. When enabled, all translations, pulses, and transitions are neutralized (`animation: none !important; transition: none !important; opacity: 1 !important;`).
4. **Zero Scroll Hijacking:**  
   Standard native browser inertia scrolling is preserved 100%. No virtual scroll loops, wheel overrides, or locked views.

---

## 6. Accessibility & Contrast Compliance

- **WCAG 2.1 AA Standards:** Contrast ratio of all primary text against dark surfaces exceeds `7.5:1` (Titanium White on `#030712` is `18.2:1`).
- **Focus Rings:** Unbroken, high-contrast cyan focus indicators (`outline: 2px solid #00F0FF; outline-offset: 3px`) for all keyboard-operable anchors and buttons.
- **Semantic Landmark Structure:** `<header role="banner">`, `<main id="main-content">`, `<nav aria-label="...">`, `<section aria-labelledby="...">`, `<footer role="contentinfo">`.
- **Screen Reader Readiness:** Descriptive `aria-label`, `aria-expanded` on drawer triggers, and `sr-only` skip links.
