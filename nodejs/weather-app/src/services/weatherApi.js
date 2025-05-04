export const GetWeather = async (city) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`
    );

    if (!response.ok) throw new Error("Cidade não encontrada");
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Erro desconhecido ao buscar dados");
  }
};
