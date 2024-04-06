import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { clsx } from 'shared/lib/helpers/clsx/clsx';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<div>...loading</div>}>
      <div className={clsx('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
