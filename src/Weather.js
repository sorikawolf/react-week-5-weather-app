import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 5:08pm</li>
        <li>Light Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.accuweather.com/images/weathericons/v2a/07.svg"
            alt="cloudy"
          />
          65°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 53%</li>
            <li>Humidity: 100%</li>
            <li>Wind: 9pmh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
