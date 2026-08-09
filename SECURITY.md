# Security Policy

Do not open public issues containing secrets, credentials, private lead data, or exploitable vulnerability details.

For production use, configure a private security contact in the repository and use GitHub's private vulnerability reporting feature. Until that contact is configured, keep sensitive security findings out of public issues.

## Production security checklist

- Keep AI, CRM, database, and email credentials server-side only.
- Validate all incoming form/API payloads on the server.
- Add production rate limiting and bot/spam protection before accepting public traffic.
- Restrict database/CRM credentials to the minimum required privileges.
- Review HTTP security headers before deployment.
- Rotate any secret that is ever committed to Git history.
