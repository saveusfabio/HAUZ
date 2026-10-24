# Project instructions

This repository contains the Studio / 001 website for a design studio serving residential painting contractors in the United States.

## Keep the design guideline current

- Before changing the website, read `docs/DESIGN-GUIDELINE.md` and treat it as the durable source of approved design direction.
- When a task adds or changes a design decision, interaction, motion behavior, layout rule, content principle, or implementation logic that affects the experience, update `docs/DESIGN-GUIDELINE.md` in the same task.
- Record the principle and reason behind the change, and update affected specifications or tokens so the document does not contradict the shipped site.
- Distinguish observed facts, implemented behavior, proposals, and unresolved decisions. Do not turn assumptions into approved requirements.
- Keep routine code edits and incidental fixes out of the guideline unless they change a reusable project rule.
- If a task intentionally changes the direction, update or retire the earlier guidance instead of leaving conflicting rules behind.

## Project boundaries

- The website source is in `dist/`; keep the prototype buildless unless the user approves a different setup.
- Preserve the straightforward, crafted tone for painting contractors. Do not invent client work, testimonials, performance claims, pricing, or business policies.
- Prefer accessible, responsive behavior and respect `prefers-reduced-motion`.
- After implementation, verify the affected experience at an appropriate viewport and report what was checked.
