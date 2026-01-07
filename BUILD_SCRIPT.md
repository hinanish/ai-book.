# Deployment Script for Vercel

# Install dependencies with legacy peer deps to handle any conflicts
npm install --legacy-peer-deps

# Build content layer
npm run contentlayer

# Build the Next.js application
npm run build