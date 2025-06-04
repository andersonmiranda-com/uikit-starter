import type { Preview, Decorator } from '@storybook/react-vite';
import React from 'react';
import { OverlayProvider } from 'react-aria';
import '../lib/main.css';

// Decorador para envolver todas las historias con OverlayProvider de React Aria
const withOverlayProvider: Decorator = Story => (
  <OverlayProvider>
    <Story />
  </OverlayProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Aplicar el decorador a todas las historias
  decorators: [withOverlayProvider],
};

export default preview;
