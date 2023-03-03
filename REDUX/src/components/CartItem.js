import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <li>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
        </li>
    );
};

export default CartItem;
