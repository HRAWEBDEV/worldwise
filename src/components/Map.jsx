import styles from './Map.module.css';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

const position = [51.505, -0.09];

const Map = () => {
 return (
  <div className={styles.mapContainer}>
   <MapContainer
    className={styles.map}
    center={position}
    zoom={13}
    scrollWheelZoom={true}
   >
    <TileLayer
     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
    <Marker position={position}>
     <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
     </Popup>
    </Marker>
   </MapContainer>
  </div>
 );
};

export default Map;
