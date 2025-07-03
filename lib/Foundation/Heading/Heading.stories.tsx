import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Foundation/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: {
        type: 'select',
      },
      options: [1, 2, 3, 4, 5, 6],
    },
    weight: {
      control: {
        type: 'select',
      },
      options: [400, 500, 600, 700],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'This is a Heading',
    weight: 700,
  },
};

export const AllLevels: Story = {
  render: args => (
    <div>
      <Heading {...args} level={1}>
        Heading Level 1
      </Heading>
      <Heading {...args} level={2}>
        Heading Level 2
      </Heading>
      <Heading {...args} level={3}>
        Heading Level 3
      </Heading>
      <Heading {...args} level={4}>
        Heading Level 4
      </Heading>
      <Heading {...args} level={5}>
        Heading Level 5
      </Heading>
      <Heading {...args} level={6}>
        Heading Level 6
      </Heading>
    </div>
  ),
};
