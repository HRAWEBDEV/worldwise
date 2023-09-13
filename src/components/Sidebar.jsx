import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';

const Sidebar = () => {
 return (
  <div className={styles.sidebar}>
   <Logo />
   <AppNav />
   <p>list of cities</p>
   <footer className={styles.footer}>
    <p className={styles.copyright}>
     &copy; Copyright {new Date().getFullYear()} WorldWise Inc.
    </p>
   </footer>
  </div>
 );
};

export default Sidebar;
