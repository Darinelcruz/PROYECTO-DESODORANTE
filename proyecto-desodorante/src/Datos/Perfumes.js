import React, { useState, useEffect } from 'react';

function Perfumes() {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [perfumes, setPerfumes] = useState([]);

  // Obtener los perfumes desde el servidor Express
  useEffect(() => {
    fetch('http://localhost:3001/api/perfumes')
      .then((response) => response.json())
      .then((data) => setPerfumes(data));
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
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
                    onClick={() => setSelectedPerfume(perfume)}
                  >
                    Más detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPerfume && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          role="dialog"
          onClick={() => setSelectedPerfume(null)}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title">{selectedPerfume.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedPerfume(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedPerfume.image}
                  alt={selectedPerfume.name}
                  style={{ maxWidth: '100%', marginBottom: '20px' }}
                />
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Marca</th>
                      <td>{selectedPerfume.brand}</td>
                    </tr>
                    <tr>
                      <th>Duración</th>
                      <td>{selectedPerfume.duration}</td>
                    </tr>
                    <tr>
                      <th>Fragancia</th>
                      <td>{selectedPerfume.fragrance}</td>
                    </tr>
                    <tr>
                      <th>Precio</th>
                      <td>${selectedPerfume.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedPerfume(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfumes;
