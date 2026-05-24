# Mobile First Notes

## Responsive approach

- Layout uses fluid containers with `width:min(...)` to avoid horizontal overflow.
- Primary breakpoints: 992px and 640px, aligned with the Webflow-style responsive guidance.
- Desktop multi-column sections collapse to single-column mobile layouts.
- CTA buttons use a minimum 48px height for tap targets.
- Mobile navigation uses native `<details>/<summary>` with an accessible label.
- The dashboard chart, stats, service cards, pricing cards, and article cards collapse safely on small screens.

## Accessibility

- One primary H1 is used on the homepage.
- Public section headings use semantic heading order.
- CSS-generated visuals use ARIA labels where appropriate.
- No raster image tags are used, so there are no missing `alt` attributes.
- Footer and generic CTAs point to `https://seojack.net`.
