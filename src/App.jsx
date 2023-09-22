import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import AppLayout from './pages/AppLayout';
import CountryList from './components/CountryList';
import CityList from './components/CityList';
import CitiesProvider from './components/CitiesProvider';
import NotFound from './pages/PageNotFound';
import SpinnerFullPage from './components/SpinnerFullPage';

import City from './components/City';
import Form from './components/Form';

const HomePage = lazy(() => import('./pages/Homepage'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Product = lazy(() => import('./pages/Product'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
 return (
  <CitiesProvider>
   <BrowserRouter>
    <Suspense fallback={<SpinnerFullPage />}>
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
    </Suspense>
   </BrowserRouter>
  </CitiesProvider>
 );
};

export default App;
