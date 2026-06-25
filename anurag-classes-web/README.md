# Anurag Classes Web Application

Welcome to the official web application repository for **Anurag Classes**. This project serves as an informational platform to showcase courses, achievements, gallery media, and institute details, while providing a way for prospective students to enroll or inquire.

## Tech Stack

This project is built with modern web technologies:
- **Framework**: [Next.js](https://nextjs.org/) v16 (App Router)
- **UI Library**: React v19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: Next Themes (Dark/Light mode support)

## Getting Started

First, ensure you have your dependencies installed:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

> **Note:** The `dev` script is specifically configured to use the `--webpack` flag to bypass an issue with Turbopack native bindings on certain architectures.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Contains all Next.js App Router pages (Home, About, Courses, Gallery, Achievements, etc.) and layouts.
- `src/components`: Reusable UI components such as the `Navbar`, `Footer`, and `ThemeProvider`.
- `public/`: Static assets including images (like `logo.jpg` and gallery media).

## Scripts

- `npm run dev`: Starts the Next.js development server using Webpack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a Next.js production server.
- `npm run lint`: Runs ESLint to catch formatting and code quality issues.
