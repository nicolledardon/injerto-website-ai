# El Injerto — AI-Assisted Redesign (PEC 6)

_Section headings only for now — content filled in during Phase 5._

## Project Description

## Scope: Restyle, Not Rebrand

## Figma Link

## GitHub Pages Link

## File Structure

## Navigation Diagram

## AI Tools Used

## Main Prompts

## AI-Generated vs. Manually Edited

## JavaScript Interactions

## Accessibility Decisions

## Responsive Audit Results

## Polish pass (apple-design skill)

After the responsive QA, Phase 6 was a polish pass over all four pages. Claude (Cowork) ran it
with the `apple-design` skill, a design reviewer built on Apple's Human Interface Guidelines. The
guidelines are written for native apps, so on the web only their principles and foundations
(accessibility, layout, typography, colour, motion) were applied, not the platform conventions.
Claude did the audit and wrote the code changes; Nicolle chose which groups of findings to apply
and approved every commit.

**How it worked**

1. A read-only audit of each page, measured in Chromium from 320 to 1920 px and at 100, 150 and
   200% text size (box sizes, contrast computed from the hex values, tap targets, animation
   timings), on four axes: spacing, hierarchy, typography and motion, plus accessibility.
2. Every finding got an ID and a severity, and was flagged when it touched a locked design
   decision.
3. Nicolle picked the groups to apply. Each fix was tested in a scratch copy first (a matrix of
   9 widths x 3 text sizes x 4 pages, and a pixel comparison of screenshots to check that only
   the intended pages changed) and then applied.
4. One commit per group, made only after Nicolle approved it. Each commit has its own entry in
   `PLAN.md` (Phase 6.1 to 6.16, with the hash of every commit in 6.16).

**Results**

- Home: five groups, five commits (PLAN 6.1 to 6.5).
- Tienda, Finca and Coffee Shops: 20 findings (1 Critical, 4 High, 6 Medium, 9 Low), all applied
  or decided in ten commits (PLAN 6.6 to 6.15). Some were applied only in part, and the PLAN
  entries say which.
- What a visitor notices: the header no longer collides with the menu button at large text sizes;
  the selected tab and the current page use an ink underline (contrast 2.32:1 became 16.41:1);
  product cards no longer jump to 700 px wide between breakpoints; the Finca process stays
  vertical until 1024 px and is a real list with headings; shop phone numbers on Coffee Shops are
  tap-to-call links and the map no longer outweighs the list; Tienda, Finca and Coffee Shops each
  end with a call to action.

**Deliberate departures from Figma** (each one approved by Nicolle and recorded in `PLAN.md`)

- The "Merch" tab is called "Accesorios".
- The selected-tab and current-page underline is ink instead of terracotta.
- The process timeline is vertical up to 1024 px (Figma had a row from 768 px).
- Process step names are real `h3` headings in the display font (Figma used a 14 px label).
- The Coffee Shops map is 16:9 at 768 px and 4:3 from 1280 px (Figma had 1:1).
- Finca, Coffee Shops and Tienda each gained a call-to-action link.

**Known limits**

- Text-only enlargement was emulated by setting the root font size to 200% in Chromium. Real iOS
  Dynamic Type, Safari and Firefox text-only zoom were not tested, and neither were a screen
  reader or real touch input. Fonts were served from a local copy during testing.
- At 320 px with 200% text, long words still break mid-word ("conqui/stó"). On phones at 250% text
  or more the wordmark is wider than the screen, and the Finca process captions break words at
  150 to 200% text from 1024 px.
- With enlarged text some widths show three product cards in a row and one below.

See `agents/polish-agent.md` for the role and its rules.

## Comparison with the Manual Project (Book Nook)

## License / Academic Disclaimer
