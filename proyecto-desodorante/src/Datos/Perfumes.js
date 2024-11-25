import React, { useState } from 'react';

import AquaDiGio from '../imagenes/aqua_di_gio.jpg';
import PerfumeVersaceEros from '../imagenes/perfume_versace_eros.webp';
import SauvageDior from '../imagenes/sauvage_dior.webp';

function Perfumes() {
  const [selectedPerfume, setSelectedPerfume] = useState(null);

  const perfumes = [
    {
      id: 1,
      name: 'Aqua di gio',
      brand: 'Giorgio Armani',
      duration: '8 horas',
      fragrance: 'Cítrica y amaderada',
      price: 1200,
      image: AquaDiGio,
    },
    {
      id: 2,
      name: 'Eros Versace',
      brand: 'Versace',
      duration: '10 horas',
      fragrance: 'Fresca y especiada',
      price: 1500,
      image: PerfumeVersaceEros,
    },
    {
      id: 3,
      name: 'Sauvage Dior',
      brand: 'Dior',
      duration: '12 horas',
      fragrance: 'Amaderada y aromática',
      price: 1800,
      image: SauvageDior,
    },
  ];

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
