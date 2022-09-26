import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='header_link'>
                <a href="/order">Order</a>
                <a href="/order_review">Order Review</a>
                <a href="/manage_inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;