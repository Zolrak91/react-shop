import React, { useContext } from 'react';
import btnAddToCart from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss'

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
        console.log(item);
    };

    return (        
        <div className="product-card">
            <img src={product.images} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={btnAddToCart} alt=""/>
                </figure>
            </div>
        </div>            
    );
};

export default ProductItem;