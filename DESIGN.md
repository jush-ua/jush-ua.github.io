---
name: Joshua Urrea Portfolio
description: An original graphic opening menu and developer case-file portfolio.
colors:
  ink: "#080808"
  paper: "#faf9f5"
  red: "#ee163d"
  red-dark: "#b30d2b"
  blue: "#7de0ef"
  muted: "#b9b9b5"
  line: "#494949"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4.5rem, 7vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  mixed-letter:
    fontFamily: "Alfa Slab One, serif"
    fontWeight: 400
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(3.6rem, 6.4vw, 6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2rem, 2.6vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  menu:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.9rem, 5vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
rounded:
  square: "0"
  badge: "12px"
spacing:
  page: "clamp(1.25rem, 6vw, 7rem)"
  section: "clamp(5rem, 8vw, 8rem)"
  paragraph: "1rem"
components:
  action-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.6rem 1.2rem"
  action-light-hover:
    backgroundColor: "{colors.blue}"
  action-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.6rem 1.2rem"
  action-dark-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ink}"
  menu-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.menu}"
  project-choice-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "1rem 0.8rem"
  project-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "2rem 2.2rem"
  equipment-choice-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.8rem 1.5rem"
  tech-badge:
    rounded: "{rounded.badge}"
    size: "62px"
---

# Design System: Joshua Urrea Portfolio

## Overview

**Creative North Star: "The Developer Dossier"**

An expressive, energetic, rebellious opening menu leads into a readable developer dossier. Persona 5 supplies the structural grammar: overlapping mixed lettering, diagonal planes, irregular selection silhouettes, and Joshua's original JU monogram. Persona 3 Reload informs short fluid responses and information clarity.

Sharp backplates, offset borders, sparse halftone, and rotated display plates establish the identity. Upright reading text, explicit development statuses, and accessible selectors keep the work easy to inspect. The confirmed reference-led direction supersedes the earlier conservative split hero.

**Key Characteristics:**

- One graphic opening scene with an overlapping command menu.
- Mixed slab and condensed lettering over red, ink, and paper planes.
- Shared accessible selection behavior across case files and equipment.
- Calm reading surfaces between expressive graphic moments.

## Colors

Signal red establishes the identity; ink and warm paper make the hard-edged planes legible.

### Primary

- **Signal red (`red`):** opening field, graphic section cuts, title plates, profile role, contact screen, and offset backplates.
- **Deep signal red (`red-dark`):** selected case numbers, disclosure markers, and link hover text on paper.

### Secondary

- **Electric cyan (`blue`):** restrained highlights, default focus rings, text selection, action hover, and equipment selection numbers.

### Neutral

- **Charcoal ink (`ink`):** dark sections, cut-paper plates, headings on paper, and the equipment display.
- **Warm paper (`paper`):** reading surfaces, name plates, active opening-menu/project selections, profile, and contact links.
- **Muted (`muted`):** supporting labels on dark surfaces.
- **Divider (`line`):** separators between unenhanced equipment groups.

**The Selective Cyan Rule.** Keep cyan subordinate to red; reserve it for small signals and interaction.

Focus uses cyan by default. Paper outlines distinguish opening-menu and social links against dark/red surrounds; ink outlines distinguish equipment choices, project summaries, stack links, project links, and dock links against paper. Supporting neutral shades remain local CSS treatments.

## Typography

Locally hosted, licensed WOFF2 fonts use `font-display: swap`. Barlow Condensed 700 carries the display hierarchy; Alfa Slab One 400 interrupts name/menu lettering and forms the original JU monograms. Upright Barlow 400/600 carries descriptions, labels, and controls.

- **Identity:** the display role is a base scale. The first name mixes slab letters with condensed interjections; the surname enlarges to `1.5em/0.8`, reverses to paper, and rotates independently. The giant outlined JU is decorative.
- **Headlines:** use the headline role; uppercase section labels use semibold body type (`0.8rem/1.4`, `0.1em` tracking).
- **Titles:** use the title role in project panels. Archive titles use `clamp(2rem, 3vw, 3rem)`; equipment titles use `2.7rem`.
- **Menu:** uppercase condensed type with slab-letter interjections; notes remain upright body text.
- **Reading:** project descriptions use `0.95rem/1.65` with a `65ch` limit; hero copy uses `0.9rem/1.6` and `45ch`; biography copy is limited to `56ch`.

**The Upright Reading Rule.** Keep paragraphs upright and give technical context ordinary reading leading; rotation and tight leading belong to display composition.

## Layout

The opening is one isolated red scene: layered name upper left, menu center right over a giant JU, and introduction lower left across a black diagonal field. Desktop minimum hero height is `850px`. This is an overlapping composition rather than two adjacent hero columns.

Fluid gutters and section spacing use the frontmatter spacing tokens. Enhanced case files use `0.85fr 1.35fr`; equipment uses `0.8fr 1.4fr`; biography uses `1.15fr 0.85fr`. Archive columns use `1.2fr 1fr`, with even entries staggered downward (`3rem`). Reading panels counter-rotate inside tilted frames.

- **At max-width 1100px:** reduce name/menu scales, tighten selectors and padding, stack panel metadata, and use a `620px` project-panel minimum height.
- **At max-width 760px:** gutters become `1.4rem`, section spacing `5rem`, hero minimum height `1160px`. Name, command menu, and introduction have separate vertical space. The name uses `clamp(2.7rem, 10.4vw, 4.6rem)`; headings use `clamp(3.4rem, 12vw, 4.5rem)`. Workbench, archive, biography, and contact stack; case panels lose minimum height. Equipment categories use two `minmax(0, 1fr)` columns. The full-screen sweep is disabled.
- **At max-width 360px:** gutters become `1.2rem`; equipment categories become one column. Case/category numbers never wrap.
- **At min-width 1600px:** gutters become `max(7rem, calc((100vw - 1400px) / 2))`; hero height becomes `900px`.

