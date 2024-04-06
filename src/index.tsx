import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root not found');
}

const root = createRoot(container);

root.render(
  <ThemeProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
