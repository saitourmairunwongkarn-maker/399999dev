# Project Export

_Exported at: **2025-09-27 19:54:06**_

## 📂 Project Structure (app, depth=10)

```
app
├── api
│   └── announcement
│       └── route.js
├── component
│   ├── Announcement.jsx
│   ├── CTA.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Review.jsx
│   └── Service
│       ├── Service.jsx
│       ├── ServiceCard.jsx
│       └── ServiceSection.jsx
├── data
├── globals.css
├── layout.jsx
├── og
│   └── page.jsx
├── page.jsx
└── upload
    └── page.jsx

8 directories, 17 files
```

## 📂 Project Structure (public, depth=10)

```
public
├── Service
│   ├── service1.webp
│   ├── service10.webp
│   ├── service2.webp
│   ├── service3.webp
│   ├── service4.webp
│   ├── service5.webp
│   ├── service6.webp
│   ├── service7.webp
│   ├── service8.webp
│   └── service9.webp
├── file.svg
├── globe.svg
├── hero-mockup.png
├── next.svg
├── vercel.svg
└── window.svg

2 directories, 16 files
```

## 📄 next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,   // ตรวจจับปัญหา React ตอน Dev
  swcMinify: true,         // เปิด Minify ด้วย SWC ให้ build เร็วขึ้น

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ปล่อยทุก domain (ควรระบุ domain จริงใน Production)
      },
    ],
    formats: ["image/avif", "image/webp"], // ใช้ฟอร์แมตรูปที่เบาและคม
  },

  experimental: {
    appDir: true,          // ใช้ App Router (Next.js 13+)
  },

  typescript: {
    ignoreBuildErrors: false, // บังคับแก้ Error TS ก่อน build
  },

  eslint: {
    ignoreDuringBuilds: false, // บังคับแก้ Error ESLint ก่อน build
  },
}

module.exports = nextConfig```

## 📄 jsconfig.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"]
    }
  }
}```

## 📄 package.json

```
{
  "name": "devbaanban",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  },
  "dependencies": {
    "daisyui": "^4.12.10",
    "framer-motion": "^12.23.22",
    "lucide-react": "^0.544.0",
    "next": "latest",
    "next-cloudinary": "^6.16.0",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@tailwindcss/aspect-ratio": "0.4.2",
    "@tailwindcss/forms": "0.5.7",
    "@tailwindcss/typography": "0.5.10",
    "@types/react": "19.1.13",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.0.0",
    "eslint-config-next": "latest",
    "eslint-plugin-tailwindcss": "^3.0.0",
    "postcss": "^8.4.38",
    "prettier": "^3.0.0",
    "tailwindcss": "^3.4.3"
  }
}```

## 📄 NOTE.md

```
TEST ```

## 📄 README.md

```
Test 
```

## 📄 .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## 📄 tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class", // ใช้ class คุม Dark Mode (เช่น <html class="dark">)
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  safelist: [
    // DaisyUI themes
    "business",
    "light",
    "dark",

    // Animate classes
    "animate-spin",
    "animate-ping",
    "animate-bounce",
    "animate-pulse",

    // Text & bg colors (กัน purge runtime class หาย)
    {
      pattern: /(bg|text|border|shadow)-(primary|secondary|accent|neutral|info|success|warning|error)/,
    },
  ],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["business", "light", "dark"],
    darkTheme: "dark", // theme ค่าเริ่มต้นเมื่อเป็น dark mode
    base: true,
    styled: true,
    utils: true,
    logs: false,
    themeRoot: ":root", // กำหนดตัวแปร theme ไว้ที่ root
  },
};```
