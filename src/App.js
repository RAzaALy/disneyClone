import React from "react";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
