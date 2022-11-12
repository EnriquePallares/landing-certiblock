import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRoutes from './routes/Routes/AppRoutes';
import './assets/css/app.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add();

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
