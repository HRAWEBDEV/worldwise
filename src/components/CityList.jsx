import styles from './CityList.module.css';
import PropTypes from 'prop-types';

const CityList = ({ cities, isLoading }) => {
 console.log(cities, isLoading);
 return <ul className={styles.cityList}>CityList</ul>;
};

CityList.propTypes = {
 cities: PropTypes.arrayOf(PropTypes.shape({})),
 isLoading: PropTypes.bool,
};

export default CityList;
