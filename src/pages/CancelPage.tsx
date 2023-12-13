import { Link } from "react-router-dom";
import "../styles/successPage.css";

const CancelPage = () => {
  

  return (
    <div className="container">
      <div className="printer-top"></div>

      <div className="paper-container">
        <div className="printer-bottom"></div>

        <div className="paper">
          <div className="main-contents-cancel">
            <div className="cancel-icon">&#10006;</div>
            <div className="cancel-title">Payment Canceled</div>
            <div className="cancel-description">
              Unfortunately, your payment has been canceled. If you encountered
              any issues, please try again or contact our support team for
              assistance.
            </div>
            <Link to="/checkout">
              <p className="back-to-home">Back to Checkout</p>
            </Link>
          </div>
          <div className="jagged-edge"></div>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
