import js from '@eslint/js'
import astroPlugin from 'eslint-plugin-astro'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prettier/prettier': 'error',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
]
