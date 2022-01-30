import axios from 'axios';

export function fetchWeather(city) {
    return function(dispatch){
        axios.get(`https://api.weatherbit.io/v2.0/current?&city=${city}don&key=437c1b27ac9e4b9fa8200253902c06e5`)
        .then(res => {
            dispatch({
                type: "FETCH_WEATHER",
                payload: res.data.data[0]
            })
        })
    }
}