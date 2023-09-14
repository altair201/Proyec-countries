import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { UpdatedActivities, restartError } from "../../redux/actions";
import { useParams } from "react-router-dom";


const UpdatedActi = () => {
    const dispatch = useDispatch()
    const {id}=useParams();
    const allCountries = useSelector((state) => state.allCountries);
    const errorForm = useSelector((state) => state.errorForm);
    const [saveError, setsaveError] = useState("")
    const [modals, setModals] = useState({
        errorModalIsOpen: false,
        successModalIsOpen: false,
                                        
    });
    useEffect(() => {
        if (errorForm !== '') {
            openModal('errorModalIsOpen');
            setsaveError(errorForm)
            dispatch(restartError());
        }
    }, [errorForm]);

    const openModal = (modalName) => {
        setModals({
            ...modals,
            [modalName]: true,
        });
    };

    const closeModal = (modalName) => {
        setModals({
            ...modals,
            [modalName]: false,
        });
    };


    const [bandera, setBandera] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        dificult: 0,
        duration: 0,
        season: [],
        countries: [],
    });


    const [mensajeError, setMensajeError] = useState({
        name: "",
        dificult: "",
        duration: "",
        season: "",
        countries: "",
    });
    const validateForm = (input) => {
        const newErrors = {
            name: "",
            dificult: "",
            duration: "",
        };
        if (input.name === "") {
            newErrors.name = "El nombre no puede estar vacío.";
        }

        if (input.dificult < 1 || input.dificult > 5) {
            newErrors.dificult = "La dificultad debe estar entre 1 y 5.";
        }

        if (input.duration > 8 || input.duration < 1) {
            newErrors.duration = "La duración no puede exceder las 8 horas o ser un valor inválido.";
        }


        setMensajeError({
            ...mensajeError,
            name: newErrors.name,
            dificult: newErrors.dificult,
            duration: newErrors.duration
        });


    };




    const handleSeasonChange = (event) => {
        const selectedSeason = event.target.value;
        
        if (formData.season.includes(selectedSeason)) {
            const seasonFiltered = formData.season.filter((season) => season !== selectedSeason)
            setFormData({ ...formData, season: seasonFiltered });
        } else {
            const newSeasonArray = [...formData.season, selectedSeason];
            setFormData({ ...formData, season: newSeasonArray });
        }

    }

    const temporadas = [
        'Primavera', 'Verano', 'Otoño', 'Invierno'
    ].map((temporada) => (
        <label key={temporada}>
            <input
                className="editcheckbox"
                type="checkbox"
                value={temporada}
                onChange={handleSeasonChange}
                style={{ width: '15px', height: '15px' }}
            />
            {temporada}
        </label>
    ));
    useEffect(() => {

        if (formData.season.length === 0) {
            setMensajeError({
                ...mensajeError,
                season: "Debe seleccionar una temporada."
            })
        } else {
            setMensajeError({
                ...mensajeError,
                season: ""
            })
        }
    }, [formData.season])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: name === "duracion" ? parseInt(value) : value,
        });

        validateForm({
            [name]: value
        });

    };

    const handleStarClick = (starValue) => {
        setFormData({
            ...formData,
            dificult: starValue,
        })
    }
    const handlePushCountries = (event) => {

        setFormData({
            ...formData,
            countries: [...formData.countries, event.target.value,],
        })
        setBandera(true);

    }
    useEffect(() => {

        if (formData.countries.length === 0 && bandera === false) {
            setMensajeError({
                ...mensajeError,
                countries: "Debe seleccionar al menos un país."
            })
        } else {
            setMensajeError({
                ...mensajeError,
                countries: ""
            })
        }
    }, [formData.countries])


    const handleSubmit = () => {
        dispatch(UpdatedActivities(id, formData));

        if (errorForm === "" && formData.name !== "" &&
            formData.dificult >= 1 && formData.dificult <= 5 &&
            formData.duration >= 1 && formData.duration <= 8 &&
            formData.season.length > 0 &&
            formData.countries.length > 0){
                openModal('successModalIsOpen');
            }{
                setsaveError("Faltan datos")
            }
        setFormData({
            name: "",
            dificult: 0,
            duration: 0,
            season: [],
            countries: [],
        })

    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= formData.dificult ? "selected" : ""}`}
                    onClick={() => handleStarClick(i)}
                >
                    <svg
                        width="41"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill=""
                            d="M24 3.69l-3.096 6.838-7.004.632c-1.535.138-2.162 2.092-.922 3.19l5.228 4.717-1.295 7.573c-.283 1.656 1.287 2.91 2.77 2.16l6.766-3.56 6.766 3.56c1.482.748 3.053-.504 2.77-2.16l-1.294-7.573 5.228-4.717c1.24-1.098.613-3.052-.922-3.19l-7.005-.632-3.096-6.838c-.138-1.535-2.092-2.162-3.19-2.22z"
                        />
                    </svg>
                </span>
            );
        }
        return stars;
    };
    const handleDelete = (selectedCountry) => {

        const updatedCountries = formData.countries.filter(country => country !== selectedCountry);
        setFormData({
            ...formData,
            countries: updatedCountries,
        });

        setBandera(false);


    }
    return (
        <div className="containerForm">
            
            
            {modals.errorModalIsOpen && (
                <div className="containermodal">
                <div className="modal">
                    <div className="errornofound"></div>
                    <div className="modal-content">
                        <h3>ERROR {saveError}</h3>
                        <button className="btn" onClick={() => closeModal('errorModalIsOpen')}>Cerrar</button>
                    </div>
                </div>
                </div>
            )}
                {modals.successModalIsOpen && (
                    <div className="containermodal">
                <div className="modalsuces">
                    <div className="succesfull"></div>
                    <div className="modal-content">
                        <h2>Actividad Actualizada</h2>
                        <button className="btn" onClick={() => closeModal('successModalIsOpen')}>Cerrar</button>
                    </div>
                </div>
                </div>
            )}
            
            <div className="create-form" >
                <h3 className="actEdit">Actualizar Actividad</h3>
                <div className="edit-form1">
                    <label>Nombre: </label>
                    <input
                        className="edit-input1 editinput"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}


                    />
                    {mensajeError && <p className="mensajeError" >{mensajeError.name}</p>}
                </div>
                <div className="dificultStar">
                    <label>Dificultad: </label><div className="star-rating">{renderStars()}</div>
                    {mensajeError && <p className="mensajeError">{mensajeError.dificult}</p>}
                </div>
                <div className="edit-form1 ">
                    <label>Duración: </label>
                    <input
                        className="edit-input2 editinput"
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}

                    />
                    {mensajeError && <p className="mensajeError">{mensajeError.duration}</p>}
                </div>
                <div className="editSeason">
                    <label className="edit-form1">Temporadas: </label>
                    {temporadas}
                    {mensajeError && <p className="mensajeError">{mensajeError.season}</p>}
                </div>
                <div className="edit-form1">
                    <label>Pais: </label>
                    <select className="editinput edit-input1" name="pais" onChange={handlePushCountries}>
                        <option value="">Seleccione</option>
                        {allCountries.slice().sort((a, b) => a.name.localeCompare(b.name)).map((countries) => (
                            <option key={countries.id} value={countries.id}>{countries.name}</option>
                        ))}
                    </select>
                    {mensajeError && <p className="mensajeError">{mensajeError.countries}</p>}
                </div>
                <div className="edit-form"><h3>Paises seleccionados</h3><div className="edit-paises">{formData.countries.map((country, index) => <button className="editbtn" key={index} onClick={() => handleDelete(country)}>{country}    ❌</button >)}</div></div>
                <div className="editEnviar">
                    <button className="btn" type="submit" onClick={handleSubmit}>Enviar</button>

                </div>
            </div>

        </div>
    );
};

export default UpdatedActi;