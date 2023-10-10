/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails,  } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ForecastCard = ({ data }) => {
  // Check if forecast data exists
  if (!data) {
    return null;
  }

  // Extract relevant forecast data
  const forecasts = data.list;


  // State to track the temperature unit (Celsius or Fahrenheit)
  const [temperatureUnit, setTemperatureUnit] = useState('°C');



  // Function to convert temperature to Fahrenheit
  const toFahrenheit = (celsiusTemp) => {
    return ((celsiusTemp * 9/5 + 32).toFixed(2) + "°F");
  };


  return (
    <div className="bg-white p-5 rounded-[15px] shadow">
      <h2 className="text-center text-2xl font-semibold text-[#3C3C3C] mb-2">5-Day Forecast</h2>
   
      <div className="forecast-scroll">
       
        {forecasts.map((forecast, index) => {
          // Parse the date and time information from forecast.dt_txt
          const dateTime = new Date(forecast.dt_txt);
          // Get day and date in a desired format (e.g., "Sat, Oct 08")
          const dayDate = dateTime.toLocaleString('en-PH', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          });

 
          return (
            <Accordion key={index} sx={{ border: '1px solid #298BD9', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<ArrowDropDownIcon className="-mt-3 text-[#298BD9]" />}>
                <div className="flex justify-between text-center w-[100%] ">
                  <span className="text-[#002D4A] font-semibold">{dayDate}</span>
                  <div className="flex items-center">
                    <img width={40} src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    <span>{(forecast.main.temp - 273.15).toFixed(0)}°C</span>
                  </div>
                  <span className="text-[#298BD9]">{forecast.weather[0].description}</span>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" p-5 -mt-10">
                  <div className="flex gap-5">
                    <div className="flex flex-col">
                      <img width={60} src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#002D4A] gap-2">
                        <span>{forecast.weather[0].main}</span> |
                        <span> {forecast.weather[0].description}</span>
                      </div>
                      <span className="text-[#298BD9]">
                        The high will be {(forecast.main.temp_max - 273.15).toFixed(0)}{temperatureUnit},
                        the low will be {(forecast.main.temp_min - 273.15).toFixed(0)}{temperatureUnit}.
                      </span>

                      
                    <div className='flex text-sm  gap-4 mt-4 '>
                      <span className='text-[#298BD9] font-semibold leading-7'>
                        Humidity: <br />
                        Visibility:  
                      </span>
                      <span className='text-[#002D4A] font-semibold leading-7'>
                      {forecast.main.humidity}% <br />
                      {forecast.visibility / 1000} km
                      </span>
                    </div>
                    </div>

                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;
