import { cityTypes } from '../../data/cityTypes';
import styles from './CityItem.module.css';
import { Link } from 'react-router-dom';
import { useCities } from './cityProviderContext';

const formatDate = (date) => {
 return new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
 }).format(new Date(date));
};

const CityItem = ({ city }) => {
 const { currentCity } = useCities();
 const { id, emoji, cityName, date } = city;
 return (
  <li>
   <Link
    className={`${styles.cityItem} ${
     currentCity[0]?.id === id ? styles['cityItem--active'] : ''
    }`}
    to={`${id}`}
   >
    <span className={styles.emoji}>{emoji}</span>
    <h3 className={styles.name}>{cityName}</h3>
    <time className={styles.date}>({formatDate(date)})</time>
    <button className={styles.deleteBtn}>&times;</button>
   </Link>
  </li>
 );
};

CityItem.propTypes = {
 city: cityTypes,
};

export default CityItem;
