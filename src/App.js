import React from "react";
// import logo from "./jpg/header.jpg";
import "./App.css";
import Header from "./components/Header/header";
import Nav from "./components/Navbar/nav";
import Profile from "./components/Profile/profile";
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
