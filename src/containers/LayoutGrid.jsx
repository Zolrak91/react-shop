import React from 'react';
import '../styles/LayoutGrid.scss';

const LayoutGrid = ({children}) => {
    return (
        <div className="LayoutGrid">
            {children}
        </div>
    );
}

export default LayoutGrid;