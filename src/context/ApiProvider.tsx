import axios from "axios";
import { ApiContext } from "./ApiContext";
import { useState } from "react";
import { Product } from "../types/products";
import { Category } from "../types/category";

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product[]>([]);
  const [productDetails, setProductDetails] = useState<Product>({} as Product);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const BASE_URL = "https://dummyjson.com";

  const getAllProducts = async () => {
    const res = await axios.get(BASE_URL + "/products?limit=100");
    setProduct(res.data.products);
    return res.data.products;
  };

  const getOneProduct = async (id: string) => {
    const res = await axios.get(BASE_URL + `/products/${id}`);
    setProductDetails(res.data);
    return res.data;
  };

  const getCategories = async () => {
    const res = await axios.get(BASE_URL + "/products/categories");
    setCategories(res.data);
    return res;
  };

  const getProductsByCategory = async (name: string) => {
    const res = await axios.get(BASE_URL + `/products/category/${name}`);
    setRelatedProducts(res.data.products);
    return res.data.products;
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
        productDetails,
        relatedProducts,
        getAllProducts,
        getOneProduct,
        getCategories,
        getProductsByCategory,
        getProductsBySearch,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}