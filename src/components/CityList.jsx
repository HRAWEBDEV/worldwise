import styles from './CityList.module.css';
import { cityTypes } from '../../data/cityTypes';
import PropTypes from 'prop-types';

const CityList = ({ cities, isLoading }) => {
 console.log(cities, isLoading);
 return <ul className={styles.cityList}>CityList</ul>;
};

CityList.propTypes = {
 cities: cityTypes,
 isLoading: PropTypes.bool,
};

export default CityList;
