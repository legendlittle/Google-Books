import React, { Component } from "react";
import Books from "./components/pages/Books"
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Saved from "./components/pages/Saved"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path='/' component={Books} />
          <Route exact path='/api/books' component={Saved} />
        </div>
      </Router>
      
    )
  }
}

export default App;
