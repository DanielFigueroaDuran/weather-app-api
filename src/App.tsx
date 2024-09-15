import styles from "./App.module.css";
import Form from "./components/form/Form";
import WeatherDetail from "./components/weatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

  const { weather, fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        <WeatherDetail
          weather={weather}
        />
      </div>
    </>
  )
}

export default App
