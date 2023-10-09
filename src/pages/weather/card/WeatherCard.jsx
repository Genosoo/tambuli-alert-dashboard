/* eslint-disable react/prop-types */

import { useState } from 'react';

// Import weather icons from the "assets" folder
import clearIcon from '../../../assets/weather-icons/animated/day.svg';
import cloudsIcon from '../../../assets/weather-icons/animated/cloudy.svg';
import rainIcon from '../../../assets/weather-icons/animated/rainy-6.svg';
import snowIcon from '../../../assets/weather-icons/animated/snowy-6.svg';
import thunderstormIcon from '../../../assets/weather-icons/animated/thunder.svg';

import { WiWindDeg } from 'react-icons/wi'
import { PiWindLight } from 'react-icons/pi';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';

function degreesToCompassDirection(degrees) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
}

function WeatherCard({ data, forecastData, currentLocation }) {
  const { name, main, weather, wind, sys, visibility } = data;

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return date.toLocaleTimeString('en-US', options);
  };

  // Define a mapping of weather descriptions to weather icons
  const weatherIcons = {
    Clear: clearIcon,
    Clouds: cloudsIcon,
    Rain: rainIcon,
    Snow: snowIcon,
    Thunderstorm: thunderstormIcon,
    // Add more mappings as needed
  };

  // Determine the weather icon based on the description
  const icon = weatherIcons[weather[0].main] || clearIcon; // Use clearIcon as the default

  // Temperature unit state and default value (Celsius)
  const [isCelsius, setIsCelsius] = useState(true);

  // Wind speed unit state and default value (meters per second)
  const [isMetersPerSecond, setIsMetersPerSecond] = useState(true);

  const toggleUnits = () => {
    setIsCelsius(!isCelsius);
    setIsMetersPerSecond(!isMetersPerSecond);
  };

  const temperatureSymbol = isCelsius ? '°C' : '°F';
  const temperatureValue = isCelsius
    ? (main.temp - 273.15).toFixed(0)
    : (((main.temp - 273.15) * 9) / 5 + 32).toFixed(0);

  // Wind speed unit symbol and conversion
  const windSpeedSymbol = isMetersPerSecond ? 'm/s' : 'mph';
  const windSpeedValue = isMetersPerSecond
    ? wind.speed.toFixed(0) // Display wind speed with 2 decimal places
    : (wind.speed * 2.23694).toFixed(0); // Conversion from m/s to mph

  return (
    <div className="flex lg:gap-10 lg:mt-10 flex-col lg:flex-row w-[100%] ">
      {/* card */}
      <div className="flex flex-col items-center text-center lg:w-[220px]">
        <h4 className="  font-semibold text-xs bg-white p-2 rounded-[10px] shadow">
          {formatDate(data.dt)} | {formatTime(data.dt)}
        </h4>
        <h2 className="text-3xl text-[#298BD9]  m-5 font-semibold ">{name}</h2>
      </div>

      <div className=" flex flex-col  p-3 items-center">
        <img src={icon} alt="" width={200} className='-mt-10'/>
        <h1 className="text-5xl font-semibold text-[#298BD9] -mt-10">
          {temperatureValue}
          {temperatureSymbol}
        </h1>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-2 mr-5">
       <div className="flex gap-2">
       <button className='bg-[#298BD9] w-[150px] text-white p-2 rounded-[10px] hover:bg-[#333] duration-300' onClick={currentLocation}>Default Location</button>
      <button
            onClick={toggleUnits}
            className="bg-[#298BD9] p-3 text-xs shadow-md rounded-[10px] w-[70px] text-white font-semibold hover:bg-[#333] duration-300"
          >
            {isCelsius ? '°C' : '°F'} | {isMetersPerSecond ? 'm/s' : 'mph'}
      </button>
       </div>
        <div className="flex gap-6 text-[#002D4A] text-sm font-medium capitalize">
          <span>
            Feels Like{' '}
            {isCelsius
              ? (main.feels_like - 273.15).toFixed(0)
              : (((main.feels_like - 273.15) * 9) / 5 + 32).toFixed(0)}
            {temperatureSymbol}
          </span>
          <div className="w-[3px] bg-[#002c4abe] h-[90%]" />
          <span>{weather[0].main} </span>
          <div className="w-[3px] bg-[#002c4abe] h-[90%]" />
          <span>{weather[0].description}</span>
        </div>

        <div className="flex flex-col  gap-2 relative">
          <div className="flex gap-3 bg-white p-4 rounded-[10px] shadow-md items-center justify-around ">
            <div className="flex items-center gap-2 text-base font-medium text-[#002D4A]">
              <WiWindDeg className="text-[20px]" />
              <span>
                {windSpeedValue} {windSpeedSymbol} {degreesToCompassDirection(wind.deg)} 
              </span>
            </div>

            <div className="w-[2px] bg-slate-300 h-[100%]" />
            <div className="flex items-center gap-3 text-base font-medium text-[#002D4A]">
              <PiWindLight className="text-[20px]" />
              <span>{main.pressure} hPa</span>
            </div>
          </div>

          
        </div>
        <div className="flex flex-col">
          <div className="text-[#298BD9] w-[360px] font-semibold flex ">
            <span className="mr-3 leading-7">
              Humidity: <br />
              Visibility: <br />
            </span>

            <span className="text-[#002D4A] w-[100px] leading-7">
              {main.humidity}% <br />
              {visibility / 1000} km <br />
            </span>

            <div className="flex gap-3">
              <span>
                <BsFillSunriseFill className="text-2xl text-amber-600" />
                {formatTime(sys.sunrise)}
              </span>
              <span>
                <BsFillSunsetFill className="text-2xl text-orange-600" />
                {formatTime(sys.sunset)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {forecastData && (
        <div>
          <h3>Weather Forecast</h3>
          {forecastData.list.map((forecast, index) => (
            <div key={index}>
              Date: {formatDate(forecast.dt)}, Time: {formatTime(forecast.dt)}, Temperature:{' '}
              {isCelsius
                ? Math.round(forecast.main.temp)
                : Math.round((forecast.main.temp * 9) / 5 + 32)}
              {temperatureSymbol}, Description: {forecast.weather[0].description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
