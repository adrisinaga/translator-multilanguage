# Language Translator with Groq API

This is a [Next.js](https://nextjs.org) project that provides language translation services using the Groq API.

## Getting Started

First, set up your environment variables:

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Add your Groq API key to the `.env` file:
```bash
GROQ_API_KEY=your-groq-api-key-here
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

1. Push your code to GitHub
2. Create a new project on [Vercel](https://vercel.com/new)
3. Connect your GitHub repository
4. Before deploying, add your environment variables:
   - Go to your project settings in Vercel
   - Navigate to the "Environment Variables" tab
   - Add `GROQ_API_KEY` with your API key value
5. Deploy the project

Important: Make sure to add your `GROQ_API_KEY` to Vercel's environment variables before deploying!

## Environment Variables

The following environment variables are required:

- `GROQ_API_KEY`: Your Groq API key for translation services

You can obtain a Groq API key from [Groq's Console](https://console.groq.com/).

## Features

- Translation between English and Indonesian
- Real-time translation using Groq's API
- Modern, responsive UI
- Dark mode support
- Language switching functionality

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
