import styles from './CityList.module.css';
import { useCities } from './cityProviderContext';
import { cityTypes } from '../../data/cityTypes';
import PropTypes from 'prop-types';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';

const CityList = () => {
 const { cities, isLoading } = useCities();
 if (isLoading) return <Spinner />;
 if (!cities.length) return <Message message='no cities found' />;
 return (
  <ul className={styles.cityList}>
   {cities.map((city) => {
    return <CityItem key={city.id} city={city} />;
   })}
  </ul>
 );
};

CityList.propTypes = {
 cities: PropTypes.arrayOf(cityTypes),
 isLoading: PropTypes.bool,
};

export default CityList;
