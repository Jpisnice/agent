# Core beliefs

These are the operating principles behind how this repo is structured. They
exist so that anyone (human or agent) making a change understands *why* the
repo looks the way it does, not just what the rules are.

1. **Give the agent a map, not a manual.** `AGENTS.md` stays under ~100
   lines. Depth lives in `docs/`, discovered by following links, not by
   reading one giant file top to bottom.

2. **What isn't in the repo doesn't exist.** From the model's point of view,
   a Slack thread, a verbal agreement, or an unwritten convention is
   invisible. If a decision matters, it gets written down under `docs/`.

3. **Enforce invariants, don't micromanage implementation.** We require Zod
   validation at tool boundaries. We don't mandate a specific state
   management library. Constrain the things that keep the system legible;
   leave everything else to judgment.

4. **Small, verifiable increments over big-bang changes.** One tool, one
   skill, one doc update at a time. Corrections are cheap when changes are
   small; they're expensive when they're not.

5. **Docs rot if they're not mechanically checked.** Prefer a short, current
   doc over a long, stale one. When you change behavior, update the doc in
   the same change — don't defer it.

6. **Boring technology is a feature.** Prefer well-known, stable, widely
   documented libraries (Zod, plain fetch, Node built-ins) over clever or
   novel dependencies. They're easier for both humans and models to reason
   about correctly.
