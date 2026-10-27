# VAYRATH — Master Concept Art Board: Figma & Vector Editing Guide

**Project:** VAYRATH — The Civilization Beneath the Dying Sun  
**Master Deliverables:**
- Master Editable Vector Project: [`vayrath-concept-board.svg`](../vayrath-concept-board.svg) (2400 × 1600 px)
- High-Resolution Rendered Preview: [`vayrath-concept-board-2400x1600.png`](../vayrath-concept-board-2400x1600.png) (2400 × 1600 px, 300 DPI equivalent)
- Interactive Browser Board: [`vayrath-concept-board.html`](../vayrath-concept-board.html)

---

## 1. How to Open and Edit in Figma

The master project file `vayrath-concept-board.svg` has been architected strictly to industry UI/UX and concept-art development standards. Every visual zone is organized into semantic SVG groups that Figma directly translates into **Frames, Groups, Editable Text Layers, and Vector Shapes**:

### Step-by-Step Import:
1. Open **Figma** (Desktop App or Web at `figma.com`).
2. Open any existing project or create a new Design File.
3. Simply **drag and drop** `vayrath-concept-board.svg` directly onto the Figma canvas.  
   *(Alternative: Go to top-left menu `File` &rarr; `New from Sketch / SVG...` and choose `vayrath-concept-board.svg`).*
4. Figma will generate a root Frame named **`vayrath-concept-board`** at exact dimensions **2400 × 1600 px**.

---

## 2. Figma Layer Hierarchy & Structure

Upon import, the Figma Layers panel presents the following organized structure:

```
▼ Frame: vayrath-concept-board (2400 × 1600)
  ├── ▶ #layer-footer (Technical coordinates, metadata, copyright annotations)
  ├── ▼ #layer-cultural-artifacts (Bottom Quad-Module)
  │     ├── ▶ SUB-MODULE 1: Clan Emblem (Split sun, octagonal rays, canyon chevrons)
  │     ├── ▶ SUB-MODULE 2: Solar Calendar Diagram (Concentric celestial orbits & nodes)
  │     ├── ▶ SUB-MODULE 3: Epigraphy & Glyphs (6 vector runes + phonetic translations)
  │     └── ▶ SUB-MODULE 4: Material Swatches & Lore (Obsidian, Copper, Amber + Litany text)
  ├── ▼ #layer-architecture (Right-Center)
  │     ├── Frame: Architecture Study Image (Residential Spire, Chasm Bridge, Solar Vault)
  │     └── Groups: Sub-tags & structural callouts
  ├── ▼ #layer-warriors (Right-Top)
  │     ├── Frame: Warriors Character Lineup (Sentinel, Canyon Scout, Solar Priest)
  │     └── Groups: Equipment callouts & material specs
  ├── ▼ #layer-hero-environment (Left Dominant 60% Canvas)
  │     ├── Frame: Hero Concept Painting (1460 × 920 px)
  │     ├── Scale Marker: Human Silhouette (1.85m Sunwarden)
  │     └── Callouts: Sol-Null Dying Sun, Temple Scarp, Suspended Chasm Spans
  ├── ▼ #layer-editorial-header (Top Banner)
  │     ├── Text: "VAYRATH" (44pt Display Title)
  │     ├── Text: "THE CIVILIZATION BENEATH THE DYING SUN" (16pt Subtitle)
  │     └── Badge: Archive Ref VAY-8840
  └── ▼ #layer-background (Foundational Base)
        ├── Ambient radial lighting (Amber / Deep Teal)
        ├── 60px Isometric technical grid
        └── Precision corner crosshairs
```

---

## 3. Editing Capabilities

- **Editable Text:** Double-click any title, annotation, translation, or lore text in Figma to edit wording, font styling, or tracking.
- **Editable Vector Symbols:** The Clan Emblem, Calendar Diagram, and Writing System Glyphs are composed of pure vector bezier paths—scale, stroke, and reshape them freely.
- **Color Tokens:** Quickly swap global color tokens:
  - Obsidian Void: `#070A0F`
  - Deep Teal: `#2B5F54`
  - Radiant Amber: `#FF9E1B`
  - Pale Ivory: `#F4EEDD`
- **Raster Image Frames:** The Hero Environment, Warrior Lineup, and Architectural Studies are preserved as independent high-resolution image fills inside clipped frames.

---

## 4. Enabling Editor Access for Submission Review

To grant editor access to your team or client:
1. In Figma, click the blue **Share** button in the top-right corner.
2. In the share dialog, under **Collaboration**, invite team members by email or set link permissions to:  
   `"Anyone with the link can edit"`.
3. Copy the Figma link and share it alongside the exported PNG.
