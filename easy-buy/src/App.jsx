import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Favoritos from "./components/pages/Favoritos";
import Carrinho from "./components/pages/Carrinho"
import Conta from "./components/pages/Conta"

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favoritos />}/>
        <Route path="/cart" element={<Carrinho />}/>
        <Route path="/account" element={<Conta />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
