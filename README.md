# Template for Bun MCP Server

## Usage

```bash
# Create a new project
bun create github.com/dotneet/bun-mcp-server new_project_name

# Implement MCP server
cd new_project_name
claude <<EOT
Edit index.ts to implement an MCP Server that meets the following requirements.
See CLAUDE.md before editing.

DESCRIBE HERE WHAT YOU WANT

EOT

# Build a server
bun run build
package_name=$(bun run show-package-name)

# Install MCP server. Replace $HOME/bin with your own path.
cp dist/$package_name $HOME/bin/
```
