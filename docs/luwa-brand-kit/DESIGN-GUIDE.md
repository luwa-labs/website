# Luwa visual design — portable landing-page guide

Use this package as a visual guide, adapting it to the destination website’s existing framework and components. Open preview.html for a small static style reference. The preview is not the destination landing page.

## Identity

White surfaces, near-black primary actions, fine neutral borders, restrained shadows, Geist typography and generous whitespace. Create hierarchy through typography and spacing. Avoid gradients, colorful decorative cards, glass effects and excessive animation. Do not import simulated record-viewer styling, clinical tables, patient navigation, data or backend code.

## Kernelium landing page: preserve the moving logo

Keep the existing Kernelium name and animated geometric hero logo. Preserve its actual animation implementation, proportions, motion and prominent placement. Inspect the destination code rather than recreating motion from the screenshot. Do not replace it with a static SVG, a loader or the Luwa wordmark. Allow responsive sizing and a static reduced-motion fallback. The bundled logos and Lottie animation are reference assets; the destination’s existing hero animation takes precedence.

## Foundations from Luwa

- Geist Variable: 400 regular, 500 medium, 600 semibold. Font and license included.
- Background/card: oklch(1 0 0). Foreground: oklch(0.145 0 0).
- Primary: oklch(0.205 0 0). Primary text: oklch(0.985 0 0).
- Muted surface: oklch(0.97 0 0). Secondary text: oklch(0.50 0 0).
- Border: oklch(0.922 0 0). Focus: oklch(0.25 0 0).
- Radii: small 6 px, controls 8 px, large 10 px, surfaces 14 px, pills fully rounded.
- Product typography: title 24/32 px, body 14/24 px, caption 12/16 px.
- Spacing rhythm: 4, 8, 12, 16, 24, 32, 48, 64 px.

## Recommended marketing adaptations

Use a centered container up to 72 rem, 20–24 px mobile side padding, 32–56 px hero headings, 16–18 px supporting text and 48–80 px section spacing. These are landing-page recommendations, not original product tokens. Buttons should be at least 44 px high for touch use. Primary CTA: near-black fill; secondary CTA: neutral outline. Cards use white backgrounds, 1 px borders and restrained padding. Prefer the destination’s existing Lucide icons where available.

Preserve the site’s approved content, brand, SEO, routes, forms and functionality. Do not invent claims, testimonials or certifications. Keep localized beta labels for Luwa beta content and label product demonstration data fictitious. Retain French/English support where applicable.

## Handoff

Send this whole ZIP to Codex in the destination repository and paste CODEX-PROMPT.md. Ask it to inspect the current site before editing and map this guide onto its existing theme and shared components. luwa-theme.css is an optional scoped reference, not a requirement to add a second component system. Keep font/asset relative paths together. Check mobile/desktop, contrast, keyboard focus and reduced-motion behavior.

Source: Luwa design tokens, contrast-adjusted Luwa theme and shared UI components. No application configuration, credentials or patient records are included.
