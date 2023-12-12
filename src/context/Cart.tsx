import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../types/products";


type DefaultValues = {
  cartItems: Product[];
  addToCart: (item: number) => void;
  removeFromCart: (item: number) => void;
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

  const addToCart = (item: number) => {
    const isItemInCart = cartItems.find((cartItem : Product) => cartItem.id === item);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem : Product) =>
          cartItem.id === item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: number) => {
    const isItemInCart = cartItems.find(
      (cartItem: Product) => cartItem.id === item
    );

    console.log(isItemInCart);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem : Product) => cartItem.id !== item));
    } else {
      setCartItems(
        cartItems.map((cartItem: Product) =>
          cartItem.id === item
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
