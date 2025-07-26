# Template for Bun MCP Server

## Usage

## Create a new project

```bash
bun create github.com/dotneet/bun-mcp-server new_project_name
cd new_project_name
```

## Implement MCP server

Use [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) or any other tools you prefer.

```bash
# Edit spec.txt to describe what you want
vim spec.txt
claude "Read spec.txt and implement an MCP Server according to the specifications."
```

## Build the server

```bash
bun run build
```

## Testing and Debugging

```bash
# You can use [inspector](https://github.com/modelcontextprotocol/inspector) for testing and debugging.
package_name=$(bun run show-package-name)
npx @modelcontextprotocol/inspector dist/$package_name
```

## Install

```bash
# Install the command to $HOME/bin or your preferred path
cp dist/$package_name $HOME/bin/
```
