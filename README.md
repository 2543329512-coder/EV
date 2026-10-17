# DG MOTORS — Independent Website (Development)

Independent replacement site for **caishenqiche.com**, built separately from Butternut.ai.

## Current status

**Phase 1: public-facing responsive development prototype.**

- Static HTML, CSS and vanilla JavaScript; no build dependencies.
- Works as a local preview or on GitHub Pages (after enabling Pages).
- Includes responsive homepage, vehicle category filters, services, export process, market sections and inquiry draft.
- Vehicle cards are **model examples only**, not verified live stock.
- The inquiry form **does not transmit or store customer data**. It can copy a draft inquiry in compatible browsers.
- Does not contain administrator passwords, client details, production vehicle database, or domain credentials.
- The real website **caishenqiche.com is unchanged**.

## Preview locally

Open \`index.html\` in a browser, or serve the folder:

\`\`\`bash
python3 -m http.server 8080
\`\`\`

Open http://localhost:8080

## Next steps before public launch

1. Get the verified business contact/WhatsApp number, email and appropriate dealer contact channels.
2. Collect real vehicle photographs, accurate specs, checked availability and agreed pricing policy.
3. Select a production host, managed PostgreSQL service and private object storage.
4. Build a protected admin with secure login and inventory/lead management APIs.
5. Add secure server-side lead submission, consent/privacy policy, spam controls and notifications.
6. Test responsive behavior, performance, accessibility and localized EN/FR pages.
7. Arrange DNS cutover only after owner approval and backups.

## Security

This repository is **public**. Never commit passwords, API keys, WhatsApp session tokens, customer details, .env files or database exports.

Do not consider this version production-ready. The production domain must remain pointed to the existing website until the secure backend and inquiry channels are complete.

## Directory

- \`index.html\` — marketing site structure
- \`styles.css\` — responsive brand design
- \`app.js\` — example catalog filtering, mobile navigation and non-sending inquiry preview
