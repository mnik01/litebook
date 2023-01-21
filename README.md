# Lite alternative to StoryBook using Vite.

> **CURRENTLY IN DEVELOPMENT DO NOT USE IT**

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/130ed94499a9428d8c53b86c54f66419" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

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

### Roadmap

- add support for conrolls of component props
- move `import '../src/index.css';` line from template to stdin. Ask about tailwind css from user via cli
- write storybook like appearence
- Error handling
