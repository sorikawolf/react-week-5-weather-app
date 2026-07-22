import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thurs</div>
          <div className="ForecastIcon">icon</div>
          <div>
            <span className="ForecastMax">19°</span>
            <span className="ForecastMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
