import { createContext } from "react";
import { Product } from "../types/products";
import { Category } from "../types/category";
import { Cart } from "../types/cart";

type DefaultValues = {
  getAllProducts: () => void;
  getOneProduct: (id: string) => void;
  getCategories: () => void;
  getProductsByCategory: (id: string) => void;
  getProductsBySearch: (search: string) => void;
  product: Product[];
  productDetails: Product;
  relatedProducts: Product[];
  categories: Category[];
};

const defaultValues: DefaultValues = {
  getAllProducts: () => {},
  getOneProduct: () => {},
  getCategories: () => {},
  getProductsByCategory: () => {},
  getProductsBySearch: () => {},
  product: [],
  productDetails: {} as Product,
  relatedProducts: [],
  categories: [],
};

export const ApiContext = createContext(defaultValues);
