import { configs as jsConfigs } from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  ignores: ['dist'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 2023,
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      settings: { react: { version: '18.3' } },
      plugins: {
        react: react.default,
        'react-hooks': reactHooks.default,
        'react-refresh': reactRefresh.default,
      },
      rules: {
        ...jsConfigs.recommended.rules,
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
