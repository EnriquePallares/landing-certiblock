import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes/AppRoutes";
import './assets/css/app.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
