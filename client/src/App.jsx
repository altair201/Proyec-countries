import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import AllCards from './components/allCards/allCards'
import Inicio from './components/Inicio/Inicio';
import Nav from './components/Nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { countriesAll, potsActivities } from "./redux/actions";
import Detail from './components/Detail.jsx/Detail';
import FormActivities from './components/FormActivities/FormActivities';
import Activities from './components/Activities/Activities';

function App( ) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const actividades = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(countriesAll());
    dispatch(potsActivities());
  }, [dispatch]);
  const {pathname}=useLocation()
  const isDetailPage = pathname.startsWith('/detail');
  return (
    <div>
      {pathname !== '/' && !isDetailPage && <Nav />}
      
      <Routes>
        <Route path="/home" element={<AllCards countries={countries} actividades={actividades}/>} />
        <Route path="/" element={<Inicio />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/formactivities' element={<FormActivities />}/>
        <Route path='/activities' element={<Activities actividades={actividades} />}/>


      </Routes>

    </div>
  )
}

export default App;

