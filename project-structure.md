# Project Structure

_Exported at: **2025-09-28 02:12:42**_

## 📂 Project Files

```
.
├── .NOTE.md
├── .editorconfig
├── .env.local
├── .gitignore
├── CONTRIBUTING.md
├── README.md
├── app
│   ├── api
│   │   └── announcement
│   │       └── route.js
│   ├── error.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── loading.jsx
│   ├── not-found.jsx
│   ├── page.jsx
│   └── sitemap.js
├── components
│   ├── Announcement.jsx
│   ├── CTA.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Review
│   │   └── ReviewSection.jsx
│   ├── Review.jsx
│   └── Service
│       ├── Service.jsx
│       ├── ServiceCard.jsx
│       └── ServiceSection.jsx
├── data
│   └── announcements.json
├── eslint.config.js
├── jsconfig.json
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── project-structure.md
├── public
│   ├── Review
│   │   ├── review1.webp
│   │   ├── review3.webp
│   │   ├── review4.webp
│   │   └── review4.webp (2)
│   ├── Service
│   │   ├── service1.webp
│   │   ├── service10.webp
│   │   ├── service2.webp
│   │   ├── service3.webp
│   │   ├── service4.webp
│   │   ├── service5.webp
│   │   ├── service6.webp
│   │   ├── service7.webp
│   │   ├── service8.webp
│   │   └── service9.webp
│   ├── data
│   │   └── review.json
│   ├── file.svg
│   ├── globe.svg
│   ├── hero-mockup.png
│   ├── manifest.json
│   ├── next.svg
│   ├── robots.txt
│   ├── vercel.svg
│   └── window.svg
├── scripts
│   ├── backup.sh
│   └── export-structure.sh
├── tailwind.config.js
└── tsconfig.json

13 directories, 62 files
```

## package.json

```
{
  "name": "devbaanban",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --fix",
    "format": "prettier --write ."
  },
  "dependencies": {
    "daisyui": "^4.12.10",
    "framer-motion": "^12.23.22",
    "lucide-react": "^0.544.0",
    "next": "latest",
    "next-cloudinary": "^6.16.0",
    "next-themes": "^0.4.6",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@next/eslint-plugin-next": "^15.5.4",
    "@tailwindcss/aspect-ratio": "^0.4.2",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "@types/react": "^19.1.13",
    "autoprefixer": "^10.4.19",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-tailwindcss": "^3.18.2",
    "globals": "^16.4.0",
    "postcss": "^8.4.38",
    "prettier": "^3.6.2",
    "prettier-plugin-tailwindcss": "^0.6.8",
    "tailwindcss": "^3.4.3"
  }
}

```

## next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig

```

## jsconfig.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}

```

## tailwind.config.js

```
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

```

## tsconfig.json

```
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.js", "**/*.jsx"],
  "exclude": ["node_modules"]
}
```

## 🌐 public/manifest.json

```json
{
  "name": "Devbaanban",
  "short_name": "Devbaanban",
  "description": "Modern business web app built with Next.js, TailwindCSS, and DaisyUI.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F9FAFB",
  "theme_color": "#1E3A8A",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/icon-512-maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

## 🤖 public/robots.txt

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## ✅ Project Setup Checklist
- [x] Project structure exported
- [x] ESLint (Flat Config) with:
  - [x] @eslint/js
  - [x] eslint-plugin-react
  - [x] eslint-plugin-react-hooks
  - [x] eslint-plugin-tailwindcss
  - [x] @next/eslint-plugin-next
  - [x] eslint-plugin-prettier
- [x] Prettier with tailwindcss plugin
- [x] TailwindCSS configured
- [x] Next.js config updated (images, experimental, eslint, ts)
- [x] Package.json scripts: dev, build, start, lint, format
- [x] `pnpm lint` works without errors
- [x] `pnpm format` works without errors
- [x] tsconfig.json exported
- [x] manifest.json exported
- [x] robots.txt exported
