# Quality score

A running grade per domain/layer, so drift is visible instead of invisible.
Update this when you touch a domain — don't let it go stale silently.

| Domain / layer | Grade | Notes |
| --- | --- | --- |
| weather_lookup (tool) | B | Mocked data, but typed + tested manually via dev TUI. |
| trip_planning (skill) | B | Covers the happy path; no edge cases for multi-city yet. |
| sandbox bootstrap | B+ | Minimal clone/setup script, no credential brokering configured. |
| docs freshness | A | Small enough right now to keep accurate by hand. |

Grading scale: **A** current & complete, **B** current but incomplete
coverage, **C** partially stale, **D** known-wrong/needs immediate fix.
