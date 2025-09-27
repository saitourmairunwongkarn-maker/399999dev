// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules', '.next', 'dist', 'out', 'coverage', 'public'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      tailwindcss,
      '@next/next': nextPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // React
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Tailwind
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-custom-classname': 'off',

      // Next.js
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/google-font-display': 'warn',
      '@next/next/no-img-element': 'off',

      // React best practices
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Prettier integration
      'prettier/prettier': 'warn',
    },
    settings: {
      react: { version: 'detect' },
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js',
      },
    },
  },
]
