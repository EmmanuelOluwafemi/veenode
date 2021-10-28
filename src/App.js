import Home from "./pages/Home";
import Blogs from "./pages/Blogs"
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
      </Switch>
    </>
    </BrowserRouter>
  );
}

export default App;
