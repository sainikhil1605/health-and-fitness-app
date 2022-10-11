import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Classes from "./pages/classes";
import Home from "./pages/home";
import PricesAndPlans from "./pages/pricesAndPlans";
import Trainers from "./pages/trainers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/personalTrainers" element={<Trainers />} />
        <Route path="/priceAndPlans" element={<PricesAndPlans />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
