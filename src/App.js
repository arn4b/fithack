import React from 'react';
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Navbar from "./Widgets/Navbar";
import Footer from "./Widgets/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './App.css';

const Routing = () => {
  return(
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div>
        <h1 align="center">Hello</h1>
      </div>
      <Routing />
      <Login />
      <Signup />
      <Footer />
      </BrowserRouter>
      //This comment is to check the integrity of git
    </div>
  );
}

export default App;
