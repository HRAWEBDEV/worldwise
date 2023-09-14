import { createContext, useState, useEffect, useContext } from 'react';
import { enviroment } from '../env/env';
import PropTypes from 'prop-types';

const citiesContext = createContext(null);

const useCitites = () => {
 const value = useContext(citiesContext);
 if (!value) throw new Error('contex is out of provider');
 return value;
};

const CitiesProvider = ({ children }) => {
 const [cities, setCities] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

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
  <citiesContext.Provider value={{ cities, isLoading }}>
   {children}
  </citiesContext.Provider>
 );
};

CitiesProvider.propTypes = {
 children: PropTypes.node,
};

export { useCitites };
export default CitiesProvider;
