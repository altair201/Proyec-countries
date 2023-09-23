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
      <div className="referenciPhoto">Foto de <a href="https://unsplash.com/es/@farshadrezvanian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Farshad Rezvanian</a> en <a href="https://unsplash.com/es/fotos/Eelegt4hFNc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </div>
    </div>
  )
}

export default Inicio;