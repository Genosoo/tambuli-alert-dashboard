import  { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserPosition([position.coords.latitude, position.coords.longitude]);
      }, (error) => {
        console.error("Error getting user location:", error);
      });
    } else {
      console.log("Geolocation is not supported in this browser.");
    }
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
   <div className='rounded-[30px] overflow-hidden  w-[1000px]'>
     <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: '80vh', width: '1000px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userPosition && <Marker position={userPosition}>
        <Popup>Your Current Location</Popup>
      </Marker>}
    </MapContainer>
   </div>
  );
}
