FROM node:22-bookworm-slim

# Install only the tooling Amplify CLI depends on.
RUN apt-get update && apt-get install -y --no-install-recommends \
  curl unzip ca-certificates git && \
  rm -rf /var/lib/apt/lists/*

# Install Amplify CLI globally without executing lifecycle scripts.
# Pinned to a known-good version for reproducible Gen1->Gen2 migration (requires >=14.4.0).
RUN npm i -g @aws-amplify/cli@14.5.0 --ignore-scripts

USER node
WORKDIR /app

# Default command provides quick access to the CLI when running the container directly.
CMD ["amplify", "--help"]
