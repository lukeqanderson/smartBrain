import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="w4 h4 ml4">
                <div className="Tilt br2 shadow-2 w4 h4">
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;