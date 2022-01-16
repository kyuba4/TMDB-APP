import Header from "./components/Header";
import Home from "./views/Home";
import Movie from "./views/Movie";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:movieID" element={<Movie />} />
      </Routes>
      {/* Filler div when viewport height < 100 */}
      <div className="flex-1"></div>
      <Footer />
    </>
  );
}

export default App;
