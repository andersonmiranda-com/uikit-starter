import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Stack } from '../Stack';
import { Text } from '../../Foundation/Text';
import { container } from './container.tv';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          "The **Container** component centers your content horizontally. It's a fundamental building block for any layout.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Defines the max-width of the container.',
    },
    children: {
      control: false,
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

const Content = () => (
  <div className="flex h-48 items-center justify-center rounded-lg bg-indigo-50 text-indigo-800">
    <p>Container Content</p>
  </div>
);

export const Default: Story = {
  args: {
    size: 'sm',
    children: <Content />,
  },
};

export const FullWidth: Story = {
  name: 'Full Width',
  args: {
    size: 'full',
    children: <Content />,
  },
};

const sizeToPixels: Record<keyof typeof container.variants.size, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

const sizes = Object.keys(container.variants.size) as (keyof typeof container.variants.size)[];

export const AllSizes: Story = {
  name: 'All Sizes',
  render: args => (
    <Stack spacing="lg" className="py-8">
      {sizes.map(size => (
        <div key={size}>
          <Container {...args} size={size}>
            <Stack
              className="h-48 rounded-lg bg-indigo-50"
              spacing="sm"
              align="center"
              justify="center"
            >
              <Text weight={600}>{`size="${size}"`}</Text>
              <Text monospaced variant="body2" color="neutral-500" weight={400}>
                ({container.variants.size[size]} - {sizeToPixels[size]})
              </Text>
            </Stack>
          </Container>
        </div>
      ))}
    </Stack>
  ),
};
