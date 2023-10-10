/* eslint-disable react/prop-types */
import { Marker, Popup } from 'react-leaflet';

const MarkerComponent = ({ position, text, type }) => {
  return (
    <Marker position={position}>
      <Popup>{`${type.charAt(0).toUpperCase() + type.slice(1)}: ${text}`}</Popup>
    </Marker>
  );
};

export default MarkerComponent;
