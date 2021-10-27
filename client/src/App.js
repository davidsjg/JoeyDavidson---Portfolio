import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../src/actions";

import "./App.css";

//imported pages
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";

//imported components

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import API from "./utils/API";
import { Container } from "react-bootstrap";

const App = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  useEffect(() => {
    API.getProjects().then((project) => {
      dispatch(setProject(project.data));
    });
  }, []);

  return (
    <Router>
      <Container>
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

        <Footer />
      </Container>
    </Router>
  );
};

export default App;
