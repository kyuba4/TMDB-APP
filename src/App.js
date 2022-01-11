import Header from "./components/Header";
import Home from "./views/Home";
import Movie from "./views/Movie";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:movieID" element={<Movie />} />
        </Routes>
      </Router>
      {/* Filler div when viewport height < 100 */}
      <div className="flex-1"></div>
      <Footer />
    </>
  );
}

export default App;
