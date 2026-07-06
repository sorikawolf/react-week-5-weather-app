import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Week 5 Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Sorika Wolf and is{" "}
          <a
            href="https://github.com/sorikawolf/react-week-5-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
