import styles from './Map.module.css';
import { useState } from 'react';
import { useCities } from './cityProviderContext';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Map = () => {
 const { cities } = useCities();
 const [mapPosition, setMapPosition] = useState([40, 0]);
 const [searchParams] = useSearchParams();
 const lat = searchParams.get('lat');
 const lng = searchParams.get('lng');

 useEffect(() => {
  if (lat && lng) setMapPosition([lat, lng]);
 }, [lat, lng]);

 return (
  <div className={styles.mapContainer}>
   <MapContainer
    className={styles.map}
    center={mapPosition}
    zoom={13}
    scrollWheelZoom={true}
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    {cities.map((city) => {
     const {
      id,
      position: { lat, lng },
     } = city;
     console.log(id, lat, lng);
     return (
      <Marker key={id} position={[Number(lat), Number(lng)]}>
       <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
      </Marker>
     );
    })}
    <ChangePosition position={mapPosition} />
   </MapContainer>
  </div>
 );
};

const ChangePosition = ({ position }) => {
 const map = useMap();
 map.setView(position);

 return null;
};

ChangePosition.propTypes = {
 position: PropTypes.arrayOf(PropTypes.number),
};

export default Map;
