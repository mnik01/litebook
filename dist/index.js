#!/usr/bin/env node
import s from"fs-extra";import o from"fs-extra";var t={indexHtml:`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Litebook</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"><\/script>
  </body>
</html>  
  `,indexTsx:`
import React, { useEffect, useState, FC } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '../src/index.css';

const App = () => {
  const [stories, setStories] = useState<{
    component: FC,
    meta: { name: string }
  }[]>([])

  useEffect(() => {
    const load = async () => {
      // @ts-ignore
      const modules = import.meta.glob('../src/**/*.stories.tsx')
      const mods: any[] = [];
      for (const path in modules) {
        const mod = await modules[path]();
        const name = path.split('/').at(-1);
        mods.push({component: mod.default, meta: {name}})
      }
      setStories([...stories, ...mods])
    }

    try {
      load()
    } catch (error) {
      console.error(error)
    }
  }, [])


  return (
    <div className="flex h-screen w-screen bg-gray-100 p-4">
      <aside className="w-48">
        <h1 className="text-lg font-medium text-gray-800">Litebook</h1>
        <p className="text-sm text-gray-700">Story list:</p>
        <nav>
          <ul className="mt-1 list-inside space-y-1 text-sm">
            {stories.map((st, i) => (
              <li key={st.meta.name + i} className="cursor-pointer pl-2 text-gray-500 before:content-['-'] hover:text-gray-700 hover:underline">{st.meta.name}</li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="w-full rounded-lg bg-white p-2 drop-shadow-md">
        <header>Canvas</header>
        <div>{stories.length >=1 ? stories.map(st => st.component).map(Storie => <Storie key={Storie.name} />) : 'Loading stories...'}</div>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);  
  `,viteConfigTs:`
  /// <reference types="vitest" />
  /// <reference types="vite/client" />
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  export default defineConfig({
    plugins: [react()],
  });  
  `};var i=()=>{o.mkdirSync(".litebook"),o.writeFileSync(".litebook/index.html",t.indexHtml),o.writeFileSync(".litebook/index.tsx",t.indexTsx),o.writeFileSync(".litebook/vite.config.ts",t.viteConfigTs)};var r=async()=>{let e=s.readJSONSync("package.json");e.scripts={...e.scripts,litebook:"vite serve .litebook","litebook:build":"vite build .litebook"},s.writeJSONSync("package.json",e,{spaces:2});try{i()}catch{process.stdout.write("Litebook already initialized in this repo")}process.exit(0)};r().catch(e=>{process.stderr.write("Aborting installation..."),e instanceof Error?process.stderr.write(JSON.stringify(e)):(process.stderr.write("An unknown error has occurred. Please open an issue on github with the below:"),process.stdout.write(e)),process.exit(1)});
//# sourceMappingURL=index.js.map