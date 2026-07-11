import { defineSandbox } from "eve/sandbox";

// Minimal sandbox setup: local Docker/microsandbox/just-bash in dev,
// Vercel Sandbox in production — same code either way (see
// docs/design-docs/core-beliefs.md, principle #6: boring, portable choices).
export default defineSandbox({
  async bootstrap({ sandbox }) {
    // Seed a notes folder so read_notes has somewhere sensible to look.
    await sandbox.run("mkdir -p notes && touch notes/trip-ideas.md");
  },
});
