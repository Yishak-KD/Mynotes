import React from 'react'
import { connect } from 'react-redux'

function ProductList({ products, cart, total }) {
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span>{product.name} - ${product.price}</span>
                        <button onClick={() => cart(product)}>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch({ type: 'ADD_TO_CART', payload: { id: product.id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)