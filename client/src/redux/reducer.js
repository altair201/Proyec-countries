const initialState = {
    countries: [],
    allCountries: [],
    temp:[],
    countryId:[],
    activities: [],
    allActivities: [],
    errorForm:"",
    filtertemp:[],
    
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
            
            return {
                ...state,
                countries: action.payload === "OR" ? state.countries.sort((a, b) => a.name.localeCompare(b.name)) : action.payload === "A" ? state.countries.sort((a, b) => a.id.localeCompare(b.id)) : action.payload === "D"? state.countries.sort((a, b) => b.id.localeCompare(a.id)) : action.payload === "P"? state.countries.sort((a, b) => a.population - b.population) : state.temp.length>0 ? state.temp : state.countries,

                

            }
        case "CONTINENT":
            const tempCopy=[...state.allCountries]
        
            return{
                ...state,
                countries: action.payload === "T" ? tempCopy : state.filtertemp.length>0 ? state.filtertemp.filter((conti)=>conti.continent === action.payload): state.allCountries.filter((conti)=>conti.continent === action.payload), 

                temp: tempCopy.filter((conti)=>conti.continent === action.payload),
                
                filtertemp: action.payload === "T" ? [] : state.filtertemp
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
            const varfilter= action.payload === "" ? state.temp : state.temp.length>0 ? state.temp  : state.allCountries
            const filterCountries = varfilter.filter(country=>{
                if(action.payload === ""){
                    return true
                }
                for ( const activity of country.Activities){
                    if(activity.id === +action.payload ){
                        return true
                    }
                }
                return false
            }
            )
            return{
                ...state,
                countries: filterCountries,
                filtertemp: filterCountries
            }
        case "ERROR_ACTIVITIES":
            
            return{
                ...state,
                errorForm: action.payload,
                countries: []
            }
            
        default:
            return {
                ...state,

            }
    }
}
export default reducer;