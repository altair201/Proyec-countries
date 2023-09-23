import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="containerinicio">
      <div className="incioingre">
      <p>"Explora el Mundo" es un proyecto individual que tiene como objetivo crear una aplicación web interactiva que permita a los usuarios explorar información sobre diferentes países y actividades turísticas relacionadas con esos países. La aplicación utilizará una API de países para obtener datos actualizados y detallados sobre cada destino, y permitirá a los usuarios buscar, seleccionar y crear sus propias actividades.</p>
      <Link className="btninicio" to={"/home"}>
        <button className="btninicio" > Ingresar </button>
      </Link>
      </div>
    </div>
  )
}

export default Inicio;