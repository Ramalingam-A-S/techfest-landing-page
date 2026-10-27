const fs = require('fs');

console.log('=== BUILDING FULLY INLINED VECTOR PRESENTATION BOARD ===');

const frontLines = fs.readFileSync('design/front-hoodie.svg', 'utf8').split('\n');
const frontGarment = frontLines.slice(66, 256).join('\n');
const frontArt = frontLines.slice(260, 307).join('\n');

const backLines = fs.readFileSync('design/back-hoodie.svg', 'utf8').split('\n');
const backGarment = backLines.slice(59, 175).join('\n');
const backArt = backLines.slice(175, 266).join('\n');

console.log('Front Garment lines:', frontGarment.split('\n').length);
console.log('Front Art lines:', frontArt.split('\n').length);
console.log('Back Garment lines:', backGarment.split('\n').length);
console.log('Back Art lines:', backArt.split('\n').length);

const masterSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2400 1600" width="2400" height="1600">
  <defs>
    <!-- Background & Environment Gradients -->
    <linearGradient id="board-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080A0E" />
      <stop offset="50%" stop-color="#0B0D12" />
      <stop offset="100%" stop-color="#050608" />
    </linearGradient>

    <radialGradient id="board-blue-glow" cx="30%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.12" />
      <stop offset="60%" stop-color="#3B82F6" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="board-blue-glow-right" cx="70%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.1" />
      <stop offset="70%" stop-color="#3B82F6" stop-opacity="0" />
    </radialGradient>

    <!-- Card Background Gradient -->
    <linearGradient id="card-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#121620" />
      <stop offset="100%" stop-color="#0B0D14" />
    </linearGradient>

    <!-- Swatch Shading Gradients -->
    <radialGradient id="swatch-void-black" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#242833" />
      <stop offset="45%" stop-color="#0B0D10" />
      <stop offset="100%" stop-color="#020304" />
    </radialGradient>

    <radialGradient id="swatch-tech-blue" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="40%" stop-color="#3B82F6" />
      <stop offset="85%" stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </radialGradient>

    <radialGradient id="swatch-off-white" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#F3F4F6" />
      <stop offset="100%" stop-color="#D1D5DB" />
    </radialGradient>

    <radialGradient id="swatch-steel-grey" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#9CA3AF" />
      <stop offset="50%" stop-color="#6B7280" />
      <stop offset="100%" stop-color="#374151" />
    </radialGradient>

    <pattern id="board-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.025)" stroke-width="1" />
      <circle cx="0" cy="0" r="1" fill="rgba(59, 130, 246, 0.2)" />
    </pattern>

    <!-- Garment Shading Gradients (Inlined) -->
    <linearGradient id="hoodie-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#181B22" />
      <stop offset="35%" stop-color="#0E1015" />
      <stop offset="70%" stop-color="#0A0C0F" />
      <stop offset="100%" stop-color="#07080B" />
    </linearGradient>

    <linearGradient id="hood-interior-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#030406" />
      <stop offset="60%" stop-color="#090A0E" />
      <stop offset="100%" stop-color="#14171E" />
    </linearGradient>

    <linearGradient id="sleeve-left-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B1E26" />
      <stop offset="50%" stop-color="#101217" />
      <stop offset="100%" stop-color="#08090C" />
    </linearGradient>

    <linearGradient id="sleeve-right-grad" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B1E26" />
      <stop offset="50%" stop-color="#101217" />
      <stop offset="100%" stop-color="#08090C" />
    </linearGradient>

    <linearGradient id="pocket-shading" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1A1D25" />
      <stop offset="15%" stop-color="#111319" />
      <stop offset="85%" stop-color="#0C0E12" />
      <stop offset="100%" stop-color="#060709" />
    </linearGradient>

    <linearGradient id="metal-aglet" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9CA3AF" />
      <stop offset="40%" stop-color="#F3F4F6" />
      <stop offset="70%" stop-color="#4B5563" />
      <stop offset="100%" stop-color="#1F2937" />
    </linearGradient>

    <linearGradient id="back-hoodie-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#191C24" />
      <stop offset="30%" stop-color="#0E1015" />
      <stop offset="70%" stop-color="#0A0C0F" />
      <stop offset="100%" stop-color="#07080B" />
    </linearGradient>

    <linearGradient id="back-hood-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E222D" />
      <stop offset="50%" stop-color="#141720" />
      <stop offset="100%" stop-color="#0A0B0E" />
    </linearGradient>

    <linearGradient id="back-sleeve-left-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1D25" />
      <stop offset="60%" stop-color="#0F1116" />
      <stop offset="100%" stop-color="#07080B" />
    </linearGradient>

    <linearGradient id="back-sleeve-right-grad" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1A1D25" />
      <stop offset="60%" stop-color="#0F1116" />
      <stop offset="100%" stop-color="#07080B" />
    </linearGradient>

    <linearGradient id="planet-crescent-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
      <stop offset="40%" stop-color="#F3F4F6" stop-opacity="0.6" />
      <stop offset="75%" stop-color="#6B7280" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#0B0D10" stop-opacity="0" />
    </linearGradient>

    <filter id="fabric-soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000000" flood-opacity="0.65" />
    </filter>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Orbitron:wght@600;700;800;900&amp;family=JetBrains+Mono:wght@400;500;600;700&amp;display=swap');
      .font-orbitron { font-family: 'Orbitron', 'Space Grotesk', system-ui, sans-serif; font-weight: 800; letter-spacing: 0.12em; }
      .font-inter { font-family: 'Inter', system-ui, sans-serif; }
      .font-mono { font-family: 'JetBrains Mono', monospace; }
    </style>
  </defs>

  <!-- ============================================== -->
  <!-- 1. PRESENTATION CANVAS BACKGROUND              -->
  <!-- ============================================== -->
  <g id="layer-board-background">
    <rect width="2400" height="1600" fill="url(#board-bg-grad)" />
    <rect width="2400" height="1600" fill="url(#board-grid)" />
    <rect width="2400" height="1600" fill="url(#board-blue-glow)" />
    <rect width="2400" height="1600" fill="url(#board-blue-glow-right)" />

    <rect x="30" y="30" width="2340" height="1540" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" />
    <rect x="36" y="36" width="2328" height="1528" fill="none" stroke="rgba(59, 130, 246, 0.25)" stroke-width="1" />

    <g stroke="#3B82F6" stroke-width="1.5" opacity="0.7">
      <path d="M24 30 H42 M30 24 V42" />
      <path d="M2358 30 H2376 M2370 24 V42" />
      <path d="M24 1570 H42 M30 1558 V1576" />
      <path d="M2358 1570 H2376 M2370 1558 V1576" />
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 2. EDITORIAL HEADER & BRAND SPECIFICATION      -->
  <!-- ============================================== -->
  <g id="layer-board-header" transform="translate(60, 50)">
    <line x1="0" y1="80" x2="2280" y2="80" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
    <line x1="0" y1="83" x2="520" y2="83" stroke="#3B82F6" stroke-width="2.5" />

    <text x="0" y="42" fill="#F3F4F6" font-size="34" class="font-orbitron">SAME CURIOSITY. BIGGER TOMORROWS.</text>
    <text x="0" y="68" fill="#3B82F6" font-size="14" font-weight="700" class="font-mono" letter-spacing="3">
      TECHFEST IIT BOMBAY // OFFICIAL TECHNICAL STREETWEAR HOODIE CONCEPT
    </text>

    <g transform="translate(1780, 16)">
      <rect x="0" y="0" width="500" height="48" rx="4" fill="#0F131D" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1" />
      <circle cx="24" cy="24" r="5" fill="#3B82F6" />
      <text x="42" y="22" fill="#F3F4F6" font-size="11.5" font-weight="700" class="font-mono">STYLE: TF-HD-2026-V1 // 450 GSM FRENCH TERRY</text>
      <text x="42" y="38" fill="#6B7280" font-size="9.5" class="font-inter">STAGE: PRODUCTION CONCEPT // EDITABLE VECTOR SPEC</text>
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 3. LARGE FRONT HOODIE MOCKUP (LEFT ZONE)       -->
  <!-- ============================================== -->
  <g id="layer-mockup-front" transform="translate(70, 155)">
    <rect x="0" y="0" width="870" height="940" rx="6" fill="url(#card-surface-grad)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
    <rect x="0" y="0" width="870" height="42" rx="6" fill="#151A25" />
    <text x="24" y="26" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 01 FRONT ELEVATION MOCKUP</text>
    <text x="670" y="26" fill="#6B7280" font-size="11" class="font-mono">VIEW: CHEST &amp; KANGAROO POCKET</text>

    <!-- Inlined Front Garment Vectors Scaled & Centered -->
    <g transform="translate(15, 30) scale(0.70)">
