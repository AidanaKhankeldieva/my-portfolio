import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Project} path='/project/' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={About} path='/about' />
      </Switch>
    </Router>
  );
}

export default App;
