// prettier.config.js
/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'], // ใช้ชื่อ plugin โดยตรง (ไม่ต้อง import)
}

export default config
