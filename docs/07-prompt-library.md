## 💬 Prompt Library for AI Tools

## \--- Work In Progress ---

Below are prompt examples for tools that support text-based or interactive prompt workflows, such as Cursor + MCP.

## ✨ Cursor + MCP

### Basic Button

```plaintext
Implements a new lib/atoms/Button component with its variants, etc, using React-Aria, create unit tests and stories.

Read component design from this Figma file:
[FIGMA_URL_HERE]
```

## ✨ New Component Prompt

### ⚠️ IMPORTANT

Check all variants on Figma's component and mention them on the Instruction No. 1 bellow.

```plaintext
Create a new component based on the provided Figma design, strictly following the conventions of the UI Kit project.

Definition:
[FOLDER] = "atoms"
[COMPONENT_NAME] = "Button"

Tech Context:

- Use **React 19** and ensure the component is compatible with the new React Compiler.
- Use **Tailwind CSS 4.1** with CSS-first configuration.
- All theme tokens (colors, spacing, font, sizes) must be referenced via CSS custom properties using the `@theme` directive.
- Do NOT use tailwind.config.js. Instead, rely on `@theme` and design tokens defined in `main.css`.

Apply the latest best practices from both React 19 and Tailwind 4.1 in your implementation.


Instructions:

1. Analyze the Figma design to identify **all variants** (e.g., Size, Type, Shape, Mode, State), props, and behaviors.

2. Implement the component in `lib/[FOLDER]/[COMPONENT_NAME]/` following this structure:
- [COMPONENT_NAME].tsx
- [COMPONENT_NAME].stories.tsx
- [COMPONENT_NAME].spec.tsx
- index.ts (local export)
- Add export to lib/[FOLDER]/index.ts

3. Use native HTML elements as base. For example, use `<button>` and extend `React.ButtonHTMLAttributes<HTMLButtonElement>`. Do NOT use third-party UI abstractions like React Aria or Radix.

4. Guarantee accessibility by:
- Using correct semantic elements (e.g. `<button>`)
- Supporting keyboard interactions (`Enter`, `Space`, `Tab`)
- Providing appropriate `aria-*` attributes only when needed
- Managing focus manually if necessary (e.g. modals, menus)

5. Define `I[COMPONENT_NAME]Props` interface that:
- Includes all detected variants as optional props
- Extends appropriate React.*HTMLAttributes
- Accepts `className` for additional styling

6. Use `tailwind-variants` (tv) to manage variants and state styles:
- Avoid inline styles
- Provide `defaultVariants`
- Reference colors as `bg-[color-token]`, where tokens are defined in `main.css`.
- Avoid hardcoded Tailwind values (e.g. `bg-[#FF0000]`).

7. Use color classes defined in design tokens or Tailwind config (e.g., `bg-primary`, `text-secondary`). Convert HEX values from Figma to Tailwind classes using the config in `main.css`.

8. Write complete unit tests:
- Use `@testing-library/react` and `vitest`
- Use `data-testid` for assertions
- Cover rendering and behavior for all variants and states

9. Write a full Storybook story in English:
- Show all variants and states
- Add documentation via MDX or JSDoc

10. Follow all conventions and rules defined in `.cursor/rules`

Read component design from this Figma file:
[FIGMA_URL_HERE]

```
