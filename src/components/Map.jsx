import styles from './Map.module.css';
import { useNavigate } from 'react-router-dom';
const Map = () => {
 const navigate = useNavigate();

 return (
  <div className={styles.mapContainer}>
   <h1>map</h1>
   <button onClick={() => navigate('forms')}>go to the form</button>
   Map
  </div>
 );
};

export default Map;
