import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import ErrorPage from "./pages/ErrorPage";
import Home from "../src/pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Header from "./components/Header/Header";
import StoreBenefits from "./components/StoreBenefits/StoreBenefits";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <StoreBenefits />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
