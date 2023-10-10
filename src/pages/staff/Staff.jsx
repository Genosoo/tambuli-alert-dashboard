import  { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationsData from './data.json';

import PersonImg from '../../assets/person.png'
import BluePersonImg from '../../assets/personblue.png'
import VehicleImg from '../../assets/vehicle.svg'

const personIcon = L.icon({
    iconUrl: PersonImg, // Replace this with the path to your custom standing person icon
    iconSize: [50, 50],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


 const vehicleIcon = L.icon({
    iconUrl: VehicleImg, // Replace this with the path to your custom standing person icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  

  const bluePersonIcon = L.icon({
    iconUrl: BluePersonImg, // Replace this with the path to your blue person icon
    iconSize: [20, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  

const MapApp = () => {
  const [showPersons, setShowPersons] = useState(true);
  const [showVehicles, setShowVehicles] = useState(false);

  return (
    <div className="mt-20">
      <div className="toggle-buttons">
        <label>
          <input type="checkbox" checked={showPersons} onChange={() => setShowPersons(!showPersons)} />
          Show Persons
        </label>
        <label>
          <input type="checkbox" checked={showVehicles} onChange={() => setShowVehicles(!showVehicles)} />
          Show Vehicles
        </label>
      </div>
      <MapContainer center={[12.8797, 121.7740]} zoom={4} style={{ height: '80vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showPersons &&
          locationsData.persons.map((person, index) => (
            <Marker icon={person.camera ? bluePersonIcon : personIcon} key={`person-${index}`}  position={person.location}>
               <Popup>
                <div className='  bg-white '>
                  <h3 className='text-lg'>{person.name}</h3>
                  <div className='w-[300px]'>
                  {person.camera && <video controls width="" className='rounded-[20px] ' src={person.videoUrl} />}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        {showVehicles &&
          locationsData.vehicles.map((vehicle, index) => (
            <Marker icon={vehicleIcon} key={`vehicle-${index}`} position={vehicle.location}>
              <Popup>{vehicle.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default MapApp;
