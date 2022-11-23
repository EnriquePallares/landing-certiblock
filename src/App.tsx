import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes/AppRoutes';
import './assets/css/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AuthContextProvider } from './context/AuthContextProvider';

library.add();

function App() {
  return (
    <HashRouter>
      <AuthContextProvider>
        <AppRoutes />
      </AuthContextProvider>
    </HashRouter>
  );
}

export default App;
