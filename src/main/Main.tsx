import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApplicationRoutes } from "@main";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApplicationRoutes />
  </React.StrictMode>,
)
