import React, { useState, useEffect } from "react";

function Tabla() {
  const [datos, setDatos] = useState([]); // Estado para los datos de perfumes
  const [nuevoDesodorante, setNuevoDesodorante] = useState({
    marca: "",
    tipo: "",
    fragancia: "",
    caracteristicas: "",
  });
  const [editIndex, setEditIndex] = useState(null); // Índice del desodorante en edición

  // Carga inicial de perfumes desde el servidor
  useEffect(() => {
    const obtenerPerfumes = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/perfumes");
        if (response.ok) {
          const data = await response.json();
          setDatos(data); // Actualiza el estado con los datos del backend
        } else {
          console.error("Error al obtener los perfumes.");
        }
      } catch (error) {
        console.error("Error al cargar los perfumes:", error);
      }
    };

    obtenerPerfumes();
  }, []);

 // Agregar o modificar un desodorante
 const agregarDesodorante = async () => {
    if (
      nuevoDesodorante.marca &&
      nuevoDesodorante.tipo &&
      nuevoDesodorante.fragancia &&
      nuevoDesodorante.caracteristicas
    ) {
      if (editIndex !== null) {
        // Actualizar desodorante existente
        const desodoranteActualizado = {
          ...datos[editIndex],
          name: nuevoDesodorante.marca,
          brand: nuevoDesodorante.tipo,
          fragrance: nuevoDesodorante.fragancia,
          duration: nuevoDesodorante.caracteristicas,
        };
  
        try {
          const response = await fetch(
            `http://localhost:3001/api/perfumes/${desodoranteActualizado.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(desodoranteActualizado),
            }
          );
  
          if (response.ok) {
            setDatos((prevDatos) =>
              prevDatos.map((item, index) =>
                index === editIndex ? desodoranteActualizado : item
              )
            );
            setEditIndex(null);
          } else {
            alert("Error al actualizar el perfume.");
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
        }
      } else {
        // Crear nuevo desodorante
        const nuevoPerfume = {
          name: nuevoDesodorante.marca,
          brand: nuevoDesodorante.tipo,
          fragrance: nuevoDesodorante.fragancia,
          duration: nuevoDesodorante.caracteristicas,
          price: 0, // Asignamos un valor por defecto (puedes cambiar esto si es necesario)
          image: "http://localhost:3001/images/default.jpg", // Asignamos una imagen predeterminada
        };
  
        try {
          const response = await fetch("http://localhost:3001/api/perfumes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoPerfume),
          });
  
          if (response.ok) {
            const perfumeAgregado = await response.json();
            setDatos((prevDatos) => [...prevDatos, perfumeAgregado]);
          } else {
            alert("Error al agregar el perfume.");
          }
        } catch (error) {
          console.error("Error en la solicitud:", error);
        }
      }
  
      // Resetear formulario
      setNuevoDesodorante({
        marca: "",
        tipo: "",
        fragancia: "",
        caracteristicas: "",
      });
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };
  
  

  // Manejar eliminación de desodorante del estado
  const eliminarDesodorante = async (index) => {
    const id = datos[index]?.id; // Obtener ID del perfume
    if (id) {
      try {
        const response = await fetch(
          `http://localhost:3001/api/perfumes/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setDatos((prevDatos) => prevDatos.filter((_, i) => i !== index)); // Actualizar estado local
        } else {
          alert("Error al eliminar el perfume.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    }
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevoDesodorante({ ...nuevoDesodorante, [name]: value });
  };

  const editarDesodorante = (index) => {
    const desodorante = datos[index];
    setNuevoDesodorante({
      marca: desodorante.name,
      tipo: desodorante.brand,
      fragancia: desodorante.fragrance,
      caracteristicas: desodorante.duration,
    });
    setEditIndex(index);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Gestión de Desodorantes</h2>

      <div style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Marca:</label>
          <input
            type="text"
            name="marca"
            placeholder="Marca"
            value={nuevoDesodorante.marca}
            onChange={manejarCambio}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            placeholder="Tipo"
            value={nuevoDesodorante.tipo}
            onChange={manejarCambio}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Fragancia:</label>
          <input
            type="text"
            name="fragancia"
            placeholder="Fragancia"
            value={nuevoDesodorante.fragancia}
            onChange={manejarCambio}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Características:</label>
          <input
            type="text"
            name="caracteristicas"
            placeholder="Características"
            value={nuevoDesodorante.caracteristicas}
            onChange={manejarCambio}
            style={inputStyle}
          />
        </div>

        <button onClick={agregarDesodorante} style={buttonStyle}>
          {editIndex !== null ? "Modificar" : "Agregar"}
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Tipo</th>
            <th>Fragancia</th>
            <th>Características</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((desodorante, index) => (
            <tr key={desodorante.id || index}>
              <td>{desodorante.name}</td>
              <td>{desodorante.brand}</td>
              <td>{desodorante.fragrance}</td>
              <td>{desodorante.duration}</td>
              <td>
                <button
                  onClick={() => editarDesodorante(index)}
                  style={actionButtonStyle}
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarDesodorante(index)}
                  style={actionButtonStyle}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

const tableStyle = {
  width: "100%",
  textAlign: "left",
  borderCollapse: "collapse",
  marginTop: "20px",
  border: "1px solid #ddd",
};

const actionButtonStyle = {
  backgroundColor: "#f1f1f1",
  color: "#333",
  border: "1px solid #ddd",
  padding: "6px 12px",
  marginRight: "5px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Tabla;
