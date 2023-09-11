import { useState, useEffect } from "react";
import { useDispatch} from 'react-redux';
import { getString, countriesAll } from "../../redux/actions";
import { Link } from "react-router-dom";
import '../Nav/Nav.css';
const SearchBar=()=>{
    const dispatch = useDispatch();
    const [string, setString]=useState('');
    const [cont, setCont]= useState(false);
    useEffect(()=>{
        if(string === ''){
            dispatch(countriesAll())
        }else{
            dispatch(getString(string))
        }
    },[string])
    

    const handleChange=(event)=>{
        setString(event.target.value)
        setCont(true);
        if(event.target.value === '' && cont === true){
            setCont(false);
        }
    }

    
    return (
        <div>
           
               
            <Link to='/home'><input type='search' className={cont===false? "searchDesabled": "searchActive"} onClick={handleChange} onChange={handleChange} value={string}/></Link>
            
        </div>
     );
}
export default SearchBar;