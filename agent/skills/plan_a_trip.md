---
name: plan_a_trip
description: Use when the user asks for help planning a trip or itinerary to a destination, as opposed to a one-off weather question.
---

# Plan a trip

1. Confirm the destination and rough trip length if not already given (ask
   at most one clarifying question — don't block on details you can
   reasonably assume, like defaulting to 3 days if unspecified).
2. Call `get_weather` for the destination.
3. Call `read_notes` on `notes/trip-ideas.md` in case the user has saved
   preferences or ideas there. If the file is empty or not found, proceed
   without it — don't treat that as an error.
4. Produce a short day-by-day outline:
   - Weight outdoor activities toward days/times that fit the weather.
   - Keep each day to 2–3 suggestions, not an exhaustive schedule.
   - Do not invent specific bookable things (named hotels, flight numbers,
     ticketed time slots) — general activity types and neighborhoods are
     fine ("a walk through the old town", "a rooftop bar"), specific
     unverifiable claims are not.
5. End with one line reminding the user this is a starting point, not a
   booked plan.
