import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <span className="logo">shortly</span>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Shorten!
            </NavLink>
          </li>
          <li>
            <NavLink to="/expand" activeClassName="active">
              Expand.
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
