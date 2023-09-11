
import "../Activities/Activities.css";
const CardActivities = ({id, dificult, duration, name, season, Countries}) => {
    function difficultyStars(difficulty) { 
        return"⭐".repeat(difficulty); 
    }
    
    let pais=[];
    if(Countries){
        pais=Countries.map((country) => country.name)
    }
   
    
    return (
        <div key={id} className="activitycard">
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