---
name: AccelBnB Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#414845'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#717975'
  outline-variant: '#c1c8c4'
  surface-tint: '#45655b'
  primary: '#17362e'
  on-primary: '#ffffff'
  primary-container: '#2e4d44'
  on-primary-container: '#9bbdb1'
  inverse-primary: '#accec2'
  secondary: '#5e5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dd'
  on-secondary-container: '#626361'
  tertiary: '#313131'
  on-tertiary: '#ffffff'
  tertiary-container: '#484747'
  on-tertiary-container: '#b8b5b5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7eade'
  primary-fixed-dim: '#accec2'
  on-primary-fixed: '#002019'
  on-primary-fixed-variant: '#2e4d44'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c4'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464745'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for a premium hospitality service, prioritizing trust, elegance, and effortless utility. The brand personality is that of a "Sophisticated Concierge"—expertly organized, understated, and deeply attentive to detail. 

The visual style leans into **Minimalism** with a **Corporate Modern** execution. It avoids the coldness of traditional SaaS by using a warm, off-white foundation and organic accent tones. The goal is to evoke a sense of "quiet luxury" where the interface recedes to let high-quality property photography and essential information take center stage. Every interaction should feel intentional, using generous whitespace to reduce cognitive load and establish a high-end editorial feel.

## Colors

The palette is anchored by a **Forest Green** primary accent, chosen to represent growth, stability, and premium comfort. This is contrasted against a **Dark Charcoal** for all core typography to ensure maximum legibility and a modern edge.

- **Primary:** Forest Green (`#2E4D44`) used for key actions, brand moments, and active states.
- **Surface:** A warm, off-white (`#FAF9F6`) serves as the global background to prevent the "starkness" of pure white and create a more inviting, hospitality-focused atmosphere.
- **Neutral/Borders:** Soft greys (`#E5E5E5`) are used for structural lines and dividers, maintaining a lightweight feel.
- **Text:** Primary content uses `#1A1A1A`, while secondary labels and metadata use a softened version to establish a clear visual hierarchy.

## Typography

This design system utilizes **Inter** across all levels to maintain a systematic and utilitarian feel, while using weight and scale to create an "editorial" impact. 

Headlines should be set with tight letter-spacing and bold weights to command attention, mimicking high-end travel magazines. Body text is prioritized for legibility with a generous line height (1.6) to ensure long-form descriptions of properties are easy to digest. Use `display-lg` sparingly for hero sections, and ensure `headline-lg-mobile` is implemented on screens smaller than 768px to maintain balance.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** with fixed maximum widths for desktop to preserve the premium editorial feel. 

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** An 8px base unit governs all spacing.
- **Margins:** Large horizontal margins (64px+) on desktop help center the content and provide the "breatheability" required for a high-end aesthetic.
- **Padding:** Content containers should use `lg` (48px) internal padding to ensure elements never feel cramped. Vertical rhythm should be generous, using `xl` (80px) to separate distinct sections of a page.

## Elevation & Depth

Hierarchy is established using **Tonal Layers** and **Ambient Shadows**. 

Instead of heavy shadows, this design system uses very soft, diffused shadows with a low opacity (4-8%) to lift cards off the warm background. Surfaces should primarily be distinguished by subtle value changes—for example, a white card (#FFFFFF) sitting on the off-white background (#FAF9F6). 

For interactive elements, a slight increase in shadow spread on hover is preferred over significant color shifts. Depth is also suggested through "Backdrop Blurs" on navigation bars to maintain context of the photography beneath.

## Shapes

The design system employs a **Rounded** shape language to soften the interface and make it feel more approachable and modern. 

Standard components like buttons and input fields utilize a 0.5rem (8px) radius. Larger containers, such as property cards and modal overlays, should use `rounded-lg` (16px) to create a distinct, frame-like appearance for high-quality imagery. This level of roundedness strikes a balance between professional precision and organic comfort.

## Components

### Buttons
- **Primary:** Solid Forest Green (`#2E4D44`) with white text. High contrast, 8px corner radius.
- **Secondary:** Transparent with a 1px border of `#1A1A1A`. 
- **Interaction:** On hover, primary buttons should darken slightly; secondary buttons should gain a subtle off-white fill.

### Cards
- Cards are the core vehicle for property listings. They must feature a white background, 16px corner radius, and a very soft ambient shadow. Typography inside cards should be strictly aligned to a 24px internal gutter.

### Input Fields
- Use a light grey border (`#E5E5E5`) and a 8px radius. On focus, the border transitions to Forest Green with a 1px thickness—no heavy glows.

### Lists & Navigation
- Navigation items use `label-md` with increased letter spacing. Active states are indicated by a small 2px Forest Green underline or a weight shift to Semi-Bold.

### Chips
- Used for property tags (e.g., "Superhost", "Entire Home"). These should have a subtle background color that is a 10% opacity version of the Forest Green accent, with `#2E4D44` text.