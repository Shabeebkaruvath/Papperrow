import "./App.css";
import Footer from "./content/Footer/Footer";
import Navbar from "./content/Navbar/Navbar";
import Home from "./content/Home/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
