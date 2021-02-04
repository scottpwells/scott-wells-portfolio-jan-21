import React from 'react';
import "./NavBar.css"
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';

const NavBar = (props) => {
    return (
      <Router>
  <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <div className="row">
          <div className="col-sm-12">
    <a className="navbar-brand" href="app.js">Scott P. Wells</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href={"/"}>Home</a>
        <a className="nav-link" href={"/Portfolio"}>Portfolio</a>
        <a className="nav-link" href={"/About"}>About</a>
        <a className="nav-link" href={"/Contact"}>Contact Me</a>
        <a className="nav-link" href={"https://github.com/scottpwells"}>Github</a>
        <a className="nav-link" href={"https://www.linkedin.com/in/scott-wells-8262303/"}>Linkedin</a>
        {/* <a className="nav-link disabled" href="About.js" tabindex="-1" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
  </div>
  </div>
</nav>
</div>
        <Switch>
      <Route exact path="/" component={Home} />
      <Route  path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </Switch>

      </Router>
    );
};

export default NavBar;