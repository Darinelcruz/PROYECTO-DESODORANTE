import React from 'react'
import { Link } from 'react-router-dom'


function Rexona() {
  return (
    <div>
       <div>
      <table>
        <tr>
       <center><h3>caracteristicas del desodorante Rexona Forest Antitranspirante para Hombre en Roll On Protección y Frescura 50 mL</h3></center> 
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

                <td>Rexona</td>
            </tr>
            <tr>
                <td>Tipo</td>
                <td></td>
                <th></th>

                <td>Roll on</td>
            </tr>
            <tr>
                <td>Función</td>
                <td></td>
                <th></th>

                <td>Antitranspirante</td>
            </tr>
            <tr>
                <td>Presentacion</td>
                <td></td>
                <td></td>

                <td>50 ml</td>
            </tr>
            <tr>
                <td>Fragancia </td>
                <td></td>
                <td></td>

                <td>Forest</td>
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

                <td>Fresco y Herbal</td>
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
    
    </div>    
  )
}

export default Rexona