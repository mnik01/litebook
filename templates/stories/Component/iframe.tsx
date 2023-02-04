import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Root projects tailwind
import '../../../src/index.css';
// Path to storiefile
import {{name}}Storie from '../../../src/components/{{name}}/{{name}}.stories';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '8px',
      height: '100%'
    }}>
      <{{name}}Storie />
      <p>Controlls goes here</p>
    </div>
  </StrictMode>
);  
  