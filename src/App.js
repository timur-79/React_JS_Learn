import React from "react";
// import logo from "./jpg/header.jpg";
import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Profile from "./components/profile";
function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
