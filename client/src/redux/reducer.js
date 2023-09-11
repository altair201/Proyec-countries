const initialState = {
    countries: [],
    allCountries: [],
    temp:[],
    countryId:[],
    activities: [],
    allActivities: [],
    errorForm:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTRIES_ALL':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'COUNTRIES_NAME':
            return {
                ...state,
                countries: action.payload
            }
        case 'COUNTRIES_ID':
            return {
                ...state,
                countries: [action.payload]
            }
        case "ORDER":
            const allCountriesCopy = [...state.countries]
            return {
                ...state,
                countries: action.payload === "OR" ? allCountriesCopy.sort((a, b) => a.name.localeCompare(b.name)) : action.payload === "A" ? allCountriesCopy.sort((a, b) => a.id.localeCompare(b.id)) : action.payload === "D"? allCountriesCopy.sort((a, b) => b.id.localeCompare(a.id)) : action.payload === "P"? allCountriesCopy.sort((a, b) => a.population - b.population) : state.temp.length>0 ? state.temp : state.allCountries

            }
        case "CONTINENT":
            const tempCopy=[...state.allCountries]
            return{
                ...state,
                countries: action.payload === "T" ? state.allCountries : tempCopy.filter((conti)=>conti.continent === action.payload), 
                temp: tempCopy.filter((conti)=>conti.continent === action.payload)
            }
        case "COUNTRI_ID":
            return{
                ...state,
                countryId: action.payload
            }
        case "POSGET_ACTIVITIES":
            return{
                ...state,
                activities: action.payload,
                allActivities: action.payload,
                errorForm:""
            }
        case "GET_ACCOUNTRIES":
            const filterCountries = state.allCountries.filter(country=>{
                if(action.payload === ""){
                    return true
                }
                for ( const activity of country.Activities){
                    console.log(activity)
                    if(activity.id === +action.payload ){
                        return true
                    }
                }
                return false
            }
            )
            return{
                ...state,
                countries: filterCountries
            }
        case "ERROR_ACTIVITIES":
            
            return{
                ...state,
                errorForm: action.payload
            }
            
        default:
            return {
                ...state,

            }
    }
}
export default reducer;