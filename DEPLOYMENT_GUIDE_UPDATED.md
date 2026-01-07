# Deployment Guide for Vercel

This guide provides detailed instructions for deploying the AI-Native Driven Development Book website to Vercel and troubleshooting common issues.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (sign up at https://vercel.com)
- Node.js and npm installed on your local machine

## Deployment Steps

### 1. Prepare Your Repository

1. Initialize a Git repository in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push your code to a remote repository (GitHub, GitLab, or Bitbucket)

### 2. Deploy via Vercel Dashboard

1. Go to https://vercel.com and sign in
2. Click "New Project"
3. Select your Git provider and import your repository
4. Vercel should automatically detect that this is a Next.js project
5. In the configuration:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click "Deploy"

### 3. Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Run the deployment command:
   ```bash
   vercel --prod
   ```

## Troubleshooting the 404 Error

If you encounter a 404 error after deployment, try these solutions:

### 1. Check Build Settings

Ensure your build command is correctly set to `npm run build` and the output directory is `.next`.

### 2. Verify Dependencies

Make sure all dependencies in `package.json` are correct and compatible. The project should include:
- `next`
- `react`
- `react-dom`
- `@next/mdx`
- `contentlayer2`
- `@contentlayer2/source-files`
- `remark-gfm`
- `rehype-slug`
- `rehype-autolink-headings`

### 3. Check Next.js Configuration

Verify that `next.config.js` is properly configured for MDX and contentlayer2:

```js
const { withContentlayer } = require('contentlayer2/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    unoptimized: true, // For static exports, if needed
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withContentlayer(withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}));
```

### 4. Verify Contentlayer2 Configuration

Ensure `contentlayer.config.js` is properly set up:

```js
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Chapter = defineDocumentType(() => ({
  name: 'Chapter',
  filePathPattern: `chapters/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the chapter',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      description: 'The URL for the chapter',
      resolve: (doc) => `/chapters/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Chapter],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
});
```

### 5. Environment Variables

If your project requires environment variables, make sure to set them in the Vercel dashboard under Settings > Environment Variables.

### 6. Custom Routes

Check if you have any custom routing that might be causing the 404. The `vercel.json` file should be properly configured.

## Resolving Package Version Issues

If you encounter errors like `No matching version found for @contentlayer2/source-files@^0.1.5`, make sure you're using the correct version numbers in your `package.json`. The current working versions are:

- `"contentlayer2": "^0.4.6"`
- `"@contentlayer2/source-files": "^0.4.6"`

## Additional Tips

1. **Check the Build Logs**: Look at the deployment logs in the Vercel dashboard for any errors during the build process.

2. **Verify File Structure**: Ensure your MDX files are in the correct location (`src/content/chapters/`).

3. **Test Locally**: Before deploying, test the build locally:
   ```bash
   npm run contentlayer2 build
   npm run build
   npm run start
   ```

4. **Clear Cache**: If issues persist, try clearing the Vercel build cache from the project settings.

## Support

If you continue to experience issues after trying these solutions:

1. Check the Vercel documentation: https://vercel.com/docs
2. Visit the Next.js documentation: https://nextjs.org/docs
3. Create an issue in the project repository