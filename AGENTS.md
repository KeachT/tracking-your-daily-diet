# Repository Guidelines

## Project Structure & Module Organization

The Next.js app lives in `src`, with domain features grouped under `src/features/*` (kebab-case directories that bundle UI, hooks, and helpers) and shared building blocks in `src/components/*` (PascalCase directories that mirror component names). API helpers sit under `src/api`, constants under `src/constants`, global stores in `src/stores`, and cross-cutting utilities in `src/utils`. Amplify-generated assets live in `amplify/`, while reusable UI primitives are in `src/ui-components`. Static assets are served from `public/`. End-to-end specs belong in `e2e/tests`, and Playwright helpers in `e2e/utils`.

## Build, Test, and Development Commands

- `npm run dev` — start the Next.js dev server with hot reloading.
- `npm run build` / `npm run start` — produce and serve a production build.
- `npm run lint` or `npm run lint:fix` — run ESLint (optionally auto-fixing) across the core source directories.
- `npx playwright test` — execute the Playwright test suite; add `--project=chromium` or `--ui` when debugging.

## Coding Style & Naming Conventions

Use TypeScript throughout and prefer function components with explicit return types when logic is non-trivial. Follow the repo’s prevailing two-space indentation, PascalCase component files (`src/components/Layout/Layout.tsx`), and kebab-case feature folders (`src/features/daily-goal`). Co-locate styles (Tailwind classes or CSS modules) with the component they style. Maintain sorted imports via `eslint-plugin-simple-import-sort`, and format with Prettier plus the Tailwind plugin before committing (`npx prettier --write`). Keep Amplify-generated files untouched unless regenerating via the Amplify CLI.

## Commit & Pull Request Guidelines

Match the existing Conventional Commits style (`feat:`, `fix:`, `chore:`) with succinct, imperative summaries and reference the related issue or pull request number (e.g., `fix: improve preset calorie validation (#201)`). In PRs, provide a user-focused summary, note testing performed (`npm run lint`, `npx playwright test`), and attach screenshots or screen recordings for UI changes. Flag required environment variables (such as `E2E_BASE_URL` for tests) and call out any Amplify or configuration migrations.
