import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vub3VyZXRhIiwiYSI6ImNsbWthbTRoaTAwcjYya3M3YWE0bmx6cjgifQ.GMDvSm5s9J7FO8_cBgNasQ';

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Choose a map style
      zoom: 12, // Initial zoom level
    });

    // Use browser's geolocation to get user's current position
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      map.setCenter([longitude, latitude]); // Center the map on the user's current location
      // Add a marker for the user's location
    }, (error) => {
      console.error('Error getting user location:', error);
    });

    // Clean up the map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default MapComponent;
