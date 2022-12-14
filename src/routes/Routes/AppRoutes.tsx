import { Layout } from '@/components';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AboutUs } from '@/pages/AboutUs';
import { Blog } from '@/pages/Blog';
import { ClaimYourAsset } from '@/pages/ClaimYourAsset';
import { CompanyProfile } from '@/pages/CompanyProfile';
import { Home } from '@/pages/Home';
import { InternalBlog } from '@/pages/InternalBlog';
import { Login } from '@/pages/Login';
import { Profile } from '@/pages/Profile';
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
        <Route path="/blog/:blogId" element={<InternalBlog />} />
        <Route path="/services" element={<Services />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout imagelessFooter={true} />}>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/profile/claim-your-asset"
            element={<ClaimYourAsset />}
          />
        </Route>
        <Route element={<Layout imagelessFooter={true} />}>
          <Route path="/companyProfile" element={<CompanyProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
