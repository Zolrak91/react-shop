import React from 'react';
import '../styles/MyOrder.scss';
import Order from '../components/Order';
import CartItem from '../components/CartItem';
import IconClose from '../components/IconClose';

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <Order/>                
                    <CartItem>
                        <IconClose/>
                    </CartItem>                  
                    <CartItem>
                        <IconClose/>
                    </CartItem>                  
                    <CartItem>
                        <IconClose/>
                    </CartItem>                  
                    <CartItem>
                        <IconClose/>
                    </CartItem>                  
                </div>
            </div>
        </div>
    );
}

export default MyOrder;