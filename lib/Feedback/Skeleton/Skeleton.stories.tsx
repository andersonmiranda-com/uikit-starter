import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Skeleton component for showing loading placeholders while content is being loaded.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'The visual style of the skeleton',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Predefined size of the skeleton',
    },
    width: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Predefined width of the skeleton',
    },
    height: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      description: 'Predefined height of the skeleton',
    },
    customWidth: {
      control: 'text',
      description: 'Custom width in pixels or CSS units',
    },
    customHeight: {
      control: 'text',
      description: 'Custom height in pixels or CSS units',
    },
    animate: {
      control: 'boolean',
      description: 'Whether the skeleton should animate',
    },
    lines: {
      control: 'number',
      description: 'Number of skeleton lines to render (for text variant)',
    },
    lineSpacing: {
      control: 'text',
      description: 'Spacing between lines when multiple lines are rendered',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    variant: 'text',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic text skeleton for loading text content.',
      },
    },
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Circular skeleton typically used for avatars or profile pictures.',
      },
    },
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    customWidth: 200,
    customHeight: 100,
  },
  parameters: {
    docs: {
      description: {
        story: 'Rectangular skeleton with custom dimensions for images or cards.',
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    customWidth: 150,
    customHeight: 80,
  },
  parameters: {
    docs: {
      description: {
        story: 'Rounded skeleton with custom dimensions for buttons or cards.',
      },
    },
  },
};

export const MultipleLines: Story = {
  args: {
    variant: 'text',
    lines: 4,
    lineSpacing: 'gap-3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple text lines skeleton for loading paragraphs or descriptions.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm">XS:</span>
        <Skeleton size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm">SM:</span>
        <Skeleton size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm">MD:</span>
        <Skeleton size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm">LG:</span>
        <Skeleton size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm">XL:</span>
        <Skeleton size="xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of skeleton components.',
      },
    },
  },
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton variant="circular" size="xs" />
      <Skeleton variant="circular" size="sm" />
      <Skeleton variant="circular" size="md" />
      <Skeleton variant="circular" size="lg" />
      <Skeleton variant="circular" size="xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of circular skeleton components.',
      },
    },
  },
};

export const WithoutAnimation: Story = {
  args: {
    animate: false,
    variant: 'text',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton without animation for reduced motion preferences.',
      },
    },
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 p-6 border border-gray-200 rounded-lg">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" size="lg" />
        <div className="flex-1">
          <Skeleton variant="text" size="md" width="lg" />
          <Skeleton variant="text" size="sm" width="md" className="mt-2" />
        </div>
      </div>
      <Skeleton variant="rectangular" customWidth="100%" customHeight={120} className="mb-4" />
      <Skeleton variant="text" lines={3} lineSpacing="gap-2" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete card skeleton combining different skeleton variants.',
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-gray-900 p-6 rounded-lg">
      <div className="flex flex-col gap-4">
        <Skeleton variant="text" size="lg" />
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" size="lg" />
          <div className="flex-1">
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="sm" width="lg" className="mt-2" />
          </div>
        </div>
        <Skeleton variant="rectangular" customWidth="100%" customHeight={100} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Skeleton components in dark mode.',
      },
    },
  },
};