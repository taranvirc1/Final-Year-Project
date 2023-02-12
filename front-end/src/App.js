import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarProfile from "./components/Navbar_Profile";
import Footer from "./components/Footer";

function App() {
  const [loggedInUser, setLoggedinUser] = useState("");

  return (
    <div className="App">
      {!loggedInUser ? <Navbar /> : <NavbarProfile />}
      <main className="App-main">
        <Outlet context={[loggedInUser, setLoggedinUser]} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
