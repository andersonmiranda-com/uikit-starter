import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/*.stories.{ts,tsx}', '**/node_modules/**'],
  },
});
