import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { RouterAva } from './context/context.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterAva>
      <App />
    </RouterAva>
  </BrowserRouter>
);
