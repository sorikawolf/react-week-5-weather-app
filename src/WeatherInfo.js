import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.icon_url} alt={props.data.condition} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.temp_feel)}°C</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
