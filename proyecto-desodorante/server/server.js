const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos simulados (perfumes)
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

// API: Ruta principal
app.get('/api', (req, res) => {
  res.send('¡Bienvenido a la API de Perfumes!');
});

// API: Obtener perfumes
app.get('/api/perfumes', (req, res) => {
  res.json(perfumes);
});

// Sirviendo los archivos estáticos de React
const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

// Cualquier ruta no definida en la API se redirige al frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Manejo de rutas no existentes en la API
app.use((req, res) => {
  res.status(404).send('La ruta solicitada no existe.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});