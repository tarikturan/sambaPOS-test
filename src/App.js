import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MenuBar from "./components/MenuBar";
import Home from "./views/Home";
import css from "./App.css";

const App = (props) => (
  <div id="App">
    <Home />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
