import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import IconClose from '@components/IconClose';
import iconArrowClose from '@icons/icon_close.png';
import '@styles/CartItem.scss';

const CartItem = ({ product, indexValue }) => {
    // const { removeFromCart } = useContext(AppContext);
    // const handleRemove = product => {
    //     removeFromCart(product)
    // };

    return (        
        <div className="shopping-cart">
            <figure>
                <img src={product.images} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <IconClose indexValue={indexValue} />
            {/* <img src={iconArrowClose} alt="close" onClick={() => handleRemove(product)} /> */}
        </div>    
    );
}

export default CartItem;