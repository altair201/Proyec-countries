import React from "react";
import Cards from "../cards/cards";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, continentCard, getCountryActivities, restartError } from "../../redux/actions";
import "./AllCards.css";


const AllCards = ({ countries, actividades }) => {
    const dispatch = useDispatch();
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(0);
    const errorForm = useSelector((state) => state.errorForm);
    const [saveError, setsaveError] = useState("")
    const [reset, setReset] = useState({
        continentSelect: "T",
        orderSelect: "",
        actividad: ""
    })
   
    const newPageCount = Math.ceil(countries.length / itemsPerPage);

    
    useEffect(() => {
        if (reset.continentSelect !== "") {
          dispatch(continentCard(reset.continentSelect));
        }
        if (reset.actividad !== "") {
            dispatch(getCountryActivities(reset.actividad));
        }
        if (reset.orderSelect !== "") {
          dispatch(orderCards(reset.orderSelect));
        }
    }, [reset.continentSelect, reset.orderSelect, reset.actividad]);


    useEffect(() => {
        setPageCount(newPageCount);
        if (errorForm !== '') {

            setsaveError(errorForm)
            dispatch(restartError());
        }
    }, [errorForm, countries]);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const resetSelects = () => {
        setReset({
            continentSelect: "T",
            orderSelect: "PR",
            actividad: ""
        })
        
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, countries.length);
    const countriesToDisplay = countries.slice(startIndex, endIndex);

    const tempOrder = countriesToDisplay.length !== countries.length
    useEffect(() => {
        if (tempOrder) {
            setCurrentPage(0)
        }
    }, [countries.length]);
    const handleOrder = (event) => {
        setReset({
            ...reset,
            orderSelect: event.target.value
        })
        
    }
    const handleContinent = (event) => {
        setReset({
            ...reset,
            continentSelect: event.target.value
        })
        
        
    }
    const handleAllCountries = () => {
        resetSelects();

    };
    const handleActivities = (event) => {
        setReset({
            ...reset,
            actividad: event.target.value
        });
       
        
    }

    return (
        <div className="containerprincipal">
            <div className="containerFilter">
                <div className="containerModFil">
                    <button onClick={handleAllCountries} >ALL Countries</button>
                    <select value={reset.continentSelect} onChange={handleContinent}>
                        <option value="T">Seleccione</option>
                        <option value="North America">Norte America</option>
                        <option value="South America">Sur America</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                    <select value={reset.orderSelect} onChange={handleOrder}>
                        <option value="PR">Predeterminado</option>
                        <option value="OR">Orden Alfabetico</option>
                        <option value="A">Ascendente</option>
                        <option value="D">Decendente</option>
                        <option value="P">Población</option>
                    </select>
                    <select value={reset.actividad} onChange={handleActivities}>
                        <option value="">Seleccione</option>
                        {actividades.slice().sort((a, b) => a.name.localeCompare(b.name)).map((actividad) => (
                            <option key={actividad.id} value={actividad.id}>{actividad.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="containerAllCards">

                {
                    saveError !== "" && countries.length === 0 ? <div>{saveError}</div> : countriesToDisplay.map(({ id, name, image, continent, capital, subregion, area, population, coatOfArms, Activities }) => (
                        <Cards
                            key={id}
                            id={id}
                            name={name}
                            image={image}
                            continent={continent}
                            capital={capital}
                            subregion={subregion}
                            area={area}
                            population={population}
                            coatOfArms={coatOfArms}
                            actividad={Activities}
                        />
                    ))
                }
            </div>
            <div className="containerPag">
                {
                    currentPage === 0 ? <button className="desabilitar" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}> </button > : <button className="flecha2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}> </button >

                }
                <div>
                    Página {currentPage + 1} de {pageCount}
                </div>
                {
                    currentPage === pageCount - 1 ? <button className="desabilitar " onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount - 1}></button> : <button className="flecha" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 25}> </button >

                }
            </div>
                <div className="referenciPhoto">Foto de <a href="https://unsplash.com/es/@lucabravo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Bravo</a> en <a href="https://unsplash.com/es/fotos/O453M2Liufs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    )

}

export default AllCards;