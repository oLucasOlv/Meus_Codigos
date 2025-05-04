import { useState } from "react";
import { GetWeather } from "../services/weatherApi";
import { WeatherCard } from "./WeatherCard";

export const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      const data = await GetWeather(city);
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar clima: " + err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="flex items-center bg-white/20 backdrop-blur-md rounded-full p-2 shadow-lg mb-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar cidade..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-white"
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white/30 hover:bg-white/40 transition-colors text-white font-medium"
          >
            Buscar
          </button>
        </div>
      </form>
      {weatherData && <WeatherCard data={weatherData} />}
    </>
  );
};
