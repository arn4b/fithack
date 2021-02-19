import React from 'react';
import Navbar from "./Widgets/Navbar";
import Footer from "./Widgets/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <h1 align="center">Hello</h1>
      </div>
      <Login />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
