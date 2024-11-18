import React from 'react'
import Inicio from '../Datos/Inicio';
import Rexona from '../caracteristicas/Rexona';
import {Routes, Route } from 'react-router-dom';
import OBAO from '../caracteristicas/OBAO';
import Axe from '../caracteristicas/Axe';
import Ego from '../caracteristicas/Ego';


function rutas() {
  return (
    <Routes>
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/Rexona' element={<Rexona/>} />
        <Route path='/OBAO' element={<OBAO/>} />
        <Route path='/Axe' element={<Axe/>} />
        <Route path='/Ego' element={<Ego/>} />



    </Routes>
  );
}

export default rutas;
