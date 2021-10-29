import Home from "./pages/Home";
import Blogs from "./pages/Blogs"
import SingleBlog from "./pages/SingleBlog"
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <>
      <Switch>
      <Home exact path="/" />
      <Route exact path="/blogs">
      <Blogs />
      </Route>
      <Route exact path="/articles">
      <SingleBlog />
      </Route>
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
