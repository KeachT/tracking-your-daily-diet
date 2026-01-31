#!/bin/sh
set -eu

cd /app

need_install=0

if [ ! -f "node_modules/next/package.json" ]; then
  need_install=1
fi

if [ -f "package-lock.json" ]; then
  lock_hash="$(sha256sum package-lock.json | awk '{print $1}')"
  if [ ! -f "node_modules/.package-lock.sha256" ]; then
    need_install=1
  else
    stored_hash="$(cat node_modules/.package-lock.sha256 || true)"
    if [ "${lock_hash}" != "${stored_hash}" ]; then
      need_install=1
    fi
  fi
fi

if [ "${need_install}" -eq 1 ]; then
  mkdir -p node_modules
fi

if [ "${need_install}" -eq 1 ]; then
  echo "▶ Installing dependencies into /app/node_modules (npm ci --ignore-scripts)..."
  npm ci --ignore-scripts
  if [ -f "package-lock.json" ]; then
    sha256sum package-lock.json | awk '{print $1}' > node_modules/.package-lock.sha256
  fi
fi

exec "$@"
