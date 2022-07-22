import "./style/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/" element={<Compétition />}></Route> */}
        {/* <Route path="/" element={<Galerie />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
