import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import iconArrowClose from '@icons/icon_close.png';

const IconClose = ({ indexValue }) => {
    const { removeFromCart } = useContext(AppContext);
    const handleRemove = index => {
        removeFromCart(index)
    };

    return (
        <img src={iconArrowClose} alt="close" onClick={() => handleRemove(indexValue)} />
    );
}

export default IconClose;