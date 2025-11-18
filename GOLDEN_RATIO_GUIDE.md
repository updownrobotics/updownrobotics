# Golden Ratio Design System Guide

## Overview
The UpDown Robotics website now follows a complete golden ratio (φ = 1.618) design system for harmonious proportions across all elements.

## Typography Scale

Based on 16px base size, each level follows the golden ratio:

- **phi-xs**: 10px (0.625rem) - Small labels, captions
- **phi-sm**: 13px (0.8125rem) - Small text, metadata
- **phi-base**: 16px (1rem) - Body text (BASE)
- **phi-lg**: 20px (1.25rem) - Large body text
- **phi-xl**: 26px (1.618rem) - Section subheadings
- **phi-2xl**: 34px (2.125rem) - Card titles
- **phi-3xl**: 42px (2.618rem) - Page subheadings
- **phi-4xl**: 55px (3.4375rem) - Section headings
- **phi-5xl**: 68px (4.236rem) - Page titles
- **phi-6xl**: 89px (5.5625rem) - Hero headings
- **phi-7xl**: 110px (6.854rem) - Display headings

### Usage Example:
```tsx
<h1 className="text-phi-6xl">Hero Heading</h1>
<h2 className="text-phi-4xl">Section Heading</h2>
<p className="text-phi-base">Body text</p>
```

## Spacing Scale

Based on Fibonacci sequence (which approximates golden ratio):

- **phi-1**: 8px (0.5rem)
- **phi-2**: 13px (0.8125rem)
- **phi-3**: 21px (1.3125rem)
- **phi-4**: 34px (2.125rem)
- **phi-5**: 55px (3.4375rem)
- **phi-6**: 89px (5.5625rem)
- **phi-7**: 144px (9rem)
- **phi-8**: 233px (14.5625rem)
- **phi-9**: 377px (23.5625rem)

### Usage Example:
```tsx
<div className="space-y-phi-4 px-phi-3">
  <div className="mt-phi-6 mb-phi-5">
    Content
  </div>
</div>
```

## Layout Proportions

### Content Width Ratios
- **phi-narrow**: 38.2% - Sidebar, narrow columns
- **phi-wide**: 61.8% - Main content area
- **phi-content**: 61.8rem (989px) - Max content width

### Grid Layouts
For two-column layouts, use 61.8% / 38.2% split:

```tsx
<div className="grid grid-cols-[61.8%_38.2%] gap-phi-4">
  <main className="w-full">Main Content (61.8%)</main>
  <aside className="w-full">Sidebar (38.2%)</aside>
</div>
```

### Aspect Ratios
For images and containers:
- **1:1.618** (portrait) - Use `aspect-[1/1.618]`
- **1.618:1** (landscape) - Use `aspect-[1.618/1]`

## CSS Custom Properties

All golden ratio values are available as CSS variables:

```css
/* Spacing */
var(--space-phi-1) through var(--space-phi-7)

/* Typography */
var(--text-phi-xs) through var(--text-phi-6xl)

/* Layout */
var(--layout-narrow) /* 38.2% */
var(--layout-wide)   /* 61.8% */
```

## Component Spacing Guidelines

### Cards
```tsx
<Card className="p-phi-4 space-y-phi-3">
  <CardTitle className="text-phi-2xl mb-phi-2">
  <CardContent className="text-phi-base">
</Card>
```

### Sections
```tsx
<section className="py-phi-7 px-phi-4">
  <div className="max-w-phi-content mx-auto space-y-phi-5">
```

### Navigation
```tsx
<nav className="h-phi-6 px-phi-4 space-x-phi-2">
```

## Best Practices

1. **Consistency**: Always use phi-based values instead of arbitrary numbers
2. **Hierarchy**: Larger phi values for more important elements
3. **Rhythm**: Maintain consistent spacing ratios between related elements
4. **Proportion**: Use 61.8% / 38.2% splits for asymmetric balance

## Migration Notes

- Replace `text-xl`, `text-2xl`, etc. with `text-phi-xl`, `text-phi-2xl`
- Replace `p-6`, `mt-8`, etc. with `p-phi-3`, `mt-phi-4`
- Use `max-w-phi-content` instead of arbitrary max-widths
- Apply golden ratio to grid columns and aspect ratios

## Mathematical Formula

For custom calculations:
- **Next size up**: current × 1.618
- **Next size down**: current ÷ 1.618
- **Complementary split**: 61.8% + 38.2% = 100%
