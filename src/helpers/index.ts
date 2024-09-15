import { Weather } from "../types"

// esta function no es recomendable ya que no es mantenible

export const isWeatherResponse = (weather: unknown): weather is Weather => {
      return (
            Boolean(weather) &&
            typeof weather === 'object' &&
            typeof (weather as Weather).name === 'string' &&
            typeof (weather as Weather).main.temp === 'number' &&
            typeof (weather as Weather).main.temp_max === 'number' &&
            typeof (weather as Weather).main.temp_min === 'number'
      )
}

export const formatTemperature = (temperature: number): number => {
      const kelvin = 273.15;
      return parseInt((temperature - kelvin).toString());
}