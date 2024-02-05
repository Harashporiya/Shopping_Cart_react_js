import { useProduct } from './ProductContext';
import { Navbar } from './Navbar';
import './cart.css';
import { Footer } from './Footer';

const Cart = () => {
  const handleCheckOut = () => {
    const totalAmount = cartProductDetails.reduce((total, item) => {
      return total + item.count * item.price;
    }, 0);
    alert(`Checkout Done!! Payment Successful of $ ${totalAmount}`);
  };

  const handelApply = () => {
    alert('Invalid Coupon Code');
  };

  const { cartProductDetails } = useProduct();

  return (
    <div>
      <Navbar />
      <div id="product_cart">
        {cartProductDetails.length > 0 ? (
          cartProductDetails.map((item) => (
            <div id="details_1" key={item.id}>
              <div>
                <img id="img_1" src={item.image} alt={item.title} />
              </div>
              <div id="description">
                <h1>{item.title}</h1>
                <h2>Price : $ {item.price}</h2>
                <h2>Quantity : {item.count}</h2>
                <h2>Total : $ {item.count * item.price}</h2>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
      <div id="order">
        <p id="summary">Order Summary</p>
        <input id="input" type="text" placeholder="Enter Coupon Code here" /><br /><br />
        <button id="apply" onClick={handelApply}>Apply Coupon</button><br /><br />
        <button id="check" onClick={handleCheckOut}>Continue to Checkout</button><br /><br />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
