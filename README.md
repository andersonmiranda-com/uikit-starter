# UIKIT Starter

This project is a starting point for creating and documenting accessible, scalable UI components aligned with Figma, Tailwind, and Storybook, using modern tools and AI-driven workflows.

## 🚀 Table of Contents

1. [Environment Setup](./docs/01-environment-setup.md)
2. [Component List](./docs/02-components.md)
3. [Storybook Integration](./docs/03-storybook-integration.md)
4. [Accessibility](./docs/04-accessibility.md)
5. [Cursor + MCP Guide](./docs/05-cursor-mcp.md)
6. [Custom Colors with Cursor + MCP](./docs/06-cursor-mcp-colors.md)
7. [Prompt Library](./docs/07-prompt-library.md)

## 🛠️ Quick Installation & Usage

1. Clone the repository:
   ```bash
   git clone <REPO_URL>
   cd uikit-starter
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start Storybook for component development:
   ```bash
   yarn storybook
   ```
4. (Optional) Run tests:
   ```bash
   yarn test
   ```

### ▶️ Start MCP Server (Figma Integration)

To enable Figma-to-code workflows with Cursor + MCP:

1. **Create a Figma API Key** in your Figma account settings ([Figma API documentation](https://www.figma.com/developers/api)).
2. **Add your API key to a `.env` file** at the project root:
   ```env
   FIGMA_API_KEY=your_figma_api_key
   ```
3. **Start the MCP server**:
   ```bash
   yarn mcp
   ```

This will launch the MCP server, allowing Cursor to fetch structured data and assets from your Figma files.

Refer to [Cursor + MCP Guide](./docs/05-cursor-mcp.md) for more info.

> The Figma API key must have access to the Figma file you want to use.

## 🏗️ Build & Publish

To build the project for production:

```bash
yarn build
```

The output will be generated in the `dist` folder.

To publish the package to npm:

1. Make sure you are logged in to npm:
   ```bash
   npm login
   ```
2. Run the publish command:
   ```bash
   npm publish --access public
   ```

> Make sure to update the version in `package.json` before publishing if needed.

## 📦 Tech Stack

- React 19
- Tailwind CSS 4
- TypeScript (strict)
- Storybook 8
- Vite
- React Aria
- Cursor AI Agent

---

Check each linked document for advanced details, best practices, and integration examples.
