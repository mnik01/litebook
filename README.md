# Lite alternative to StoryBook using Vite.

> **CURRENTLY IN DEVELOPMENT DO NOT USE IT**
> Requirements:

- To have vite for bundling your project. Because litebook don't install vite itself it reuses your node_modules.
- To have typescript
- To have react

> If you have path aliases in your `vite.config.js` you need to pass them in litebooks generated config also

Supports:

- Vite
- Typescript
- React
- pnpm

Hot reload for stories supported. But you need to restart litebook if you create new storie

#### Usage

- pnpm: run `pnpx @mnik01/litebook` for initializing then start dev server with `pnpm dev`
- npm: run `npx @mnik01/litebook` for initializing then start dev server with `npm run dev`
