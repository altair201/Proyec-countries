import { useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import AllCards from './components/AllCards/AllCards'
import Inicio from './components/Inicio/Inicio';
import Nav from './components/Nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { countriesAll, potsActivities } from "./redux/actions";
import Detail from './components/Detail.jsx/Detail';
import FormActivities from './components/FormActivities/FormActivities';
import Activities from './components/Activities/Activities';
import About from './components/about/about';
import UpdatedActi from './components/updateActivities/UpdateActi';

function App( ) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const actividades = useSelector((state) => state.activities);
  const {pathname}=useLocation()
  useEffect(() => {
    if (pathname === '/home') {
      dispatch(countriesAll());
    }
    dispatch(potsActivities());
  }, [dispatch, pathname]);

  return (
    <div>
      {pathname !== '/' && !pathname.startsWith('/detail') && <Nav />}
      
      <Routes>
        <Route path="/home" element={<AllCards countries={countries} actividades={actividades}/>} />
        <Route path="/" element={<Inicio />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/formactivities' element={<FormActivities />}/>
        <Route path='/activities' element={<Activities actividades={actividades} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/activities/:id' element={<UpdatedActi />}/>
      </Routes>

    </div>
  )
}

export default App;

