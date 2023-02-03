import React, { useState } from 'react';
import '@styles/ProductItem.scss'
import btnAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const [cart, setCart] = useState([]);

    const handleClick = () => {
        setCart([]);
    };

    return (        
        <div className="product-card">
            <img src={product.images} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={btnAddToCart} alt=""/>
                </figure>
            </div>
        </div>            
    );
}

export default ProductItem;