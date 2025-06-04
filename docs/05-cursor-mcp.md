# 🤖 Guide: Using Cursor + MCP for Figma-to-React Workflows

This guide explains how to set up and use Cursor AI in combination with the MCP (Multi-Context Provider) server to convert Figma components into production-ready React + Tailwind code, leveraging design tokens and structured metadata.

---

## 🧭 What is Cursor + MCP?

**Cursor + MCP** is a workflow that connects Cursor AI to a local MCP server, which fetches structured data and assets from Figma. This data is provided as context to Cursor, enabling AI-assisted code generation that is accurate, maintainable, and design-token aware.

---

## 🚀 Why Use Cursor + MCP?

- Generate clean, modular React components directly from Figma designs
- Leverage design tokens and metadata for consistent code
- Avoid manual inspection or copy-pasting from Figma
- Support for Tailwind CSS and component variants
- Enable natural language prompts to manipulate and generate code

---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites

- Figma account and API key
- Node.js and Yarn or npm installed
- Access to the [Figma Context MCP repository](https://github.com/GLips/Figma-Context-MCP)

### 2️⃣ Install and Run MCP Server

Clone the MCP repository and start the server:

```bash
git clone https://github.com/GLips/Figma-Context-MCP.git
cd Figma-Context-MCP
yarn install
yarn mcp
# or
npx figma-developer-mcp --figma-api-key=$FIGMA_API_KEY
```

### 3️⃣ Configure Cursor to Use MCP

Add the following to your `.cursor/config.json`:

```
{
    "mcpServers": {
        "Figma": {
            "url": "http://localhost:3333/sse",
            "env": {
                "API_KEY": "your_figma_api_key"
            }
        }
    }
}
```

---

## 🧑‍💻 Workflow: Generating Components

1. **Select the Figma node(s)** you want to export (e.g., a Button component).
2. **Start the MCP server** and ensure Cursor is connected.
3. **Prompt Cursor** with a natural language instruction, such as:

   > Build a Button component using the structure and styles from the Figma selection. Add support for variant and disabled props.

4. **Cursor receives structured data** (node tree, styles, images) from MCP and generates JSX + Tailwind code.
5. **Review and refine** the generated code as needed.

---

## 💡 Best Practices

- **Align Figma tokens** (colors, spacing, typography) with your Tailwind configuration for best results.
- Use **clear, specific prompts** to guide Cursor in generating the desired component structure and props.
- **Test generated components** for accessibility and responsiveness.
- If you need to manipulate the Figma design before export (e.g., add variants), do so in Figma or by extending MCP transformers.

---

## 🛠️ Troubleshooting

- If Cursor generates inline hex values instead of Tailwind classes, check that your Figma styles are named according to your Tailwind tokens.
- Ensure the MCP server is running and accessible at the configured URL.
- For advanced mapping (e.g., custom color tokens), consider extending MCP with custom transformers.

---

## 📚 Resources

- [Figma Context MCP GitHub](https://github.com/GLips/Figma-Context-MCP)
- [Cursor AI Documentation](https://www.cursor.so/docs)
- [Figma API Documentation](https://www.figma.com/developers/api)

---

> Cursor + MCP enables a powerful, design-token-aware workflow for generating production-ready React components from Figma, streamlining the handoff between design and development.
