import { useContext, useState } from "react";
import background from "../assets/shop_background.jpg";
import "../styles/checkout.css";
import { Link } from "react-router-dom";
import { Product } from "../types/products";
import { CartContext } from "../context/Cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { env } from "../env";

const Checkout = () => {
  const { cartItems, getCartTotal, setOrderData } = useContext(CartContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAdress, setStreetAdress] = useState("");
  const [town, setTown] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const stripe = env.VITE_STRIPE_PUBLIC_KEY
    ? loadStripe(env.VITE_STRIPE_PUBLIC_KEY)
    : loadStripe(
        "pk_test_51OMAwiLuXgBa7HeX6ag39VWuPm3kqf0IkbBiPjW7FHf6cLH8T1otXULcY8DvnPvbYOqOTNuGIweVE2qxhnbn0kqj006GpmLxO6"
      );

  const orderData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: streetAdress,
    city: town,
    postalCode: zipCode,
    country: country,
    phone: phone,
    cartItems: cartItems,
    status: "Pending",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const handleSubmit = async () => {
    const body = {
      cartItems,
      orderData,
    };

    const header = {
      "Content-Type": "application/json",
    };

    setOrderData(orderData);

    //put orderData in localStorage
    localStorage.setItem("orderData", JSON.stringify(orderData));

    const response = await fetch(
      "https://logbook-backend.vercel.app/payments/create-checkout-session",
      {
        method: "POST",
        headers: header,
        body: JSON.stringify(body),
      }
    );

    const responseData = await response.json();

    const stripe = await loadStripe(env.VITE_STRIPE_PUBLIC_KEY);
    if (!stripe) {
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: responseData.sessionId,
    });

    if (error) {
      console.error("Error redirecting to checkout:", error);
    }
  };

  return (
    <div className="checkout">
      <article
        className="shop_accueil"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <h2>Checkout</h2>
        <div className="shop_accueil_2">
          <Link to="/">
            <p className="shop_accueil_text">Home &gt;</p>
          </Link>
          <Link to="/shop">
            <p className="shop_accueil_text">Checkout</p>
          </Link>
        </div>
      </article>
      <Elements stripe={stripe}>
        <div className="checkout-page">
          <section className="checkout-form">
            <h2>Billing Details</h2>
            <form action="/create-checkout-session" method="POST">
              <div className="checkout-form-1">
                <div className="checkout-form-1-1">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="checkout-form-1-2">
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="checkout-form-2">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="checkout-form-3">
                <label htmlFor="country">Country*</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="checkout-form-4">
                <label htmlFor="streetAdress">Street Address*</label>
                <input
                  type="text"
                  id="streetAdress"
                  name="streetAdress"
                  value={streetAdress}
                  onChange={(e) => setStreetAdress(e.target.value)}
                />
              </div>
              <div className="checkout-form-5">
                <label htmlFor="town">Town / City*</label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                />
              </div>
              <div className="checkout-form-6">
                <label htmlFor="zipCode">Zip Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className="checkout-form-7">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="checkout-form-8">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </form>
          </section>
          <section className="product">
            <h2>Product</h2>
            {cartItems.map((item: Product, key: number) => {
              return (
                <div key={key} className="products-list-checkout">
                  <div className="product-item-checkout">
                    <p className="text--item">{item.title}</p>
                    <p>x {item.quantity}</p>
                    <p>{item.price * item.quantity} €</p>
                  </div>
                </div>
              );
            })}
            <div className="total">
              <p>Total</p>
              <p>{getCartTotal()} €</p>
            </div>
            <div className="checkout-button">
              <button
                type="button"
                onClick={async () => {
                  await handleSubmit();
                }}
              >
                Place Order
              </button>
            </div>
          </section>
        </div>
      </Elements>
    </div>
  );
};

export default Checkout;
