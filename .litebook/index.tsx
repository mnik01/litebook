
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
        <iframe className='h-full' src={`./stories/${currentStory?.split('.stories.tsx')[0]}/storie.html`}></iframe>
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
  