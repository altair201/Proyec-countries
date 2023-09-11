import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="containerinicio">
      
      <Link className="btninicio" to={"/home"}>
        <div className="btninicio" > Hacer CLICK para continuar</div>
      </Link>
    </div>
  )
}

export default Inicio;