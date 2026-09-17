# Debian (glibc), not Alpine (musl): glibc is what Amplify Hosting builds on and
# what prebuilt native binaries target first. Pin the codename so a rebuild never
# jumps a Debian release on its own.
FROM node:22-bookworm-slim

# Prepare application directory and drop root privileges early.
RUN mkdir -p /app && chown node:node /app
WORKDIR /app
USER node

# Copy the rest of the application source (overridden at runtime by the bind mount).
COPY --chown=node:node . .

# Ensure writable cache directory exists (mirrors named volume in docker-compose).
RUN mkdir -p /app/.next /app/node_modules

# Expose the port the Next.js dev server uses by default.
EXPOSE 3000

# Ensure dependencies exist in the named volume before running the requested command.
ENTRYPOINT ["sh", "/app/docker/nextjs/entrypoint.sh"]

# Run the Next.js dev server; override via docker-compose `command`.
CMD ["npm", "run", "dev"]
