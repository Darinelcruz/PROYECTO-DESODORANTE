import React from 'react'
import Inicio from '../Datos/Inicio';
import Tabla from '../Datos/Tabla';
import {Router, Route } from 'react-router-dom';


function rutas() {
  return (
    <>
        <Inicio />
        <Tabla />
    </>
  );
}

export default rutas;
