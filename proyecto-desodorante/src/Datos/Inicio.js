import React, { useState } from 'react';

import Axe from '../img/Desodorantes/Axe.webp';
import Ego from '../img/Desodorantes/Ego.webp';
import OBAO from '../img/Desodorantes/OBAO.webp';
import Nivea from '../img/Desodorantes/Nivea.webp';
import DolceGabbana from '../img/Desodorantes/DolceGabbana.webp';
import OldSpice from '../img/Desodorantes/OldSpice.webp';

function Inicio() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchText, setSearchText] = useState('');

  const Inicio = [
    {
    
      name: 'Desodorante Spray 150 ml Excite - Axe',
      brand: 'Axe',
      duration: '48 horas',
      fragrance: 'Explosión de frescura',
      price: 100,
      image: Axe,
    },
    {
      id: 2,
      name: 'Desodorante Ego Alfa en Aerosol 150 ml',
      brand: 'Ego',
      duration: '24 horas',
      fragrance: 'Amaderada con notas de geranio',
      price: 60,
      image: Ego,
    },
    {
      id: 3,
      name: 'Desodorante Roll-on Obao Tattoo 2.0 Antimanchas',
      brand: 'Obao',
      duration: '48 horas',
      fragrance: 'Intensa',
      price: 40,
      image: OBAO,
    },
    {
      id: 4,
      name: 'Nivea Men Desodorante Antitranspirante Hombre Fresh Ice Spray, 150ml',
      brand: 'Nivea',
      duration: '48 horas',
      fragrance: 'Frescura helada con notas cítricas',
      price: 90,
      image: Nivea,
    },
    {
      id: 5,
      name: 'Dolce & Gabbana Perfume para Hombre - 1 x 4.2 onzas',
      brand: 'Dolce & Gabbana',
      duration: '24 horas',
      fragrance: 'Elegante con toques de madera y especias',
      price: 1200,
      image: DolceGabbana,
    },
    {
      id: 6,
      name: 'Old Spice Antiperspirant Spray, 150ml',
      brand: 'Old Spice',
      duration: '48 horas',
      fragrance: 'Frescura intensa con notas especiadas',
      price: 80,
      image: OldSpice,
    },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Filtrar productos según el texto de búsqueda
  const filteredProducts = Inicio.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: 'url("../img/fondo.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="container mt-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', padding: '20px' }}>
        <h1 className="text-center mb-4">APARTADO DE DESODORANTES</h1>

 {/*  //aqui es donde realizo mis busquedas */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card text-center">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <button
                      className="btn btn-primary"
                      onClick={() => openModal(product)}
                    >
                      Más detalles
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">No se encontraron productos.</div>
          )}
        </div>
      </div>

      {/* aqui puse los detalles de donde puedo buscar 
       */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{ maxWidth: '300px', marginBottom: '20px' }}
                />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Característica</th>
                      <th>Detalle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Marca</td>
                      <td>{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td>Duración</td>
                      <td>{selectedProduct.duration}</td>
                    </tr>
                    <tr>
                      <td>Fragancia</td>
                      <td>{selectedProduct.fragrance}</td>
                    </tr>
                    <tr>
                      <td>Precio</td>
                      <td>${selectedProduct.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
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

export default Inicio;
