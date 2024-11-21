import React from 'react';

function PerfumeSauvageDior() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sauvage Dior</h1>
      <h3>Marca: Christian Dior</h3>
      <p>Duración: 10-12 horas</p>
      <p>Fragancia: Amaderada y especiada</p>
      <p>Precio: $180 USD</p>
      <button onClick={() => window.close()} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Regresar a la sección de perfumes
      </button>
    </div>
  );
}

export default PerfumeSauvageDior;