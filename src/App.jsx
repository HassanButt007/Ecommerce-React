import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Header from "./GlobalComponents/Header";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./GlobalComponents/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="single-product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
