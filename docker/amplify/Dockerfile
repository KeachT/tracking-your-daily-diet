FROM node:20-bullseye-slim

# Install only the tooling Amplify CLI depends on.
RUN apt-get update && apt-get install -y --no-install-recommends \
  curl unzip ca-certificates git && \
  rm -rf /var/lib/apt/lists/*

# Install Amplify CLI globally without executing lifecycle scripts.
RUN npm i -g @aws-amplify/cli@latest --ignore-scripts

USER node
WORKDIR /app

# Default command provides quick access to the CLI when running the container directly.
CMD ["amplify", "--help"]
