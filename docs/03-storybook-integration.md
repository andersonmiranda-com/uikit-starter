# 📖 Storybook Integration

This document describes how components are documented using Storybook 8.

---

## 🔧 Key Features Used

- Controls (knobs for props)
- Docs tab with MDX annotations
- Responsive viewport testing
- Tailwind class preview via decorator (optional)

---

## 📄 Example Button Story

```tsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'ghost'] },
    disabled: { control: 'boolean' },
  },
};

export const Default = args => <Button {...args}>Click me</Button>;
```

---

## 🧪 Tips

- Create a story per variant and per state
- Use meaningful component descriptions
- Link to Figma file in the docs tab
