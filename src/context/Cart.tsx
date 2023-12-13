import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../types/products";


type DefaultValues = {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

const defaultValues: DefaultValues = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
};

export const CartContext = createContext(defaultValues);

interface Props {
  children: ReactNode;
}
export const CartProvider = ({ children } : Props) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : []
  );

  // if add to cart, check if item is already in cart
  // if yes, increment item.quantity
  // if no, add item to cart and set item.quantity to 1
  const addToCart = (item: Product) => {
    const isItemInCart = cartItems.find(
      (cartItem: Product) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem: Product) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: Product) => {
    const isItemInCart = cartItems.find(
      (cartItem: Product) => cartItem.id === item.id
    );

    console.log(isItemInCart);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem : Product) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem: Product) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total: number, item: Product) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
