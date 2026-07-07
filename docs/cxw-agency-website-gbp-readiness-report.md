# CXW Agency — Website & Google Business Profile Readiness Report

Date: 2026-07-07
Prepared by: Claude Code operator session

## What Was Inconsistent Before This Session

- **Fabricated hero metrics.** The homepage hero displayed a "System Live" dashboard mockup with specific numbers (47 leads captured, 18 calls booked, "+12 this week") presented as real, live activity. This is exactly the kind of invented-metric risk that damages trust if a visitor or Google reviewer notices it's not real data.
- **No trust strip.** The hero jumped straight into service sections with no honest, scannable credibility markers near the top of the page.
- **No dedicated local-visibility explanation.** The site talked about brand systems broadly but never explicitly told a visitor "we also set up your Google Business Profile and review system" — a core service that wasn't visually represented on the homepage.
- **No Terms or Privacy pages.** (Resolved in the prior session, 2026-07-06 — noted here for completeness since this report covers the full readiness state, not just today's diff.)
- **No business-information source of truth.** Facts like phone, email, and booking link lived only in scattered HTML files with no single reference document, making drift likely as the site grows.
- **No Google Business Profile packet.** Nothing prepared for the actual GBP setup — category strategy, description, posts, review templates, and the manual checklist didn't exist yet.
- **Legal pages had no "seek independent review" disclaimer**, which is standard practice for template-style legal copy.

## What Was Improved This Session

1. Confirmed and locked the business phone number (301-375-2990) against a conflicting brief that specified a different number — verified against the live site, schema, and legal pages before making any changes, avoiding a scramble of incorrect contact info across the business.
2. Removed fabricated hero dashboard metrics; replaced with honest, qualitative labels ("Logged," "Automated," "On Time") and an HTML comment marking the panel as illustrative.
3. Added a **Trust Strip** section directly under the hero with five honest, unembellished credibility markers (founder-led, DMV service area, practical AI — not hype, etc.).
4. Added a **Local Visibility** section (Google Business Profile, booking links, review workflow) positioned right before the Proof section, so the GBP-related service line is now visible and explained on the homepage — not just implied.
5. Enriched the homepage JSON-LD schema with `hasOfferCatalog` (listing all 5 core services), `priceRange`, and a `potentialAction` (ReserveAction) pointing at the booking link — all accurate, nothing invented, no fake address added (the existing address was already on file and left as-is, flagged for confirmation).
6. Added a "seek independent legal review" line to both Terms and Privacy pages.
7. Created `docs/business-profile-source-of-truth.md` — single reference for all business facts, with an update checklist and a running log of resolved inconsistencies.
8. Created `docs/google-business-profile-update-packet.md` — full copy/paste-ready GBP setup: category strategy, description, all 9 services, 4 launch posts, review templates, photo checklist, verification prep, and the manual edit checklist.
9. Created this readiness report.

## Files Changed

- `index.html` — hero dashboard copy, new Trust Strip section, new Local Visibility section, expanded JSON-LD schema
- `css/components.css` — new `.trust-strip` styles (reused existing `.pillars`/`.pillar` for Local Visibility)
- `terms.html` — added legal-review disclaimer
- `privacy.html` — added legal-review disclaimer
- `docs/business-profile-source-of-truth.md` — new
- `docs/google-business-profile-update-packet.md` — new
- `docs/cxw-agency-website-gbp-readiness-report.md` — new (this file)

## Decisions Closed (2026-07-07)

- **Address:** GBP will be registered as a service-area business with the address hidden. The Mercantile Ln address stays on the website footer/legal pages for mailing purposes only.
- **Hours:** 24/7 confirmed correct — a personal receptionist covers overflow and off-hours contact, so this is a real staffed commitment, not an unmonitored placeholder.

## Remaining TODOs

- [ ] **Capture more proof.** Only one client build (The Mercenary Chef) is currently documented. The Proof section has five other placeholder cards awaiting real case studies.
- [ ] **Add a sitemap.xml and robots.txt.** Neither exists yet. Low effort, meaningful for crawlability — can be generated from the current 6 public pages (home, ai-growth-audit, command-blueprint, revenue-command-center, terms, privacy).
- [ ] **Decide on GBP messaging.** Only enable it if the receptionist (or you) can respond within a few hours consistently — same standard as the phone line.

## Google Business Profile Manual Update Checklist

See `docs/google-business-profile-update-packet.md`, Section 14, for the full copy/paste-ready checklist. Summary:
Name → Category → Description → Phone → Website → Booking link → Service area → Services (9) → Hours → Photos (8+) → Posts (4) → Messaging (decide) → Reviews (set cadence).

## Scores

**Local SEO readiness: 78/100**
Strong: consistent NAP, working schema with service catalog and area served, clean canonical URLs, no redirect issues (fixed last session), fast static-site load. Missing: sitemap.xml/robots.txt, no GBP live yet (the biggest single lever), limited backlink/citation profile.

**Trust / professionalism: 89/100**
Strong: no invented claims anywhere now, honest founder-led positioning, real client proof card, published legal pages with disclaimers, consistent contact info everywhere, and clear resolved decisions on address visibility and staffed 24/7 hours. Held back only by having a single proof case study — more real client work will raise this further.

**Conversion readiness: 88/100**
Strong: every page has a clear, working booking CTA, embedded live calendars (not just links), a defined offer ladder (Audit → Blueprint), and a real client build to point to as proof. Slight room to grow once more proof/social proof exists and GBP starts driving qualified local traffic.

## Next 5 Actions

1. Create the Google Business Profile using `docs/google-business-profile-update-packet.md` end to end — service-area business, address hidden, hours set to 24/7.
2. Brief the receptionist on the CXW offer stack and booking link so off-hours calls convert instead of just getting answered.
3. Request a review from Chef Nate using the templates in the packet — first real review is high-leverage proof.
4. Add `sitemap.xml` and `robots.txt` (quick task, meaningful crawlability signal).
5. Capture and publish a second proof case study to replace one of the placeholder Proof cards.
