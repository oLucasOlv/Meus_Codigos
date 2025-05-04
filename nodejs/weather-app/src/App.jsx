import { WeatherSearch } from "./components/WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <WeatherSearch />
    </div>
  );
}

export default App;
