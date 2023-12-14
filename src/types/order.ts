import { Product } from "./products";

export interface Order {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  cartItems: Product[];
  status: string;
  created_at: string;
  updated_at: string;
}
