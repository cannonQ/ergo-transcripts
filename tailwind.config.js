/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ergo-orange': '#FF5E18',
        'ergo-green': '#00D57F',
        'ergo-dark': '#1A1A2E',
        'ergo-darker': '#0F0F1A',
        'ergo-light': '#E5E5E5',
        'ergo-muted': '#6B7280',
        'term-green': '#00FF00',
        'term-amber': '#FFB000',
        'term-cyan': '#00FFFF',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 8s linear infinite',
        'typing': 'typing 2s steps(20, end)',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255, 94, 24, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 94, 24, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
