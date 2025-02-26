# Template for Bun MCP Server

## Usage

```bash
# Create a new project
bun create github.com/dotneet/bun-mcp-server new_project_name

# Implement MCP server
cd new_project_name
# Edit spec.txt to describe what you want
vim spec.txt
claude "See spec.txt and implement an MCP Server that meets the spec."

# Build a server
bun run build
package_name=$(bun run show-package-name)

# Install MCP server. Replace $HOME/bin with your own path.
cp dist/$package_name $HOME/bin/
```

You can use [inspector](https://github.com/modelcontextprotocol/inspector) for testing and debugging.

```bash
# launch inspector
npx @modelcontextprotocol/inspector $package_name
```
