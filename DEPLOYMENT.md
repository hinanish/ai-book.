# Deployment Scripts for AI-Native Driven Development Book

# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel (development)
vercel

# Deploy to Vercel (production)
vercel --prod

# Pull existing project environment variables
# vercel env pull .env.local