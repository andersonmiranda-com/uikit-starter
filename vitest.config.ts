/// <reference types="vitest" />
import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setup-tests.ts',
      include: ['**/*.{test,spec}.{ts,tsx}'],
      exclude: ['**/*.stories.{ts,tsx}', '**/node_modules/**'],
    },
  })
);
