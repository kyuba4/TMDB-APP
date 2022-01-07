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
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/movie/:movieID" element={<Movie />}></Route>
          <Route element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
