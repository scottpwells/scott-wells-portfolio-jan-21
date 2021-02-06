import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import "./App.css";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Redirect to="/" />
        </Switch>
       

        <Footer />
        </div>
      </Router>
    
  
  );
}

export default App;

