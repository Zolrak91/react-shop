import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import CartItem from '@components/CartItem';
import IconArrow from '@components/IconArrow';
import '@styles/Cart.scss';

const Cart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        let sum = 0;

        state.cart.forEach(item => {
            sum += item.price;
        });
        return sum;
    };

    return (        
        <aside className="product-detail">
            <div className="title-container">
                <IconArrow/>
                <p className="title">My order</p>
            </div>    
            <div className="my-order-content">
                {state.cart.map((item, index) => (
                    <CartItem product={item} key={index} indexValue={index} />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>    
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>        
    );
};

export default Cart;