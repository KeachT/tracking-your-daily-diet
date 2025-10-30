FROM node:20-alpine

# Prepare application directory and drop root privileges early.
RUN mkdir -p /app && chown node:node /app
WORKDIR /app
USER node

# Copy dependency manifests separately to leverage Docker layer caching.
COPY --chown=node:node package*.json ./

# Install dependencies without executing lifecycle scripts to mitigate supply-chain attacks.
RUN npm ci --ignore-scripts

# Copy the rest of the application source (overridden at runtime by the bind mount).
COPY --chown=node:node . .

# Ensure writable cache directory exists (mirrors named volume in docker-compose).
RUN mkdir -p /app/.next /app/node_modules

# Expose the port the Next.js dev server uses by default.
EXPOSE 3000

# Run the Next.js dev server; override this when needed (e.g. npm run build && npm run start).
CMD ["npm", "run", "dev"]
