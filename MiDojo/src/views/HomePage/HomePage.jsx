import React from 'react';
import { Parallax } from 'react-parallax';
import './HomePage.css';

const HomePage = ({ image }) => {
    return (
        <div className="parallax-container">
            <Parallax blur={10} bgImage={image} bgImageAlt="Imagen-tres" strength={200}>
                <div className="container">
                    <img src={image} alt="Imagen-tres" className='imagen-tres' /> 
                </div>
            </Parallax>
        </div>
    );
};

export default HomePage;
