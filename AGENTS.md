# AGENTS.md

## Commands

- `npm run dev` — dev server (Turbopack) on localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- No tests, no typecheck — plain JavaScript (`jsconfig.json`), so `tsc`/`vitest` don't exist here.

## Stack quirks (differs from defaults you may assume)

- **Next.js 16 + React 19.3** with `cacheComponents`, `partialPrefetching`, and `reactCompiler: true` all **enabled in `next.config.mjs`**: async data access must follow the cacheComponents rules, and components should stay pure (no manual memoization hacks; the compiler handles it).
- **Tailwind v4 CSS-first**: styles live in `src/app/globals.css`; there is no `tailwind.config` file. CSS is loaded via `@tailwindcss/turbopack` (configured in `next.config.mjs`).
- **shadcn/ui with the `base-nova` style, built on `@base-ui/react` — NOT Radix.** Primitive props/APIs differ from the Radix-based shadcn components in most training data. Check existing components in `src/components/ui/` before writing new ones.
- **JSX, not TSX** (`"tsx": false` in `components.json`). Follow the existing function-component style, e.g. props spread with `data-slot` attributes.
- Path aliases: `@/*` → `./src/*`.
- UI package structure: the `cn` helper comes from the `cn` package (`import { cn } from "cn"`), not `@/lib/utils` — `src/lib/utils.js` just re-exports it.
- Base UI imports use subpath style (e.g. `import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"`).

## Current state

- All shadcn components (`src/components/ui/`) are scaffolded boilerplate; the actual app is just an empty `src/app/page.js` and `layout.js`. Most `src/components/ui/*` files are unused — don't assume touch-points.
- Git repo: branch `main` with **no commits yet**.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
