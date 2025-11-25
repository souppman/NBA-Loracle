# How to Deploy NBA Oracle to the Web

Since this is a static site (built with Vite + React), you can deploy it instantly for free.

## Option 1: Netlify Drop (Easiest)
1.  Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
2.  Locate the `dist` folder in your project:
    `Users/ryancampbell/Downloads/Project/nba-oracle/dist`
3.  Drag and drop the `dist` folder onto the Netlify page.
4.  **Done!** You will get a live URL (e.g., `https://nba-oracle-12345.netlify.app`).

## Option 2: Vercel CLI (Professional)
If you have a Vercel account:
1.  Run `npx vercel` in this directory.
2.  Follow the prompts (keep pressing Enter).
3.  It will give you a production URL.

## Option 3: GitHub Pages
1.  Push this code to a GitHub repository.
2.  Go to Settings > Pages.
3.  Select "GitHub Actions" or use a deploy workflow.
