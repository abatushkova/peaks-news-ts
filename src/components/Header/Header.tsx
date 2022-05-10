import React, { useState, FormEvent, ChangeEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdate } from '../../store/globalStore';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_White.png';
import { handleSearch } from '../../utils/handleSearch';
import './Header.scss';

export const Header = () => {
  const setGlobalState = useUpdate();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const updateGlobalState = async (query:string) => {
    return await setGlobalState(prev => ({
      ...prev,
      searchQuery: query,
      isLoading: true,
    }));
  };

  const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleSearch(evt);

    if (!inputValue.trim()) return;

    updateGlobalState(inputValue).then(() => {
      inputRef.current?.blur();
      setInputValue('');
      navigate('/search-results');
    });
    evt.currentTarget.classList.remove('is-active');
  };

  const handleLinkClick = () => {
    updateGlobalState('').then(() => {
      setInputValue('');
      navigate('/');
    });
  };

  return (
    <header className="main-header">
      <div className="main-header__menu layout">
        <Link to="/" className="main-header__link" onClick={handleLinkClick}>
          <img src={logo} alt="The Peaks logo" className="main-header__img" />
        </Link>
        <form
          id="search-form"
          className="main-header__search-form"
          onSubmit={handleSubmit}
        >
          <input
            value={inputValue}
            ref={inputRef}
            type="text"
            id="search-query"
            maxLength={256}
            placeholder="Search all news"
            className="main-header__search-field"
            onChange={handleChange}
          />
          <button type="submit" id="search-submit" title="Search all news" className="main-header__search-btn">
            <span className="main-header__search-icon"></span>
          </button>
        </form>
      </div>
    </header>
  );
};
