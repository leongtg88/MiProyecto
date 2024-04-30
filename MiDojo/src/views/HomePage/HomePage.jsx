import React from 'react';
import { Parallax } from 'react-parallax';
import Image3 from '../../assets/images/header.png';
import './HomePage.css';

const HomePage = () => {
    return (
       
            <Parallax heigth={300} width={300} bgImage={Image3} bgImageAlt="Imagen-tres" strength={600}>
            <div className="container-one"></div>
            </Parallax> 
    
    );
};

export default HomePage;
