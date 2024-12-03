import React from 'react';
import Inicio from '../Datos/Inicio';
import Tabla from '../Datos/Tabla';
import Perfumes from '../Datos/Perfumes';
import { Routes, Route } from 'react-router-dom';

function Rutas() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />

      <Route path='/tabla' element={<Tabla />} />

      <Route path='/perfumes' element={<Perfumes />} />
    </Routes>
  );
}

export default Rutas;