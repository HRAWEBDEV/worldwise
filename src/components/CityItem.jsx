import { cityTypes } from '../../data/cityTypes';
import styles from './CityItem.module.css';

const formatDate = (date) => {
 return new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
 }).format(new Date(date));
};

const CityItem = ({ city }) => {
 const { emoji, cityName, date } = city;
 return (
  <li className={styles.cityItem}>
   <span className={styles.emoji}>{emoji}</span>
   <h3 className={styles.name}>{cityName}</h3>
   <time className={styles.date}>({formatDate(date)})</time>
   <button className={styles.deleteBtn}>&times;</button>
  </li>
 );
};

CityItem.propTypes = {
 city: cityTypes,
};

export default CityItem;
