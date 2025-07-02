import type { Meta } from '@storybook/react';
import { Button } from '../../Foundation/Button';
import { Form } from './Form';
import { TextField } from '../TextField';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="Email" name="email" type="email" />
    <TextField label="Password" name="password" type="password" />
    <div className="flex gap-2">
      <Button mode="outlined" block type="reset" variant="secondary">
        Reset
      </Button>
      <Button type="submit" block>
        Submit
      </Button>
    </div>
  </Form>
);
