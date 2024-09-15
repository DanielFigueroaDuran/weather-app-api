import { Weather } from "../../hooks/useWeather";

type WeatherDetailProps = {
      weather: Weather
};



const WeatherDetail = ({ weather }: WeatherDetailProps) => {
      console.log(weather);
      return (
            <div>WeatherDetail</div>
      )
}

export default WeatherDetail