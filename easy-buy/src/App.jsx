import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Favoritos from "./components/pages/Favoritos";
import Carrinho from "./components/pages/Carrinho";
import Conta from "./components/pages/Conta";
import Container from "./components/Container";
import FavoritesProvider from "./contexts/Favorites";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Provider from "./context/Provider";
import SearchPage from "./components/pages/SearchPage";

function App() {
  return (
    <Provider>
      <TopBar />
      <FavoritesProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favoritos />} />
            <Route path="/cart" element={<Carrinho />} />
            <Route path="/account" element={<Conta />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Container>
      </FavoritesProvider>
      <Footer />
    </Provider>
  );
}

export default App;
