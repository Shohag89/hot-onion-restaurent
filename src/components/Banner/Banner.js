import React from 'react';
import banner from '../../Image/bannerbackground.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
             <img src={banner} alt="" width= "100%"/>
        </div>
    );
};

export default Banner;