import "./App.css";
import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Link to="/">Home</Link>

          <Route path="/:num" component={FullComic} />
          <Route exact path="/" component={Comics} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
