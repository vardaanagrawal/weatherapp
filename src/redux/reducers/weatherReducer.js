const weatherInfo = (state = { weatherinfo:{}},action) => {
    if(action.type === "FETCH_WEATHER"){
        state = {
            ...state,
            weatherinfo: action.payload
        }
        console.log(state);
    }
    return state;
    
}

export default weatherInfo;