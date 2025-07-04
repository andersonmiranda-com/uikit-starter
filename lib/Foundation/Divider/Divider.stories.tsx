import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Stack } from '../../Layout';
import { colorKeys } from '../../utils/types/Colors.type';

const meta: Meta<typeof Divider> = {
  title: 'Foundation/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    thickness: {
      control: {
        type: 'select',
        options: ['hairline', 'thin', 'regular', 'thick'],
      },
    },
    spacing: {
      control: {
        type: 'select',
        options: ['none', 'xs', 'sm', 'md', 'lg'],
      },
    },
    color: {
      control: 'select',
      options: colorKeys,
      description: 'Defines the color of the text',
      table: { type: { summary: 'ColorKey' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  decorators: [
    (Story, { args }) => {
      const isHorizontal = args.orientation === 'horizontal';
      const stackDirection = isHorizontal ? 'column' : 'row';
      const stackClassName = isHorizontal ? 'w-full' : 'h-24 items-center justify-center';

      return (
        <Stack direction={stackDirection} className={stackClassName}>
          <p>A</p>
          <Story />
          <p>B</p>
        </Stack>
      );
    },
  ],
  args: {
    orientation: 'horizontal',
    thickness: 'thin',
    spacing: 'none',
    color: 'neutral-200',
  },
};

export const Vertical: Story = {
  decorators: [
    Story => (
      <Stack direction="row" className="h-24">
        <p>A</p>
        <Story />
        <p>B</p>
      </Stack>
    ),
  ],
  args: {
    orientation: 'vertical',
    thickness: 'thin',
    spacing: 'none',
    color: 'neutral-200',
  },
};
