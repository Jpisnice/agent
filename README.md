# agent

A minimal [eve](https://eve.dev/docs) agent (Vercel's durable agent
framework), structured using the "harness engineering" ideas from
[OpenAI's Codex team post](https://openai.com/index/harness-engineering/):

- `AGENTS.md` is a short **map**, not an encyclopedia — depth lives in `docs/`.
- `docs/` is the **system of record** — anything the agent needs to reason
  about that isn't in code lives here as versioned markdown.
- Design docs, product specs, and exec plans are **indexed and graded**
  (`docs/QUALITY_SCORE.md`), so drift is visible instead of silent.
- Behavior is enforced through structure (typed tool boundaries, a fixed
  sandbox/tools/skills layering — see `ARCHITECTURE.md`) rather than through
  a long list of prose rules.

## What's here

```
agent/
├── package.json
├── AGENTS.md                 # map / table of contents
├── ARCHITECTURE.md           # domain + layering rules
├── docs/
│   ├── design-docs/
│   │   ├── index.md
│   │   └── core-beliefs.md
│   ├── product-specs/
│   │   ├── index.md
│   │   └── trip-planning.md
│   ├── exec-plans/
│   │   ├── active/README.md
│   │   ├── completed/README.md
│   │   └── tech-debt-tracker.md
│   └── QUALITY_SCORE.md
└── agent/
    ├── agent.ts               # model choice
    ├── instructions.md        # identity + policy (no task procedure)
    ├── tools/
    │   ├── get_weather.ts     # mocked weather lookup
    │   └── read_notes.ts      # reads files from the sandbox workspace
    ├── skills/
    │   ├── plan_a_trip.md     # multi-step trip planning procedure
    │   └── summarize_notes.md # summarize saved notes
    └── sandbox/
        └── sandbox.ts         # bootstrap: seeds notes/trip-ideas.md
```

## Running it

```bash
npm install
npm run dev
```

This starts the eve dev server / terminal UI. Try:

- "What's the weather in Lisbon?" → calls `get_weather` directly.
- "Help me plan a 3 day trip to Lisbon" → loads the `plan_a_trip` skill,
  which calls `get_weather` and `read_notes` in sequence.
- "What's in my trip notes?" → loads `summarize_notes`.

## Growing this project

Follow the order in `AGENTS.md`: read `ARCHITECTURE.md`, check
`docs/exec-plans/active/` and `docs/product-specs/`, then add a tool/skill,
then update the relevant doc in the same change. Nothing here is meant to
stay minimal forever — it's a seed structured so growth doesn't turn into
drift.
