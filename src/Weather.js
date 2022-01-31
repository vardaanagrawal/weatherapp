import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/actions/fetchWeather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);

  const weatherSelector = useSelector((state) => state.weatherinfo);
  const dispatch = useDispatch();
  function getWeatherInfoAction(city) {
    dispatch(fetchWeather(city));
  }

  useEffect(() => {
    getWeatherInfoAction("delhi");
    return;
  }, []);

  const find = async (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("please enter city");
    } else {
      setShow(true);
      getWeatherInfoAction(city);
    }
  };

  return (
    <div className="weather">
      <div style={{fontSize: '50px',color: 'white',fontWeight: '900',textShadow: 'black 2px 2px 20px 2px'}}>WEATHER APP</div>
      <div className="search">
        <form onSubmit={find}>
          <input
            type="text"
            id="text_field"
            placeholder="city name"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <input type="submit" id="submit_btn" value="Search"></input>
        </form>
      </div>

      {show && (
        <div className="output">
          <div className="img">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${weatherSelector.weather.icon}.png`}
              alt="loading..."
            ></img>
          </div>
          <div className="temp">{`${weatherSelector.temp}°C`}</div>
          <div className="desc">
            <div>{weatherSelector.weather.description}</div>
            <div>
              {weatherSelector.city_name}
              {`/`}
              {weatherSelector.country_code}
            </div>
          </div>
          <div className="date">{weatherSelector.ob_time}</div>
          <div className="sunset">
            <b>SUNSET</b>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-sunset"
              viewBox="0 0 16 16"
            >
              <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
            </svg>
            &emsp;
            {weatherSelector.sunset}
          </div>
          <div className="aqi">
            <b>AQI</b>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-percent"
              viewBox="0 0 16 16"
            >
              <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
            &emsp;
            {weatherSelector.aqi}
          </div>
          <div className="pressure">
            <b>PRESSURE</b>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-cloud-fog"
              viewBox="0 0 16 16"
            >
              <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" />
            </svg>
            &emsp;
            {weatherSelector.pres}
          </div>
          <div className="speed">
            <b>SPEED</b>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              className="bi bi-wind"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
            &emsp;
            {weatherSelector.wind_spd}
          </div>
        </div>
      )}
      {!show && <div className="output"></div>}
    </div>
  );
}
