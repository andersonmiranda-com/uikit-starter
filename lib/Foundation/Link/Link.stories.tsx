import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { colorKeys } from '../../utils/types/Colors.type';

const meta: Meta<typeof Link> = {
  title: 'Foundation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['link1', 'link2', 'link3'],
    },
    color: {
      control: 'select',
      options: colorKeys,
      description: 'Defines the color of the text',
      table: { type: { summary: 'ColorKey' } },
    },
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'link1',
    color: 'primary-500',
    href: '#',
    children: 'This is a link',
  },
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link {...args} variant="link1">
        Link Variant 1
      </Link>
      <Link {...args} variant="link2">
        Link Variant 2
      </Link>
      <Link {...args} variant="link3">
        Link Variant 3
      </Link>
    </div>
  ),
  args: {
    href: '#',
  },
};
