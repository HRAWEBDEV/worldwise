import styles from './CityList.module.css';
import { cityTypes } from '../../data/cityTypes';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const CityList = ({ cities, isLoading }) => {
 if (isLoading) return <Spinner />;
 return (
  <ul className={styles.cityList}>
   {cities.map((city) => {
    return <li key={city.id}>{city.id}</li>;
   })}
  </ul>
 );
};

CityList.propTypes = {
 cities: cityTypes,
 isLoading: PropTypes.bool,
};

export default CityList;
