
import { countriId } from "../../redux/actions";
import {useParams} from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import CardActivities from "../cardActivities/CardActivities";
import { Link } from "react-router-dom";
import "./Detail.css"


const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(countriId(id));
        
    },[dispatch, id])
    const countryId = useSelector((state) => state.countryId);
    
    
    
    return(
        <div className="containerdetail">
            <Link className="btnback" to='/home'><button className="btnback1"></button></Link>
            <div className="containerEvery">
            <div className="imgdetail">
                <img className="img1detail" src={countryId?.image} alt="" />
                <img className="img2detail" src={countryId?.coatOfArms} alt="" />
            </div>
            <div className="infodetail">
                <h3>Nombre: {countryId?.name}</h3>
                <h3>Continente: {countryId?.continent}</h3>
                <h3>Capital: {countryId?.capital}</h3>
                <h3>Población: {countryId?.population}</h3>
                <h3>Area: {countryId?.area}</h3>
                <h3>Subregión: {countryId?.subregion}</h3>
            </div>
            <div className="infoactividades">
                <h2>ACTIVIDADES</h2>
                
                {
                    countryId.Activities&&countryId.Activities.map((activity)=>(
                        <CardActivities key={activity.country_activity.ActivityId}
                        dificult={activity.dificult}
                        duration={activity.duration}
                        name={activity.name}
                        season={activity.season}
                        />
                    ))
                }
                
            </div>
            </div>
        </div>
    )
}
export default Detail;