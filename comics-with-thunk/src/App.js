import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import GetComicForm from "./components/GetComicForm";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FaviAnimation from "./actions/faviAnimation";

function App() {
  return (
    <Router>
      <Switch>
        <div className="flex flex-col justify-start items-center  ">
          <div className=" flex justify-between w-full bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200  rounded shadow-xl h-1/6">
            <Link to="/">
              <p className="underline inline font-black text-lg">Go Home</p>
            </Link>
            <h1 className="text-8xl self-center ml-40 "> xkcd comics</h1>
            <GetComicForm />
          </div>
          {/* <FaviAnimation /> */}
          <Route path="/:num" component={FullComic} />
          <Route exact path="/" component={Comics} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
