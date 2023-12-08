import React, { useContext, useEffect } from "react";
import background from "../assets/shop_background.jpg";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { ApiContext } from "../context/ApiContext";
import { Product } from "../types/products";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <section className="cart">
      <article
        className="shop_accueil"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h2>Cart</h2>
        <div className="shop_accueil_2">
          <Link to="/">
            <p className="shop_accueil_text">Home &gt;</p>
          </Link>
          <Link to="/cart">
            <p className="shop_accueil_text">Cart</p>
          </Link>
        </div>
      </article>
      <article className="cart_container">
        <div className="cart-product-colomn">
          <ul className="cart-colomn-template">
            <li className="colomn-template">Product</li>
            <li className="colomn-template">Price</li>
            <li className="colomn-template">Quantity</li>
            <li className="colomn-template">Subtotal</li>
            <li className="colomn-template"></li>
          </ul>
          {cartItems.map((item: Product, key: number) => {
            return (
              <div key={key}>
                <div className="cart_item">
                  <p className="text-image-item">
                    <img
                      src={item.images[0]}
                      className="item-img"
                      alt={item.title}
                    />
                    {item.title}
                  </p>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <p>{item.price * item.quantity} €</p>
                  <div className="add-remove-cart">
                    <button
                      className="button-more-less"
                      onClick={() => addToCart(item.id)}
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="button-more-less"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart_total">
          <div className="cart-area">
            <h3 className="cart-total-title">Cart Totals</h3>
            <div className="cart-total-totalprice">
              <p className="cart-total-total">Total</p>
              <p className="cart-total-price"> {getCartTotal()} €</p>
            </div>
            <Link className="cart-total-checkout" to="/checkout">
              <p>Check Out</p>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Cart;
