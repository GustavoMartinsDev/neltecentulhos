import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

import "../src/pages/styles/app.module.scss"
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
