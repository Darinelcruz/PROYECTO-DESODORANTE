import React from 'react'
import Inicio from '../Datos/Inicio';
<<<<<<< HEAD
import Rexona from '../caracteristicas/Rexona';
import {Routes, Route } from 'react-router-dom';
import OBAO from '../caracteristicas/OBAO';
import Axe from '../caracteristicas/Axe';
import Ego from '../caracteristicas/Ego';
=======
import Tabla from '../Datos/Tabla';
import {Router, Route } from 'react-router-dom';
>>>>>>> 5845c664d3a0e5e9bb4769bcb6c1f1dceebdf62f


function rutas() {
  return (
<<<<<<< HEAD
    <Routes>
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/Rexona' element={<Rexona/>} />
        <Route path='/OBAO' element={<OBAO/>} />
        <Route path='/Axe' element={<Axe/>} />
        <Route path='/Ego' element={<Ego/>} />



    </Routes>
=======
    <>
        <Inicio />
        <Tabla />
    </>
>>>>>>> 5845c664d3a0e5e9bb4769bcb6c1f1dceebdf62f
  );
}

export default rutas;
