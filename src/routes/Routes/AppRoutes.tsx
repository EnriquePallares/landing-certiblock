import { Layout } from '@/components';
import { AboutUs } from '@/pages/AboutUs';
import { Blog } from '@/pages/Blog';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { Services } from '@/pages/Services';
import { Route, Routes } from 'react-router-dom';
export interface AppRoutesInterface {}

const AppRoutes = (props: AppRoutesInterface) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout imagelessFooter={true} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
