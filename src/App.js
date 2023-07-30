import { Route, Routes } from "react-router-dom";
import MainNavbar from "./components/Navbar/MainNavbar";
import Container from "@mui/material/Container";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Branches from "./components/Branches/Branches";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import BranchInfo from "./components/Branches/BranchInfo/BranchInfo";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container fixed>
        <div className="layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/branches" element={<Branches/>} />
            <Route path="/branches/:id" element={<BranchInfo/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
