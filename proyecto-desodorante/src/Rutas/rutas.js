import React from 'react'
import Inicio from '../Datos/Inicio';
import Tabla from '../Datos/Tabla';
import opcion1 from '../Datos/opcion1';
import {Router, Route } from 'react-router-dom';


function rutas() {
  return (
    <>
        <Inicio />
        <Tabla />
        <opcion1/>
    </>
  ); 
}

export default rutas;
