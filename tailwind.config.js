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
};