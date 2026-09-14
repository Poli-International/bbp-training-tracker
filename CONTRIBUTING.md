# Contributing to Bloodborne Pathogen Training Tracker

Thank you for your interest in contributing to the Bloodborne Pathogen Training Tracker, a free and open-source tool published by Poli International.

## Code of Conduct

Please be respectful, professional, and constructive in all interactions.

## Guidelines for Contributions

1. **Client-Side Architecture**:
   - The application runs entirely in the browser using standard JavaScript, HTML, and CSS.
   - Do not introduce server dependencies or remote network calls.
   - All data persistence uses standard browser `localStorage`.

2. **No External Resources in Shipped Browser Code**:
   - Respect strict Content-Security-Policy `script-src 'self'`.
   - Never load scripts, styles, fonts, or images from external CDNs.
   - All third-party libraries must be self-contained and bundled locally.

3. **Accessibility & Theming**:
   - Ensure color contrast achieves WCAG AA standards (minimum 4.5:1 for body text) across both light and dark themes.
   - Do not use hardcoded inline style colors; reference CSS custom properties.

4. **Internationalization (i18n)**:
   - When adding or updating user-visible text, ensure all seven supported languages (English, French, Italian, German, Spanish, Dutch, Portuguese) are updated with matching translation keys and interpolation tokens.
   - Do not leave empty or missing translation keys.

5. **Submitting Changes**:
   - Fork the repository.
   - Create a feature branch (`git checkout -b feature/your-feature`).
   - Commit your changes with clear, descriptive commit messages.
   - Open a Pull Request describing your modifications.
