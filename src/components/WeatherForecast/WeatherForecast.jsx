import "./WeatherForecast.css";
import WeatherData from "../WeatherData/WeatherData";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
const WeatherForecast = ({ weatherData }) => {
  return (
    <div className="weather" key={weatherData.day}>
      <h2>{weatherData.day}</h2>
      <WeatherIcon img={weatherData.img} alt={weatherData.imgAlt} />
      <WeatherData
        conditions={weatherData.conditions}
        time={weatherData.conditions}
      />
    </div>
  );
};
export default WeatherForecast;
