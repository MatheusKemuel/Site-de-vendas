import "./App.css";
import { TopBar } from "./components/TopBar";
import { Slide } from "./components/Slide"
import Destaques from "./components/Destaques";
import ProductsSession from "./components/ProductsSession";

function App() {
  return (
    <>
      <TopBar />
      <Slide />
      <Destaques />
      <ProductsSession />
    </>
  );
}

export default App;
