const fs = require('fs');
const path = require('path');

console.log('=== COMPILING MASTER VAYRATH CONCEPT ART BOARD (2400 × 1600) ===');

// Read images to base64
const heroB64 = fs.readFileSync('assets/vayrath-hero-environment.jpg').toString('base64');
const warriorsB64 = fs.readFileSync('assets/vayrath-warriors.jpg').toString('base64');
const archB64 = fs.readFileSync('assets/vayrath-architecture.jpg').toString('base64');

console.log('Images encoded to base64 successfully.');

// Define the master SVG markup
const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2400 1600" width="2400" height="1600">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bg-canvas-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A0F" />
      <stop offset="40%" stop-color="#0B0F16" />
      <stop offset="100%" stop-color="#05070A" />
    </linearGradient>

    <radialGradient id="ambient-amber-glow" cx="25%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#FF9E1B" stop-opacity="0.12" />
      <stop offset="60%" stop-color="#FF9E1B" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#FF9E1B" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="ambient-teal-glow" cx="80%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#2B5F54" stop-opacity="0.15" />
      <stop offset="50%" stop-color="#10353A" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#10353A" stop-opacity="0" />
    </radialGradient>

    <!-- Swatch Gradients -->
    <radialGradient id="swatch-obsidian" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#2D3748" />
      <stop offset="40%" stop-color="#161B26" />
      <stop offset="100%" stop-color="#07090D" />
    </radialGradient>

    <radialGradient id="swatch-copper" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#5EBAA4" />
      <stop offset="45%" stop-color="#2B5F54" />
      <stop offset="85%" stop-color="#13352E" />
      <stop offset="100%" stop-color="#0A1C18" />
    </radialGradient>

    <radialGradient id="swatch-amber" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFF0A0" />
      <stop offset="25%" stop-color="#FFB326" />
      <stop offset="65%" stop-color="#D96E04" />
      <stop offset="100%" stop-color="#6B2800" />
    </radialGradient>

    <!-- Clip Paths for artwork frames -->
    <clipPath id="clip-hero">
      <rect x="60" y="140" width="1460" height="920" rx="4" />
    </clipPath>

    <clipPath id="clip-warriors">
      <rect x="1560" y="140" width="780" height="430" rx="4" />
    </clipPath>

    <clipPath id="clip-arch">
      <rect x="1560" y="630" width="780" height="430" rx="4" />
    </clipPath>

    <!-- Grid Patterns -->
    <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.025)" stroke-width="1" />
      <circle cx="0" cy="0" r="1.5" fill="rgba(0, 240, 255, 0.15)" />
    </pattern>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap');
      .font-title { font-family: 'Cinzel', 'Trajan Pro', Georgia, serif; font-weight: 800; letter-spacing: 0.22em; }
      .font-sub { font-family: 'Inter', system-ui, sans-serif; font-weight: 600; letter-spacing: 0.25em; }
      .font-label { font-family: 'JetBrains Mono', monospace; font-weight: 600; letter-spacing: 0.12em; }
      .font-body { font-family: 'Inter', system-ui, sans-serif; font-weight: 400; line-height: 1.5; }
      .font-lore { font-family: 'Cinzel', Georgia, serif; font-style: italic; }
    </style>
  </defs>

  <!-- ========================================== -->
  <!-- LAYER 1: MASTER CANVAS BACKGROUND          -->
  <!-- ========================================== -->
  <g id="layer-background">
    <!-- Solid dark tone foundation -->
    <rect width="2400" height="1600" fill="url(#bg-canvas-grad)" />
    <rect width="2400" height="1600" fill="url(#tech-grid)" />
    <rect width="2400" height="1600" fill="url(#ambient-amber-glow)" />
    <rect width="2400" height="1600" fill="url(#ambient-teal-glow)" />

    <!-- Outer Presentation Border -->
    <rect x="30" y="30" width="2340" height="1540" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" />
    <rect x="36" y="36" width="2328" height="1528" fill="none" stroke="rgba(43, 95, 84, 0.3)" stroke-width="1" />

    <!-- Technical Corner Crosshairs -->
    <g stroke="#FF9E1B" stroke-width="1.5" opacity="0.6">
      <!-- Top-Left -->
      <path d="M24 30 H42 M30 24 V42" />
      <!-- Top-Right -->
      <path d="M2358 30 H2376 M2370 24 V42" />
      <!-- Bottom-Left -->
      <path d="M24 1570 H42 M30 1558 V1576" />
      <!-- Bottom-Right -->
      <path d="M2358 1570 H2376 M2370 1558 V1576" />
    </g>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 2: EDITORIAL HEADER                  -->
  <!-- ========================================== -->
  <g id="layer-editorial-header">
    <!-- Header baseline separator -->
    <line x1="60" y1="112" x2="2340" y2="112" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
    <line x1="60" y1="115" x2="480" y2="115" stroke="#FF9E1B" stroke-width="2" />

    <!-- Main Title -->
    <text x="60" y="82" fill="#F4EEDD" font-size="44" class="font-title">VAYRATH</text>
    <text x="350" y="80" fill="#FF9E1B" font-size="16" class="font-sub">THE CIVILIZATION BENEATH THE DYING SUN</text>

    <!-- Metadata Tags (Right Aligned) -->
    <g transform="translate(1820, 56)">
      <rect x="0" y="0" width="520" height="38" rx="3" fill="#101720" stroke="rgba(66, 140, 125, 0.4)" stroke-width="1" />
      <circle cx="20" cy="19" r="4" fill="#FF9E1B" />
      <text x="35" y="24" fill="#A0AEC0" font-size="11" class="font-label">ARCHIVE REF: VAY-8840 // VISUAL DEVELOPMENT PORTFOLIO</text>
    </g>

    <text x="60" y="104" fill="#718096" font-size="11" class="font-label">CANVAS 01 // SECTOR: THE VERTICAL CHASM // CORE SOLAR-HARVEST CITADEL</text>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 3: HERO ENVIRONMENT (APPROX. 60%)    -->
  <!-- ========================================== -->
  <g id="layer-hero-environment">
    <!-- Section Container & Frame -->
    <rect x="58" y="138" width="1464" height="924" fill="#0C1017" stroke="rgba(66, 140, 125, 0.5)" stroke-width="1.5" rx="5" />
    
    <!-- Hero Image Artwork -->
    <image x="60" y="140" width="1460" height="920" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-hero)" xlink:href="data:image/jpeg;base64,${heroB64}" />

    <!-- High-tech atmospheric vignette & framing lines inside image -->
    <rect x="60" y="140" width="1460" height="920" fill="none" stroke="rgba(255, 158, 27, 0.2)" stroke-width="1" clip-path="url(#clip-hero)" />
    
    <!-- Editorial Annotation Callouts on Hero Environment -->
    <!-- Callout 1: Dying Sun -->
    <g transform="translate(140, 200)">
      <circle cx="0" cy="0" r="16" fill="rgba(11, 14, 20, 0.7)" stroke="#FF9E1B" stroke-width="1.5" />
      <circle cx="0" cy="0" r="3" fill="#FF9E1B" />
      <line x1="16" y1="0" x2="80" y2="0" stroke="#FF9E1B" stroke-width="1.5" />
      <rect x="80" y="-16" width="310" height="32" rx="2" fill="rgba(9, 12, 16, 0.85)" stroke="rgba(255, 158, 27, 0.4)" stroke-width="1" />
      <text x="92" y="5" fill="#F4EEDD" font-size="10.5" class="font-label">SOL-NULL: ECLIPSED DYING RED GIANT</text>
    </g>

    <!-- Callout 2: Sun-Temple Citadel -->
    <g transform="translate(680, 420)">
      <circle cx="0" cy="0" r="14" fill="rgba(11, 14, 20, 0.7)" stroke="#428C7D" stroke-width="1.5" />
      <circle cx="0" cy="0" r="3" fill="#428C7D" />
      <line x1="0" y1="14" x2="0" y2="60" stroke="#428C7D" stroke-width="1.5" />
      <rect x="-160" y="60" width="320" height="32" rx="2" fill="rgba(9, 12, 16, 0.85)" stroke="rgba(66, 140, 125, 0.5)" stroke-width="1" />
      <text x="-148" y="80" fill="#F4EEDD" font-size="10.5" class="font-label">TEMPLE OF SOL-VAYRATH // BASALT SCARP</text>
    </g>

    <!-- Callout 3: Suspended Bridges -->
    <g transform="translate(1080, 680)">
      <circle cx="0" cy="0" r="14" fill="rgba(11, 14, 20, 0.7)" stroke="#FF9E1B" stroke-width="1.5" />
      <circle cx="0" cy="0" r="3" fill="#FF9E1B" />
      <line x1="-14" y1="0" x2="-60" y2="0" stroke="#FF9E1B" stroke-width="1.5" />
      <rect x="-350" y="-16" width="290" height="32" rx="2" fill="rgba(9, 12, 16, 0.85)" stroke="rgba(255, 158, 27, 0.4)" stroke-width="1" />
      <text x="-338" y="5" fill="#F4EEDD" font-size="10.5" class="font-label">MINERAL-FIBER SUSPENDED CHASM SPANS</text>
    </g>

    <!-- Scale Indicator (Bottom Left of Hero) -->
    <g transform="translate(90, 990)">
      <rect x="0" y="0" width="340" height="48" rx="3" fill="rgba(7, 10, 15, 0.9)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
      <!-- Human silhouette vector -->
      <path d="M25 22 a3 3 0 1 0 0 -6 a3 3 0 0 0 0 6 v9 l-3 12 h2 l2 -10 l2 10 h2 l-3 -12 v-5 l4 4 h2 v-2 l-4 -6 z" fill="#FF9E1B" />
      <line x1="45" y1="12" x2="45" y2="38" stroke="#428C7D" stroke-width="1.5" />
      <text x="56" y="24" fill="#F4EEDD" font-size="10" class="font-label">SCALE: SUNWARDEN GUARDIAN (1.85M)</text>
      <text x="56" y="38" fill="#718096" font-size="9" class="font-label">CANAL ARCHITECTURE HEIGHT: 1,420M</text>
    </g>

    <!-- Bottom Caption Bar of Hero -->
    <g transform="translate(60, 1066)">
      <rect x="0" y="0" width="1460" height="32" fill="#0E141D" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
      <text x="18" y="21" fill="#FF9E1B" font-size="11" class="font-label">// ENVIRONMENT STUDY 01</text>
      <text x="210" y="21" fill="#E2E8F0" font-size="11" class="font-label">MONUMENTAL CHASM CITADEL UNDER THE ECLIPSED DYING SUN</text>
      <text x="1310" y="21" fill="#718096" font-size="10.5" class="font-label">ANGLE: HIGH ELEVATED</text>
    </g>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 4: WARRIOR DESIGN STUDIES            -->
  <!-- ========================================== -->
  <g id="layer-warriors">
    <!-- Frame -->
    <rect x="1558" y="138" width="784" height="434" fill="#0C1017" stroke="rgba(66, 140, 125, 0.5)" stroke-width="1.5" rx="5" />
    <image x="1560" y="140" width="780" height="430" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-warriors)" xlink:href="data:image/jpeg;base64,${warriorsB64}" />

    <!-- Caption Banner -->
    <g transform="translate(1560, 576)">
      <rect x="0" y="0" width="780" height="34" fill="#0E141D" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
      <text x="16" y="22" fill="#FF9E1B" font-size="11" class="font-label">// THE SUNWARDENS</text>
      <text x="175" y="22" fill="#E2E8F0" font-size="11" class="font-label">DEFENDERS OF THE SOLAR SPIRES &amp; LIGHT RESERVES</text>
    </g>

    <!-- 3 Character Annotation Tags Below Warriors -->
    <!-- Warrior 1: Sentinel -->
    <g transform="translate(1560, 520)">
      <rect x="15" y="0" width="230" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(255, 158, 27, 0.4)" stroke-width="1" />
      <text x="25" y="18" fill="#F4EEDD" font-size="10" class="font-label">01. SUNWARDEN SENTINEL</text>
      <text x="25" y="32" fill="#A0AEC0" font-size="8.5" class="font-body">Ceramic armor / Solar-reflect shield</text>
    </g>
    <!-- Warrior 2: Scout -->
    <g transform="translate(1825, 520)">
      <rect x="10" y="0" width="240" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(66, 140, 125, 0.4)" stroke-width="1" />
      <text x="20" y="18" fill="#F4EEDD" font-size="10" class="font-label">02. CANYON CHASM SCOUT</text>
      <text x="20" y="32" fill="#A0AEC0" font-size="8.5" class="font-body">Mineral-fiber cloak / Kael-Varr blade</text>
    </g>
    <!-- Warrior 3: Solar Priest-Warrior -->
    <g transform="translate(2095, 520)">
      <rect x="0" y="0" width="235" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(255, 158, 27, 0.4)" stroke-width="1" />
      <text x="10" y="18" fill="#F4EEDD" font-size="10" class="font-label">03. SOLAR PRIEST-WARRIOR</text>
      <text x="10" y="32" fill="#A0AEC0" font-size="8.5" class="font-body">Crystalline pectorals / Solaris lance</text>
    </g>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 5: ARCHITECTURE STUDIES              -->
  <!-- ========================================== -->
  <g id="layer-architecture">
    <!-- Frame -->
    <rect x="1558" y="628" width="784" height="434" fill="#0C1017" stroke="rgba(66, 140, 125, 0.5)" stroke-width="1.5" rx="5" />
    <image x="1560" y="630" width="780" height="430" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-arch)" xlink:href="data:image/jpeg;base64,${archB64}" />

    <!-- Caption Banner -->
    <g transform="translate(1560, 1066)">
      <rect x="0" y="0" width="780" height="32" fill="#0E141D" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
      <text x="16" y="21" fill="#FF9E1B" font-size="11" class="font-label">// ARCHITECTURE / SOLAR AGE</text>
      <text x="260" y="21" fill="#E2E8F0" font-size="11" class="font-label">MONOLITHIC HOUSING, SUSPENDED BRIDGES, CRYSTAL CHAMBER</text>
    </g>

    <!-- 3 Architecture Sub-Tags -->
    <g transform="translate(1560, 1010)">
      <rect x="15" y="0" width="225" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" />
      <text x="25" y="17" fill="#F4EEDD" font-size="9.5" class="font-label">A. BASALT RESIDENTIAL SPUR</text>
      <text x="25" y="31" fill="#A0AEC0" font-size="8.5" class="font-body">Cliff-cut modular habitations</text>
    </g>
    <g transform="translate(1825, 1010)">
      <rect x="10" y="0" width="240" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" />
      <text x="20" y="17" fill="#F4EEDD" font-size="9.5" class="font-label">B. ROOT-ANCHORED SPAN</text>
      <text x="20" y="31" fill="#A0AEC0" font-size="8.5" class="font-body">Copper counterweight tensioners</text>
    </g>
    <g transform="translate(2095, 1010)">
      <rect x="0" y="0" width="235" height="42" rx="2" fill="rgba(9, 12, 16, 0.9)" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" />
      <text x="10" y="17" fill="#F4EEDD" font-size="9.5" class="font-label">C. SOLAR RESONANCE VAULT</text>
      <text x="10" y="31" fill="#A0AEC0" font-size="8.5" class="font-body">Harmonic crystalline accumulator</text>
    </g>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 6: CULTURAL ARTIFACTS & EPIGRAPHY    -->
  <!-- ========================================== -->
  <g id="layer-cultural-artifacts">
    <!-- Header strip for artifacts row -->
    <line x1="60" y1="1120" x2="2340" y2="1120" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
    <rect x="60" y="1122" width="2280" height="418" fill="#0A0E15" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" rx="4" />

    <!-- SUB-MODULE 1: VAYRATHI CLAN EMBLEM (X: 80 to 520) -->
    <g transform="translate(90, 1140)">
      <text x="0" y="20" fill="#FF9E1B" font-size="12" class="font-label">// CLAN EMBLEM: THE ECLIPSED CROWN</text>
      <text x="0" y="36" fill="#718096" font-size="10" class="font-label">SIGIL OF THE HIGH SUN-KEEPERS OF VAYRATH</text>

      <!-- Vector Emblem -->
      <g transform="translate(180, 190)">
        <!-- Outer faceted star ring -->
        <circle cx="0" cy="0" r="110" fill="none" stroke="rgba(66, 140, 125, 0.3)" stroke-width="1.5" stroke-dasharray="4 6" />
        <circle cx="0" cy="0" r="95" fill="none" stroke="rgba(255, 158, 27, 0.6)" stroke-width="1" />
        
        <!-- Radiant Solar Rays (Octagonal) -->
        <path d="M0 -120 L0 -95 M0 120 L0 95 M-120 0 L-95 0 M120 0 L95 0" stroke="#FF9E1B" stroke-width="2" />
        <path d="M-85 -85 L-67 -67 M85 85 L67 67 M-85 85 L-67 67 M85 -85 L67 -67" stroke="#428C7D" stroke-width="1.5" />
        
        <!-- Concentric Tiered Chevrons (Representing Canyon Strata) -->
        <polygon points="0,-75 65,0 0,75 -65,0" fill="none" stroke="#2B5F54" stroke-width="2.5" />
        <polygon points="0,-55 48,0 0,55 -48,0" fill="none" stroke="#FF9E1B" stroke-width="2" />

        <!-- Split Eclipsed Sun Disc -->
        <path d="M-35 0 A 35 35 0 0 1 35 0 Z" fill="#FF9E1B" />
        <path d="M-35 0 A 35 35 0 0 0 35 0 Z" fill="#090D14" stroke="#428C7D" stroke-width="2" />
        <circle cx="0" cy="0" r="12" fill="#F4EEDD" />
        <circle cx="0" cy="0" r="6" fill="#090D14" />
      </g>

      <text x="30" y="350" fill="#A0AEC0" font-size="10" class="font-body" text-anchor="start">
        The split disc symbolizes the eternal twilight: upper hemisphere golden with captured solar light, lower hemisphere obsidian representing the eternal chasm.
      </text>
    </g>

    <line x1="530" y1="1140" x2="530" y2="1520" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

    <!-- SUB-MODULE 2: SOLAR CALENDAR & RITUAL DIAGRAM (X: 550 to 1100) -->
    <g transform="translate(550, 1140)">
      <text x="0" y="20" fill="#FF9E1B" font-size="12" class="font-label">// SOLAR CALENDAR &amp; HARVEST RITUAL</text>
      <text x="0" y="36" fill="#718096" font-size="10" class="font-label">ANNUAL ALIGNMENT PHASES OF SOL-NULL</text>

      <!-- Astrological Calendar Vector Graphic -->
      <g transform="translate(260, 200)">
        <!-- Outer celestial orbit -->
        <circle cx="0" cy="0" r="120" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1" />
        <circle cx="0" cy="0" r="105" fill="none" stroke="rgba(66, 140, 125, 0.4)" stroke-width="1.5" />
        <circle cx="0" cy="0" r="75" fill="none" stroke="rgba(255, 158, 27, 0.3)" stroke-width="1" stroke-dasharray="2 4" />
        <circle cx="0" cy="0" r="40" fill="#090D14" stroke="#FF9E1B" stroke-width="2" />

        <!-- Center Dying Star -->
        <circle cx="0" cy="0" r="18" fill="#FF9E1B" opacity="0.9" />
        <circle cx="0" cy="0" r="28" fill="none" stroke="#FF9E1B" stroke-width="1" stroke-dasharray="3 3" />

        <!-- 4 Cardinal Alignment Points (Equinox / Solstice) -->
        <circle cx="0" cy="-105" r="7" fill="#F4EEDD" stroke="#090D14" stroke-width="2" />
        <text x="12" y="-102" fill="#F4EEDD" font-size="9" class="font-label">ZENITH HARVEST</text>

        <circle cx="105" cy="0" r="7" fill="#428C7D" stroke="#090D14" stroke-width="2" />
        <text x="80" y="20" fill="#428C7D" font-size="9" class="font-label">DESCENT</text>

        <circle cx="0" cy="105" r="7" fill="#161B26" stroke="#FF9E1B" stroke-width="2" />
        <text x="-50" y="125" fill="#FF9E1B" font-size="9" class="font-label">TOTAL ECLIPSE</text>

        <circle cx="-105" cy="0" r="7" fill="#428C7D" stroke="#090D14" stroke-width="2" />
        <text x="-160" y="20" fill="#428C7D" font-size="9" class="font-label">ASCENT</text>

        <!-- Ray sectors -->
        <path d="M0 0 L-74 -74 M0 0 L74 -74 M0 0 L74 74 M0 0 L-74 74" stroke="rgba(255, 158, 27, 0.3)" stroke-width="1" />
      </g>

      <text x="30" y="350" fill="#A0AEC0" font-size="10" class="font-body">
        Calculates the 412-day solar cycle. When Sol-Null reaches Zenith, the spires open to charge city-wide crystal batteries.
      </text>
    </g>

    <line x1="1140" y1="1140" x2="1140" y2="1520" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

    <!-- SUB-MODULE 3: VAYRATHI WRITING SYSTEM / GLYPHS (X: 1160 to 1720) -->
    <g transform="translate(1160, 1140)">
      <text x="0" y="20" fill="#FF9E1B" font-size="12" class="font-label">// EPIGRAPHY: VAYRATHI CRYSTAL-CUNEIFORM</text>
      <text x="0" y="36" fill="#718096" font-size="10" class="font-label">ACOUSTICALLY CHISELED BASALT RUNES</text>

      <!-- 6 Key Glyphs displayed in grid -->
      <g transform="translate(20, 70)">
        <!-- Glyph 1: VAYR (Light) -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <path d="M75 18 L60 45 L90 45 Z M75 45 L75 70 M60 58 L90 58" stroke="#FF9E1B" stroke-width="2.5" fill="none" stroke-linejoin="round" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">VAYR [LIGHT]</text>
        </g>

        <!-- Glyph 2: ATH (Abyss) -->
        <g transform="translate(170, 0)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <path d="M60 22 L90 22 L75 52 Z M60 68 L90 68" stroke="#428C7D" stroke-width="2.5" fill="none" stroke-linejoin="round" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">ATH [ABYSS]</text>
        </g>

        <!-- Glyph 3: KOR (Memory) -->
        <g transform="translate(340, 0)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <circle cx="75" cy="40" r="18" stroke="#F4EEDD" stroke-width="2" fill="none" />
          <line x1="57" y1="40" x2="93" y2="40" stroke="#F4EEDD" stroke-width="2" />
          <line x1="75" y1="22" x2="75" y2="58" stroke="#F4EEDD" stroke-width="2" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">KOR [MEMORY]</text>
        </g>

        <!-- Glyph 4: ZHEL (Crystal) -->
        <g transform="translate(0, 105)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <polygon points="75,18 92,42 75,66 58,42" stroke="#FF9E1B" stroke-width="2.5" fill="none" />
          <line x1="75" y1="18" x2="75" y2="66" stroke="#FF9E1B" stroke-width="1.5" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">ZHEL [CRYSTAL]</text>
        </g>

        <!-- Glyph 5: NAK (Sentinel) -->
        <g transform="translate(170, 105)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <path d="M60 20 H90 V45 C90 58 75 68 75 68 C75 68 60 58 60 45 Z" stroke="#428C7D" stroke-width="2" fill="none" />
          <circle cx="75" cy="40" r="3" fill="#FF9E1B" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">NAK [WARDEN]</text>
        </g>

        <!-- Glyph 6: SOL (Dying Sun) -->
        <g transform="translate(340, 105)">
          <rect x="0" y="0" width="150" height="90" fill="#0F141E" stroke="rgba(255, 255, 255, 0.06)" rx="3" />
          <circle cx="75" cy="40" r="20" stroke="#FF9E1B" stroke-width="2" stroke-dasharray="4 2" fill="none" />
          <circle cx="75" cy="40" r="8" fill="#FF9E1B" />
          <text x="75" y="82" fill="#E2E8F0" font-size="9" class="font-label" text-anchor="middle">SOL [DYING SUN]</text>
        </g>
      </g>

      <!-- Lore Phrase Inscription -->
      <g transform="translate(20, 285)">
        <rect x="0" y="0" width="490" height="52" fill="#0D111A" stroke="rgba(255, 158, 27, 0.3)" stroke-width="1" rx="2" />
        <text x="16" y="22" fill="#F4EEDD" font-size="11" class="font-label">INSCRIPTION TRANSLATION // TEMPLE PORTAL:</text>
        <text x="16" y="40" fill="#FF9E1B" font-size="10.5" class="font-lore">"VAYR-KOR ZHEL-ATH" — (LIGHT IS MEMORY PRESERVED IN STONE)</text>
      </g>
    </g>

    <line x1="1740" y1="1140" x2="1740" y2="1520" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />

    <!-- SUB-MODULE 4: MATERIAL SWATCHES & LORE FRAGMENT (X: 1760 to 2320) -->
    <g transform="translate(1760, 1140)">
      <text x="0" y="20" fill="#FF9E1B" font-size="12" class="font-label">// MATERIAL PALETTE &amp; CANONICAL LORE</text>
      <text x="0" y="36" fill="#718096" font-size="10" class="font-label">TACTILE STRATA OF THE VAYRATHI BIOME</text>

      <!-- 3 Material Swatches -->
      <g transform="translate(0, 60)">
        <!-- Swatch 1: Obsidian Basalt -->
        <g transform="translate(0, 0)">
          <circle cx="34" cy="34" r="32" fill="url(#swatch-obsidian)" stroke="#4A5568" stroke-width="2" />
          <text x="80" y="24" fill="#F4EEDD" font-size="11" class="font-label">OBSIDIAN BASALT</text>
          <text x="80" y="38" fill="#718096" font-size="9" class="font-label">HEX: #0B0E14 // DENSITY: 3.12 g/cm³</text>
          <text x="80" y="52" fill="#A0AEC0" font-size="9" class="font-body">Vitreous volcanic foundation bedrock.</text>
        </g>

        <!-- Swatch 2: Oxidized Solar-Copper -->
        <g transform="translate(0, 78)">
          <circle cx="34" cy="34" r="32" fill="url(#swatch-copper)" stroke="#5EBAA4" stroke-width="2" />
          <text x="80" y="24" fill="#F4EEDD" font-size="11" class="font-label">OXIDIZED SOLAR-COPPER</text>
          <text x="80" y="38" fill="#718096" font-size="9" class="font-label">HEX: #2B5F54 // ALLOY CONDUCTIVITY: 98%</text>
          <text x="80" y="52" fill="#A0AEC0" font-size="9" class="font-body">Patinated solar energy transmission conduits.</text>
        </g>

        <!-- Swatch 3: Resonant Amber Crystal -->
        <g transform="translate(0, 156)">
          <circle cx="34" cy="34" r="32" fill="url(#swatch-amber)" stroke="#FFD000" stroke-width="2" />
          <text x="80" y="24" fill="#F4EEDD" font-size="11" class="font-label">RESONANT AMBER CRYSTAL</text>
          <text x="80" y="38" fill="#718096" font-size="9" class="font-label">HEX: #FF9E1B // LUMEN STORAGE: 140 kLM</text>
          <text x="80" y="52" fill="#A0AEC0" font-size="9" class="font-body">Phototropic sunlight-storing mineral quartz.</text>
        </g>
      </g>

      <!-- Short Lore Fragment Block -->
      <g transform="translate(0, 290)">
        <rect x="0" y="0" width="550" height="58" fill="#0C1017" stroke="rgba(255, 158, 27, 0.4)" stroke-width="1" rx="3" />
        <text x="16" y="22" fill="#FF9E1B" font-size="10.5" class="font-label">// THE LITANY OF ASH AND GOLD:</text>
        <text x="16" y="42" fill="#F4EEDD" font-size="11" class="font-lore">
          "Light is memory. When the celestial fire dimmed, we carved our lives into the deep basalt.
        </text>
        <text x="16" y="54" fill="#F4EEDD" font-size="11" class="font-lore">
          We do not mourn the sun; we drink its last breath into crystal bone."
        </text>
      </g>
    </g>
  </g>

  <!-- ========================================== -->
  <!-- LAYER 7: FOOTER & COPYRIGHT ANNOTATIONS    -->
  <!-- ========================================== -->
  <g id="layer-footer">
    <line x1="60" y1="1560" x2="2340" y2="1560" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
    <text x="60" y="1578" fill="#718096" font-size="10" class="font-label">ORIGINAL WORLD-BUILDING CONCEPT ART SUBMISSION // VAYRATH: THE CIVILIZATION BENEATH THE DYING SUN</text>
    <text x="1800" y="1578" fill="#718096" font-size="10" class="font-label">RESOLUTION: 2400 × 1600 PX // EDITABLE SVG MASTER // SCALE 1:1</text>
  </g>
</svg>
`;

fs.writeFileSync('vayrath-concept-board.svg', svgContent);
console.log('Master SVG written: vayrath-concept-board.svg (Size: ' + (svgContent.length / 1024 / 1024).toFixed(2) + ' MB)');
