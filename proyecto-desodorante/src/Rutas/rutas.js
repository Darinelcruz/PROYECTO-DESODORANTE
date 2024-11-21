import React from 'react'
import Inicio from '../Datos/Inicio';
import Tabla from '../Datos/Tabla';
import Perfumes from '../Datos/Perfumes';
import { Routes, Route } from 'react-router-dom';


function rutas() {
  return (
    <Routes>

      <Route path='/Tabla' element= {<Tabla/>} />
      <Route path='/perfumes' element= {<Perfumes/>} />

    </Routes>
  );
}

export default rutas;
