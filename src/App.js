import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./Rutas/rutas";
import Menu from './Inicio/Menu';

function App() {
  return (
    <Router>
    <div className="container-fluid">
      <Menu/>
      <Rutas/>
    </div>
    </Router>
  );
} 

export default App;