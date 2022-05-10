import React, {
  useState,
  ChangeEvent,
  useRef,
  useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdate } from '../../store/globalStore';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo_White.png';
import './Header.scss';

export const Header = () => {
  const navigate = useNavigate();
  const setGlobalState = useUpdate();
  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const updateGlobalState = (query:string) => {
    return setGlobalState(prev => ({
      ...prev,
      searchQuery: query,
      isLoading: true,
    }));
  };

  const handleChange = (evt:ChangeEvent<HTMLInputElement>) => {
    navigate('/search-results');
    setInputValue(evt.target.value);
  };

  const handleBtnClick = () => {
    setIsInputActive(true);
  };

  const handleLinkClick = () => {
    navigate('/');
    setGlobalState(prev => ({
      ...prev,
      isLoading: true,
    }));
    setIsInputActive(false);
    setInputValue('');
  };

  const collectInputValue = () => {
    return inputValue;
  };

  const handleClickOutside = () => {
    if (isInputActive && wrapperRef.current && !wrapperRef.current?.contains(inputRef.current)) {
      setIsInputActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    }
  });

  useEffect(() => {
    updateGlobalState(collectInputValue());
  });

  return (
    <header className="main-header">
      <div className="main-header__menu layout">
        <Link to="/" className="main-header__link" onClick={handleLinkClick}>
          <img src={logo} alt="The Peaks logo" className="main-header__img" />
        </Link>
        <div className={`main-header__search-wrapper ${isInputActive ? 'is-active' : ''}`} ref={wrapperRef}>
          {isInputActive && (
            <input
              value={inputValue}
              ref={inputRef}
              type="text"
              maxLength={256}
              placeholder="Search all news"
              className="main-header__search-field"
              onChange={handleChange}
            />
          )}
          <button type="button" title="Search all news" className="main-header__search-btn" onClick={() => handleBtnClick()}>
            <span className="main-header__search-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
