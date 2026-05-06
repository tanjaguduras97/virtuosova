# Virtuoso Virtual Assistants

A marketing website for **Virtuoso**, a Europe-based virtual assistant agency that matches businesses with vetted specialists across project management, website development, social media, content creation, executive support, automation, and more.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000). If using the Netlify CLI for full platform emulation (forms, functions, edge):

```bash
netlify dev
# Available at http://localhost:8888
```

## Building for Production

```bash
npm run build
```

Output is written to `dist/client` (configured in `netlify.toml`).
