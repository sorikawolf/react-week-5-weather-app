import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState("null");

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.daily[0].temperature.maximum);
    setForecast({
      maxTemp: response.data.daily[0].temperature.maximum,
      minTemp: response.data.daily[0].temperature.minimum,
    });
  }

  let city = props.city;
  let apiKey = "357affaact442eeoc3f4199173062fb9";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thurs</div>
          <div className="ForecastIcon">icon</div>
          <div>
            <span className="ForecastMax">{Math.round(forecast.maxTemp)}°</span>
            <span className="ForecastMin">{Math.round(forecast.minTemp)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
