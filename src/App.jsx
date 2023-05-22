import "./App.css";
import Footer from "./content/Footer/Footer";
import Navbar from "./content/Navbar/Navbar";
import Home from "./content/Home/Home";
import {   Route, Routes } from "react-router-dom";
import Book from "./content/Books/Book";
import Blog from "./content/Blog/Blog";
import About from "./content/About/About";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
