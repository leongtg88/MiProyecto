import React from 'react';
import './pageOne.css'
import Logo from '../../assets/images/Logo 2022 110 px.png';
const PageOne = () => {
    return (
        <div className="container">
            <h2 className="Titulo-Formulario"> Hola! Sumergete en una nueva era de guerreros modernos!</h2>
            <br />
            <p>En Tosei Gusoku Dojo Club entrenamos para equlibrar una rautina pesada
                y el bien estar de nuestro cuerpo, mente y espíritu.
            </p>
            <div className="container-form">
                <div class="container-header">
                    <img src={Logo} alt="Logo" className="logo" />
                    <h2 className="tituloUno">Formulario de Inscripción</h2>
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
