# Notes Folder — Maintenance Rules

> This file governs how `progress.md` and `problems.md` must be maintained.
> It applies to every developer, contributor, and AI session working on this project.
> This folder is gitignored and never committed. It is for local development tracking only.

---

## 1. General Rules

- The `notes/` folder is **never committed to Git**. It is listed in `.gitignore`.
- Never delete any content from `progress.md` or `problems.md` that was written by a previous session or developer, unless you are explicitly fixing a factual error in that entry.
- Both files must be updated at the end of every meaningful task or work session.
- Do not add emojis, decorative dividers, or sections not defined in this file.
- Do not add AI tool names, generator credits, or session attribution anywhere in either file.

---

## 2. `progress.md` — Rules

### Purpose

`progress.md` is a permanent, append-only log of every meaningful change made to the codebase. It is the local audit trail of what was done, when, and why. It must contain a complete history from the first entry onward.

### Ordering — APPEND AT THE BOTTOM

**New entries are always written at the bottom of the file, after all previous entries.**

Never prepend. Never insert in the middle. The file reads chronologically from oldest (top) to newest (bottom). This makes the log easy to scroll through and understand the evolution of the project in natural time order.

### Entry Format

Every new entry must follow this exact format:

```
## [YYYY-MM-DD HH:MM] — <one-line summary of what was done>

**Changes:**
- `<file or folder>`: <what changed and why>
- `<file or folder>`: <what changed and why>
(add as many lines as needed)

**Reason / Context:**
<1–3 sentences explaining the overall goal or motivation for this work>

---
```

- Use 24-hour local time (IST, UTC+5:30) for the timestamp.
- Be specific: name actual files, components, or functions that were changed.
- The summary line (after the `—`) must be a single plain sentence, no markdown formatting inside it.
- Each `Changes:` bullet must name the exact file path and describe *what* changed and *why*, not just what the task was.
- `Reason / Context` explains the *goal*, not a repetition of the changes list.

### What Counts as a Meaningful Change

Write an entry for:
- Any new file created (component, page, config, utility, etc.)
- Any existing file meaningfully modified (logic change, layout change, data update)
- Any bug fixed
- Any refactor
- Any infrastructure or config change
- Any documentation update

Do **not** write entries for:
- Trivial whitespace or formatting fixes with no functional effect
- Changes that were immediately reverted in the same session

### What Must Never Happen

- **Never delete a previous entry.** Even if it describes work that was later undone, the entry stays. Add a new entry explaining the revert.
- **Never reorder existing entries.** Oldest at top, newest at bottom — always.
- **Never edit the content of a previous entry** unless correcting a clear factual error (e.g. a wrong file path). If you correct one, note the correction in your new entry.

---

## 3. `problems.md` — Rules

### Purpose

`problems.md` tracks open, unresolved issues that are blocking or at risk of blocking a feature or functional requirement. It is a live checklist — it changes frequently as issues are opened and closed.

### When to Add an Issue

Add an item to `problems.md` when:
- A feature is partially implemented and something specific is preventing completion.
- A known bug exists in the codebase that has not yet been fixed.
- A functional requirement from the FRD/spec is not yet met and is at risk.
- A third-party dependency, API, or integration is broken or untested.
- A deployment step is pending and is blocking the feature from going live.

Do **not** add items for:
- General "nice to have" improvements with no impact on a current feature or requirement.
- Tasks that are already completed.
- Speculative future work.

### Issue Format

Each open issue must be written as an unchecked checkbox:

```
- [ ] <Short, specific description of the unresolved issue>
      Context: <1–2 sentences explaining which feature or requirement this blocks and what has been tried, if anything>
```

Example:
```
- [ ] Turnstile widget not rendering on the /learning page in Safari
      Context: Blocks the lead capture form (FRD: learning-download). The `cf-turnstile` script loads but the widget div stays empty. Untested fix: defer script load.
```

### When to Remove an Issue

Mark an issue as resolved by **deleting the line** once the fix has been confirmed working locally. Do not leave checked items (`- [x]`) in the file — once resolved, remove the line entirely and log the fix in `progress.md`.

### Keeping the File Clean

- If there are no open issues, the file body below the header must be empty (just the `---` divider).
- Never leave resolved issues in the file. Remove them as soon as the fix is confirmed.
- Never carry over issues from a previous session if they have already been fixed.

### Structure of the File

```
# Open Problems / Unresolved Issues

> Auto-maintained.
> Do NOT commit this folder. It is in `.gitignore`.
> Keep this file EMPTY if there are no known issues.

---

- [ ] <issue one>
      Context: <context>

- [ ] <issue two>
      Context: <context>
```

---

## 4. Summary — Quick Reference

| Rule | `progress.md` | `problems.md` |
|---|---|---|
| Append direction | Always at the **bottom** | No fixed order — list what is open |
| Delete old entries? | **Never** | Yes — delete when resolved |
| Format | `## [YYYY-MM-DD HH:MM] — summary` | `- [ ] issue` with Context |
| When to update | After every meaningful change | When an issue opens or closes |
| Empty state | Never empty — always has history | Empty body = no open issues |
| Committed to Git? | No | No |

---
