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
Create a new component based on the provided Figma design, strictly following the conventions of the UIKit project.

Definition:
[FOLDER] = "atoms"                   &lt;&lt;&lt; Put the Folder name here
[COMPONENT_NAME] = "Button"     &lt;&lt;&lt; Put the Component name here

Instructions:

1. Analyze the Figma design to identify all variants (Sizes, Type, Shape, Mode, State), properties, and behaviors of the component.

It is highly recommended to check the component's variants in Figma and mention them in the instructions.**

2. Implement the component in lib/[FOLDER]/[COMPONENT_NAME]/ following the structure of three files:
- [COMPONENT_NAME].tsx
- [COMPONENT_NAME].stories.tsx
- [COMPONENT_NAME].spec.tsx
- Add an index.ts file exporting the component
- Add an export entry to lib/[FOLDER]/index.ts

3. IMPORTANTE: Utiliza componentes HTML nativos como base para implementar el componente:
- Extiende los props originales del elemento HTML correspondiente (por ejemplo, React.ButtonHTMLAttributes para un botón)
- Asegúrate de que la interfaz de props incluya todas las variantes y comportamientos detectados en el diseño de Figma

4. Define an interface I[COMPONENT_NAME]Props that:
- Includes all variants detected in the Figma design
- Includes an optional 'className' prop for custom styles

5. Use tailwind-variants (tv) to manage the styles and variants of the component, leveraging the states provided by React Aria through renderProps.

6. Colors: Use Tailwind class names (e.g., bg-primary, text-secondary) for known color styles. Convert hex values into Tailwind class names using color definitions from main.css. Avoid inline hex values whenever possible.

7. Write complete unit tests that utilize data-testid to verify rendering and behavior.

8. Follow the same conventions as existing components (Button, LinkButton, Textbox), especially regarding integration with React Aria.

9. Use rules and good practices from .cursor/rules file

The provided Figma design will define all specific variants, states, and behaviors that you need to implement according to the capabilities of React Aria.

Read component design from this Figma file:
[FIGMA_URL_HERE]
```
