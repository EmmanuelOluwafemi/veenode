import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs"
import SingleBlog from "./pages/SingleBlog"
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Login from "./pages/auth/Login";
import Blog from './pages/dashboard/pages/Blog';
import DashboardPage from './pages/dashboard/pages/Dashboard';
import Teams from './pages/dashboard/pages/Teams';
import Dashboard from './pages/dashboard';
import Category from './pages/dashboard/pages/Category';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />}>
          <Route path=":id" element={<SingleBlog />} />
        </Route>
        <Route path="casestudy" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<Dashboard />}>
          <Route index element={<DashboardPage />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="teams" element={<Teams />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
