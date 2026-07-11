# Product spec: trip_planning

## Intent

Given a destination and rough dates, the agent should produce a short,
sensible day-by-day outline that accounts for weather, without inventing
bookings, prices, or availability it can't verify.

## Behavior

- The agent checks weather for the destination via `get_weather` before
  suggesting outdoor-heavy days.
- The agent may read prior notes the user has saved in the sandbox
  workspace via `read_notes` and fold relevant context in.
- The agent loads the `plan_a_trip` skill when a request looks like
  "help me plan a trip to X" rather than a one-off weather question.
- The agent never claims to have booked anything — it only plans.

## Out of scope (for this minimal version)

- Actual booking integrations (flights, hotels).
- Multi-city itineraries with complex logistics.
- Budget tracking.

These are natural candidates for `docs/exec-plans/active/` once someone
picks them up.
