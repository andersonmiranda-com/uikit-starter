import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The gap between grid items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    columns: {
      control: 'object',
      description:
        'The number of columns in the grid. Can be a number or an object for responsive columns (e.g., `{ initial: 1, sm: 2, md: 4 }`).',
      table: {
        type: { summary: 'number | object' },
        defaultValue: { summary: '12' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Aligns grid items along the block (column) axis.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'stretch' },
      },
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Justifies grid items along the inline (row) axis.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'start' },
      },
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line react-refresh/only-export-components
const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center rounded bg-gray-200 p-4 text-center">
    {children}
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
const BigBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-32 w-full flex-1 items-center justify-center rounded bg-gray-200 p-4 text-center">
    {children}
  </div>
);

export const FixedColumns: Story = {
  render: args => (
    <Grid {...args} className="w-[500px]">
      {Array.from({ length: 12 }, (_, i) => (
        <Box key={i}>{i + 1}</Box>
      ))}
    </Grid>
  ),
  args: {
    columns: 4,
    gap: 'md',
    align: 'center',
    justify: 'center',
  },
};

export const Responsive: Story = {
  render: args => (
    <Grid {...args} className="w-[80vw]">
      {Array.from({ length: 12 }, (_, i) => (
        <Box key={i}>{i + 1}</Box>
      ))}
    </Grid>
  ),
  args: {
    columns: {
      initial: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 6,
    },
    gap: 'md',
    align: 'center',
    justify: 'stretch',
  },
};

export const AlignmentAndJustifySample: Story = {
  render: args => (
    <Grid {...args} className="w-[500px] bg-gray-100">
      <BigBox>Big Box </BigBox>
      <Box>Box</Box>
      <Box>Box</Box>
    </Grid>
  ),
  args: {
    columns: 3,
    gap: 'md',
    align: 'center',
    justify: 'center',
  },
};
