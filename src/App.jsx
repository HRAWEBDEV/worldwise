import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';

const App = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='product' element={<Product />} />
   </Routes>
  </BrowserRouter>
 );
};

export default App;
