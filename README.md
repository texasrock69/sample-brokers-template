# BBDG Sample Broker Website

This repository is a reusable business-broker website template for deployment on Railway. It is a standard React, Vite, Tailwind, and Express project with no platform-specific authentication, storage, database, or AI-service dependencies.

## Customizing a Broker Site

Update `client/src/brokerConfig.ts` for the broker’s company name, contact information, city, and hero skyline. The hero image is stored in `client/public/assets/` and is served by Railway at `/assets/...`.

## Local Development

Install dependencies with `pnpm install`, then start the site with `pnpm dev`. Use `pnpm test` for the configuration test and `pnpm run build` to create the Railway-ready production build.

## Hosting

Railway builds the site with `pnpm run build` and starts the included Express static server with `pnpm start`. Form submissions use Web3Forms directly from the browser; set the desired recipient email and Web3Forms access key in the relevant form pages before using this template for a new broker.
