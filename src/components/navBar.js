import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navBar.module.css';

const Navbar = () => (
  <header>
    <nav className={classes.navbar}>
      <h1>Math Magician</h1>
      <ul className={classes.navList}>
        <li>
          <Link to="/" className={classes.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator" className={classes.navLink}>
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/quotes" className={classes['navLink-last-child']}>
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
