import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import NotFound from './pages/PageNotFound';
import Login from './pages/Login';
import './index.css';

const App = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/pricing' element={<Pricing />} />
    <Route path='/product' element={<Product />} />
    <Route path='/login' element={<Login />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;
