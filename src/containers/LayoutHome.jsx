import React from 'react';
import '../styles/LayoutHome.scss';

const LayoutHome = ({children}) => {
    return (
        <div className="LayoutHome">
            {children}
        </div>
    );
}

export default LayoutHome;