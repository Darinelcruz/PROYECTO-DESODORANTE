import React, { useState } from "react";

function Tabla() {
    const [datos, setDatos] = useState([]);
    const [nuevoDesodorante, setNuevoDesodorante] = useState({
        marca: "",
        tipo: "",
        fragancia: "",
        caracteristicas: ""
    });
    const [editIndex, setEditIndex] = useState(null); 

    const agregarDesodorante = () => {
        if (nuevoDesodorante.marca && nuevoDesodorante.tipo && nuevoDesodorante.fragancia && nuevoDesodorante.caracteristicas) {
            if (editIndex !== null) {
                const datosActualizados = [...datos];
                datosActualizados[editIndex] = nuevoDesodorante;
                setDatos(datosActualizados);
                setEditIndex(null); 
            } else {
                setDatos([...datos, nuevoDesodorante]);
            }
            setNuevoDesodorante({ marca: "", tipo: "", fragancia: "", caracteristicas: "" }); // Limpiar campos
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    const eliminarDesodorante = (index) => {
        const nuevosDatos = datos.filter((_, i) => i !== index);
        setDatos(nuevosDatos);
    };

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoDesodorante({ ...nuevoDesodorante, [name]: value });
    };

    const editarDesodorante = (index) => {
        const desodorante = datos[index];
        setNuevoDesodorante(desodorante);
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

                <button
                    onClick={agregarDesodorante}
                    style={buttonStyle}
                >
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
                        <tr key={index}>
                            <td>{desodorante.marca}</td>
                            <td>{desodorante.tipo}</td>
                            <td>{desodorante.fragancia}</td>
                            <td>{desodorante.caracteristicas}</td>
                            <td>
                                <button onClick={() => editarDesodorante(index)} style={actionButtonStyle}>Editar</button>
                                <button onClick={() => eliminarDesodorante(index)} style={actionButtonStyle}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {datos.length > 0 && (
                <button
                    style={{ marginTop: "20px", ...buttonStyle }}
                    onClick={() => alert("Datos guardados exitosamente.")}
                >
                    Guardar
                </button>
            )}
        </div>
    );
}

const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box"
};

const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px"
};

const tableStyle = {
    width: "100%",
    textAlign: "left",
    borderCollapse: "collapse",
    marginTop: "20px",
    border: "1px solid #ddd"
};

const actionButtonStyle = {
    backgroundColor: "#f1f1f1",
    color: "#333",
    border: "1px solid #ddd",
    padding: "6px 12px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer"
};

export default Tabla;