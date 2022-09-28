import "./App.css";

function App() {
  let weatherData = {
    city: "Kyiv",
    date: "Friday: 10:35",
    description: "Partly cloudy",
    temperature: 30,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    fils: 25,
    humidity: 10,
    wind: 5,
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div class="weather">
            <h1>{weatherData.city}</h1>
            <button className="buttonNew">Current location</button>
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="clearfix">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    width="90"
                    className="cloudy-sun float-start"
                  />
                  <div className="float-start">
                    <span className="temp"></span>
                    <span className="degry">
                      <a href="/" className="celsius">
                        {weatherData.temperature}°C
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Feels like: {weatherData.fils}°C°</li>
                  <li>Humidity:{weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Type a city"
                  autofocus="on"
                  aria-label="search"
                />
                <button className="form-control shadow" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="github">
          <a
            className="linkhub"
            href="https://github.com/Olesia20/Weather-react"
          >
            Open-source code,
          </a>
          {""} by Olesia Kononova
        </div>
      </header>
    </div>
  );
}

export default App;
