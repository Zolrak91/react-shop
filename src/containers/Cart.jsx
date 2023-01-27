import React from 'react';
import '../styles/Cart.scss';
import CartItem from '../components/CartItem';

const Cart = () => {
    return (        
        <aside class="product-detail">
            <div class="title-container">
                <img src="./icons/flechita.svg" alt="arrow"/>
                <p class="title">My order</p>
            </div>    
            <div class="my-order-content">
                <CartItem/>
                <CartItem/>
                <CartItem/>                
                <div class="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>$560.00</p>
                </div>    
                <button class="primary-button">
                    Checkout
                </button>
            </div>
        </aside>        
    );
}

export default Cart;