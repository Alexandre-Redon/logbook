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
  const { cartItems, getCartTotal } = useContext(CartContext);

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

  // const validationOrderSchema = z.object({
  //   firstName: z.string().min(2, "Too short").max(50, "Too long"),
  //   lastName: z.string().min(2, "Too short").max(50, "Too long"),
  //   companyName: z.optional(z.string()),
  //   country: z.string(),
  //   streetAdress: z.string(),
  //   town: z.string(),
  //   zipCode: z.string(),
  //   phone: z.string(),
  //   email: z.string().email(),
  //   order: z.object({
  //     id: z.number(),
  //     name: z.string(),
  //     price: z.number(),
  //     products: z.array(
  //       z.object({
  //         id: z.string(),
  //         title: z.string(),
  //         description: z.string(),
  //         price: z.number(),
  //         discountPercentage: z.number(),
  //         rating: z.number(),
  //         stock: z.number(),
  //         brand: z.string(),
  //         category: z.string(),
  //         thumbnail: z.string(),
  //         images: z.array(z.string()),
  //         quantity: z.number(),
  //       })
  //     ),
  //     status: z.string(),
  //     created_at: z.string(),
  //     updated_at: z.string(),
  //   }),
  // });

  const handleSubmit = async () => {
    console.log("cartItems", cartItems);

    //const stripe = await loadStripe(env.VITE_STRIPE_PUBLIC_KEY);

    // body with product in cart
    const body = {
      cartItems,
    };

    const header = {
      "Content-Type": "application/json",
    };

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
