# Lite alternative to StoryBook using Vite

> **CURRENTLY IN DEVELOPMENT DO NOT USE IT**

<a href="https://youtu.be/9xDk2_tBvMA" target="_blank">
  <p align="center">
    <img src="https://i.postimg.cc/cLZhNyz1/image-2023-01-22-01-31-29.png" width="480" />
  </p>
</a>

<a href="https://youtu.be/9xDk2_tBvMA" target="_blank">
  <p align="center">Installation and usage demonstration</p>
</a>

Requirements:

- To have vite for bundling your project. Because litebook don't install vite itself it reuses your node_modules.
- To have typescript
- To have react

Supports:

- Vite
- Typescript
- tailwindcss
- React
- pnpm

Hot reload for stories supported. But you need to restart litebook if you create new one

#### Usage

- pnpm: run `pnpx @mnik01/litebook` for initializing then start dev server with `pnpm litebook`
- npm: run `npx @mnik01/litebook` for initializing then start dev server with `npm run litebook`

### Roadmap

- Add support for conrolls of component props
- Move `import '../src/index.css';` line from template to stdin. Ask about tailwind css from user via cli
- Write storybook like appearence
- Error handling
- Support of `.md` and `.mdx` files
- Support for Vue and Svelte
- Resize of canvas section
