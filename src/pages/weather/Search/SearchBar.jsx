/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import cityData from './city.list.json';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  const [filterCity, setFilterCity] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionClicked, setSuggestionClicked] = useState(false);

  useEffect(() => {
    // Filter the data based on the "PH" country code
    const filtered = cityData.filter((item) => item.country === 'PH');
    setFilterCity(filtered);
  }, []);

  const handleSearch = () => {
    if (city.trim() !== '') {
      onSearch(city);
    }
  };

  const handleInputChange = (e) => {
    const inputCity = e.target.value;
    setCity(inputCity);

    // Filter city names based on the user's input
    const matchingCities = filterCity.filter((item) =>
      item.name.toLowerCase().includes(inputCity.toLowerCase())
    );

    // Use a Set to remove duplicates and convert back to an array
    const uniqueSuggestions = [...new Set(matchingCities.map((item) => item.name))];

    // Update the suggestions with unique matching city names
    setSuggestions(uniqueSuggestions);

    // Reset suggestionClicked when the input changes
    setSuggestionClicked(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);
    setSuggestionClicked(true);
  };

  const shouldShowSuggestions = suggestions.length > 0 && city.trim() !== '' && !suggestionClicked;

  return (
    <div className="bg-white lg:w-[100%] m-10 lg:m-0  rounded-[15px] p-2 pl-4 flex justify-between">
      <input
        className="w-[100%] outline-none"
        type="text"
        placeholder="Search a city..."
        value={city}
        onChange={handleInputChange}
      />
      <button
        className="bg-[#298BD9] p-2 px-4 rounded-[5px] text-white flex items-center gap-2"
        onClick={handleSearch}
      >
        Find
        <BsSearch />
      </button>

      {/* Display auto-suggestions */}
      {shouldShowSuggestions && (
        <ul className="search-suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-[#298BD9] hover:text-white"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
