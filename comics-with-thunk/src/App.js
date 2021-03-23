import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import GetComicForm from "./components/GetComicForm";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className=" bg-gray-100 p-8 flex flex-col items-center">
          <Link to="/">
            <p className="underline font-black text-lg">Home</p>
          </Link>
          <GetComicForm />
          <Route path="/:num" component={FullComic} />
          <Route exact path="/" component={Comics} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
