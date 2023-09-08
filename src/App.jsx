import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const App = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='product' element={<Product />} />
    <Route path='pricing' element={<Pricing />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;
