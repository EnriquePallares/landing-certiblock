import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes/AppRoutes';
import './assets/css/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AuthContextProvider } from './context/AuthContextProvider';

import './assets/css/components/Header.css';
import './assets/css/components/Home/BlogSection.css';
import './assets/css/components/Home/ContactForm.css';
import './assets/css/components/Home/MainBanner.css';
import './assets/css/components/Home/SectorWorksMain.css';

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
