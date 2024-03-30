import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root not found');
}

const root = createRoot(container);

root.render(
  <ThemeProvider>
  <BrowserRouter>
 <App/>
 </BrowserRouter>
 </ThemeProvider>
);