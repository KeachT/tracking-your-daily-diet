# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev                      # Start Next.js dev server (port 3000)
npm run build                    # Production build
npm run lint                     # ESLint check
npm run lint:fix                 # ESLint auto-fix
npm run format                   # Prettier format
npm run format:check             # Prettier check

# E2E tests (Playwright)
npx playwright test              # Run all E2E tests
npx playwright test --project=chromium   # Run on a specific browser
npx playwright test --ui         # Open Playwright UI for debugging

# Docker-based development (preferred)
docker compose up nextjs         # Start dev server in Docker
./scripts/sync-node-modules.sh   # Sync node_modules volume to host for IDE tooling
```

Before first `docker compose up`, run `mkdir -p .next node_modules`.

Git hooks run `npm run lint` via Docker on pre-push. Install with `./scripts/install-git-hooks.sh`.

## Architecture

**Stack:** Next.js (Pages Router) + AWS Amplify (GraphQL API + Cognito Auth) + Mantine UI + Zustand + Tailwind CSS + Playwright (E2E)

### Data Models (GraphQL — `amplify/backend/api/trackingyourdd/schema.graphql`)

All models use `@auth(rules: [{ allow: owner }])` — users only access their own data.

- **DailyGoal** — one record per user with calorie/protein/carbs/fat targets
- **DailyMealRecord** — one record per date; has `breakfast`, `lunch`, `dinner`, `snack` arrays of `FoodItem` (id, name, calories, protein, carbohydrates, fat)
- **UserMealPreset** — one record per user; same meal-category structure as DailyMealRecord, used as a reusable template

Never manually edit files in `src/ui-components/`, `src/models/`, or `src/graphql/` — these are Amplify-generated.

### Auth Flow (`src/pages/_app.tsx`)

`Authenticator.Provider` wraps the app. On auth state change: unauthenticated users are redirected to `/landingpage`; authenticated users are redirected to `/day` and their `DailyGoal` is fetched into Zustand.

### State Management (`src/stores/`)

Zustand stores hold global client state. Key stores:
- `currentDate` — the selected date (drives both day and week views)
- `dailyGoal` — the user's nutrition targets
- `nutritionNumbers` — computed nutrition totals for the current day
- `weeklyDailyMealRecords` — meal records for the current 7-day window
- `userMealPresetStore` — the user's meal preset template
- `loadingState` — tracks async operation loading states

### API Layer (`src/api/`)

Domain-specific modules (`daily-goal/`, `daily-meal-record/`, `user-meal-preset/`) wrap Amplify GraphQL client calls. Functions follow the naming pattern `fetch-*`, `add-*`, `upd-*`.

### Feature Modules (`src/features/`)

Kebab-case directories that co-locate components, hooks, utils, types, constants, and stores for a single feature. Each feature exposes a public surface via `index.ts`. Current features:
- `daily-meal-form` — add/edit meals for a day (has its own Zustand store for form state)
- `preset-meal-form` — manage the user's meal preset
- `daily-goal` — nutrition goal input component
- `weekly-calories-chart` — Mantine chart for weekly calorie visualization
- `daily-nutritions` / `weekly-nutritions` / `preset-nutritions` — nutrition summary displays
- `date-picker-card` — shared date navigation widget (supports `day` and `week` modes)
- `preset-header` — section header for the preset page

Internal structure varies by complexity: simple features keep a single component file at the root (e.g. `preset-nutritions/PresetNutritions.tsx`), while features with multiple components use a `components/` subdirectory (e.g. `preset-meal-form/components/`). The exported component name matches the feature name in PascalCase.

### Pages (`src/pages/`)

- `/day` — log meals for the selected date
- `/week` — weekly calorie chart and nutrition summary
- `/preset` — manage meal presets
- `/settings` — set daily nutrition goals

Pages are composition-only: they import feature components and arrange them. Page files should consist of component calls (e.g. `<PresetNutritions />`), not raw JSX with `Title`/`Text` etc. — if a page needs a section header or label, extract it as a feature.

### Separation of Concerns

- **Feature components own display logic only** — they should not wrap themselves in spacing/layout primitives like `<Box maw={...} mb={...}>`. Layout (max width, margins, gaps) is a page-level concern.
- **Pages own layout and arrangement** — wrap feature components in `<Box>` with the appropriate `maw` / `mb` / `mt` so the feature stays reusable across different page layouts.
- **When extracting a component, ask "whose responsibility is this?"** before deciding where it lives. A page-level section header belongs in its own feature (e.g. `preset-header`), not nested inside an unrelated feature like `preset-nutritions`.

## Conventions

- **Naming:** PascalCase for component files/directories (`src/components/Layout/`), kebab-case for feature folders (`src/features/daily-goal/`)
- **Imports:** sorted via `eslint-plugin-simple-import-sort`; run `npm run format` before committing
- **Commits:** Conventional Commits style — `feat:`, `fix:`, `chore:` with issue/PR reference (e.g., `fix: validate preset calories (#201)`)
- **Amplify CLI:** use the `amplify` Docker Compose service (`docker compose run --rm amplify amplify <command>`) when running Amplify CLI commands
