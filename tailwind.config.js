/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: '0.75rem', // ปรับจาก 2xl → ให้นิ่งกว่า ไม่แฟนซีเกิน
      },
      boxShadow: {
        soft: '0 4px 10px rgba(0,0,0,0.08)', // เงา soft professional
      },
    },
  },
  safelist: [
    'business',
    'light',
    'dark',
    'animate-spin',
    'animate-ping',
    'animate-bounce',
    'animate-pulse',
    {
      pattern:
        /(bg|text|border|shadow)-(primary|secondary|accent|neutral|info|success|warning|error)/,
    },
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          // 🎨 Corporate palette
          primary: '#1E3A8A', // Navy (Business trust)
          secondary: '#64748B', // Slate Gray (Neutral support)
          accent: '#0D9488', // Teal (Modern accent)
          neutral: '#1E293B', // Dark slate (Backgrounds/Dark mode base)
          'base-100': '#F9FAFB', // Light gray background
          info: '#0284C7',
          success: '#16A34A',
          warning: '#F59E0B',
          error: '#DC2626',
        },
      },
      'light',
      'dark',
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ':root',
  },
}
