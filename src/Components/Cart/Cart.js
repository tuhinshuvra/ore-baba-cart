import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let itemPriceTotal = 0;
    let shippingChargeTotal = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        itemPriceTotal = itemPriceTotal + product.price * product.quantity;
        shippingChargeTotal = shippingChargeTotal + product.shipping;
    }

    // const priceReducer = (previous, current) => (previous + current.price);
    // cartPriceTotal = cart.reduce(priceReducer, 0);

    // quantity = cart.reduce((pre, cur) => pre + cur.quantity, 0);
    // itemPriceTotal = cart.reduce((pre, cur) => (pre + cur.price), 0);
    // shippingChargeTotal = cart.reduce((pre, cur) => pre + cur.shipping, 0);


    const tax = (itemPriceTotal * (.1)).toFixed(2);
    const grandTotal = parseFloat(itemPriceTotal) + shippingChargeTotal + parseFloat(tax);

    return (
        <div className='cart_info'>
            <h3>Order Summary</h3>
            <h4>Selected Items: {quantity}</h4>
            <h4>Total Price: ${itemPriceTotal}</h4>
            <h4>Total Shipping Charge: ${shippingChargeTotal}</h4>
            <h4>Tax: {itemPriceTotal / 10} </h4>
            <h3>Grand Total: ${grandTotal}</h3>
            <button>Clear Cart</button>
            <button>Order Review</button>
        </div>
    );
};

export default Cart;