import { Product } from "./products";

export interface Cart {
  id: string;
  product: Product;
  name: string;
  price: number;
  quantity: number;
}
