# [WIP] Tracking Your Daily Diet

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple and intuitive app to help you track your diet and achieve your goals.

https://www.tracking-your-daily-diet.com

## Documentation

- [Project directory structure](docs/directory-structure.md)

## Features

- Track your daily meals
- Set and monitor calorie goals
- View and analyze nutritional information

## Images

| Landing page | Day | Week | Settings |
| --- | --- | --- | --- |
| <img width="1428" alt="Tracking Your Daily Diet Landing page" src="https://github.com/KeachT/tracking-your-daily-diet/assets/62630204/0be62bf3-15dc-4055-b8fd-180af1f455ca"> |<img width="1430" alt="Tracking Your Daily Diet Day" src="https://github.com/KeachT/tracking-your-daily-diet/assets/62630204/e1449362-a5e4-4404-9ceb-f6935057c085"> | <img width="1416" alt="Tracking Your Daily Diet Week" src="https://github.com/KeachT/tracking-your-daily-diet/assets/62630204/109af00d-aa98-400c-8fdc-bc6134c0527b"> | <img width="1420" alt="Tracking Your Daily Diet Settings" src="https://github.com/KeachT/tracking-your-daily-diet/assets/62630204/634ecf54-5da5-4823-99c4-d4fdf3b7e346"> |

## Docker Development

- Before the first `docker compose up`, create empty cache directories with `mkdir -p .next node_modules`.
  This guarantees Docker has mountpoints ready for the named volumes and keeps IDE tooling access consistent.
- Run `docker compose up nextjs` to start the Next.js development server.
- Dependencies are installed in the `node_modules` named volume.
  When IDE tooling (e.g., Cursor or Prettier) needs access on the host, execute `./scripts/sync-node-modules.sh` to copy the volume contents locally without installing Node.js on the host machine.
- The entrypoint reinstalls dependencies only when `package-lock.json` changes, so it does not notice a new base image or Node.js major version.
  After changing either in `docker/nextjs/Dockerfile`, recreate the volumes so native binaries are rebuilt for the new platform:
  - `docker compose down --volumes` (removes the `node_modules` and `next-cache` volumes)
  - `docker compose up --build nextjs`
  - `./scripts/sync-node-modules.sh` (if you keep a host copy for IDE tooling)
- When running `npm audit` / `npm audit fix`, prefer a one-off container to avoid Turbopack/Next.js reading `node_modules` while it is being modified:
  - Stop dev server: `docker compose stop nextjs`
  - Run audit (and optionally fix): `docker compose run --rm --no-deps nextjs npm audit` / `docker compose run --rm --no-deps nextjs npm audit fix`
  - Start dev server again: `docker compose up --build nextjs`
  - Note: `--rm` removes only the temporary container; changes to `package-lock.json` and the `node_modules` volume remain.

## E2E Tests

Playwright runs in the `e2e` Docker Compose service, which uses Microsoft's Playwright image as-is, so no browsers are installed on the host or in the dev image.

There are no specs yet, so a run currently ends with `Error: No tests found` and exit code 1. Add one under `e2e/tests/` and it runs from there.

- Run all tests: `docker compose run --rm e2e`
  - The `nextjs` service is started if needed, and the run waits until the dev server accepts connections.
  - Tests reach the app at `http://nextjs:3000` (`E2E_BASE_URL` is set by the service).
- Pass Playwright arguments by replacing the command: `docker compose run --rm e2e npx playwright test --project=chromium`
- View the last HTML report (written to `playwright-report/`): `docker compose run --rm --no-deps --publish 9323:9323 e2e npx playwright show-report --host 0.0.0.0`, then open http://localhost:9323.
- The service only runs when targeted, so `docker compose up` still starts `nextjs` alone.
- The image tag in `compose.yml` must match the `@playwright/test` version in `package-lock.json`. Update both together.

## Git Hooks

This repo uses Git hooks (via `core.hooksPath`) to run checks locally.

- Install: `./scripts/install-git-hooks.sh`
- Skip the protected-branch check for one commit: `SKIP_BRANCH_CHECK=1 git commit ...`
- `pre-push` runs `npm run lint` inside the `nextjs` Docker Compose service (Docker/Compose required).
