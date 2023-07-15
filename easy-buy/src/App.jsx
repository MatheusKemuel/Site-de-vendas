import "./App.css";
import { TopBar } from "./components/TopBar";
import { Slide } from "./components/Slide"
import Destaques from "./components/Destaques";

function App() {
  return (
    <>
      <TopBar />
      <Slide />
      <Destaques />
    </>
  );
}

export default App;
