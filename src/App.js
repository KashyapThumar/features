import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/pages/header/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/pages/footer/Footer";
import Breadcrumb from "./components/pages/breadCrumb/BreadCrumb";
import Product from "./components/pages/products/product/Product";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Routes>
        <Breadcrumb />
      </div>
      <Footer />
    </div>
  );
}

export default App;
