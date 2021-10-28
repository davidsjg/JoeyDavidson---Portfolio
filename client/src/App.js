import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../src/actions";

import "./App.css";

//imported pages
import Home from "../src/pages/Home/Home";
import Projects from "../src/pages/Projects/Projects";
import AboutMe from "../src/pages/AboutMe/AboutMe";
import Contact from "../src/pages/Contact/Contact";
import Test from "./pages/Test/Test";

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
          <Route exact path={"/"} component={Home} />

          <Route path={"/projects"} component={Projects} />

          <Route path={"/about"} component={AboutMe} />

          <Route path={"/contact"} component={Contact} />
          <Route path={"/test"} component={Test} />
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
};

export default App;
