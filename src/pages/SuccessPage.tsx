import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";
import "../styles/successPage.css";

const SuccessPage = () => {
  const { clearCart } = useContext(CartContext);
  const removeCart = () => {
    localStorage.clear();
    clearCart();
  };

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
