import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An accessible and reusable button with shadcn-compatible variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Defines the visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Defines the size of the button',
    },
    block: {
      control: 'boolean',
      description: 'If true, the button will take the full width of its container',
    },
    disabled: {
      control: 'boolean',
      description: 'Controls whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onClick: {
      action: 'pressed',
      description: 'Function called when the button is pressed',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
    onClick: action('default-clicked'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Default' });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
    onClick: action('destructive-clicked'),
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    onClick: action('outline-clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    onClick: action('secondary-clicked'),
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    onClick: action('ghost-clicked'),
  },
};

export const LinkVariant: Story = {
  args: {
    children: 'Link',
    variant: 'link',
    onClick: action('link-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'default',
    disabled: true,
    onClick: action('disabled-clicked'),
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    onClick: action('size-default-clicked'),
  },
  render: args => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button {...args} size="sm" onClick={action('size-sm-clicked')}>
        Small
      </Button>
      <Button {...args} size="default" onClick={action('size-default-clicked')}>
        Default
      </Button>
      <Button {...args} size="lg" onClick={action('size-lg-clicked')}>
        Large
      </Button>
      <Button {...args} size="icon" aria-label="Icon button" onClick={action('size-icon-clicked')}>
        ☺
      </Button>
    </div>
  ),
};

export const Block: Story = {
  args: {
    children: 'Block Button',
    block: true,
    variant: 'default',
    onClick: action('block-clicked'),
  },
  render: args => (
    <div style={{ width: '100%' }}>
      <Button {...args} />
    </div>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
    variant: 'link',
    children: (
      <a href="https://example.com" target="_blank" rel="noreferrer">
        Link as child
      </a>
    ),
  },
};
