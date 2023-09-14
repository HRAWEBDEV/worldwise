import { createContext, useContext } from 'react';
const citiesContext = createContext(null);

const useCities = () => {
 const value = useContext(citiesContext);
 if (!value) throw new Error('contex is out of provider');
 return value;
};

export { citiesContext, useCities };
