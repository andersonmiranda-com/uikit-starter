import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { expect, userEvent } from '@storybook/test';
import { within } from '@storybook/test';
import { vi } from 'vitest';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible and reusable button with multiple variants and states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      description: 'Defines the visual style of the button',
    },
    mode: {
      control: 'radio',
      options: ['filled', 'outlined', 'flat'],
      description: 'Defines the display mode of the button',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Controls whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
    onPress: {
      action: 'pressed',
      description: 'Function called when the button is pressed',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Defines the size of the button',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    mode: 'filled',
    onPress: action('primary-clicked'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Primary' });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    mode: 'filled',
    onPress: action('secondary-clicked'),
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
    mode: 'filled',
    onPress: action('info-clicked'),
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
    mode: 'filled',
    onPress: action('success-clicked'),
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
    mode: 'filled',
    onPress: action('warning-clicked'),
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
    mode: 'filled',
    onPress: action('danger-clicked'),
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined',
    variant: 'primary',
    mode: 'outlined',
    onPress: action('outlined-clicked'),
  },
};

export const Flat: Story = {
  args: {
    children: 'Flat',
    variant: 'primary',
    mode: 'flat',
    onPress: action('flat-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    mode: 'filled',
    isDisabled: true,
    onPress: action('disabled-clicked'),
  },
};

export const Sizes: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    mode: 'filled',
    size: 'small',
    onPress: action('size-small-clicked'),
  },
  render: args => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button {...args} size="small" onPress={action('size-small-clicked')}>
        Small
      </Button>
      <Button {...args} size="medium" onPress={action('size-medium-clicked')}>
        Medium
      </Button>
      <Button {...args} size="large" onPress={action('size-large-clicked')}>
        Large
      </Button>
    </div>
  ),
};

export const Block: Story = {
  args: {
    children: 'Block Button',
    block: true,
    variant: 'primary',
    mode: 'filled',
    onPress: action('block-clicked'),
  },
  render: args => (
    <div style={{ width: '100%' }}>
      <Button {...args} />
    </div>
  ),
};
