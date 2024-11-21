import React from 'react';

function PerfumeAquaDiGio() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Aqua di Gio</h1>
      <h3>Marca: Giorgio Armani</h3>
      <p>Duración: 6-8 horas</p>
      <p>Fragancia: Fresca y cítrica</p>
      <p>Precio: $120 USD</p>
      <button onClick={() => window.close()} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
        Regresar a la sección de perfumes
      </button>
    </div>
  );
}

export default PerfumeAquaDiGio;
