import React, { useState } from 'react';
import '@styles/Header.scss';
import iconMenu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav>
            <img src={iconMenu} alt="menu" className="menu"/>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo"/>
                <ul>
                    <li>
                        <a href="/">All</a> 
                    </li>
                    <li>
                        <a href="/">Clothes</a> 
                    </li>
                    <li>
                        <a href="/">Electronics</a> 
                    </li>
                    <li>
                        <a href="/">Furnitures</a>  
                    </li>
                    <li>
                        <a href="/">Toys</a>    
                    </li>
                    <li>
                        <a href="/">Others</a>  
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
                    {/* {toggle && <Menu/>} */}
                    <li className="navbar-shopping-cart">
                        <img src={iconShoppingCart} alt="shopping cart"/>
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
        </nav>
    );
}

export default Header;