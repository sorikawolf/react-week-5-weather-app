import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.daily[0].temperature.maximum);
    setLoaded(true);
    setForecast({
      maxTemp: response.data.daily[0].temperature.maximum,
      minTemp: response.data.daily[0].temperature.minimum,
      iconUrl: response.data.daily[0].condition.icon_url,
      condition: response.data.daily[0].condition.desription,
    });
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="d-flex flex-row">
          <div className="p-6">
            <div>Thurs</div>
            <div className="ForecastIcon">
              <img src={forecast.iconUrl} alt={forecast.condition} />
            </div>
            <div className="ForecastTemps">
              <span className="ForecastMax">
                {Math.round(forecast.maxTemp)}°
              </span>
              <span className="ForecastMin">
                {Math.round(forecast.minTemp)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "357affaact442eeoc3f4199173062fb9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
