import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
 return (
  <ul>
   <li>
    <NavLink to={'/'}>home page</NavLink>
   </li>
   <li>
    <NavLink to={'/pricing'}>pricing</NavLink>
   </li>
   <li>
    <NavLink to={'/product'}>product</NavLink>
   </li>
  </ul>
 );
};

export default Navigation;
