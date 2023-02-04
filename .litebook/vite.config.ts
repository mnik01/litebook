
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, loadConfigFromFile } from 'vite';
import { resolve } from 'path'

export default defineConfig(async () => {
  const rootProjectConfig = await loadConfigFromFile({ command: 'serve', mode: 'dev' }, 'vite.config.ts')

  return {
    resolve: rootProjectConfig?.config.resolve,
    plugins: rootProjectConfig?.config.plugins,
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          {{#stories}}
            {{ this.lower }}: resolve(__dirname, 'stories/{{ this.capitalize }}/storie.html'),
          {{/stories}}
        },
      },
    },
  }
});