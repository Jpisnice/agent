import { defineAgent } from "eve";

export default defineAgent({
  // Keep the model choice explicit and boring — easy to reason about,
  // easy to swap later.
  model: "anthropic/claude-sonnet-5",
});
