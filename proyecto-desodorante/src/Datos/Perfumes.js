import React from 'react';

function Perfumes() {
  const perfumes = [
    { id: 1, name: 'Aqua di gio', image: 'proyecto-desodorante/src/Imagenes/aqua di gio.jpg', details: 'Detalles del Perfume 1' },
    { id: 2, name: 'eros versace', image: 'proyecto-desodorante/src/Imagenes/perfume versace eros.webp', details: 'Detalles del Perfume 2' },
    { id: 3, name: 'sauvage dior', image: 'proyecto-desodorante/src/Imagenes/sauvage dior.webp', details: 'Detalles del Perfume 3' },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Perfumes</h1>
      <div className="row">
        {perfumes.map((perfume) => (
          <div className="col-md-4 mb-4" key={perfume.id}>
            <div className="card text-center">
              <img src={perfume.image} className="card-img-top" alt={perfume.name} />
              <div className="card-body">
                <h5 className="card-title">{perfume.name}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => alert(perfume.details)}
                >
                  Más detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Perfumes;