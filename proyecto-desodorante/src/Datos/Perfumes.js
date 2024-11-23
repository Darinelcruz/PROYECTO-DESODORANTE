import React from 'react';

import AquaDiGio from '../imagenes/aqua_di_gio.jpg';
import PerfumeVersaceEros from '../imagenes/perfume_versace_eros.webp';
import SauvageDior from '../imagenes/sauvage_dior.webp';

function Perfumes() {
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

  const openDetailsPage = (perfume) => {
    const newWindow = window.open('', '_blank');

    newWindow.document.write(`
      <html>
        <head>
          <title>${perfume.name}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
              padding: 20px;
              background-color: #f4f4f4; /* Fondo gris claro */
            }
            table {
              border-collapse: collapse;
              width: 60%;
              margin-top: 20px;
              background-color: white;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            th, td {
              border: 1px solid #ddd;
              text-align: left;
              padding: 8px;
            }
            th {
              background-color: #007bff;
              color: white;
            }
            img {
              max-width: 300px;
              margin-bottom: 20px;
            }
            .btn {
              padding: 10px 20px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin-top: 20px;
            }
            .btn:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <h1>${perfume.name}</h1>
          <img src="${perfume.image}" alt="${perfume.name}" />
          <table>
            <tr>
              <th>Característica</th>
              <th>Detalle</th>
            </tr>
            <tr>
              <td>Marca</td>
              <td>${perfume.brand}</td>
            </tr>
            <tr>
              <td>Duración</td>
              <td>${perfume.duration}</td>
            </tr>
            <tr>
              <td>Fragancia</td>
              <td>${perfume.fragrance}</td>
            </tr>
            <tr>
              <td>Precio</td>
              <td>$${perfume.price}</td>
            </tr>
          </table>
          <button class="btn" onclick="window.close()">Regresar a la sección de perfumes</button>
        </body>
      </html>
    `);
  };

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
                    onClick={() => openDetailsPage(perfume)}
                  >
                    Más detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfumes;

