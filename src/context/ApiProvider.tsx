import axios from "axios";
import { ApiContext } from "./ApiContext";
import { useState } from "react";
import { Product } from "../types/products";
import { Category } from "../types/category";
import { Cart } from "../types/cart";

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const BASE_URL = "https://dummyjson.com";

  const getAllProducts = async () => {
    const res = await axios.get(BASE_URL + "/products?limit=100");
    setProduct(res.data.products);
    return res.data.products;
  };

  const getOneProduct = async (id: string) => {
    const res = await axios.get(BASE_URL + `/products/${id}`);
    setProduct(res.data);
    return res;
  };

  const getCart = async () => {
    const res = await axios.get("/cart");
    setCart(res.data);
    return res;
  };

  const addToCart = async (id: string) => {
    const res = await axios.post("/cart", id);
    setCart(res.data);
    return res;
  };

  const removeFromCart = async (id: string) => {
    const res = await axios.delete(`/cart/${id}`);
    setCart(res.data);
    return res;
  };

  const getCategories = async () => {
    const res = await axios.get(BASE_URL + "/products/categories");
    setCategories(res.data);
    return res;
  };

  const getProductsByCategory = async (name: string) => {
    const res = await axios.get(`/categories/${name}`);
    setProduct(res.data);
    return res;
  };

  const getProductsBySearch = async (search: string) => {
    const res = await axios.get(`/search/${search}`);
    setProduct(res.data);
    return res;
  };

  return (
    <ApiContext.Provider
      value={{
        product,
        categories,
        cart,
        getAllProducts,
        getOneProduct,
        getCart,
        addToCart,
        removeFromCart,
        getCategories,
        getProductsByCategory,
        getProductsBySearch,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
