import React from "react";
// import logo from "./jpg/header.jpg";
import "./App.css";
import Header from "./components/Header/header";
import Nav from "./components/Navbar/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Nav/>
                <div className="App-wrapper-content">
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path='/profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
