# Repository Guidelines

## Project Structure & Module Organization

This npm workspaces monorepo contains Kernelium’s bilingual landing page, built with React 19, TanStack Start/Router, Vite, and Tailwind CSS 4. Turborepo coordinates workspace tasks.

- `apps/web/src/routes/`: file-based routes, including `__root.tsx` and `index.tsx`.
- `apps/web/src/components/`: page sections and the contact form.
- `apps/web/src/lib/`: English/French translations (`i18n.tsx`) and the contact submission server function (`send-contact.ts`).
- `packages/ui/src/`: shared UI components, utilities, and global styles.
- `assets/`: shared logos and animation files; `apps/web/public/`: static public files.

Keep page-specific behavior in `apps/web` and reusable UI in `packages/ui`.

## Build, Test, and Development Commands

Use Node.js >=22.12.0 and the npm version declared in `package.json`.

- `npm ci`: install dependencies from the committed lockfile.
- `npm run dev`: start development servers; the web app uses port 3000.
- `npm run build`: produce the production build through Turborepo.
- `npm run lint`: run workspace ESLint checks.
- `npm run typecheck`: run TypeScript checks without emitting files.
- `npm run format`: rewrite workspace TypeScript/TSX files with Prettier.
- `npm run generate-routes --workspace=web`: regenerate TanStack routes.

## Coding Style & Naming Conventions

Use TypeScript with strict typing. Follow Prettier: two-space indentation, double quotes, no semicolons, ES5 trailing commas, and an 80-column target. The Tailwind plugin sorts utility classes; ESLint uses the TanStack configuration.

Use kebab-case filenames (for example, `contact-form.tsx`), PascalCase React components, and camelCase functions. Import app modules through `@/`, assets through `@assets/`, and shared UI through `@workspace/ui/`. Update both language dictionaries when changing visible copy.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is currently configured. Run lint, typecheck, and build before submitting changes. Manually verify responsive layouts, language switching, navigation, and contact-form validation/status states. Avoid sending real contact messages during routine checks.

## Commit & Pull Request Guidelines

Recent commits use short `feat:` and `fix:` subjects, such as `feat: adding animations`. Keep commits focused and descriptions specific.

Pull requests should describe the behavior changed, link relevant issues, and record validation performed. Include screenshots for visual changes and mention any configuration requirements. Keep secrets and local `.env*` files out of commits.
