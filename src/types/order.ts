import { Product } from "./products";

export interface Order {
  id: number;
  name: string;
  price: number;
  products: Product[];
  status: string;
  created_at: string;
  updated_at: string;
}
