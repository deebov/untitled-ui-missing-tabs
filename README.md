This is a [Next.js](https://nextjs.org) reproduction bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## What this repro shows

Bug: When using Cache Components in Next.js 16, navigating between pages can make
Untitled UI Tabs disappear.

## Getting Started

Run the development server:

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

## Steps to reproduce

1. Go to the page with tabs.
2. Go to the page without tabs.
3. Go back to the page with tabs.
4. Observe that the tabs are not visible (they should remain visible).
