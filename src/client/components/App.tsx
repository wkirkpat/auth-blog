import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./public/Home";
import Blog from "./public/Blog";
import AddBlog from "./admin/AddBlog";
import Edit from "./admin/Edit";
import Login from "./admin/Login";
import Donate from "./public/Donate";
import Navbar from "./shared/Navbar";

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Link to="/">
          <button className="btn btn-primary btn-sm">Home</button>
        </Link>
        <Link to="/add">
          <button className="btn btn-primary btn-sm">Write a Blog</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-secondary btn-sm">Login</button>
        </Link>
        <Link to="/donate">
          <button className="btn btn-success btn-sm">Donate</button>
        </Link> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog/:id" component={Blog} />
          <Route path="/add" component={AddBlog} />
          <Route path="/blog/:id/edit" component={Edit} />
          <Route path= "/login" component={Login} />
          <Route path= "/donate" component={Donate} />
        </Switch>
      </Router>
    </>
  );
};

interface IAppProps {}

export default App;
