# [WIP] Tracking Your Daily Diet

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A simple and intuitive app to help you track your diet and achieve your goals.

https://www.tracking-your-daily-diet.com

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
- When running `npm audit` / `npm audit fix`, prefer a one-off container to avoid Turbopack/Next.js reading `node_modules` while it is being modified:
  - Stop dev server: `docker compose stop nextjs`
  - Run audit (and optionally fix): `docker compose run --rm --no-deps nextjs npm audit` / `docker compose run --rm --no-deps nextjs npm audit fix`
  - Start dev server again: `docker compose up --build nextjs`
  - Note: `--rm` removes only the temporary container; changes to `package-lock.json` and the `node_modules` volume remain.

## Git Hooks

This repo uses Git hooks (via `core.hooksPath`) to run checks locally.

- Install: `./scripts/install-git-hooks.sh`
- Skip the protected-branch check for one commit: `SKIP_BRANCH_CHECK=1 git commit ...`
- `pre-push` runs `npm run lint` inside the `nextjs` Docker Compose service (Docker/Compose required).
