import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import Blogs from "./pages/Blogs"
import SingleBlog from "./pages/SingleBlog"
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import DashboardPage from './pages/dashboard/pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
        <Home exact path="/" />
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/blogs/:id">
          <SingleBlog />
        </Route>
        <Route exact path="/casestudy">
          <CaseStudy />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
