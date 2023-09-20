
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ id, name, image, continent, coatOfArms }) => {

    return (
        <div className="containerCards">
            <Link className="link" to={`/detail/${id}`}>
                
                    <img className="img1" src={image} alt="" />
                    <img className="img2" src={coatOfArms} alt="" />
                    <h3 className="h3">{name}</h3>
                    <h3 >{continent}</h3>
                
            </Link>
        </div>
    )
}
export default Cards;