# Mascocare

Mascocare is an Angular application for pet-care services.

## Development

```bash
npm install
npm start
```

The development server is available at `http://localhost:4200/`.

## Quality checks

```bash
npm run build
npm test -- --watch=false
```

## Application structure

- `src/app/core` contains application-wide configuration, authentication, error handling, and language services.
- `src/app/features` contains lazily loaded authentication, home, and owner features.
- `src/app/shared` contains reusable UI components, pipes, and shared models.

The interface defaults to English. Use the fixed `EN` / `ES` language control to switch languages; the selection is saved in browser storage.

API endpoints are currently configured in `src/app/core/config/api-url.ts` and target a local development backend.
