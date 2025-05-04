export const WeatherCard = ({ data: weather }) => {
  if (!weather) return null;

  const formatTime = (ts) =>
    new Date(ts * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="glass-card bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl text-white max-w-md mx-auto">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-sm">
            Coordenadas: {weather.coord.lat.toFixed(2)}, {weather.coord.lon.toFixed(2)}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-24 h-24"
        />
      </div>

      {/* Temperaturas */}
      <div className="flex items-baseline justify-between mt-4">
        <span className="text-6xl font-light">{weather.main.temp.toFixed(0)}°C</span>
        <div className="text-right">
          <p className="text-sm">Sensação: <span className="font-medium">{weather.main.feels_like.toFixed(0)}°C</span></p>
          <p className="text-sm">Máx: <span className="font-medium">{weather.main.temp_max.toFixed(0)}°C</span></p>
          <p className="text-sm">Min: <span className="font-medium">{weather.main.temp_min.toFixed(0)}°C</span></p>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-xl capitalize mt-2">{weather.weather[0].description}</p>

      {/* Dados adicionais em grade */}
      <div className="grid grid-cols-2 gap-4 text-sm mt-6">
        <div>
          <p>Pressão: <span className="font-medium">{weather.main.pressure} hPa</span></p>
          <p>Umidade: <span className="font-medium">{weather.main.humidity}%</span></p>
          {weather.main.sea_level && (
            <p>Nível do mar: <span className="font-medium">{weather.main.sea_level} hPa</span></p>
          )}
          {weather.main.grnd_level && (
            <p>Nível do solo: <span className="font-medium">{weather.main.grnd_level} hPa</span></p>
          )}
        </div>
        <div>
          <p>Visibilidade: <span className="font-medium">{(weather.visibility / 1000).toFixed(1)} km</span></p>
          <p>Vento: <span className="font-medium">{weather.wind.speed.toFixed(1)} m/s ({weather.wind.deg}°)</span></p>
          <p>Nuvens: <span className="font-medium">{weather.clouds.all}%</span></p>
          <p>Base: <span className="font-medium">{weather.base}</span></p>
        </div>
      </div>

      {/* Horários */}
      <div className="mt-6 border-t border-white/20 pt-4 text-sm flex justify-between">
        <div>
          <p>Nascer do sol: <span className="font-medium">{formatTime(weather.sys.sunrise)}</span></p>
          <p>Pôr do sol: <span className="font-medium">{formatTime(weather.sys.sunset)}</span></p>
        </div>
        <div className="text-right">
          <p>
            Timezone: <span className="font-medium">UTC{weather.timezone >= 0 ? "+" : ""}{weather.timezone / 3600}</span>
          </p>
          <p>Data: <span className="font-medium">{new Date(weather.dt * 1000).toLocaleString()}</span></p>
        </div>
      </div>
    </div>
  );
};
