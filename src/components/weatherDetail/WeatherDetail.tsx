import { formatTemperature } from "../../helpers";
import { Weather } from "../../hooks/useWeather";

type WeatherDetailProps = {
      weather: Weather
};

const WeatherDetail = ({ weather }: WeatherDetailProps) => {
      //console.log(weather);
      return (
            <div>
                  <h2>Clima de: {weather.name}</h2>
                  <p>{formatTemperature(weather.main.temp)} &deg;C</p>
                  <div>
                        <p>Max: <span>{formatTemperature(weather.main.temp_max)} &deg;C</span></p>
                        <p>Min: <span>{formatTemperature(weather.main.temp_min)} &deg;C</span></p>

                  </div>
            </div>
      )
}

export default WeatherDetail