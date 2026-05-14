# Chaitanya Sarees

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![SQLite](https://img.shields.io/badge/SQLite-Data_Layer-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern saree storefront and product catalog experience built with Next.js, TypeScript, React, Tailwind CSS, and a local SQLite data layer.

## Screenshots

![Saree storefront hero](public/hero-main-sarees.png)

![Saree product details](public/hero-inset-details.png)

## Recruiter Highlights

- Next.js app structure with TypeScript
- Product-oriented UI suitable for e-commerce/catalog workflows
- Responsive storefront design
- Local SQLite-backed data layer with `better-sqlite3`
- Modern UI/animation stack using Framer Motion and Lucide icons
- Lint/build scripts for production readiness

## Features

- Saree catalog/storefront UI
- Responsive product presentation
- Reusable components
- Middleware-ready Next.js structure
- Local database support
- Modern animation and icon library integration

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js, React |
| Language | TypeScript |
| Styling | Tailwind CSS, PostCSS |
| Data | better-sqlite3 |
| UI/UX | Framer Motion, Lucide React |
| Quality | ESLint |

## Getting Started

```bash
git clone https://github.com/lokananda9/chaitanyasarees.git
cd chaitanyasarees
npm install
npm run dev
```

Open the local app:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Project Structure

```text
app/             Next.js routes and app-level UI
components/      reusable interface components
lib/             utilities and data logic
public/          static images and storefront assets
middleware.ts    request middleware entry point
```

## Production Readiness Checklist

- Add product management/admin workflow
- Add automated tests
- Add GitHub Actions CI
- Add deployment link after hosting
- Add more product screenshots and catalog examples
