import { useState } from "react";
import firebase from "firebase/compat/app";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
