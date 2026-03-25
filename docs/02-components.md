## Component List

### Stats Control Icons

- 🔜 ToDo
- 🚧 Under Construction
- ✅ Done

### Feedback

- 🔜 Spinner
- 🔜 Alert
- 🔜 Tooltip
- 🔜 Badge

### Foundation

- ✅ Button
- ✅ Colors
- 🔜 Divider
- ✅ Heading
- 🔜 Icon
- ✅ Link
- ✅ Text
- ✅ Typography

### Layout

- 🔜 Accordion
- 🔜 Card
- ✅ Container
- ✅ Grid
- 🔜 Skeleton
- ✅ Stack

### Forms

- 🔜 Checkbox
- 🔜 DateField
- ✅ Form
- 🔜 Radio
- 🔜 Select
- 🔜 Switch
- 🔜 Textarea
- ✅ TextField

### Navigation

- 🔜 Tabs
- 🔜 Breadcrumb
- 🔜 Pagination

### Overlay

- 🔜 Dialog
- 🔜 Popover
- 🔜 Drawer
- 🔜 Toast

---

## Component patterns

### Button pattern (shadcn-style + tv)

The `Button` component is the reference for how we structure all base components:

- **File structure**
  - Component: `lib/Foundation/Button/Button.tsx`
  - Styles (variants): `lib/Foundation/Button/button.styles.ts`
  - Shared Slot utility: `lib/utils/Slot.tsx`

- **Variants and sizes**
  - `variant`: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`
  - `size`: `default` | `sm` | `lg` | `icon`

- **Styling**
  - Variants are defined with `tv` in `button.styles.ts`:
    - `base` contains shared classes (focus-visible, disabled, ring-offset, typography).
    - `variants` contains the `variant`, `size` and `block` options.
    - `defaultVariants` sets sane defaults (`variant: 'default'`, `size: 'default'`).

- **Component API (shadcn-like)**
  - `Button`:
    - Extends `ButtonHTMLAttributes<HTMLButtonElement>`.
    - Extends `VariantProps<typeof buttonStyles>` from `tailwind-variants`.
    - Adds `asChild?: boolean` to render a custom element via `Slot`.
    - Accepts `ref` as a prop (React 19 style; no `forwardRef`).
    - Forces `type="button"` by default when no `type` is provided.

All new components should follow a similar split:

- A `.styles.ts` file per component for `tv` configuration and variant types.
- A `<ComponentName>.tsx` file that:
  - Accepts `ref` as a normal prop (React 19+). Do not use `forwardRef`; [React 19 deprecates it](https://react.dev/reference/react/forwardRef) in favor of passing `ref` as a prop.
  - Extends native HTML props + `VariantProps<typeof componentStyles>`.
  - Optionally supports `asChild` via the shared `Slot` when composition is needed.
