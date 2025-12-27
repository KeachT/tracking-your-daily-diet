#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "${repo_root}"

# Use a versioned hooks directory (committable) instead of .git/hooks (not committable).
git config --local core.hooksPath .githooks

chmod +x .githooks/pre-commit .githooks/pre-push

printf '%s\n' "Installed git hooks via core.hooksPath=.githooks"
