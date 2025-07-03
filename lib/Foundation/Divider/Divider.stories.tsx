import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Stack } from '../../Layout';

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
  },
};
