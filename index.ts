import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "ServerName",
  version: "1.0.0",
});

// Example: Add a BMI calculator
server.registerTool(
  "calculate_bmi",
  {
    title: "BMI Calculator",
    description: "Calculate BMI to see if you are overweight.",
    inputSchema: {
      height: z.number().describe("Height in cm"),
      weight: z.number().describe("Weight in kg"),
    },
  },
  async ({ height, weight }) => {
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    return {
      content: [{ type: "text", text: String(bmi) }],
    };
  },
);

// Example: Add a prompt
server.registerPrompt(
  "greeting",
  {
    title: "Greeting Prompt",
    description: "Greet the user with a friendly message.",
    argsSchema: {
      name: z.string().describe("The name of the user"),
    },
  },
  ({ name }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Hello, ${name}! How can I help you?`,
        },
      },
    ],
  }),
);

// Example: Add a dynamic greeting resource
server.registerResource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  {
    title: "Greeting Resource",
    description: "Get a personalized greeting message.",
  },
  async (uri, { name }) => ({
    contents: [
      {
        uri: uri.href,
        text: `Hello, ${name}!`,
      },
    ],
  }),
);

async function main() {
  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

if (import.meta.main) {
  main();
}
