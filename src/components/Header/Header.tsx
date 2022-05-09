import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdate } from '../../store';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_White.png';
import './Header.scss';

export const Header = () => {
  const setGlobalState = useUpdate();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const updateGlobalState = async (query?:string) => {
    return await setGlobalState(prev => ({
      ...prev,
      searchQuery: query,
      isLoading: true,
    }));
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!inputValue.trim()) return;
    updateGlobalState(inputValue).then(() => navigate('/search-results'));
  };

  const handleClick = () => {
    updateGlobalState().then(() => {
      setInputValue('');
      navigate('/');
    });
  };

  return (
    <header className="main-header">
      <div className="main-header__menu layout">
        <Link to="/" className="main-header__link" onClick={handleClick}>
          <img src={logo} alt="The Peaks logo" className="main-header__img" />
        </Link>
        <form
          action="/search-results"
          name="search-form"
          className="main-header__search-form"
          onSubmit={handleSubmit}
        >
          <input
            value={inputValue}
            type="text"
            name="search-query"
            maxLength={256}
            placeholder="Search all news"
            className="main-header__search-input"
            onChange={handleChange}
          />
          <button type="button" className="main-header__search-btn"></button>
        </form>
      </div>
    </header>
  );
};
