import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
//import Menu from './pages/Menu/Menu';
//import Drop from './pages/Drop/Drop';
//import Submit from './pages/Submit/Submit';
import Form from './pages/Form/Form';
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';


function App() {
  return (
    <Router>
    <div className="center-container">
      <Header />
      <main className="main-content">
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </main>

      <Footer className="footer" />
    </div>
    </Router>
  );
}

const Homepage = () => (
  <div>
    <Home />
    <Form />
    <About />
    <Contact />
  </div>
);

export default App;