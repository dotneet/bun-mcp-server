import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "ServerName",
  version: "1.0.0",
});

// Example: Add an addition tool
server.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
  content: [{ type: "text", text: String(a + b) }],
}));

// Example: Add a prompt
// server.prompt("greeting", { name: z.string() }, ({ name }) => ({
//   messages: [
//     {
//       role: "user",
//       content: {
//         type: "text",
//         text: `Hello, ${name}! How can I help you?`,
//       },
//     },
//   ],
// }));

// Example: Add a dynamic greeting resource
// server.resource(
//   "greeting",
//   new ResourceTemplate("greeting://{name}", { list: undefined }),
//   async (uri, { name }) => ({
//     contents: [
//       {
//         uri: uri.href,
//         text: `Hello, ${name}!`,
//       },
//     ],
//   }),
// );

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);
