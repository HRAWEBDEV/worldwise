import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import { useState, useEffect } from 'react';
import NotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import './index.css';
const URI_BASE = 'http://localhost:8000';

const App = () => {
 const [cities, setCities] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  const getCities = async () => {
   setIsLoading(true);
   try {
    const result = await fetch(`${URI_BASE}/cities`);
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
     <Route
      index
      element={<CityList cities={cities} isLoading={isLoading} />}
     />
     <Route
      path='cities'
      element={<CityList cities={cities} isLoading={isLoading} />}
     />
     <Route
      path='countries'
      element={<CountryList cities={cities} isLoading={isLoading} />}
     />
     <Route path='forms' element={<p>forms</p>} />
    </Route>
    <Route path='*' element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;
