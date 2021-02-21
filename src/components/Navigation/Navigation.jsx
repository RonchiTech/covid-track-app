import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const navigation = () => {
  return (
    <nav className={classes.NavBar}>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className={classes.NavStyle}
            activeClassName={classes.active}
          >
            Latest Results
          </NavLink>
        </li>
        <li>
          <NavLink
            to="result-by-country"
            className={classes.NavStyle}
            activeClassName={classes.active}
          >
            Search Results by Country
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default navigation;
