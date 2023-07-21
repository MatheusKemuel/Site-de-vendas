import "./App.css";
import { TopBar } from "./components/TopBar";
import { Slide } from "./components/Slide"
import Destaques from "./components/Destaques";
import ProductsSession from "./components/ProductsSession";
import BuyPerCatergory from "./components/BuyPerCategory";

function App() {
  return (
    <>
      <TopBar />
      <Slide />
      <Destaques />
      <ProductsSession />
      <BuyPerCatergory />
    </>
  );
}

export default App;
