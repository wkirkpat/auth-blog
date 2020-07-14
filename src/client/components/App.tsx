import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./public/Home";
import Blog from "./public/Blog";
import AddBlog from "./admin/AddBlog";
import Edit from "./admin/Edit";
import Login from "./admin/Login";
import Donate from "./public/Donate";
import Navbar from "./shared/Navbar";
import Register from "./admin/Register";

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route path="/add" component={AddBlog} />
          <Route path="/blog/:id/edit" component={Edit} />
          <Route path="/login" component={Login} />
          <Route path="/donate" component={Donate} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
