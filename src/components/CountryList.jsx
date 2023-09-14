import styles from './countryList.module.css';
import { useCitites } from './CitiesProvider';
import { cityTypes } from '../../data/cityTypes';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';

const createUniqueList = (data) => {
 return data.reduce((unique, current) => {
  if (unique.some((item) => item.country === current.country)) return unique;
  const { country, emoji } = current;
  return [...unique, { country, emoji }];
 }, []);
};

const CountryList = () => {
 const { cities, isLoading } = useCitites();
 const countries = createUniqueList(cities);
 if (isLoading) return <Spinner />;
 if (!cities.length) return <Message message='no cities found' />;
 return (
  <ul className={styles.countryList}>
   {countries.map((city) => {
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
