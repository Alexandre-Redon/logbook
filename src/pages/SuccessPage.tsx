import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../styles/successPage.css";

const SuccessPage = () => {
  const { clearCart } = useContext(CartContext);
  const removeCart = () => {
    localStorage.clear();
    clearCart();
  };

  const orderData = localStorage.getItem("orderData");

  const firebaseConfig = {
    apiKey: "AIzaSyA6bwGgwel-Z8fEjxwV54OjDdjq6VJqBis",
    authDomain: "e-commerce-36f59.firebaseapp.com",
    projectId: "e-commerce-36f59",
    storageBucket: "e-commerce-36f59.appspot.com",
    messagingSenderId: "992782694628",
    appId: "1:992782694628:web:b1acea4ab86fc1e99a94f1",
    measurementId: "G-LTWB875KK3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Add a new document with a generated id.
  const addOrder = async () => {
    if (orderData) {
      await addDoc(collection(db, "orders"), JSON.parse(orderData));
    } else {
      console.error("No order data");
    }
  };

  useEffect(() => {
    addOrder();
    localStorage.removeItem("orderData");
  }, []);

  return (
    <div className="container">
      <div className="printer-top"></div>

      <div className="paper-container">
        <div className="printer-bottom"></div>

        <div className="paper">
          <div className="main-contents">
            <div className="success-icon">&#10004;</div>
            <div className="success-title">Payment Complete</div>
            <div className="success-description">
              Thank you for completing the payment! You will shortly receive an
              email of your payment.
            </div>
            <div className="order-details">
              <div className="order-number-label">Transaction ID</div>
              <div className="order-number">123456789</div>
              <div className="complement">Thank You!</div>
            </div>
            <Link to="/" onClick={() => removeCart()}>
              <p className="back-to-home">Back to Home</p>
            </Link>
          </div>
          <div className="jagged-edge"></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
