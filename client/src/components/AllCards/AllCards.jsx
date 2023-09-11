import React from "react";
import Cards from "../cards/cards";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderCards, continentCard, getCountryActivities } from "../../redux/actions";
import "./AllCards.css";


const AllCards = ({ countries, actividades }) => {
    console.log(countries)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const [pageCount, setPageCount] = useState(1);
    useEffect(() => {
        const newPageCount = Math.ceil(countries.length / itemsPerPage);
        setPageCount(newPageCount);
        setCurrentPage(0)
    }, [countries]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const resetSelects = () => {

        document.getElementById("continentSelect").value = "T";
        document.getElementById("orderSelect").value = "PR";
        document.getElementById("actividad").value = "";
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, countries.length);
    const countriesToDisplay = countries.slice(startIndex, endIndex);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }
    const handleContinent = (event) => {
        dispatch(continentCard(event.target.value))
    }
    const handleAllCountries = () => {
        handleContinent({ target: { value: "T" } });
        resetSelects();
    };
    const handleActivities = (event) => {
        dispatch(getCountryActivities(event.target.value))

    }
    console.log(currentPage)
    return (
        <div className="containerprincipal">
            <div className="containerFilter">
                <div className="containerModFil">
                    <button onClick={handleAllCountries} >ALL Countries</button>
                    <select id="continentSelect" onChange={handleContinent}>
                        <option value="T">Seleccione</option>
                        <option value="North America">Norte America</option>
                        <option value="South America">Sur America</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                    <select id="orderSelect" onChange={handleOrder}>
                        <option value="PR">Predeterminado</option>
                        <option value="A">Ascendente</option>
                        <option value="D">Decendente</option>
                        <option value="P">Población</option>
                    </select>
                    <select id="actividad" name="actividad" onChange={handleActivities}>
                        <option value="">Seleccione</option>
                        {actividades.slice().sort((a, b) => a.name.localeCompare(b.name)).map((actividad) => (
                            <option key={actividad.id} value={actividad.id}>{actividad.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="containerAllCards">
                {
                    countriesToDisplay.map(({ id, name, image, continent, capital, subregion, area, population, coatOfArms, Activities }) => (
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
                  currentPage ===0?   <button className="desabilitar" onClick={() => handlePageChange(currentPage - 1)}disabled={currentPage === 0}> </button >: <button className="flecha2" onClick={() => handlePageChange(currentPage - 1)}disabled={currentPage === 0}> </button >

                }
                <div>
                    Página {currentPage + 1} de {pageCount}
                </div>
                {
                    currentPage === pageCount - 1 ? <button className="desabilitar " onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount - 1}></button> : <button className="flecha" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === 25}> </button >

                }
            </div>

        </div>
    )

}

export default AllCards;