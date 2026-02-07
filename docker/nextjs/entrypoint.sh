#!/bin/sh
set -eu

cd /app

need_install=0

if [ ! -f "node_modules/next/package.json" ]; then
  need_install=1
fi

deps_file="package.json"
deps_hash_file="node_modules/.package-json.sha256"
install_cmd="npm install --ignore-scripts"

if [ -f "package-lock.json" ]; then
  deps_file="package-lock.json"
  deps_hash_file="node_modules/.package-lock.sha256"
  install_cmd="npm ci --ignore-scripts"
fi

deps_hash="$(sha256sum "${deps_file}" | awk '{print $1}')"
if [ ! -f "${deps_hash_file}" ]; then
  need_install=1
else
  stored_hash="$(cat "${deps_hash_file}" || true)"
  if [ "${deps_hash}" != "${stored_hash}" ]; then
    need_install=1
  fi
fi

if [ "${need_install}" -eq 1 ]; then
  mkdir -p node_modules
fi

if [ "${need_install}" -eq 1 ]; then
  echo "▶ Installing dependencies into /app/node_modules (${install_cmd})..."
  ${install_cmd}
  echo "${deps_hash}" > "${deps_hash_file}"
fi

exec "$@"
