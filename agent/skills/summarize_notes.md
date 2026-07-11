---
name: summarize_notes
description: Use when the user asks what's in their trip notes, or asks you to summarize or review saved trip ideas.
---

# Summarize notes

1. Call `read_notes` on `notes/trip-ideas.md`.
2. If `found` is false or the content is empty, tell the user there's
   nothing saved yet — don't guess at content.
3. Otherwise, summarize in 3–5 short bullet points, grouped by destination
   if more than one appears.
4. Don't editorialize on the user's choices — just reflect back what's
   there. If asked for opinions afterward, that's a separate turn.
