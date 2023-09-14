import { useState, useEffect, useCallback } from 'react';
import { citiesContext } from './cityProviderContext';
import { enviroment } from '../env/env';
import PropTypes from 'prop-types';

const CitiesProvider = ({ children }) => {
 const [cities, setCities] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [currentCity, setCurrentCity] = useState([]);
 const [currentCityLoading, setCurrentCityLoading] = useState(false);

 const updateTargetCity = useCallback(async (id) => {
  setCurrentCityLoading(true);
  try {
   const result = await fetch(`${enviroment['BASE_URI']}/cities?id=${id}`);
   const data = await result.json();
   setCurrentCity(data);
  } catch (err) {
   console.log(err);
  } finally {
   setCurrentCityLoading(false);
  }
 }, []);

 useEffect(() => {
  const getCities = async () => {
   setIsLoading(true);
   try {
    const result = await fetch(`${enviroment['BASE_URI']}/cities`);
    const data = await result.json();
    setCities(data);
   } catch (error) {
    console.log(error);
   } finally {
    setIsLoading(false);
   }
  };
  getCities();
 }, []);
 return (
  <citiesContext.Provider
   value={{
    cities,
    isLoading,
    currentCity,
    currentCityLoading,
    updateTargetCity,
   }}
  >
   {children}
  </citiesContext.Provider>
 );
};

CitiesProvider.propTypes = {
 children: PropTypes.node,
};

export default CitiesProvider;
