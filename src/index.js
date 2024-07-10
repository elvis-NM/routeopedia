import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import CryptoDetails from "./CryptoDetails";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import CreateProduct from "./Pages/CreateProduct";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="product">
          <Route path="" element={<Product />}></Route>
          <Route path="list" element={<ProductList />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
          <Route path="details" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    <div className="px-4"></div>
    <Footer />
  </div>
);