${frontGarment}
${frontArt}
    </g>

    <!-- Dimension Callouts -->
    <g id="front-dimensions" stroke="#3B82F6" stroke-width="1" opacity="0.6">
      <line x1="260" y1="910" x2="610" y2="910" />
      <line x1="260" y1="904" x2="260" y2="916" />
      <line x1="610" y1="904" x2="610" y2="916" />
      <text x="435" y="904" fill="#F3F4F6" font-size="10" font-family="monospace" text-anchor="middle">CHEST WIDTH: 66 CM [OVERSIZED FIT]</text>
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 4. LARGE REAR HOODIE MOCKUP (CENTER-RIGHT ZONE)-->
  <!-- ============================================== -->
  <g id="layer-mockup-back" transform="translate(970, 155)">
    <rect x="0" y="0" width="870" height="940" rx="6" fill="url(#card-surface-grad)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" />
    <rect x="0" y="0" width="870" height="42" rx="6" fill="#151A25" />
    <text x="24" y="26" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 02 REAR ELEVATION MOCKUP</text>
    <text x="640" y="26" fill="#6B7280" font-size="11" class="font-mono">VIEW: JUMBO CELESTIAL PRINT</text>

    <!-- Inlined Back Garment Vectors Scaled & Centered -->
    <g transform="translate(15, 30) scale(0.70)">
