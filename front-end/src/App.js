import "./App.css";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <h1>This is our React Project!!!</h1>
      <Navbar/>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
