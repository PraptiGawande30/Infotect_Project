import React, { useContext } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const deliveryFee = 2;

  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const total = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className='multi-fields'>
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>

        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />

        <div className='multi-fields'>
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>

        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code' required />
          <input type="text" placeholder='Country' required />
        </div>

        <input type="text" placeholder='Phone' required />
      </div>

      <div className="place-order-right">
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
            <button type="submit" onClick={() => navigate('/')}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
