import styles from './CountryItem.module.css';
import { cityTypes } from '../../data/cityTypes';

function CountryItem({ country }) {
 const { emoji, country: name } = country;
 return (
  <li className={styles.countryItem}>
   <span>{emoji}</span>
   <span>{name}</span>
  </li>
 );
}

CountryItem.propTypes = {
 country: cityTypes,
};

export default CountryItem;
