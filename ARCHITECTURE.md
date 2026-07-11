# ARCHITECTURE.md

A top-level map of this agent's domains and how they're layered. See
matklad's [ARCHITECTURE.md convention](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)
for the idea this follows.

## Domains

This minimal agent has exactly one business domain: **trip_planning**, plus
one cross-cutting concern: **weather_lookup**.

```
agent/
├── agent.ts              # entrypoint: model + runtime config
├── instructions.md        # system prompt (short — see docs/design-docs)
├── tools/
│   ├── get_weather.ts     # cross-cutting: weather_lookup
│   └── read_notes.ts      # cross-cutting: sandbox file access
├── skills/
│   ├── plan_a_trip.md     # domain: trip_planning
│   └── summarize_notes.md # domain: trip_planning
└── sandbox/
    └── sandbox.ts         # isolated workspace, bootstrap script
```

## Layering rule

Within any future domain, dependencies point one direction only:

```
Types → Config → Tool implementation → Skill (markdown, references tools by name)
```

- **Tools** are the only place that touches the sandbox or external APIs.
- **Skills** are markdown. They may *describe* calling a tool, but never
  contain executable code themselves — if a skill needs logic, that logic
  belongs in a tool.
- **Instructions** (`instructions.md`) never encode task-specific procedure.
  That's what skills are for. Instructions stay identity- and policy-level.

## Adding a domain

1. Add a doc under `docs/product-specs/<domain>.md` describing the desired
   behavior first.
2. Add tool(s) under `agent/tools/` with a Zod `inputSchema`.
3. Add a skill under `agent/skills/` only if the procedure spans multiple
   tool calls or needs written-out judgment calls.
4. Update this file's domain table above.
5. Update `docs/QUALITY_SCORE.md` if the domain introduces a new grading row.
