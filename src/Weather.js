import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);

    setWeather({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      temp_feel: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      condition: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Monday 5:08pm</li>
          <li className="text-capitalize">{weather.condition}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weather.icon_url} alt={weather.condition} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weather.temp_feel)}°C</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "357affaact442eeoc3f4199173062fb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
