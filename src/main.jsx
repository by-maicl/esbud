import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router';

import App from './App.jsx';
import './styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);