import React from "react";
import { Link } from "react-router-dom";

function OBAO() {
  return (
    <div>
      <table>
        <tr>
       <center><h3>caracteristicas del desodorante Obao Tattoo 2.0</h3></center> 
          <table>
        <thead>
            <tr>
                <th>Características</th>
                <th></th>
                <th></th>
                <th>Descripción</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marca</td>
                <td></td>
                <th></th>

                <td>Garnier</td>
            </tr>
            <tr>
                <td>Tipo</td>
                <td></td>
                <th></th>

                <td>Roll On</td>
            </tr>
            <tr>
                <td>Función</td>
                <td></td>
                <th></th>

                <td>Antitranspirante</td>
            </tr>
            <tr>
                <td>Edición</td>
                <td></td>
                <td></td>

                <td>Tattoo 2.0</td>
            </tr>
            <tr>
                <td>Propiedad </td>
                <td></td>
                <td></td>

                <td>Antimanchas</td>
            </tr>
            <tr>
                <td>Duración</td>
                <td></td>
                <td></td>

                <td>48 horas</td>
            </tr>
            <tr>
                <td>Aroma</td>
                <td></td>
                <td></td>

                <td>Fresco y masculino</td>
            </tr>
            <tr>
                <td>Uso</td>
                <td></td>
                
                <td>Hombres</td>
            </tr>
        </tbody>
    </table>
        </tr>
        <div class="d-grid gap-2">
  <Link to="/Inicio" className='btn btn-primary' role="button">Regresar</Link></div>
        <li class="buton"></li> 
      </table>
    </div>
    
  );
}


export default OBAO;
