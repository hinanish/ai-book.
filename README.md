# AI-Native Driven Development Book

This is a premium book website for AI-Native Driven Development built with Next.js 15, Tailwind CSS, and MDX.

## Features

- 5 comprehensive chapters on AI-Native development
- Responsive design with mobile-first approach
- Dark/light mode toggle
- Reading progress tracking
- Chapter navigation
- Waitlist form with localStorage persistence
- Glassmorphism and gradient design elements
- Accessibility features

## Tech Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- MDX for content
- Contentlayer2 for content processing

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, build the content layer:

```bash
npm run contentlayer
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is designed for deployment on Vercel:

### Method 1: Git Integration (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up or log in to [Vercel](https://vercel.com)
3. Import your project from the Git repository
4. Vercel will automatically detect this is a Next.js application
5. The build command will be `npm run build`
6. The output directory will be the default `.next/` folder
7. Deploy!

### Method 2: Vercel CLI
Alternatively, you can deploy directly from the command line using the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

### Troubleshooting Common Deployment Issues

If you encounter a 404 error on Vercel, please check:

1. **Ensure all dependencies are properly listed** in package.json
2. **Verify the build command** is set to `npm run build`
3. **Check that the output directory** is set to `.next` (default for Next.js)
4. **Confirm that all required environment variables** are set (if any)
5. **Verify that the Next.js configuration** is correct in next.config.js
6. **Check for dependency conflicts** - we've resolved React/Lucide-react compatibility issues

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [MDX](https://mdxjs.com/)
- [Contentlayer](https://contentlayer.dev/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you continue to experience issues after trying these solutions:

1. Check the Vercel documentation: https://vercel.com/docs
2. Visit the Next.js documentation: https://nextjs.org/docs
3. Create an issue in the project repository