# SOURI Site

Public landing page for SOURI.

This repository contains the public-facing website used to present SOURI externally through a simple product site, screenshots, and product messaging.

## Live site

[souri-site.vercel.app](https://souri-site.vercel.app)

## About SOURI

SOURI is a privacy-first, local-first browser extension that helps protect sensitive data before it reaches AI tools.

It is designed to help users:

- detect sensitive data in active inputs
- sanitize before submission
- see visible in-context actions
- keep an audit trail of privacy events
- turn repeated actions into reusable rules

## Product preview

### Home
![Home](public/screenshots/01-home.jpg)

### Detection toast
![Detection toast](public/screenshots/02-toast-detection.jpg)

### Sanitized input
![Sanitized input](public/screenshots/03-input-sanitized.jpg)

### Audit history
![Audit history](public/screenshots/04-audit-history.jpg)

### Create rule from audit
![Create rule from audit](public/screenshots/06-create-rule-from-audit.png)

### Rules with created rule
![Rules with created rule](public/screenshots/07-rules-with-rule.jpg)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Related repository

Main public product repository:

[github.com/daviscardenas2006/souri](https://github.com/daviscardenas2006/souri)
