import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Correct import for React 18+
import { BrowserRouter } from 'react-router-dom';  // For routing
import './index.css'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App with Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);