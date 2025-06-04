import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import storybookPlugin from 'eslint-plugin-storybook';

const baseConfig = {
  ignores: ['node_modules/**', 'dist/**', '.storybook/**'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'simple-import-sort': simpleImportSortPlugin,
    prettier: prettierPlugin,
    storybook: storybookPlugin,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^(@|components)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default [
  baseConfig,
  {
    files: ['*.spec.tsx'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
];
