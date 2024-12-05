const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Base de datos simulada
let perfumes = [
  {
    id: 1,
    name: "Aqua di gio",
    brand: "Giorgio Armani",
    duration: "8 horas",
    fragrance: "Cítrica y amaderada",
    price: 1200,
    image: "http://localhost:3001/images/aqua_di_gio.jpg",
  },
  {
    id: 2,
    name: "Eros Versace",
    brand: "Versace",
    duration: "10 horas",
    fragrance: "Fresca y especiada",
    price: 1500,
    image: "http://localhost:3001/images/perfume_versace_eros.webp",
  },
  {
    id: 3,
    name: "Sauvage Dior",
    brand: "Dior",
    duration: "12 horas",
    fragrance: "Amaderada y aromática",
    price: 1800,
    image: "http://localhost:3001/images/sauvage_dior.webp",
  },
];

// Ruta para obtener todos los perfumes
app.get("/api/perfumes", (req, res) => {
  res.json(perfumes);
});

// Ruta para agregar un nuevo perfume
app.post("/api/perfumes", (req, res) => {
  const { name, brand, duration, fragrance, price, image } = req.body;
  console.log(req.body); // Verifica lo que está recibiendo el servidor
  
  if (!name || !brand || !duration || !fragrance || !price) {
    return res.status(400).json({ error: "Todos los campos excepto la imagen son obligatorios." });
  }

  const newId = perfumes.length ? Math.max(...perfumes.map((p) => p.id)) + 1 : 1;
  const imagenFinal = image || "http://localhost:3001/images/default.jpg";

  const nuevoPerfume = {
    id: newId,
    name,
    brand,
    duration,
    fragrance,
    price,
    image: imagenFinal,
  };

  perfumes.push(nuevoPerfume);
  res.status(201).json(nuevoPerfume);
});



// Middleware para servir imágenes
app.use("/images", express.static("images"));

// Middleware de manejo de errores para rutas no existentes
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada." });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
