import React from 'react';
import { useParams } from 'react-router-dom';

const detalles = {
  1: { name: 'Axe Excite', brand: 'Axe', price: 100, description: 'Frescura explosiva' },
  2: { name: 'Ego Alfa', brand: 'Ego', price: 60, description: 'Notas amaderadas y geranio' },
  3: { name: 'Obao Tattoo', brand: 'Obao', price: 40, description: 'Antimanchas con fragancia intensa' },
};

function DesodoranteDetalle() {
  const { id } = useParams();
  const producto = detalles[id];

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div className="container mt-5">
      <h1>{producto.name}</h1>
      <p><strong>Marca:</strong> {producto.brand}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Descripción:</strong> {producto.description}</p>
    </div>
  );
}

export default DesodoranteDetalle;
