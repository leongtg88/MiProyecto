import React from 'react';
import './AboutUs.css';

const AboutUs = ({ image }) => {
    return (
        <>
        <div className="container">
        <img src={image} alt="Imagen16" className='imagen16' /> 
        </div>
        <div className='container-about'>
            <h1 className='titulo'>Sobre Nosotros</h1>
            <p className='parrafo-aboutus'>Karate Do en Santo Domingo <br />
                ShitoRyu Inoue-Ha <br /><br />
                Tenemos como finalidad darle a cada niño, joven y adulto, la posibilidad de evolucionar y alcanzar las metas que se propongan dentro de sus capacidades, siempre teniendo en alto el espíritu y trabajando para desarrollar la voluntad para lograrlo. Acompañamos y apoyamos a los practicantes en entender que los obstáculos son desafíos que deben atravesar, que a veces la disciplina puede ser  frustrante a pesar de amar lo que hacemos,  a través de la motivación al logro por merito personal, sin caer en comparación con otros, venciendose así mismos y volvemos éstos, fines últimos del verdadero sentido de la victoria.
                <br />
                <br />
                Queremos promover la preparación de las nuevas generaciones para que aumenten las posibilidades de  mantener los objetivos que se propongan a pesar de los obstáculos que se les presenten ahora y siempre, no darse por vencidos fácilmente y mantener el espíritu de un guerrero  con el que lograrán superarse por medio de la practica del karate.
                <br />
                <br />
                León Trujillo
                <br />
                <br />
                Sensei
            </p>
        </div>
        </>
    );
};

export default AboutUs;
