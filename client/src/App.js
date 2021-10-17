import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//imported pages
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";

//imported components
import Contain from "./components/Contain/Contain";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/projects"} component={Projects} />
        <Route exact path={"/about"} component={AboutMe} />
        <Route exact path={"/contact"} component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
