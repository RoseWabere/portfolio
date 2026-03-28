/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable .dark class for dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic colors referencing CSS variables
        background: 'var(--background)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-light': 'var(--text-light)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        primary: 'var(--primary)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.04)',
        medium: '0 4px 16px rgba(0,0,0,0.08)',
        strong: '0 8px 24px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};