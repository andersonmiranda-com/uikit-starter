import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Layout/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'title', 'avatar', 'circular', 'button', 'image', 'card', 'list'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    count: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    size: 'md',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'full',
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    size: 'lg',
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
    size: 'md',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    size: 'md',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    size: 'md',
  },
};

export const Image: Story = {
  args: {
    variant: 'image',
    size: 'full',
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
    size: 'full',
  },
};

export const List: Story = {
  args: {
    variant: 'list',
    size: 'full',
  },
};

export const MultipleItems: Story = {
  args: {
    variant: 'text',
    size: 'full',
    count: 5,
  },
};

export const MixedVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Skeleton variant="title" size="full" />
      <div className="flex items-center space-x-3">
        <Skeleton variant="avatar" size="sm" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" size="full" />
          <Skeleton variant="text" size="lg" />
        </div>
      </div>
      <Skeleton variant="image" size="full" />
      <div className="space-y-2">
        <Skeleton variant="text" size="full" />
        <Skeleton variant="text" size="full" />
        <Skeleton variant="text" size="lg" />
      </div>
      <Skeleton variant="button" size="md" />
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="flex items-center space-x-3">
        <Skeleton variant="avatar" size="md" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="title" size="lg" />
          <Skeleton variant="text" size="full" />
        </div>
      </div>
      <Skeleton variant="image" size="full" />
      <div className="space-y-2">
        <Skeleton variant="text" size="full" />
        <Skeleton variant="text" size="full" />
        <Skeleton variant="text" size="lg" />
      </div>
      <div className="flex space-x-2">
        <Skeleton variant="button" size="md" />
        <Skeleton variant="button" size="md" />
      </div>
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Diferentes Tamaños de Elementos Circulares</h3>
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <Skeleton variant="circular" size="sm" />
          <p className="text-sm mt-2">Pequeño</p>
        </div>
        <div className="text-center">
          <Skeleton variant="circular" size="md" />
          <p className="text-sm mt-2">Mediano</p>
        </div>
        <div className="text-center">
          <Skeleton variant="circular" size="lg" />
          <p className="text-sm mt-2">Grande</p>
        </div>
        <div className="text-center">
          <Skeleton variant="circular" size="xl" />
          <p className="text-sm mt-2">Extra Grande</p>
        </div>
      </div>
    </div>
  ),
}; 