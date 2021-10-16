import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Contain>
        <NavigationBar />
        <Switch>
          {/* <Route exact path={"/"} render={(props) => <Home {...props} />} /> */}
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/projects"}>
            <Projects />
          </Route>
          <Route path={"/about"}>
            <AboutMe />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
        {/* <Footer /> */}
        <Footer />
      </Contain>
    </Router>
  );
}

export default App;
