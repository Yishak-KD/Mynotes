import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
// Cart Component

function Cart({ cart, total, removeFromCart }) {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
            </ul>
            <div>Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart,
    total: state.total
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: product => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: product.id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);