# Tech debt tracker

Known gaps, tracked so they don't silently rot. Pay these down in small
increments rather than letting them compound.

| Item | Domain | Severity | Notes |
| --- | --- | --- | --- |
| `get_weather` returns mock data | weather_lookup | low | Fine for a seed project; swap for a real API + connection before any real usage. |
| No approval gate on `read_notes` writes | trip_planning | low | Currently read-only, so no risk yet. Add an approval step before adding write support. |
