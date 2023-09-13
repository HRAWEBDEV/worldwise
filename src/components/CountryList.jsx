import styles from './countryList.module.css';
import { cityTypes } from '../../data/cityTypes';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';

const CountryList = ({ cities, isLoading }) => {
 if (isLoading) return <Spinner />;
 if (!cities.length) return <Message message='no cities found' />;
 return (
  <ul className={styles.countryList}>
   {cities.map((city) => {
    return <CountryItem key={city.id} country={city} />;
   })}
  </ul>
 );
};

CountryList.propTypes = {
 cities: PropTypes.arrayOf(cityTypes),
 isLoading: PropTypes.bool,
};

export default CountryList;
