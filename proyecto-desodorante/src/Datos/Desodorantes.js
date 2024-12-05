import React from 'react';
import { Link } from 'react-router-dom';

const desodorantes = [
  { id: 1, name: 'Axe Excite', price: 100 },
  { id: 2, name: 'Ego Alfa', price: 60 },
  { id: 3, name: 'Obao Tattoo', price: 40 },
];

function Desodorantes() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Desodorantes Disponibles</h1>
      <div className="row">
        {desodorantes.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <Link to={`/desodorantes/${item.id}`} className="btn btn-primary">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desodorantes;
