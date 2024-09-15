import axios from "axios";
import { SearchType } from "../types";
import { isWeatherResponse } from "../helpers";




const useWeather = () => {

      const fetchWeather = async (search: SearchType) => {

            const appId = import.meta.env.VITE_API_KEY;
            try {
                  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=
                  ${search.city},${search.country}&appid=${appId}`;

                  const { data } = await axios(geoUrl);

                  const lat = data[0].lat;
                  const lon = data[0].lon;

                  // console.log(lat);
                  // console.log(lon);

                  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
                  //console.log(weatherUrl);

                  // ---------Castear el type------------

                  // const { data: weatherResult } = await axios<Weather>(weatherUrl);
                  // console.log(weatherResult.main.temp);

                  // ---------type Guards------------

                  const { data: weatherResult } = await axios(weatherUrl);
                  const result = isWeatherResponse(weatherResult);

                  //console.log(result);

                  if (result) {
                        console.log(weatherResult.name);
                  } else {
                        console.log('respuesta mal formada');
                  }

            } catch (error) {
                  console.log(error);
            }
      }

      return {
            fetchWeather
      }


}

export default useWeather