import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context
import { CartProvider } from "./context/CartContext";
//components
import ErrorPage from "./pages/ErrorPage";
import Home from "../src/pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Header from "./components/Header/Header";
import StoreBenefits from "./components/StoreBenefits/StoreBenefits";
import Footer from "./components/Footer/Footer";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/preguntas-frecuentes" element={<QuestionPage />} />
          </Routes>
          <StoreBenefits />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
