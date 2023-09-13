import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, type = 'primary', onClick }) => {
 return (
  <button
   type='button'
   onClick={onClick}
   className={`${styles.btn} ${styles[type]}`}
  >
   {children}
  </button>
 );
};

Button.propTypes = {
 children: PropTypes.node,
 type: PropTypes.string,
 onClick: PropTypes.func,
};

export default Button;
