import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un botón accesible y reutilizable con múltiples variantes y estados.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
      description: 'Define el estilo visual del botón',
    },
    mode: {
      control: 'radio',
      options: ['filled', 'outlined', 'flat'],
      description: 'Define el modo de visualización del botón',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Controla si el botón está deshabilitado',
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
    },
    onPress: {
      action: 'pressed',
      description: 'Función llamada cuando se presiona el botón',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Define el tamaño del botón',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    mode: 'filled',
    onPress: action('primary-clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    mode: 'filled',
    onPress: action('secondary-clicked'),
  },
};

export const Info: Story = {
  args: {
    children: 'Button',
    variant: 'info',
    mode: 'filled',
    onPress: action('info-clicked'),
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
    mode: 'filled',
    onPress: action('success-clicked'),
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: 'warning',
    mode: 'filled',
    onPress: action('warning-clicked'),
  },
};

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
    mode: 'filled',
    onPress: action('danger-clicked'),
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    mode: 'outlined',
    onPress: action('outlined-clicked'),
  },
};

export const Flat: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    mode: 'flat',
    onPress: action('flat-clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
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
