import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconArrowClose from '@icons/icon_close.png';

const IconClose = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);
    const handleRemove = product => {
        removeFromCart(product)
    };

    return (
        <img src={iconArrowClose} alt="close" onClick={() => handleRemove(product)} />
    );
}

export default IconClose;