The fixed dock is bottom-centered; mobile constrains it to `calc(100vw - 22px)`. Footer padding reserves room beneath it. Document scroll padding is `2rem 0 6rem`. Mobile removal of supporting-copy line breaks must preserve word spaces.

## Elevation & Depth

Depth is structural: overlapping planes, thick borders, rotation, halftone, and sharp zero-blur offsets. There is no ambient card-shadow system.

- **Identity label:** ink offset (`6px 6px 0`).
- **Name plates:** paper offset (`6px 8px 0`) and ink offset (`7px 8px 0`).
- **Case workbench:** red offset (`12px 12px 0`), reduced on mobile.
- **Equipment display:** red offset (`10px 10px 0`), reduced on mobile.
- **Profile:** paper offset (`9px 10px 0`).
- **Contact plates:** paper offset (`7px 7px 0`).
- **Dock:** red offset (`5px 5px 0`).

**The Hard Backplate Rule.** Use crisp offset geometry for separation; preserve the implemented zero-blur vocabulary.

## Shapes

Square corners, irregular command plates, diagonal fields, outlined letters, and original angular stars recur. The shared cut is `polygon(2% 0, 100% 0, 98% 86%, 93% 86%, 92% 100%, 0 100%)`. Actions skew (`-7deg`), the opening menu rotates (`-9deg`), selected case/equipment plates rotate (`-2deg`), and the profile rotates (`3deg`). Counter-transform action contents and reading planes for legibility.

Rounded technology tiles (`12px`) are a local exception. Halftone belongs to monograms and graphic fields with clear reading areas. Use original type/SVG/CSS geometry; reference screenshots are not production assets.

## Components

### Actions

Paper/ink link plates have a black border (`2px`), minimum height (`48px`), and inline arrow. Hover shifts right/up (`5px, -3px`) and turns cyan. The GitHub action reverses to ink/paper and becomes red/ink on hover. All links retain visible focus.

### Opening navigation

Irregular layered plates combine mixed lettering, numbering, and notes. Hover, focus, and selection reveal paper backplates, ink text, and an arrow; desktop selection shifts left (`18px`) and scales (`1.035`). Mobile reduces movement. Pointer entry or focus updates selection. Up/Down/Home/End move focus; Enter follows the ordinary fragment link.

### Case-file and equipment selectors

One progressive-enhancement function serves three project choices and four equipment categories. It creates tablists, roving tab stops, labelled focusable tabpanels, and one visible panel per selector. All four arrows wrap; Home/End select endpoints and move focus. Click retains control focus. The tablist declares vertical orientation; horizontal arrows also support the mobile category grid.

Case selection uses a paper silhouette over ink, deep-red nonwrapping number, and upright paper detail. Equipment selection uses ink over paper, a cyan nonwrapping number, and a dedicated ink display. Without JavaScript, controls stay hidden and every panel remains readable. Selected panels wipe in over `320ms` with shared easing `cubic-bezier(0.16, 1, 0.3, 1)`.

### Reading panels, disclosures, and tags

Project panels use paper/ink, a red bottom border (`7px`), file identity strips, and explicit status labels. Native `details/summary` reveals context; its plus rotates (`45deg`) when open, and summaries have a `44px` minimum height. Flat neutral technology tags are informational. No inputs, forms, error states, or disabled control variants are shipped.

### Archive, profile, and technology tiles

Archive entries are staggered rows with a thick top rule; hover/focus-within reveals a red rule using a transform. Condensed titles/repository links stay distinct from reading copy. The profile combines an original JU halftone plate with factual definition rows. Technology tiles keep visible names and text fallback beneath local icons; image failure removes the failed image. Hover lifts/rotates tiles (`-5px, -6deg`); tiles are not selectors.

### Contact and dock

Contact closes on red with angular paper link plates and an ink diagonal field. Hover/focus turns plates cyan and shifts them left. The dock appears when projects reaches `80px` from viewport top; hidden state is `inert`. Current section uses `aria-current="location"` and an ink/paper plate. Links have a `44px` minimum height.

### Motion and accessibility

Control transforms generally use `200ms`; case-choice movement uses `220ms`; dock motion uses `300ms`. The desktop navigation sweep lasts `380ms`, cannot capture input, and never delays fragment navigation. A linked heading settles over `420ms`. Opening identity/menu entrances last `650ms/700ms`. Motion is finite; nothing loops or plays audio.

Reduced motion removes CSS transitions, animations, sweeps, wipes, and smooth scrolling. JavaScript skips new wipes/headings and cancels active heading animations when the preference changes. Mobile disables the full-screen sweep. Preserve the focus-revealed skip link, `3px` focus outlines with `6px` offset, semantic headings, and native disclosures. Print hides navigation/decorative monograms, removes depth, and exposes all case/equipment panels as dark text on white.

## Do's and Don'ts

- **Do** retain the graphic opening-menu structure, original monograms, and shared selection vocabulary.
- **Do** keep cyan selective and technical reading upright.
- **Do** preserve keyboard operation, focus visibility, no-JavaScript content, reduced motion, and print access to all panels.
- **Do** retain factual project descriptions, development statuses, and planned-feature distinctions.
- **Don't** ship game artwork, characters, logos, music, or reference screenshots as production assets.
- **Don't** replace irregular selection silhouettes with generic rounded cards.
- **Don't** wrap case/category numbers or compress mobile composition at the expense of readable controls.
- **Don't** turn informational tags or technology tiles into controls without appropriate semantics and keyboard behavior.
