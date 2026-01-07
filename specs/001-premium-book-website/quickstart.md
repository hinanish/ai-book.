# Quickstart Guide: Premium Book Website

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Physical-ai-book
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Open Your Browser
Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure
```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── book/
│   │   ├── page.tsx        # Book page with chapters
│   │   └── components/     # Book-specific components
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page with waitlist form
│   └── components/         # Reusable UI components
├── content/
│   └── chapters/           # MDX chapter files
├── lib/
│   ├── utils.ts            # Utility functions
│   └── types.ts            # TypeScript type definitions
├── hooks/                  # Custom React hooks
└── providers/              # React context providers
```

## Key Features

### 1. Theme Switching
- Toggle between light and dark mode using the theme switcher in the header
- Theme preference is saved to localStorage

### 2. Reading Progress
- Progress bar shows how much of the book you've read
- Progress is saved to localStorage and persists between sessions

### 3. Chapter Navigation
- Navigate between chapters using the sidebar or in-page navigation
- Each chapter has 2 topics as specified

### 4. Waitlist Form
- Submit your email to join the waitlist on the Contact page
- Submissions are stored in localStorage

## Development Commands

### Running the Application
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run linter
npm run type-check # Run TypeScript type checking
```

### Adding New Chapters
1. Create a new MDX file in `content/chapters/` (e.g., `chapter-6.mdx`)
2. Update the chapter list in the appropriate component to include the new chapter
3. Ensure the new chapter follows the same format as existing chapters

### Customizing Styles
- All styling is done with Tailwind CSS
- Custom components follow shadcn/ui patterns
- Theme variables are defined in `globals.css`

## Deployment
The application is designed for deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js application
3. The build command will be `npm run build`
4. The output directory will be the default `.next/` folder