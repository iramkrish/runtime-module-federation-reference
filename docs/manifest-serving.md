# Manifest Serving Strategy

In this repo, the Module Federation manifest is served via `json-server`
to simulate a real runtime configuration service.

## Why json-server?

- Zero backend code
- HTTP-based (not file-based)
- Hot reload on change
- Mirrors production fetch behavior

## Development

```bash
npm run manifest
