const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

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

app.get("/api/perfumes", (req, res) => {
  res.json(perfumes);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.use("/images", express.static("images"));
