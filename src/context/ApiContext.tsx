import { createContext } from "react";
import { Product } from "../types/products";
import { Category } from "../types/category";
import { Cart } from "../types/cart";

type DefaultValues = {
  getAllProducts: () => void;
  getOneProduct: (id: string) => void;
  getCart: () => void;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  getCategories: () => void;
  getProductsByCategory: (id: string) => void;
  getProductsBySearch: (search: string) => void;
  product: Product[];
  categories: Category[];
  cart: Cart[];
};

const defaultValues: DefaultValues = {
  getAllProducts: () => {},
  getOneProduct: () => {},
  getCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getCategories: () => {},
  getProductsByCategory: () => {},
  getProductsBySearch: () => {},
  product: [],
  categories: [],
  cart: [],
};

export const ApiContext = createContext(defaultValues);
