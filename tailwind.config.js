/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#030712',
        surface: {
          DEFAULT: '#0B1120',
          elevated: '#111827',
          subtle: '#0f172a',
          hover: '#1e293b'
        },
        cyan: {
          DEFAULT: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.35)',
          dim: 'rgba(0, 240, 255, 0.12)',
          dark: '#00B4D8'
        },
        orange: {
          DEFAULT: '#FF5500',
          glow: 'rgba(255, 85, 0, 0.35)',
          dim: 'rgba(255, 85, 0, 0.12)',
          bright: '#FF7700'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-cyan': 'glowCyan 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite'
      },
      keyframes: {
        glowCyan: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}
