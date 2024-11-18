import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

import "./../img/Desodorant.css";

import cosa from "../img/Desodorantes/Rexona.webp";
import jaja from "../img/Desodorantes/Axe.webp";
import OBAO from "../img/Desodorantes/OBAO.webp";

function Inicio() {
  const [buscarParams] = useSearchParams();
  const [buscaTexto] = buscarParams.get("search") || "";
  const [localTexto, setLocalTexto] = useState(buscaTexto);

  const producto = [
    {
      nombre: "Rexona",
      imagen: <img src={cosa} id="fot" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/Rexona">
            Mas informacion...
          </Link>{" "}
        </li>
      ,
    },

    {
      nombre: "Axe",
      imagen: <img src={jaja} id="caso" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/Axe">
            Mas informacion...
          </Link>{" "}
        </li>
      ,
    },
    {
      nombre: "OBAO",
      imagen: <img src={OBAO} id="jiji" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/OBAO">
            Mas informacion...
          </Link>{" "}
        </li>
      ,
    },
  ];

  const filtrar = localTexto
    ? producto.filter((pro) =>
        pro.nombre.toLowerCase().includes(localTexto.toLocaleLowerCase())
      )
    : producto;

    const buscador = (e) => {setLocalTexto(e.target.value)}

  return (
    <div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="buscar"
          aria-label="Search"
          value={localTexto}
          onChange={buscador}
        />
      </form>
      <table>
        <tbody>
          <tr>
            {filtrar.map((pro, index) => (
              <td key={index}> {pro.imagen}</td>
            ))}
          </tr>
          <tr>
            {filtrar.map((pro, index) => (
              <td key={index}> {pro.nombre}</td>
            ))}
          </tr>
          <tr>
            {filtrar.map((pro, index) => (
              <td key={index}> {pro.direccion}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Inicio;
