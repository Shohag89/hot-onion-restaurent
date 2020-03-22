import React from 'react';
import logo from '../../Image/logo2.png';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
              <button className='sign-up-btn'>Sign up</button>
            <div className='header'>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};

export default Header;