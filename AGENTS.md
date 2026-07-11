# AGENTS.md

This file is a **map, not a manual**. Keep it short (~100 lines). If you're
tempted to add a paragraph of prose here, put it in `docs/` instead and link
to it. A giant instruction file crowds out the task, the code, and the
relevant docs — so the agent either misses key constraints or starts
optimizing for the wrong ones.

## What this repo is

A minimal [eve](https://eve.dev/docs) agent (Vercel's durable agent
framework). One root agent, a sandbox, a couple of tools, and a couple of
skills. It is intentionally small — a seed to grow from, not a finished
product.

## Where things live

| Path | What it is |
| --- | --- |
| `agent/instructions.md` | Always-on system prompt. Who the agent is. |
| `agent/agent.ts` | Model choice + runtime config. |
| `agent/tools/` | Typed functions the model can call every turn. |
| `agent/skills/` | Longer procedures loaded on demand via `load_skill`. |
| `agent/sandbox/sandbox.ts` | Sandbox backend + bootstrap (isolated shell/file access). |
| `ARCHITECTURE.md` | Top-level map of domains and layering. |
| `docs/design-docs/` | Core beliefs + design decisions, indexed. |
| `docs/exec-plans/` | Active/completed execution plans, checked in. |
| `docs/product-specs/` | What the agent is supposed to do, by feature. |
| `docs/QUALITY_SCORE.md` | Running grade of each domain, tracked over time. |

## Golden principles (enforced, not suggested)

1. **No manually-written glue the agent could write instead.** If a helper is
   simple enough for the agent to regenerate correctly, don't hand-roll it.
2. **Parse, don't validate, at every boundary.** Tool `inputSchema`s are Zod
   schemas — untyped `any` in a tool signature is a bug.
3. **Sandbox is untrusted by default.** Anything the agent runs via
   `sandbox.run(...)` executes outside the app runtime. Don't assume its
   output is safe to interpolate anywhere without validation.
4. **Docs are the system of record.** If it isn't in `docs/`, it doesn't
   exist from the agent's point of view — Slack threads and tribal knowledge
   are invisible. Encode decisions here, not just in PR descriptions.
5. **Small, mergeable increments.** Prefer several small skills/tools over
   one large one. Progressive disclosure beats a monolith.

## Before you touch code

1. Read `ARCHITECTURE.md` for the domain map.
2. Check `docs/exec-plans/active/` — is there already a plan for this?
3. Check `docs/product-specs/index.md` — does a spec already describe the
   desired behavior?
4. Only then write code, and update the relevant doc in the same change.

## Next reading

- `ARCHITECTURE.md` — layering rules
- `docs/design-docs/core-beliefs.md` — why the repo is shaped this way
- `docs/product-specs/index.md` — what the agent currently does
