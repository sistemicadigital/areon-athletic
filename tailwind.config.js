/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:  '#0a0a0a',
          dark:   '#111111',
          card:   '#161616',
          border: '#1f1f1f',
          cyan:   '#00e5ff',
          'cyan-dim': 'rgba(0,229,255,0.08)',
          red:    '#ff003c',
          'red-dim': 'rgba(255,0,60,0.08)',
          light:  '#f0f0f0',
          muted:  '#6b7280',
        },
      },
      fontFamily: {
        bebas:  ['var(--font-bebas)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up':     'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'spin-slow':   'spin 20s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
};
