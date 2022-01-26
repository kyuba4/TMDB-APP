import Header from "./components/Header";
import Home from "./views/Home";
import Movie from "./views/Movie";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:movieID" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Filler div when viewport height < 100 */}
      <div className="flex-1"></div>
      <Footer />
    </>
  );
}

export default App;
