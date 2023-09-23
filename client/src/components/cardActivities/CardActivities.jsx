import { useDispatch} from "react-redux";
import "../Activities/Activities.css";
import { deleteActivities } from "../../redux/actions";
import { Link } from "react-router-dom";

const CardActivities = ({id, dificult, duration, name, season, Countries}) => {
    
    const dispatch = useDispatch()
    const onClose =(id)=>{
        dispatch(deleteActivities(id))
    }
    
    function difficultyStars(difficulty) { 
        return"⭐".repeat(difficulty); 
    }
    
    let pais=[];
    if(Countries){
        pais=Countries.map((country) => country.name)
    }
   
    
    return (
        <div key={id} className="activitycard">
            <div className="editBtnsx">
                <Link  to={`/activities/${id}`}><div className="btneditx"></div></Link>
                <button className="deleteAct" onClick={()=>onClose(id)}>X</button>
            </div>
            <h3>{name}</h3>
            <p>Dificultad: {difficultyStars(dificult)}</p>
            <p>Duración: {duration} Horas</p>
            <p>Temporada: {season?.join(", ")}</p>
            {pais.length > 0 &&<div>
            Paises: {pais.length>0 && pais?.join(", ")}           
            </div>}
        </div>
    )
}
export default CardActivities;