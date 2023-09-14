import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CitiesProvider from './components/CitiesProvider';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import NotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import './index.css';

const App = () => {
 return (
  <CitiesProvider>
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/pricing' element={<Pricing />} />
     <Route path='/product' element={<Product />} />
     <Route path='/login' element={<Login />} />
     <Route path='/app' element={<AppLayout />}>
      <Route index element={<Navigate replace to='cities' />} />
      <Route path='cities' element={<CityList />} />
      <Route path='cities/:id' element={<City />} />
      <Route path='countries' element={<CountryList />} />
      <Route path='forms' element={<Form />} />
     </Route>
     <Route path='*' element={<NotFound />} />
    </Routes>
   </BrowserRouter>
  </CitiesProvider>
 );
};

export default App;
