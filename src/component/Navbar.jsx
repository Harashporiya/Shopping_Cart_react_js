import './navbar.css';
import { useProduct } from './ProductContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export function Navbar() {
  const navigate = useNavigate();
  const {add} = useProduct();

  return (
    <>
      <div id="navbar">
        <div>
          <p>
            <b id="app">Shopping App</b>
          </p>
        </div>
        <div id="nav">
          <ul>
            <li id="home" onClick={() => navigate("/home")}>
              Home
            </li>
            <li id="shop" onClick={() => navigate("/shop")}>
              SHOP
            </li>
            <li id="about" onClick={() => navigate("/about")}>
              ABOUT
            </li>
            <li id="contact" onClick={() => navigate("/contact")}>
              CONTACT
            </li>
          </ul>
        </div>
        <div onClick={() => navigate("/cart")} className="zero">
          <span id="zero">{add}</span>
          <FaShoppingCart id="cart_icon" />
        </div>
      </div>
    </>
  );
}
