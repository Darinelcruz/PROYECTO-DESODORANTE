const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos de ejemplo
const perfumes = [
  {
    id: 1,
    name: 'Aqua di gio',
    brand: 'Giorgio Armani',
    duration: '8 horas',
    fragrance: 'Cítrica y amaderada',
    price: 1200,
  },
  {
    id: 2,
    name: 'Eros Versace',
    brand: 'Versace',
    duration: '10 horas',
    fragrance: 'Fresca y especiada',
    price: 1500,
  },
];

// Rutas
app.get('/api/perfumes', (req, res) => {
  res.json(perfumes);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});