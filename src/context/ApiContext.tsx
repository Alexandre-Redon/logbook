import { createContext } from "react";
import { Product } from "../types/products";

type DefaultValues = {
  getAllProducts: () => void;
  getOneProduct: (id: string) => void;
  getCategories: () => void;
  getProductsByCategory: (id: string) => void;
  getProductsBySearch: (search: string) => void;
  product: Product[];
  productDetails: Product;
  relatedProducts: Product[];
  categories: string[];
};

const defaultValues: DefaultValues = {
  getAllProducts: () => {},
  getOneProduct: () => {},
  getCategories: () => {},
  getProductsByCategory: () => {},
  getProductsBySearch: () => {},
  product: [] as Product[],
  productDetails: {} as Product,
  relatedProducts: [] as Product[],
  categories: [] as string[],
};

export const ApiContext = createContext(defaultValues);
