import React from 'react';

function PerfumeErosVersace() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Eros Versace</h1>
      <h3>Marca: Versace</h3>
      <p>Duración: 8-10 horas</p>
      <p>Fragancia: Amaderada y especiada</p>
      <p>Precio: $150 USD</p>
      <button onClick={() => window.close()} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Regresar a la sección de perfumes
      </button>
    </div>
  );
}

export default PerfumeErosVersace;