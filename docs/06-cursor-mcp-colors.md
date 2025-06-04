# 🎨 Guide to Using Custom Colors with Cursor + MCP

This guide explains how to work with custom color palettes in Figma and ensure that Cursor + MCP generates Tailwind-compatible code, maintaining consistency and scalability in your design system.

---

## 🧭 Objective

- Integrate custom colors (e.g., Bootstrap-like palettes) in Figma and use them in projects that employ Tailwind.
- Ensure Cursor generates Tailwind utility classes instead of inline hexadecimal values.
- Maintain visual consistency and ease of maintenance in the generated code.

---

## 🛠️ Recommended Steps

### 1️⃣ Define Your Custom Palette in Tailwind

Leverage Tailwind's ability to extend or override the color palette. You can do this in your configuration file or by using CSS variables:

`main.css`

```css
@import 'tailwindcss';

@theme {
  --color-primary-100: #e8f0ff;
  --color-primary-200: #aeccff;
  --color-primary-300: #74aaff;
  --color-primary-400: #3a8bff;
  --color-primary-500: #006dff;
  --color-primary-600: #065bdc;
  --color-primary-700: #0c49b9;
  --color-primary-800: #0f3893;
  --color-primary-900: #0e2b69;
  --color-secondary-100: #ffe8e8;
  --color-secondary-200: #ffaeba;
  --color-secondary-300: #ff749f;
  --color-secondary-400: #ff3a90;
  --color-secondary-500: #f81687;
  --color-secondary-600: #cd1179;
  --color-secondary-700: #a30b6a;
  --color-secondary-800: #78065c;
  --color-secondary-900: #4d004d;
}
```

Then, make sure to map these colors in your Tailwind configuration (`tailwind.config.js`).

---

### 2️⃣ Name Color Styles in Figma According to Tailwind Tokens

- Use names like `primary-500`, `secondary-700`, etc., for color styles in Figma.
- This way, when Cursor reads the styles from Figma, it can infer the corresponding Tailwind class.
- Avoid using only unnamed hexadecimal values.

---

### 3️⃣ Adjust the Cursor Prompt to Enforce Tailwind Classes

When generating code, you can guide Cursor with prompts such as:

```
Use Tailwind class names (e.g., `bg-primary-500`, `text-secondary-700`) for color styles. Convert hexadecimal values into Tailwind classes using the color definitions from main.css. Avoid inline hex values.
```

This helps ensure the generated code is more consistent and maintainable.

---

### 4️⃣ (Optional) Customize MCP to Map Colors Automatically

If you need to automate the conversion of hex values to Tailwind tokens, you can extend MCP with a custom transformer that replaces hex values with token names before sending the data to Cursor.

Example (pseudo-code):

```ts
if (color === '#0d6efd') {
  return 'primary-500';
}
```

Refer to the MCP documentation to create or modify transformers.

---

## ✅ Best Practices

- Keep color naming aligned between Figma and Tailwind.
- Ensure all tokens used in Figma exist in your Tailwind configuration.
- Test the flow by generating components and check that the generated classes are as expected.
- If you see inline hex values in the code, review the style names in Figma and your Tailwind configuration.

---

> Aligning color token names and Tailwind configuration with Figma styles is key to obtaining clean and consistent code with Cursor + MCP.
