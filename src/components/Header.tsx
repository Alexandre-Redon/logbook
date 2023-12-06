import { NavLink } from "react-router-dom";
import "../styles/home.css";
import logo from "../assets/logo2.jpg";
import heart from "../assets/heart.png";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import search from "../assets/search-interface-symbol.png";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="item">
        <NavLink to="/" className="desktopMenuItemListItem">
          Home
        </NavLink>
        <NavLink to="/shop" className="desktopMenuItemListItem">
          Shop
        </NavLink>
        <NavLink to="/blog" className="desktopMenuItemListItem">
          Blog
        </NavLink>
        <NavLink to="/contact" className="desktopMenuItemListItem">
          Contact
        </NavLink>
      </div>
      <div className="item">
        <img src={user} className="itemNav" />
        <img src={search} className="itemNav" />
        <img src={heart} className="itemNav" />
        <img src={cart} className="itemNav" />
      </div>
    </nav>
  );
};

export default Header;
