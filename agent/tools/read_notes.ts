import { defineTool } from "eve/tools";
import { z } from "zod";

// Reads a file out of the agent's isolated sandbox workspace. The sandbox
// is untrusted-by-default (see AGENTS.md, golden principle #3), so this
// only reads — it never writes or executes anything.
export default defineTool({
  description:
    "Read a note file from the sandbox workspace (e.g. notes/trip-ideas.md).",
  inputSchema: z.object({
    path: z.string().min(1).describe("Path relative to the workspace root."),
  }),
  async execute({ path }, { sandbox }) {
    const result = await sandbox.run(`cat ${JSON.stringify(path)}`);
    if (result.exitCode !== 0) {
      return { found: false, path, error: result.stderr.trim() };
    }
    return { found: true, path, content: result.stdout };
  },
});
