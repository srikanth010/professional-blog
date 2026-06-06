# Design

## Color

### Palette

**Dark theme** (OKLCH-equivalent hex values):

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0a0a0f` | Page background, body ink |
| `--foreground` | `#e4e4e7` | Primary text, headings |
| `--muted` | `#a1a1aa` | Secondary text, descriptions |
| `--accent` | `#8b5cf6` | Brand color, interactive highlights |
| `--accent-hover` | `#a78bfa` | Hover state accent (lighter) |
| `--card` | `#18181b` | Card/surface backgrounds |
| `--card-border` | `#27272a` | Border color, dividers |

**Accessibility:**
- Foreground on Background: 15.57:1 ✓ WCAG AAA
- Muted on Background: 7.71:1 ✓ WCAG AA
- Accent on Background: 4.66:1 ✓ WCAG AA (minimum)

### Strategy

**Committed dark + accent-forward.** The dark background (`#0a0a0f`) is not the AI default cream/sand; it's an intentional choice for a technical portfolio targeting late-night readers and developers. The purple accent (`#8b5cf6`) carries the brand energy and appears on CTAs, highlights, and interactive states.

**Avoid:** Warm-tinted neutrals, tinted card backgrounds (use the solid dark theme), or additional saturated hues competing with the accent.

## Typography

### Typeface

**Geist** (system-fallback stack for production):
```
--font-sans: "Geist", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "Geist Mono", "Fira Code", "Cascadia Code", monospace;
```

**Rationale:** Geist is modern, humanist geometric sans-serif with excellent screen rendering and a tech-forward feel aligned with the brand.

### Scale

| Usage | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|-----------------|
| Hero Heading (h1) | 4xl–7xl (clamp) | 700 | 1.2 | -0.04em |
| Section Heading (h2) | 3xl–6xl (clamp) | 700 | 1.2 | -0.02em |
| Subheading (h3) | 1.25rem–1.875rem | 600 | 1.3 | 0 |
| Body | 1rem | 400 | 1.5–1.6 | 0 |
| Small / Label | 0.875rem–1rem | 600 | 1.5 | 0 |
| Mono (code) | 0.875rem | 400 | 1.5 | 0 |

**Hierarchy:** 1.25× ratio between steps. Weight contrast (700 headings vs. 400 body) creates visual separation without size alone.

**Rules:**
- No all-caps body copy.
- Headings use `text-wrap: balance` for even line breaks.
- Body prose uses `text-wrap: pretty` to reduce widows.
- Hero heading max clamp: `clamp(2rem, 8vw, 7rem)`.

## Layout

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| xs | 0.5rem (8px) | Small gaps, inner padding |
| sm | 1rem (16px) | Component spacing |
| md | 1.5rem (24px) | Section padding |
| lg | 2rem (32px) | Block spacing |
| xl | 3rem (48px) | Major section gaps |

### Responsive Grid

**Mobile-first.**
- Default: `grid-cols-2` for tile grids.
- Tablet (md): `grid-cols-3` for 3-column layouts.
- Desktop (lg): `grid-cols-4` for wider layouts.

**For flexible grids:**
```css
grid: repeat(auto-fit, minmax(280px, 1fr));
```

### Breakpoints

- `sm`: 640px (tablets)
- `md`: 768px (tablets/small desktops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)

### Container

Maximum content width: `max-w-5xl` (64rem / 1024px). Applied to section content for readability and focus. `.section` class handles horizontal padding responsively:
- Mobile: 1.5rem (24px)
- Tablet: 2rem (32px)
- Desktop: 3rem (48px)

## Motion

### Easing

**Default:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo ease-out). No bounce, no elastic.

**Applied to:**
- All Framer Motion transitions (entrance, exit, state changes)
- CSS transitions (hover, focus)

### Duration

- **Micro interactions** (focus ring, color change): 200ms
- **Component entrance** (card appears): 400–500ms
- **Page transitions** (scroll reveal): 500–600ms
- **Reduced motion:** 0ms (disabled) when `@media (prefers-reduced-motion: reduce)` is active

### Practices

- **Entrance animations** fade and translate together (opacity + Y offset).
- **Hover animations** use scale or color transitions (no layout shift).
- **Scroll-triggered reveals** use `whileInView` with `once: true` (fire once, not every scroll).
- **All animations** check `useReducedMotion()` hook and disable timing when user prefers reduced motion.

## Components

### Buttons

**Primary CTA:**
- Background: `var(--accent)`
- Color: white
- Padding: `py-4 px-6` (form button larger)
- Border radius: `rounded-xl` (12px)
- Transition: `hover:opacity-90`
- Focus: `focus-visible:ring-2 focus-visible:ring-offset-2`

**Secondary/Link:**
- Color: `var(--accent)` or `var(--foreground)`
- No background
- Underline on hover
- Border-bottom: 1px solid on focus

### Form Inputs

