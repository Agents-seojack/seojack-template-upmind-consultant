# QA Report

Initial QA checklist for the Upmind Consultant Next.js template.

## Static checks

- [x] Next.js App Router project structure exists.
- [x] `WEBFLOW_INSPIRATION.md` exists.
- [x] `MOBILE_FIRST_NOTES.md` exists.
- [x] `QA_REPORT.md` exists.
- [x] Footer contains `Make this template yours`.
- [x] Generic CTAs point to `https://seojack.net`.
- [x] Homepage metadata includes Open Graph and Twitter metadata.
- [x] One primary H1 is present on the homepage.
- [x] No image tags are used, so no missing image alt text.
- [x] Mobile navigation has an accessible toggle label via native details/summary.
- [x] CSS includes responsive breakpoints and mobile tap target sizing.
- [x] CSS prevents horizontal scrolling on mobile with `overflow-x:hidden`.
- [x] `.gitignore` excludes `.env`, `.env.*`, `.vercel`, `.next`, `out`, and `node_modules`.

## Command checks

- [x] `npm install` — passed
- [x] `npm run lint` — passed
- [x] `npm run typecheck` — passed
- [x] `npm run build` — passed

## Notes

- `npm audit --omit=dev` currently reports a moderate PostCSS advisory through the latest available Next.js 16 line in this environment. The template does not use untrusted CSS stringification and the build passes; revisit when Next publishes a dependency patch.
