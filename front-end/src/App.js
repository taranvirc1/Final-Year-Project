import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
import NavbarProfile from "./components/Navbar_Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <NavbarProfile />
      <main className="App-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
