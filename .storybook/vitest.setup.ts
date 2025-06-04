import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';
import React from 'react';
import { OverlayProvider } from 'react-aria';

// Define un decorador que envuelve cada historia en un OverlayProvider de React Aria
const reactAriaDecorator = Story => {
  // Usar createElement en lugar de JSX para evitar problemas con archivos .ts
  return React.createElement(OverlayProvider, null, React.createElement(Story, null));
};

// Combinar los decoradores con las anotaciones existentes
const combinedAnnotations = {
  ...projectAnnotations.default,
  decorators: [...(projectAnnotations.default.decorators || []), reactAriaDecorator],
};

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([combinedAnnotations]);

beforeAll(project.beforeAll);
