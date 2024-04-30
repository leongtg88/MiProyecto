import React from 'react';
import './pageOne.css'
import Logo from '../../assets/images/Logo 2022 110 px.png';
const PageOne = () => {
    return (
        <div className="container">
            <div className="container-form">
                <div class="container-header">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h2 className="tituloUno">Web App de Progreso de Nivel</h2>
                    <p className="parrafoUno">Bienvenidos al entrenamiento</p>
                </div>
            <form className="input-form">
                <label>
                    <input className='inputsForm' placeholder='Full Name' />
                </label>
            <br />
                <label>
                    <input className='inputsForm' placeholder='Day of birthday' type='date' />    
                </label> 
            <br />
                <label>
                    <input className='inputsForm' placeholder='Address'/>
                </label>
            <br />
                <label>
                    <input className='inputsForm' placeholder='Mail' />
                </label>
            <br />
                <label>
                <input  className='inputsForm' placeholder=' Phone'/>
                </label>
            <br />
            </form>
            <div className="buttonContainer">
            <a href="pageTwo.jsx">  <button className="customButton">Vamos!</button></a>
            </div>
                
            </div>
        </div>
    );
};

export default PageOne;
