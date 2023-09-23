import { useEffect } from "react";
import { useDispatch} from "react-redux";
import {potsActivities} from "../../redux/actions"
import CardActivities from "../cardActivities/CardActivities";
import "./Activities.css";

const Activities = ({ actividades }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(potsActivities());
    }, [dispatch]);
    return (
        <div className="containerActivities">
            <div className="containeractivities">
                <h1 className="texth2">Actividades</h1>
                <div className="cardsActvidad">
                {
                    actividades.map(({ id, name, dificult, duration, season, Countries, autor }) => (
                        
                        <CardActivities
                            key={id}
                            id={id}
                            name={name}
                            dificult={dificult}
                            duration={duration}
                            season={season}
                            Countries={Countries}
                            autor={autor}
                             />
                    ))
                }
                </div>
            </div>
            <div className="referenciPhoto">Foto de <a href="https://unsplash.com/es/@kalenemsley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kalen Emsley</a> en <a href="https://unsplash.com/es/fotos/mgJSkgIo_JI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>

    );
}
export default Activities;