import axios from "axios";
//import { z } from "zod";
import { object, string, number, InferOutput, parse } from "valibot";
import { SearchType } from "../types";
import { isWeatherResponse } from "../helpers";

//--------zod-----------

// const Weather = z.object({
//       name: z.string(),
//       main: z.object({
//             temp: z.number(),
//             temp_max: z.number(),
//             temp_min: z.number()
//       })
// });

// type Weather = z.infer<typeof Weather>


// ---------Volibot------------

const WeatherSchena = object({
      name: string(),
      main: object({
            temp: number(),
            temp_max: number(),
            temp_min: number()
      })
})

type Weather = InferOutput<typeof WeatherSchena>

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

                  // const { data: weatherResult } = await axios(weatherUrl);
                  // const result = isWeatherResponse(weatherResult);

                  //console.log(result);

                  // if (result) {
                  //       console.log(weatherResult.name);
                  // } else {
                  //       console.log('respuesta incorrecta');
                  // }

                  // -------------Zod----------------

                  // const { data: weatherResult } = await axios(weatherUrl);
                  // const result = Weather.safeParse(weatherResult)
                  // //console.log(result);

                  // if (result.success) {
                  //       console.log(result.data.name);
                  //       console.log(result.data.main.temp);

                  // }

                  // -------------Valibot----------------

                  const { data: weatherResult } = await axios<Weather>(weatherUrl);
                  const result = parse(WeatherSchena, weatherResult);
                  //console.log(result);
                  if (result) {
                        console.log(result.name);
                  } else {
                        console.log('Respuesta mal formada...');
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