import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl);

reactRoot.render(
 <StrictMode>
  <App />
 </StrictMode>
);
