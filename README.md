# Breizh Blok Landing page

See [Website](https://breizh-blok.fr/).

## Setup

You should have **Node ^22** on your machine.

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

## Run tests

```bash
pnpm --filter app exec playwright install --with-deps chromium
pnpm --filter app run test
```
