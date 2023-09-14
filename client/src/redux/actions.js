import axios from "axios";
export const countriesAll = () => {
    try {
        return async (dispatch) => {
            const response = await axios('http://localhost:3001/countriesworld/countries');
            const { data } = response;
            return dispatch({
                type: 'COUNTRIES_ALL',
                payload: data
            })

        }

    } catch (error) {
        window.alert('¡No hay paises!');
    }


}
export const getString = (string) => {
    try {
        if (isNaN(string)) {
            return async (dispatch) => {
                try {
                    const response = await axios(`http://localhost:3001/countriesworld/countries/${string}`);
                    const { data } = response;
                    if (!data.id) {
                        const response = await axios(`http://localhost:3001/countriesworld/name?name=${string}`);
                        const { data } = response;
                        return dispatch({
                            type: 'COUNTRIES_NAME',
                            payload: data
                        })
                    }
                    return dispatch({
                        type: 'COUNTRIES_ID',
                        payload: data
                    })

                } catch (error) {
                    return dispatch({
                        type: 'ERROR_ACTIVITIES',
                        payload: error.response.data
                    })
                }
            }

        } else {
            return {
                type: 'ERROR_ACTIVITIES',
                payload: "No se permite valores numericos"
            }
        }
    } catch (error) {
        console.log(error);
    }
}
export const orderCards = (order) => {
    return {
        type: "ORDER", payload: order
    }
}
export const continentCard = (continent) => {
    return {
        type: "CONTINENT", payload: continent
    }
}

export const countriId = (id) => {
    try {
        return async (dispatch) => {
            const response = await axios(`http://localhost:3001/countriesworld/countries/${id}`);
            const { data } = response;


            return dispatch({
                type: 'COUNTRI_ID',
                payload: data
            })


        }
    } catch (error) {

    }
}

export const potsActivities = (formData) => {
    try {
        if (formData) {
            return async (dispatch) => {

                try {
                    await axios.post('http://localhost:3001/countriesworld/activities', formData);
                    const response = await axios.get('http://localhost:3001/countriesworld/activities');
                    const { data } = response;

                    return dispatch({
                        type: 'POSGET_ACTIVITIES',
                        payload: data
                    });
                } catch (error) {
                    return dispatch({
                        type: 'ERROR_ACTIVITIES',
                        payload: error.response.data
                    })
                }
            }

        } else {
            return async (dispatch) => {
                const response = await axios.get('http://localhost:3001/countriesworld/activities');
                const { data } = response;
                return dispatch({
                    type: 'POSGET_ACTIVITIES',
                    payload: data
                })
            }

        }
    } catch (error) {
        return {
            type: 'ERROR_ACTIVITIES',
            payload: error.message
        }
    }
}

export const getCountryActivities = (id) => ({
    type: 'GET_ACCOUNTRIES',
    payload: id
})

export const restartError = () => {
    return {
        type: 'ERROR_ACTIVITIES',
        payload: ''
    }
}
export const deleteActivities = (id) => {
    try {
        return async (dispatch) => {
            await axios.delete(`http://localhost:3001/countriesworld/activities/${id}`);
            const response = await axios.get('http://localhost:3001/countriesworld/activities');
            const { data } = response;
            return dispatch({
                type: 'POSGET_ACTIVITIES',
                payload: data
            })
        }
    } catch (error) {

    }
}

export const UpdatedActivities = (id, Activity) => {
   
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:3001/countriesworld/activities/${id}` , Activity);
            
        } catch (error) {
            return dispatch({
                type: 'ERROR_ACTIVITIES',
                payload: error.message
            })
        }
    }
    
}