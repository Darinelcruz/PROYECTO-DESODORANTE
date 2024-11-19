import React from 'react'
import { Link } from 'react-router-dom'

function Axe() {
  return (
    <div>
          <div>
      <table>
        <tr>
       <center><h3>caracteristicas del desodorante Axe spray 150 ml excite</h3></center> 
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

                <td>Axe</td>
            </tr>
            <tr>
                <td>Tipo</td>
                <td></td>
                <th></th>

                <td>spray</td>
            </tr>
            <tr>
                <td>Función</td>
                <td></td>
                <th></th>

                <td>Desodorante</td>
            </tr>
            <tr>
                <td>Presentacion</td>
                <td></td>
                <td></td>

                <td>150 ml</td>
            </tr>
            <tr>
                <td>Fragancia </td>
                <td></td>
                <td></td>

                <td>Exite</td>
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

                <td>Amaderado</td>
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

export default Axe