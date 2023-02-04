export const templates = {
  "index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Litebook</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./index.tsx"></script>
  </body>
</html>`,
  "index.tsx": `
import React, { useEffect, useState, FC } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '../src/index.css';

const App = () => {
  const [stories, setStories] = useState<{
    component: FC,
    meta: { name: string }
  }[]>([])
  const [currentStory, setCurrentStory] = useState<string | null>(null);
  
  useEffect(() => {
    const load = async () => {
      // @ts-ignore
      const modules = import.meta.glob('../src/**/*.stories.tsx')
      const mods: any[] = [];
      for (const path in modules) {
        const mod = await modules[path]();
        const name = path.split('/').at(-1);
        // @ts-ignore
        mods.push({component: mod.default, meta: {name}})
      }
      setStories(mods)
      setCurrentStory(mods[0].meta.name)
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
              <li onClick={() => {setCurrentStory(st.meta.name)}} key={st.meta.name + i} className="cursor-pointer pl-2 text-gray-500 before:content-['-'] hover:text-gray-700 hover:underline">{st.meta.name}</li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="w-full rounded-lg bg-white drop-shadow-md">
        {currentStory ?
        <iframe className='h-full' src={"./stories/" + currentStory?.split('.stories.tsx')[0] + "/storie.html"}></iframe>
         : <p></p> }
      </main>
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);  
  
`,
  "tsconfig.json": `{
  "extends": "../tsconfig.json",
}`,
  "public/logo.svg": `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.62064 18.43L0.00064046 1.92004C-0.00871611 1.65782 0.0847493 1.40232 0.261103 1.20803C0.437456 1.01374 0.68274 0.896044 0.94464 0.88004L14.9846 0.00203999C15.1218 -0.00671356 15.2593 0.0127663 15.3887 0.0592749C15.518 0.105784 15.6365 0.178332 15.7367 0.272435C15.8369 0.366538 15.9167 0.480194 15.9712 0.606376C16.0257 0.732558 16.0538 0.868583 16.0536 1.00604V18.995C16.0535 19.1309 16.0259 19.2652 15.9724 19.3901C15.9189 19.5149 15.8407 19.6277 15.7425 19.7215C15.6443 19.8153 15.5281 19.8882 15.401 19.936C15.2738 19.9837 15.1383 20.0051 15.0026 19.999L1.58064 19.396C1.32849 19.3847 1.08982 19.2789 0.911995 19.0998C0.734166 18.9207 0.63017 18.6823 0.62064 18.43Z" fill="#6875E7" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.16284 5.04521C9.22791 5.08402 9.27899 5.14506 9.3079 5.21859C9.33682 5.29212 9.34192 5.37391 9.32239 5.45092L8.43706 8.92842H11.6673C11.7323 8.92842 11.7958 8.94876 11.8501 8.98694C11.9044 9.02511 11.9472 9.07946 11.973 9.1433C11.9989 9.20714 12.0068 9.27769 11.9958 9.34627C11.9847 9.41486 11.9552 9.47849 11.9109 9.52935L7.24416 14.8863C7.19333 14.9448 7.12567 14.9833 7.05199 14.9957C6.97832 15.0081 6.90289 14.9937 6.83777 14.9548C6.77264 14.9158 6.72159 14.8546 6.69278 14.7809C6.66396 14.7072 6.65905 14.6253 6.67883 14.5482L7.56416 11.0712H4.33392C4.26896 11.0712 4.20542 11.0509 4.1511 11.0127C4.09679 10.9745 4.05407 10.9202 4.02819 10.8563C4.00232 10.7925 3.99442 10.7219 4.00546 10.6533C4.01651 10.5848 4.04602 10.5211 4.09037 10.4703L8.75706 5.11331C8.80789 5.05505 8.87546 5.01669 8.949 5.00435C9.02254 4.99201 9.09782 5.00639 9.16284 5.04521Z" fill="white" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7996 0.0710449L11.8676 0.191045L11.7736 2.45804C11.7725 2.48641 11.7794 2.51452 11.7936 2.53911C11.8078 2.56369 11.8286 2.58375 11.8538 2.59695C11.8789 2.61014 11.9073 2.61594 11.9356 2.61365C11.9639 2.61137 11.9909 2.6011 12.0136 2.58404L12.8936 1.91604L13.6376 2.50204C13.6601 2.51982 13.6872 2.5308 13.7157 2.53367C13.7442 2.53655 13.7729 2.5312 13.7985 2.51826C13.824 2.50533 13.8453 2.48534 13.8599 2.46067C13.8745 2.436 13.8817 2.40767 13.8806 2.37904L13.7996 0.0710449Z" fill="white" />
</svg>`,
  "vite.config.ts": (stories: string[]) => `
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
          ${stories.map(
            (st) => `${st}: resolve(__dirname, 'stories/${st}/storie.html'),`
          )}
        },
      },
    },
  }
});`,
  "stories/Component/iframe.tsx": (st: string) => `
  import React from 'react';
  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  
  // Root projects tailwind
  import '../../../src/index.css';
  // Path to storiefile
  import ${st}Storie from '../../../src/components/${st}/${st}.stories';
  
  
  createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '8px',
        height: '100%'
      }}>
        <${st}Storie />
        <p>Controlls goes here</p>
      </div>
    </StrictMode>
  );  
  `,
};
