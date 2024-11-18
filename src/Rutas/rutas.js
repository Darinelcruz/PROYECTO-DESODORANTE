import React from 'react'
import Inicio from '../Datos/Inicio';
import {Routes, Route } from 'react-router-dom';


function rutas() {
  return (
    <Routes>
        <Route path='/inicio' element={<Inicio/>} />
        
    </Routes>
  );
}

export default rutas;
