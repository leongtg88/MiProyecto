import React from 'react';
import "./HorarioClases.css";

const HorarioClases = () => {
    return (
<>
    <div className="table-container">
        <h2 className="Titulo-Horario">Horario de Clases</h2>
        <br/>

        <table>
            <tr>
                <th>Hora</th>  
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sábados</th>
            </tr>
            <tr>
                
            <th className="hora">9:00 a <br/> 10:00  pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>27 de Febrero</td>
            </tr>
            <tr>
            
                <th className="hora">10:00 a <br/> 11:00  pm</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>27 de Febrero</td>
            </tr>

            <tr>
            
                    <th className="hora">4:00 a <br/> 5:00  pm</th>
                    <td>El Millón</td>
                    <td>27 de Febrero</td>
                    <td>El Millón</td>
                    <td>27 de Febrero</td>
                    <td>Clase Privada</td>
                    <td>27 de Febrero</td>
            </tr>
            <tr>
                <th className="hora">5:00 a <br/> 6:00 pm</th>
                <td>El Millón</td>
                <td>27 de Febrero</td>
                <td>El Millón</td>
                <td>27 de Febrero</td>
                <td>Clase Privada</td>
                <td>27 de Febrero</td>
            </tr>
            <tr>
                <th className="hora">8:20 a <br/> 9:20 pm</th>
                <td>27 de Febrero</td>
                <td></td>
                <td>27 de Febrero</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
        </table>
    </div>
    </>
    );
    };

    export default HorarioClases;