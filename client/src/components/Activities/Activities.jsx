import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {potsActivities} from "../../redux/actions"
import CardActivities from "../cardActivities/CardActivities";
import "./Activities.css";

const Activities = ({ actividades }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(potsActivities());
    }, [dispatch]);
    console.log(actividades);
    return (
        <div className="containerActivities">
            <div className="containeractivities">
                <h1 className="texth2">Actividades</h1>
                <div className="cardsActvidad">
                {
                    actividades.map(({ id, name, dificult, duration, season, Countries }) => (

                        <CardActivities
                            key={id}
                            name={name}
                            dificult={dificult}
                            duration={duration}
                            season={season}
                            Countries={Countries} />
                    ))
                }
                </div>
            </div>
            
        </div>

    );
}
export default Activities;