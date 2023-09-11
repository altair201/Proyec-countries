import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    const { pathname } = useLocation()
    return (
        <div className="editnav">
            <div>
                <SearchBar />
            </div>
            <div className="btnNav">
                
                <Link to='/about'><button className={pathname === '/about'? "btndisabled" : "btn"} >About</button></Link>
                
                <Link to='/home'><button className={pathname === '/home'? "btndisabled" : "btn"} >Home</button></Link>
                
                <Link to='/formactivities'><button className={pathname === '/formactivities'? "btndisabled" : "btn"}>Crear Actividad</button></Link>
                <Link to='/activities'><button className={pathname === '/activities'? "btndisabled" : "btn"}>Actividades</button></Link>
                
            </div>
        </div>
    );
}
export default Nav;