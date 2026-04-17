# Design Brief

## Direction

Aman Patel Portfolio — A professional, modern showcase for dual IT Support and Software Engineering expertise that builds credibility for job applications.

## Tone

Editorial clarity with tech confidence — structured hierarchy like a premium résumé, with approachable warmth through color and refined typography.

## Differentiation

Dual-expertise timeline visualization with distinct IT Support vs. Software tracks, card-based sections with strategic color separation, and smooth scroll-linked animations.

## Color Palette

| Token      | OKLCH           | Role                                |
| ---------- | --------------- | ----------------------------------- |
| background | 0.98 0.008 230  | Cool off-white, editorial clarity   |
| foreground | 0.18 0.015 230  | Deep cool gray, professional        |
| card       | 1.0 0.004 230   | Pure white, elevation base          |
| primary    | 0.42 0.14 240   | Deep indigo, trust and stability    |
| accent     | 0.62 0.19 70    | Warm amber, energy and approachability |
| muted      | 0.94 0.01 230   | Light neutral, secondary content    |

## Typography

- Display: Space Grotesk — headings, hero name, section titles; geometric, modern, tech-forward
- Body: General Sans — paragraphs, labels, project descriptions; clean, professional, highly readable
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl font-bold tracking-tight`, label `text-xs font-semibold tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Card-based hierarchy with refined shadows: `shadow-card` (subtle, 4px blur) for content cards, `shadow-elevated` (12px blur) for hover states and floating elements.

## Structural Zones

| Zone       | Background          | Border               | Notes                                  |
| ---------- | ------------------- | -------------------- | -------------------------------------- |
| Header     | card (1.0 0 0)      | border-b subtle      | Sticky nav, white with drop shadow     |
| Hero       | background (cool)   | —                    | Full-width intro, CTA button in primary |
| Experience | background (cool)   | —                    | Alternating card backgrounds           |
| Skills     | background (cool)   | —                    | Two-column layout (IT + Dev)           |
| Projects   | background (cool)   | —                    | Grid layout, accent badges             |
| Education  | muted/30            | border-t subtle      | Compact list format                    |
| Footer     | secondary (light)   | border-t subtle      | Contact links, social icons            |

## Spacing & Rhythm

Spacious vertical rhythm (section gaps 4rem–6rem), generous padding within cards (1.5rem–2rem), micro-spacing (0.5rem–1rem) for component grouping. Dense content is counterbalanced by whitespace.

## Component Patterns

- Buttons: Primary indigo bg, white text, subtle shadow on hover, smooth transition to elevated shadow
- Cards: Rounded corners (8px), white background on cool off-white, shadow-card by default
- Badges: Two styles — muted badges for IT skills, accent-tinted for development skills
- Timeline: Vertical line with circular nodes, company/title/date metadata stacked vertically

## Motion

- Entrance: Fade-in + slide-up (0.4–0.5s ease-out) on section visibility via scroll observer
- Hover: Transform scale 1.02 + shadow-elevated, 0.3s smooth transition
- Decorative: Subtle badge animations on project cards

## Constraints

- No dark mode complexity — design is light-mode primary for professional credibility
- No generic gradients or trendy effects — hierarchy through color, typography, shadow only
- Mobile-first responsive; minimum 320px width, maximum 1400px container width

## Signature Detail

Warm amber accent used sparingly on CTA buttons and live project links, creating visual tension against the cool indigo primary and signaling "actionable" elements without overwhelming the layout.
