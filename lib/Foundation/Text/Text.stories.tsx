import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta = {
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible and reusable text component with multiple variants, weights, and style options.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'subtitle1',
        'subtitle2',
        'subtitle3',
        'body1',
        'body2',
        'link1',
        'link2',
        'link3',
        'caption',
        'caption2',
      ],
      description: 'Defines the visual variant of the text',
      table: { type: { summary: 'string' } },
    },
    weight: {
      control: 'select',
      options: [400, 500, 600, 700],
      description: 'Defines the font weight',
      table: { type: { summary: 'number' } },
    },
    monospaced: {
      control: 'boolean',
      description: 'If true, the text will use a monospaced font',
    },
    fixed: {
      control: 'boolean',
      description: 'If true, the text size will be fixed (not responsive)',
    },
    element: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'span', 'div', 'button', 'label'],
      description: 'Allows forcing the HTML element type',
      table: { type: { summary: 'string' } },
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  args: {
    children: 'Basic text',
    variant: 'body1',
    weight: 400,
  },
};

export const Variants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text {...args} variant="h1">
        h1 - Main title
      </Text>
      <Text {...args} variant="h2">
        h2 - Subtitle
      </Text>
      <Text {...args} variant="subtitle1">
        subtitle1 - Subtitle 1
      </Text>
      <Text {...args} variant="body1">
        body1 - Main text
      </Text>
      <Text {...args} variant="caption">
        caption - Caption
      </Text>
      <Text {...args} variant="link1">
        link1 - Link
      </Text>
    </div>
  ),
  args: {
    weight: 400,
  },
};

export const Weights: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text {...args} weight={400}>
        Weight 400 (Regular)
      </Text>
      <Text {...args} weight={500}>
        Weight 500 (Medium)
      </Text>
      <Text {...args} weight={600}>
        Weight 600 (Semibold)
      </Text>
      <Text {...args} weight={700}>
        Weight 700 (Bold)
      </Text>
    </div>
  ),
  args: {
    children: 'Text with different weights',
    variant: 'body1',
  },
};

export const Monospaced: Story = {
  args: {
    children: 'Monospaced text',
    monospaced: true,
    variant: 'body1',
  },
};

export const Fixed: Story = {
  args: {
    children: 'Text with fixed size',
    fixed: true,
    variant: 'body1',
  },
};

export const CustomElement: Story = {
  args: {
    children: 'Text rendered as <label> element',
    element: 'label',
    variant: 'body1',
  },
};
