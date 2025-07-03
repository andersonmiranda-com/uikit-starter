import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The **Stack** component is a Flexbox abstraction that simplifies arranging items in a single dimension while applying spacing, alignment and justification consistent with the design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
      },
      options: ['row', 'column'],
      description: 'Direction of the element flow (horizontal or vertical).',
    },
    spacing: {
      control: {
        type: 'select',
      },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between items.',
    },
    align: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Alignment along the cross axis.',
    },
    justify: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'between', 'around'],
      description: 'Justification along the main axis.',
    },
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md bg-indigo-100 p-4 text-indigo-800">{children}</div>
);

export const Vertical: Story = {
  args: {
    direction: 'column',
    spacing: 'md',
    align: 'stretch',
    justify: 'start',
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    spacing: 'md',
    align: 'center',
    justify: 'between',
    children: (
      <>
        <Box>Item A</Box>
        <Box>Item B</Box>
        <Box>Item C</Box>
      </>
    ),
  },
};
