## UIKIT Starter

This project is a starting point for creating and documenting accessible, scalable UI components aligned with Figma, Tailwind, and Storybook, using modern tools and AI-driven workflows.

## 🚀 Table of Contents

1.  [Environment Setup](./docs/01-environment-setup.md)
2.  [Component List](./docs/02-components.md)
3.  [Storybook Integration](./docs/03-storybook-integration.md)
4.  [Accessibility](./docs/04-accessibility.md)
5.  [Cursor + MCP Guide](./docs/05-cursor-mcp.md)
6.  [Custom Colors with Cursor + MCP](./docs/06-cursor-mcp-colors.md)
7.  [Prompt Library](./docs/07-prompt-library.md)

## 🛠️ Quick Installation & Usage

1.  Clone the repository:
2.  Install dependencies:
3.  Start Storybook for component development:
4.  (Optional) Run tests:

### ▶️ Start MCP Server (Figma Integration)

To enable Figma-to-code workflows with Cursor + MCP:

1.  **Create a Figma API Key** in your Figma account settings ([Figma API documentation](https://www.figma.com/developers/api)).
2.  **Add your API key to a** `**.env**` **file** at the project root:
3.  **Start the MCP server**:

This will launch the MCP server, allowing Cursor to fetch structured data and assets from your Figma files.

Refer to [Cursor + MCP Guide](./docs/05-cursor-mcp.md) for more info.

\> The Figma API key must have access to the Figma file you want to use.

## 🏗️ Build & Publish

To build the project for production:

```plaintext
yarn build
```

The output will be generated in the `dist` folder.

To publish the package to npm:

1.  Make sure you are logged in to npm:
2.  Run the publish command:

\> Make sure to update the version in `package.json` before publishing if needed.

## 📦 Tech Stack

- React 19
- Tailwind CSS 4
- TypeScript (strict)
- Storybook 8
- Vite
- Cursor AI Agent

Check each linked document for advanced details, best practices, and integration examples.



```plaintext
npm publish --access public
```

```plaintext
npm login
```

```plaintext
yarn mcp
```

```plaintext
FIGMA_API_KEY=your_figma_api_key
```

```plaintext
yarn test
```

```plaintext
yarn storybook
```

```plaintext
yarn install
```

```plaintext
git clone <repo_url>
cd uikit-starter
```
