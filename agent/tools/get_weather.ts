import { defineTool } from "eve/tools";
import { z } from "zod";

// Mocked on purpose for this minimal seed project — see
// docs/exec-plans/tech-debt-tracker.md for the note to swap this for a
// real weather API + connection later.
export default defineTool({
  description: "Get the (mocked) weather for a city, for trip planning.",
  inputSchema: z.object({
    city: z.string().min(1),
  }),
  async execute({ city }) {
    return {
      city,
      condition: "Sunny",
      highF: 78,
      lowF: 61,
      note: "This is mocked data for the demo project.",
    };
  },
});
