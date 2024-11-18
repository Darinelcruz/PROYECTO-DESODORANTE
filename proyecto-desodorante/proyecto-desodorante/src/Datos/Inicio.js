import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

import "./../img/Desodorant.css";

import cosa from "../img/Desodorantes/Rexona.webp";
import jaja from "../img/Desodorantes/Axe.webp";
import OBAO from "../img/Desodorantes/OBAO.webp";
import Ego from "../img/Desodorantes/Ego.webp";

function Inicio() {
  const [buscarParams] = useSearchParams();
  const [buscaTexto] = buscarParams.get("search") || "";
  const [localTexto, setLocalTexto] = useState(buscaTexto);

  const producto = [


    {
      nombre: "Desodorante Rexona",
      imagen: <img src={cosa} id="fot" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/Rexona">
          
          <button
  type="button"
  to="/Rexona"
  style={{ backgroundColor: "gray", color: "black", border: "2", padding: "5px 5px" }}
>
  Mas informacion
</button>

          </Link>{" "}
        </li>
      ,
    },



    {
      nombre: "Desodorante Axe",
      imagen: <img src={jaja} id="caso" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/Axe">
          <button
  type="button"
  to="/Axe"
  style={{ backgroundColor: "gray", color: "black", border: "2", padding: "5px 5px" }}
>
  Mas informacion
</button>          </Link>{" "}
        </li>
      ,
    },



    {
      nombre: "Desodorante OBAO",
      imagen: <img src={OBAO} id="jiji" />,
      direccion: 
        <li class="buton">
          <Link class="buton" to="/OBAO">
          <button
  type="button"
  to="/OBAO"
  style={{ backgroundColor: "gray", color: "black", border: "2", padding: "5px 5px" }}
>
  Mas informacion
</button>          </Link>
        </li>
      ,
    },

    {
        nombre: "Desodorante Ego",
        imagen: <img src={Ego} id="jojo" />,
        direccion: 
          <li class="buton">
            <Link class="buton" to="/Ego">
            <button
    type="button"
    to="/Ego"
    style={{ backgroundColor: "gray", color: "black", border: "2", padding: "5px 5px" }}
  >
    Mas informacion
  </button>          </Link>
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
