import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
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
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Règles React
      'react/display-name': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // Règles générales
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': ['error', 'always'],
    },
  },
];
