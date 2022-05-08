import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_White.png';
import './Header.scss';

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__menu container">
        <Link to="/" className="main-header__link">
          <img src={logo} alt="The Peaks logo" className="main-header__img" />
        </Link>
        <form
          className="main-header__search-form"
          // onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="search"
            placeholder="Search all news"
            className="main-header__search-input"
          />
          <button type="submit" className="main-header__search-btn"></button>
        </form>
      </div>
    </header>
  );
};

export default Header;