**Text, Email, Textarea:**
- Background: `var(--card)`
- Border: 1px `var(--card-border)`
- Color: `var(--foreground)`
- Border-radius: `rounded-xl`
- Focus: Ring `2px var(--accent)` with offset
- Placeholder: `var(--muted)` @ 60% opacity
- Padding: `px-4 py-3`

**Error state:**
- Background: `rgba(239, 68, 68, 0.1)` (red tint)
- Border: `rgba(239, 68, 68, 0.3)`
- Text: `rgb(248, 113, 113)` (red, #f87171)

**Success state:**
- Background: `rgba(16, 185, 129, 0.1)` (emerald tint)
- Border: `rgba(16, 185, 129, 0.3)`
- Text: `rgb(52, 211, 153)` (emerald, #34d399)

### Cards / Tiles

**Article card:**
- Border: 1px `var(--card-border)`
- Background: `linear-gradient(to bottom right, var(--card), var(--card-border))`
- Border-radius: `rounded-2xl` (16px)
- Padding: `p-5` or `p-6`
- Hover: Border transitions to `rgba(139, 92, 246, 0.4)` (accent @ 40%)

### Navigation

**Header nav:**
- Fixed, top-0, `z-50`
- Navigation items: Rounded pill buttons, 44px min height (touch target)
- Active indicator: Subtle background + border @ accent color, opacity 12%
- Focus: Ring `2px var(--accent)` with offset
- Glass effect (optional): `.glass-strong` class for backdrop blur

### Footer

**Social links:**
- Default color: `var(--muted)`
- Hover/Focus color: `var(--accent)`
- Icon size: 22px
- Transition: `hover:scale-110 hover:text-accent`

### Interactive Tiles (About Section)

**Keyboard + Mouse:**
- `tabIndex={0}` for keyboard access
- `onMouseEnter` / `onMouseLeave` for mouse hover
- `onFocus` / `onBlur` for keyboard focus
- `onKeyDown` for Enter/Space to toggle state
- `role="button"` for semantics
- Focus indicator: Ring `2px var(--accent)` with offset

## Accessibility

### WCAG AA Compliance

- ✓ Contrast: All text ≥4.5:1 against backgrounds
- ✓ Keyboard navigation: All interactive elements reachable via Tab
- ✓ Focus indicators: `:focus-visible` ring on all interactive elements
- ✓ Semantic HTML: Proper `<section>`, `<article>`, headings, form labels
- ✓ Reduced motion: All animations disabled when `@media (prefers-reduced-motion: reduce)`
- ✓ Image alt text: All images have descriptive alt attributes
- ✓ Form accessibility: Inputs have associated labels, error messages clear

### Focus Management

- **Focus visible ring:** 2px solid `var(--accent)` with 2px offset
- **Applied to:** Links, buttons, form inputs, interactive tiles
- **Disabled on:** Inactive state (when not focused)

### Reduced Motion

All Framer Motion animations check `useReducedMotion()` hook:
- Duration → 0ms
- Y offset (entrance) → 0 (no translate, fade only)
- Delay → 0 (all at once)

CSS media query fallback:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

## Tokens (CSS Variables)

All design decisions are rooted in CSS custom properties (`app/globals.css`):

```css
:root {
  /* Colors */
  --background: #0a0a0f;
  --foreground: #e4e4e7;
  --muted: #a1a1aa;
  --accent: #8b5cf6;
  --accent-hover: #a78bfa;
  --card: #18181b;
  --card-border: #27272a;

  /* Typography */
  --font-sans: "Geist", system-ui, ...;
  --font-mono: "Geist Mono", ...;

  /* Motion */
  --motion-duration: 0.3s;
  --motion-easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

**Usage:**
- Colors: `color: var(--foreground)` in styles
- Fonts: `font-family: var(--font-sans)`
- Always apply through CSS, never inline hex values

## Anti-Patterns (What NOT to do)

✗ **Gradient text** (`background-clip: text`). Use solid colors. Removed `.text-gradient-shimmer` class in favor of `.accent-text`.

✗ **Hard-coded colors.** All colors go through CSS variables or Tailwind tokens. Never inline `rgb()` or `#hex` except in rare animation keyframes.

✗ **Glassmorphism as default.** The `.glass` and `.glass-strong` utilities exist but are not the primary card style. Use solid backgrounds + borders.

✗ **Nested cards.** One level of nesting maximum. Layouts should be grid/flex-based, not card-inception.

✗ **Bounce/elastic easing.** Use expo/quart ease-out only. No spring defaults.

✗ **Mouse-only interactions.** All interactive states (hover, focus) have keyboard equivalents. No `onMouseEnter` without `onFocus`.

## Future Considerations

- **Dark mode only** (current). Light mode could be added via CSS `color-scheme` and `:light` media query if needed.
- **Theming** (optional). Palette is committed to purple; future themes would swap `--accent` and related colors.
- **Design tokens file** (optional). Consider exporting tokens to JSON or design system docs for consistency with design tools.
