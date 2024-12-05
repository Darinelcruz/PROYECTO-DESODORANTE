import React, { useState, useEffect } from "react";

function Perfumes() {
  const [selectedPerfume, setSelectedPerfume] = useState(null);
  const [perfumes, setPerfumes] = useState([]);
  const [nuevoPerfume, setNuevoPerfume] = useState({
    name: "",
    brand: "",
    fragrance: "",
    duration: "",
    price: "",
    image: "http://localhost:3001/images/default.jpg",
  });
  const [editIndex, setEditIndex] = useState(null);

  // Obtener los perfumes desde el servidor Express
  useEffect(() => {
    fetch("http://localhost:3001/api/perfumes") // Cambia el puerto si tu backend usa otro
      .then((response) => response.json())
      .then((data) => setPerfumes(data))
      .catch((error) => console.error("Error fetching perfumes:", error));
  }, []);

  // Manejo del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoPerfume({ ...nuevoPerfume, [name]: value });
  };

  const agregarOEditarPerfume = async () => {
    if (
      !nuevoPerfume.name ||
      !nuevoPerfume.brand ||
      !nuevoPerfume.fragrance ||
      !nuevoPerfume.duration ||
      !nuevoPerfume.price
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (editIndex !== null) {
      // Editar un perfume existente
      const perfumesActualizados = [...perfumes];
      perfumesActualizados[editIndex] = nuevoPerfume;
      setPerfumes(perfumesActualizados);
      setEditIndex(null);
    } else {
      // Agregar un nuevo perfume al servidor
      try {
        const response = await fetch("http://localhost:3001/api/perfumes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoPerfume),
        });

        if (response.ok) {
          const perfumeAgregado = await response.json();
          setPerfumes((prevPerfumes) => [...prevPerfumes, perfumeAgregado]);
        } else {
          alert("Error al agregar el perfume.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }

    setNuevoPerfume({
      name: "",
      brand: "",
      fragrance: "",
      duration: "",
      price: "",
      image: "http://localhost:3001/images/default.jpg",
    });
  };

  const eliminarPerfume = (index) => {
    const nuevosPerfumes = perfumes.filter((_, i) => i !== index);
    setPerfumes(nuevosPerfumes);
  };

  const editarPerfume = (index) => {
    setNuevoPerfume(perfumes[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Perfumes</h1>

        {/* Formulario para agregar/editar perfumes */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              placeholder="Nombre del perfume"
              value={nuevoPerfume.name}
              onChange={manejarCambio}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Marca:</label>
            <input
              type="text"
              name="brand"
              placeholder="Marca"
              value={nuevoPerfume.brand}
              onChange={manejarCambio}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Fragancia:</label>
            <input
              type="text"
              name="fragrance"
              placeholder="Fragancia"
              value={nuevoPerfume.fragrance}
              onChange={manejarCambio}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Duración:</label>
            <input
              type="text"
              name="duration"
              placeholder="Duración"
              value={nuevoPerfume.duration}
              onChange={manejarCambio}
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Precio:</label>
            <input
              type="number"
              name="price"
              placeholder="Precio"
              value={nuevoPerfume.price}
              onChange={manejarCambio}
              style={inputStyle}
            />
          </div>

          <button onClick={agregarOEditarPerfume} style={buttonStyle}>
            {editIndex !== null ? "Guardar Cambios" : "Agregar Perfume"}
          </button>
        </div>

        {/* Mostrar perfumes */}
        <div className="row">
          {perfumes.map((perfume, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card text-center">
                <img src={perfume.image} className="card-img-top" alt={perfume.name} />
                <div className="card-body">
                  <h5 className="card-title">{perfume.name}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedPerfume(perfume)}
                  >
                    Más detalles
                  </button>
                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => editarPerfume(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => eliminarPerfume(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPerfume && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          role="dialog"
          onClick={() => setSelectedPerfume(null)}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title">{selectedPerfume.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedPerfume(null)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedPerfume.image}
                  alt={selectedPerfume.name}
                  style={{ maxWidth: "100%", marginBottom: "20px" }}
                />
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Marca</th>
                      <td>{selectedPerfume.brand}</td>
                    </tr>
                    <tr>
                      <th>Duración</th>
                      <td>{selectedPerfume.duration}</td>
                    </tr>
                    <tr>
                      <th>Fragancia</th>
                      <td>{selectedPerfume.fragrance}</td>
                    </tr>
                    <tr>
                      <th>Precio</th>
                      <td>${selectedPerfume.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedPerfume(null)}
                >
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

// Estilos
const inputStyle = {
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "100%",
  boxSizing: "border-box",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};

export default Perfumes;