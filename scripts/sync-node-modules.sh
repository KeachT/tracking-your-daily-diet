#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Ensuring host node_modules mirrors the container volume..."
mkdir -p "${ROOT_DIR}/node_modules"
find "${ROOT_DIR}/node_modules" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

docker compose run --rm --no-deps nextjs \
  sh -lc 'tar -C /app -cf - node_modules' | tar -C "${ROOT_DIR}" -xf -

echo "node_modules synced from container volume."
