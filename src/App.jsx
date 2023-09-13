import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import { useState, useEffect } from 'react';
import NotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import { enviroment } from './env/env';
import './index.css';

const App = () => {
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
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/product' element={<Product />} />
    <Route path='/login' element={<Login />} />
    <Route path='/app' element={<AppLayout />}>
     <Route index element={<Navigate replace to='cities' />} />
     <Route
      path='cities'
      element={<CityList cities={cities} isLoading={isLoading} />}
     />
     <Route path='cities/:id' element={<City />} />
     <Route
      path='countries'
      element={<CountryList cities={cities} isLoading={isLoading} />}
     />
     <Route path='forms' element={<Form />} />
    </Route>
    <Route path='*' element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;
