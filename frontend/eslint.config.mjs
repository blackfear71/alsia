// eslint.config.mjs
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
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
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
            'simple-import-sort': simpleImportSort,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        files: ['src/**/*.jsx'],
        rules: {
            // Règles React
            'react/display-name': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react-hooks/exhaustive-deps': 'off',

            // Règles générales
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-shadow': 'error',
            'eqeqeq': ['error', 'always'],

            // Règles personnalisées
            quotes: ['error', 'single'],
            semi: 'error',
            indent: ['error', 4, {
                SwitchCase: 1,
            }],
            'simple-import-sort/imports': ['error', {
                groups: [
                    ['^react$'],
                    ['^@?\\w'],
                    ['api'],
                    ['assets'],
                    ['components'],
                    ['pages'],
                    ['enum'],
                    ['fortawesome'],
                    ['rxjs'],
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                ],
            }],
        },
    },
];
