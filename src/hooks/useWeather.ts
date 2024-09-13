import axios from "axios";

const useWeather = () => {

      const fetchWeather = async ({ search: SearchtType }) => {
            try {
                  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=
                  {city name},{state code},{country code}&limit={limit}&appid={API key}`;

            } catch (error) {
                  console.log(error);
            }
      }

      return {
            fetchWeather
      }


}

export default useWeather