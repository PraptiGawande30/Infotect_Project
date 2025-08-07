import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom'; // ✅ missing import added

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate(); // ✅ now works

  const calculateSubtotal = () => {
    return food_list.reduce((total, item) => {
      const quantity = cartItems[item._id] || 0;
      return total + item.price * quantity;
    }, 0);
  };

  const deliveryFee = 2;
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantities</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div className='cart-items-title cart-items-item' key={item._id}>
                <img src={item.image} alt={item.name} width="50" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${(item.price * quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            );
          } else return null;
        })}
      </div>

      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className='cart-total-details'>
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO LOGIN</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
