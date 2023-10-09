import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import SearchBar from "./Search/SearchBar";
import WeatherCard from "./card/WeatherCard";
import ForecastCard from "./card/ForecastCard";
import "leaflet/dist/leaflet.css";

const apiKey = '823b8c9501241ead2abadeac38d1e4e4';

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // New state for forecast data
  const [defaultLocation, setDefaultLocation] = useState(true);
  const [mapCenter, setMapCenter] = useState({ lat: 12.8797, lng: 121.7740 });
  const [searchLocation, setSearchLocation] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoords(latitude, longitude);
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (defaultLocation) {
      fetchWeatherDataByCoords(mapCenter.lat, mapCenter.lng);
    }
  }, [defaultLocation, mapCenter]);

  useEffect(() => {
    // Fetch forecast data when weatherData or searchLocation changes
    if (weatherData || searchLocation) {
      fetchForecastDataByCoords(weatherData ? weatherData.coord.lat : searchLocation.lat, weatherData ? weatherData.coord.lon : searchLocation.lng);
    }
  }, [weatherData, searchLocation]);

  const fetchWeatherDataByCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      mapRef.current.flyTo([latitude, longitude], 10);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastDataByCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      );
      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleSearch = (city) => {
    setDefaultLocation(false);
    fetchWeatherDataByCity(city);
  };

  const fetchWeatherDataByCity = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      mapRef.current.flyTo([response.data.coord.lat, response.data.coord.lon], 10);
      setSearchLocation({ lat: response.data.coord.lat, lng: response.data.coord.lon });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleGetCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherDataByCoords(latitude, longitude);
          setSearchLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported in this browser.');
    }
  };

  return (
    <div className="mt-20 flex flex-col gap-5 ">
      <h1 className="title">Weather Dashboard</h1>
      {/* WRAPPER */}
     <div className="flex flex-col xl:flex-row gap-5">

      {/* LEFT COMPONENT */}
       <div className="flex flex-col  justify-center ">
          <SearchBar onSearch={handleSearch} />
          {weatherData && <WeatherCard data={weatherData} currentLocation={handleGetCurrentLocation} />}
          <div className="w-[500px] h-[400px] lg:w-[850px] lg:h-[500px] rounded-[15px] mt-5 overflow-hidden">
        <MapContainer 
        center={mapCenter} 
        zoom={defaultLocation ? 6 : 10}
        ref={mapRef}
        className="w-[600px] h-[400px]  lg:w-[850px] lg:h-[100%] "
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {defaultLocation ? (
            <Marker position={mapCenter}>
              <Popup>
                Your Location
                <br />
                {weatherData && `Temperature: ${Math.round(weatherData.main.temp)}°C`}
              </Popup>
            </Marker>
          ) : (
            searchLocation && (
              <Marker position={searchLocation}>
                <Popup>
                  <strong>{weatherData.name}</strong>
                  <br />
                  Temperature: {Math.round(weatherData.main.temp)}°C
                </Popup>
              </Marker>
            )
          )}
        </MapContainer>
        </div>
      
       </div>

      {/* RIGHT COMPONENT */}
      <div>
        {forecastData && <ForecastCard data={forecastData} />} 
      </div>
     </div>

    </div>
  );
}
