import React from 'react';
import { Parallax } from 'react-parallax';
import Image3 from '../../assets/images/header.png';
import './HomePage.css';

const HomePage = () => {
    return (
       
            <Parallax  bgImage={Image3} bgImageAlt="Imagen-tres" strength={600} style={{height:1500} }>
            <div className="container-one" ></div>
            </Parallax> 
    
    );
};

export default HomePage;