${backGarment}
${backArt}
    </g>

    <!-- Print Boundary Dimension -->
    <g id="back-dimensions" stroke="#3B82F6" stroke-width="1" opacity="0.6">
      <line x1="250" y1="910" x2="620" y2="910" />
      <line x1="250" y1="904" x2="250" y2="916" />
      <line x1="620" y1="904" x2="620" y2="916" />
      <text x="435" y="904" fill="#F3F4F6" font-size="10" font-family="monospace" text-anchor="middle">JUMBO PRINT SPAN: 360 MM × 440 MM</text>
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 5. FOUR DETAIL CALLOUTS (RIGHT SIDE PANEL)     -->
  <!-- ============================================== -->
  <g id="layer-detail-callouts" transform="translate(1870, 155)">
    <text x="0" y="-8" fill="#F3F4F6" font-size="13" font-weight="700" class="font-mono">// GARMENT DETAIL SPECIFICATIONS</text>

    <!-- CALLOUT 01: DRAWSTRING AGLET -->
    <g id="callout-aglet" transform="translate(0, 10)">
      <rect x="0" y="0" width="470" height="215" rx="5" fill="#0F131D" stroke="rgba(255, 255, 255, 0.08)" />
      <rect x="0" y="0" width="470" height="30" rx="5" fill="#161B28" />
      <text x="16" y="20" fill="#3B82F6" font-size="11" font-weight="700" class="font-mono">DETAIL 01 // CUSTOM ENGRAVED AGLET</text>
      
      <g transform="translate(40, 75)">
        <rect x="0" y="2" width="100" height="24" rx="4" fill="#D1D5DB" stroke="#9CA3AF" />
        <line x1="20" y1="2" x2="20" y2="26" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="40" y1="2" x2="40" y2="26" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="60" y1="2" x2="60" y2="26" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="2 2" />
        <line x1="80" y1="2" x2="80" y2="26" stroke="#9CA3AF" stroke-width="1" stroke-dasharray="2 2" />

        <rect x="95" y="0" width="130" height="28" rx="3" fill="#1F242F" stroke="#4B5563" stroke-width="1.2" />
        <polygon points="120,6 128,11 128,21 120,26 112,21 112,11" fill="none" stroke="#3B82F6" stroke-width="1.2" />
        <text x="135" y="18" fill="#F3F4F6" font-size="8" font-family="Orbitron" font-weight="700" letter-spacing="1">TECHFEST</text>
        <rect x="215" y="0" width="10" height="28" fill="#3B82F6" />
      </g>
      <text x="16" y="150" fill="#F3F4F6" font-size="11" font-weight="600" class="font-inter">CNC Aluminum Cylindrical Aglet (Gunmetal)</text>
      <text x="16" y="170" fill="#94A3B8" font-size="9.5" class="font-inter">Laser-engraved hexagonal monogram with Tech Blue anodized terminal ring. 4.5mm round braided cord.</text>
    </g>

    <!-- CALLOUT 02: SHOULDER TAPING -->
    <g id="callout-shoulder" transform="translate(0, 240)">
      <rect x="0" y="0" width="470" height="215" rx="5" fill="#0F131D" stroke="rgba(255, 255, 255, 0.08)" />
      <rect x="0" y="0" width="470" height="30" rx="5" fill="#161B28" />
      <text x="16" y="20" fill="#3B82F6" font-size="11" font-weight="700" class="font-mono">DETAIL 02 // REFLECTIVE SHOULDER PIPING</text>
      
      <g transform="translate(40, 60)">
        <path d="M 0 50 C 40 40, 100 20, 180 10 L 220 10" fill="none" stroke="#1F242F" stroke-width="36" stroke-linecap="round" />
        <path d="M 0 50 C 40 40, 100 20, 180 10 L 220 10" fill="none" stroke="#3B82F6" stroke-width="8" stroke-linecap="round" />
        <path d="M 0 44 C 40 34, 100 14, 180 4 L 220 4" fill="none" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="3 3" />
        <path d="M 0 56 C 40 46, 100 26, 180 16 L 220 16" fill="none" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="3 3" />
        <circle cx="200" cy="10" r="3" fill="#F3F4F6" />
      </g>
      <text x="16" y="150" fill="#F3F4F6" font-size="11" font-weight="600" class="font-inter">Ergonomic Raglan Bonding &amp; Flatlock Seams</text>
      <text x="16" y="170" fill="#94A3B8" font-size="9.5" class="font-inter">3M Scotchlite reflective tech-blue thermal film bonded along the anterior raglan contour for nocturnal visibility.</text>
    </g>

    <!-- CALLOUT 03: SLEEVE SLOGAN -->
    <g id="callout-sleeve" transform="translate(0, 470)">
      <rect x="0" y="0" width="470" height="215" rx="5" fill="#0F131D" stroke="rgba(255, 255, 255, 0.08)" />
      <rect x="0" y="0" width="470" height="30" rx="5" fill="#161B28" />
      <text x="16" y="20" fill="#3B82F6" font-size="11" font-weight="700" class="font-mono">DETAIL 03 // SLEEVE TYPOGRAPHY</text>
      
      <g transform="translate(20, 65)">
        <rect x="0" y="0" width="430" height="40" rx="4" fill="#090B0E" stroke="#1F242F" />
        <text x="15" y="25" fill="#F3F4F6" font-size="10.5" font-weight="700" class="font-orbitron" letter-spacing="3">
          EXPLORE // BUILD // COLLABORATE // BELONG
        </text>
        <line x1="15" y1="32" x2="415" y2="32" stroke="#3B82F6" stroke-width="1.2" />
        <circle cx="415" cy="32" r="2" fill="#3B82F6" />
      </g>
      <text x="16" y="150" fill="#F3F4F6" font-size="11" font-weight="600" class="font-inter">Linear Forearm High-Density Print</text>
      <text x="16" y="170" fill="#94A3B8" font-size="9.5" class="font-inter">Precision screen-printed on the outer left forearm in matte off-white with Tech Blue registration guide wire.</text>
    </g>

    <!-- CALLOUT 04: FABRIC & PRINT TREATMENT -->
    <g id="callout-fabric" transform="translate(0, 700)">
      <rect x="0" y="0" width="470" height="240" rx="5" fill="#0F131D" stroke="rgba(255, 255, 255, 0.08)" />
      <rect x="0" y="0" width="470" height="30" rx="5" fill="#161B28" />
      <text x="16" y="20" fill="#3B82F6" font-size="11" font-weight="700" class="font-mono">DETAIL 04 // FABRIC TEXTURE &amp; PRINT SPEC</text>
      
      <g transform="translate(20, 48)">
        <rect x="0" y="0" width="70" height="60" rx="3" fill="#131720" stroke="#3B82F6" stroke-width="1.2" />
        <g stroke="#262D3D" stroke-width="1" stroke-dasharray="2 2">
          <line x1="10" y1="0" x2="10" y2="60" /><line x1="25" y1="0" x2="25" y2="60" />
          <line x1="40" y1="0" x2="40" y2="60" /><line x1="55" y1="0" x2="55" y2="60" />
        </g>
        <text x="85" y="22" fill="#F3F4F6" font-size="11" font-weight="700" class="font-inter">450 GSM Organic French Terry Cotton</text>
        <text x="85" y="38" fill="#6B7280" font-size="9.5" class="font-mono">100% Combed Cotton // Diagonal Loopback</text>
        <text x="85" y="52" fill="#3B82F6" font-size="9.5" class="font-mono">Pre-Shrunk // Silicon Softener Wash</text>
      </g>
      <text x="16" y="145" fill="#F3F4F6" font-size="11" font-weight="600" class="font-inter">Dual-Stage Print Execution</text>
      <text x="16" y="165" fill="#94A3B8" font-size="9.5" class="font-inter">Water-based discharge underbase preserves fabric softness without stiff plastisol hand-feel. High-density silicone chest crest with micro-embossed detail.</text>
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 6. BOTTOM EDITORIAL & TECHNICAL MATRIX         -->
  <!-- ============================================== -->
  <g id="layer-bottom-specs" transform="translate(70, 1120)">
    <line x1="0" y1="0" x2="2270" y2="0" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />

    <!-- BLOCK 1: CONCEPT DESCRIPTION & WORLD NARRATIVE -->
    <g id="spec-concept" transform="translate(0, 20)">
      <rect x="0" y="0" width="540" height="370" rx="5" fill="#0E121A" stroke="rgba(255, 255, 255, 0.08)" />
      <text x="24" y="32" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 01 DESIGN MANIFESTO</text>
      <text x="24" y="62" fill="#F3F4F6" font-size="18" font-weight="800" class="font-orbitron">SAME CURIOSITY. BIGGER TOMORROWS.</text>
      
      <g transform="translate(24, 85)" fill="#94A3B8" font-size="11.5" class="font-inter">
        <text x="0" y="0">This hoodie translates Techfest IIT Bombay's 29-year legacy into a</text>
        <text x="0" y="18">luxury technical streetwear garment. Designed for researchers, engineers,</text>
        <text x="0" y="36">and future-builders who push the frontiers of what is possible.</text>

        <text x="0" y="70" fill="#F3F4F6" font-weight="600">Key Aesthetics &amp; Influences:</text>
        <text x="0" y="90">• Brutalist architectural wireframes of the iconic IIT Bombay campus.</text>
        <text x="0" y="108">• Orbital trajectory mathematics and aerospace exploration telemetry.</text>
        <text x="0" y="126">• Monochromatic planetary geometry with disciplined Tech Blue signals.</text>
        <text x="0" y="144">• Premium wearable ergonomics without excessive merchandising clutter.</text>

        <text x="0" y="180" fill="#3B82F6" font-family="monospace" font-size="10.5">
          "A BRIGHTER TOMORROW. TOGETHER."
        </text>
        <text x="0" y="200" fill="#6B7280" font-size="10">
          Independent creative design proposal. Non-commercial visual study.
        </text>
      </g>
    </g>

    <!-- BLOCK 2: COLOR PALETTE SPECIFICATION -->
    <g id="spec-palette" transform="translate(565, 20)">
      <rect x="0" y="0" width="540" height="370" rx="5" fill="#0E121A" stroke="rgba(255, 255, 255, 0.08)" />
      <text x="24" y="32" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 02 CHROMATIC ARCHITECTURE</text>
      <text x="24" y="60" fill="#F3F4F6" font-size="15" font-weight="700" class="font-orbitron">OFFICIAL 4-TONE COLOR SYSTEM</text>

      <g transform="translate(24, 85)">
        <g transform="translate(0, 0)">
          <circle cx="30" cy="24" r="22" fill="url(#swatch-void-black)" stroke="#374151" stroke-width="1.5" />
          <text x="65" y="18" fill="#F3F4F6" font-size="12" font-weight="700" class="font-inter">VOID BLACK</text>
          <text x="65" y="32" fill="#6B7280" font-size="10" class="font-mono">HEX: #0B0D10 // PANTONE BLACK 6 C</text>
          <text x="65" y="44" fill="#94A3B8" font-size="9" class="font-inter">Primary garment foundation. Deepest matte black.</text>
        </g>

        <g transform="translate(0, 65)">
          <circle cx="30" cy="24" r="22" fill="url(#swatch-tech-blue)" stroke="#93C5FD" stroke-width="1.5" />
          <text x="65" y="18" fill="#F3F4F6" font-size="12" font-weight="700" class="font-inter">TECH BLUE</text>
          <text x="65" y="32" fill="#3B82F6" font-size="10" class="font-mono">HEX: #3B82F6 // PANTONE 2172 C</text>
          <text x="65" y="44" fill="#94A3B8" font-size="9" class="font-inter">Controlled energetic accents, trajectory arcs &amp; aglet tips.</text>
        </g>

        <g transform="translate(0, 130)">
          <circle cx="30" cy="24" r="22" fill="url(#swatch-off-white)" stroke="#9CA3AF" stroke-width="1.5" />
          <text x="65" y="18" fill="#F3F4F6" font-size="12" font-weight="700" class="font-inter">OFF WHITE</text>
          <text x="65" y="32" fill="#6B7280" font-size="10" class="font-mono">HEX: #F3F4F6 // PANTONE COOL GRAY 1 C</text>
          <text x="65" y="44" fill="#94A3B8" font-size="9" class="font-inter">Hero back typography and high-legibility markings.</text>
        </g>

        <g transform="translate(0, 195)">
          <circle cx="30" cy="24" r="22" fill="url(#swatch-steel-grey)" stroke="#4B5563" stroke-width="1.5" />
          <text x="65" y="18" fill="#F3F4F6" font-size="12" font-weight="700" class="font-inter">STEEL GREY</text>
          <text x="65" y="32" fill="#6B7280" font-size="10" class="font-mono">HEX: #6B7280 // PANTONE COOL GRAY 8 C</text>
          <text x="65" y="44" fill="#94A3B8" font-size="9" class="font-inter">Architectural blueprint linework and technical metadata.</text>
        </g>
      </g>
    </g>

    <!-- BLOCK 3: TYPOGRAPHY SPECIMEN -->
    <g id="spec-typography" transform="translate(1130, 20)">
      <rect x="0" y="0" width="540" height="370" rx="5" fill="#0E121A" stroke="rgba(255, 255, 255, 0.08)" />
      <text x="24" y="32" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 03 TYPOGRAPHY SPECIMENS</text>
      <text x="24" y="60" fill="#F3F4F6" font-size="15" font-weight="700" class="font-orbitron">DUAL HIERARCHY TYPE SYSTEM</text>

      <g transform="translate(24, 90)">
        <rect x="0" y="0" width="490" height="110" rx="4" fill="#131722" stroke="rgba(59, 130, 246, 0.2)" />
        <text x="16" y="24" fill="#3B82F6" font-size="10" font-weight="700" class="font-mono">PRIMARY DISPLAY: ORBITRON (BOLD / SEMIBOLD)</text>
        <text x="16" y="55" fill="#F3F4F6" font-size="22" font-weight="800" class="font-orbitron" letter-spacing="3">TECHFEST 2026</text>
        <text x="16" y="78" fill="#94A3B8" font-size="10" class="font-mono">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</text>
        <text x="16" y="96" fill="#6B7280" font-size="9" class="font-inter">Application: Main back headline, chest wordmark, sleeve slogan, tagline.</text>

        <g transform="translate(0, 125)">
          <rect x="0" y="0" width="490" height="110" rx="4" fill="#131722" stroke="rgba(255, 255, 255, 0.08)" />
          <text x="16" y="24" fill="#3B82F6" font-size="10" font-weight="700" class="font-mono">SECONDARY BODY: INTER (MEDIUM / REGULAR)</text>
          <text x="16" y="55" fill="#F3F4F6" font-size="16" font-weight="600" class="font-inter">Ideas / People / Technology / Impact</text>
          <text x="16" y="78" fill="#94A3B8" font-size="10" class="font-inter">abcdefghijklmnopqrstuvwxyz 0123456789 &amp; @ # /</text>
          <text x="16" y="96" fill="#6B7280" font-size="9" class="font-inter">Application: Editorial captions, technical callouts, garment dimensions.</text>
        </g>
      </g>
    </g>

    <!-- BLOCK 4: PRINT PLACEMENT & PRODUCTION MATRIX -->
    <g id="spec-techpack" transform="translate(1695, 20)">
      <rect x="0" y="0" width="575" height="370" rx="5" fill="#0E121A" stroke="rgba(255, 255, 255, 0.08)" />
      <text x="24" y="32" fill="#3B82F6" font-size="12" font-weight="700" class="font-mono">// 04 PRODUCTION TECH PACK</text>
      <text x="24" y="60" fill="#F3F4F6" font-size="15" font-weight="700" class="font-orbitron">PRINT SIZING &amp; PLACEMENT MAP</text>

      <g transform="translate(24, 85)">
        <rect x="0" y="0" width="525" height="26" fill="#171D2A" />
        <text x="10" y="17" fill="#F3F4F6" font-size="10" font-weight="700" class="font-mono">LOCATION</text>
        <text x="150" y="17" fill="#F3F4F6" font-size="10" font-weight="700" class="font-mono">DIMENSIONS</text>
        <text x="290" y="17" fill="#F3F4F6" font-size="10" font-weight="700" class="font-mono">PRINT METHOD</text>

        <g transform="translate(0, 32)">
          <text x="10" y="16" fill="#F3F4F6" font-size="10.5" font-weight="600" class="font-inter">Left Chest</text>
          <text x="150" y="16" fill="#3B82F6" font-size="10" class="font-mono">80 × 35 mm</text>
          <text x="290" y="16" fill="#94A3B8" font-size="10" class="font-inter">High-Density 3D Silicone</text>
        </g>
        <line x1="0" y1="56" x2="525" y2="56" stroke="rgba(255, 255, 255, 0.06)" />

        <g transform="translate(0, 64)">
          <text x="10" y="16" fill="#F3F4F6" font-size="10.5" font-weight="600" class="font-inter">Jumbo Center Back</text>
          <text x="150" y="16" fill="#3B82F6" font-size="10" class="font-mono">360 × 440 mm</text>
          <text x="290" y="16" fill="#94A3B8" font-size="10" class="font-inter">Discharge + Soft Plastisol (4-Col)</text>
        </g>
        <line x1="0" y1="88" x2="525" y2="88" stroke="rgba(255, 255, 255, 0.06)" />

        <g transform="translate(0, 96)">
          <text x="10" y="16" fill="#F3F4F6" font-size="10.5" font-weight="600" class="font-inter">Left Forearm</text>
          <text x="150" y="16" fill="#3B82F6" font-size="10" class="font-mono">320 × 20 mm</text>
          <text x="290" y="16" fill="#94A3B8" font-size="10" class="font-inter">Matte Screenprint</text>
        </g>
        <line x1="0" y1="120" x2="525" y2="120" stroke="rgba(255, 255, 255, 0.06)" />

        <g transform="translate(0, 128)">
          <text x="10" y="16" fill="#F3F4F6" font-size="10.5" font-weight="600" class="font-inter">Lower Front Flank</text>
          <text x="150" y="16" fill="#3B82F6" font-size="10" class="font-mono">160 × 140 mm</text>
          <text x="290" y="16" fill="#94A3B8" font-size="10" class="font-inter">Subtle Tone-on-Tone Waterbase</text>
        </g>
        <line x1="0" y1="152" x2="525" y2="152" stroke="rgba(255, 255, 255, 0.06)" />

        <g transform="translate(0, 160)">
          <text x="10" y="16" fill="#F3F4F6" font-size="10.5" font-weight="600" class="font-inter">Shoulder Inset</text>
          <text x="150" y="16" fill="#3B82F6" font-size="10" class="font-mono">8 mm Width</text>
          <text x="290" y="16" fill="#94A3B8" font-size="10" class="font-inter">3M Reflective Tech Blue Tape</text>
        </g>

        <g transform="translate(0, 205)">
          <rect x="0" y="0" width="525" height="48" rx="3" fill="#111622" stroke="rgba(59, 130, 246, 0.3)" />
          <text x="14" y="18" fill="#F3F4F6" font-size="9" font-weight="700" class="font-mono">BRAND INTEGRITY &amp; USAGE DISCLAIMER:</text>
          <text x="14" y="34" fill="#94A3B8" font-size="8.5" class="font-inter">Independent concept design created for design review. Not an official merchandise release.</text>
        </g>
      </g>
    </g>
  </g>

  <!-- ============================================== -->
  <!-- 7. PRESENTATION BOARD FOOTER STRIP             -->
  <!-- ============================================== -->
  <g id="layer-board-footer" transform="translate(60, 1565)">
    <text x="0" y="0" fill="#6B7280" font-size="10.5" class="font-mono">
      TECHFEST IIT BOMBAY STREETWEAR COLLECTION // STYLE: SAME CURIOSITY. BIGGER TOMORROWS. // CANV. 2400 × 1600 PX // EDITABLE SVG MASTER
    </text>
    <text x="1950" y="0" fill="#6B7280" font-size="10.5" class="font-mono">
      VECTOR SPECIFICATION // SCALE 1:1 // FIGMA READY
    </text>
  </g>
</svg>
`;

fs.writeFileSync('design/presentation-board.svg', masterSvg);
console.log('Fully inlined master presentation board written: design/presentation-board.svg (Size: ' + (masterSvg.length / 1024).toFixed(1) + ' KB)');
