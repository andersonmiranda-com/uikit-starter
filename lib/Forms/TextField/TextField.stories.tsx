import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    type: 'text',
    status: 'default',
    disabled: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'warning', 'valid'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Example: Story = {};

export const WithError: Story = {
  args: {
    label: 'Email',
    status: 'error',
    errorMessage: 'Please enter a valid email.',
    defaultValue: 'invalid-email',
  },
};

export const WithWarning: Story = {
  args: {
    label: 'Username',
    status: 'warning',
    defaultValue: 'admin',
    description: 'Using "admin" is not recommended.',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Promo Code',
    status: 'valid',
    defaultValue: 'VALID2024',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Coupon Code',
    defaultValue: 'LOCKED',
    disabled: true,
  },
};
