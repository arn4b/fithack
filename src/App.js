import React from 'react';
import {Route, BrowserRouter} from "react-router-dom"
import Navbar from "./Widgets/Navbar";
import Footer from "./Widgets/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import DashBoard from "./Pages/DashBoard";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" exact component={DashBoard}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
       </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
