import "./App.css";
import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1>xkcd comics</h1>
          <Route path="/:num" component={FullComic} />
          <Route exact path="/" component={Comics} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
